import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import userModel from "@/models/userModel";
import { dbConnect } from "@/service/mongo";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
  phone?: string;
  address?: string;
  role: "admin" | "customer";
  accountCreatedAt: Date;
  updatedInfoAt?: Date;
}

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect();

        const user = await userModel
          .findOne({ email: credentials.email })
          .select("+password");

        if (!user) return null;

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          photoUrl: user.photoUrl,
          phone: user.phone,
          address: user.address,
          role: user.role,
          accountCreatedAt: user.accountCreatedAt,
          updatedInfoAt: user.updatedInfoAt,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as AuthUser).id;
        token.role = (user as AuthUser).role;
        token.photoUrl = (user as AuthUser).photoUrl;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.photoUrl = token.photoUrl as string;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
