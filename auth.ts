import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoClientPromise from "@/service/mongoDbClientPromise";
import { dbConnect } from "@/service/Mongodb";
import bcrypt from "bcryptjs";
import userModel, { IUser } from "@/models/userModel";

interface AuthUser extends Partial<IUser> {
  id: string;
}

// NextAuth options with proper types
const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials): Promise<AuthUser | null> {
        if (!credentials) return null;

        await dbConnect();

        const { email, password } = credentials;
        if (!email || !password) return null;

        const user = await userModel.findOne({ email }).lean();
        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Email or password mismatch");

        const { password: _pass, _id, ...userWithoutPassword } = user;

        return { ...userWithoutPassword, id: _id.toString() };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      if (user) {
        token.role = (user as AuthUser).role ?? "customer";
        token.id = (user as AuthUser).id;
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: true,
};

// Export handlers for Next.js App Router
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);

export default NextAuth(authOptions);
