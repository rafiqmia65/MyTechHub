// auth.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./service/mongoDbClientPromise";
import bcrypt from "bcryptjs";
import { dbConnect } from "./service/mongo";
import userModel from "./models/userModel";
import { ObjectId } from "mongodb";

// -----------------------------
// Interface for JWT & Session
// -----------------------------
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

// -----------------------------
// NextAuth export with handlers
// -----------------------------
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // -----------------------------
  // MongoDB Adapter
  // -----------------------------
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),

  // -----------------------------
  // Authentication Providers
  // -----------------------------
  providers: [
    // Credentials login (email + password)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // Validate credentials and return user object
      async authorize(credentials): Promise<AuthUser | null> {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect(); // Ensure DB is connected

        const user = await userModel
          .findOne({ email: credentials.email })
          .select("+password"); // Include password field

        if (!user || !user.password) return null;

        // Compare hashed password
        const isMatch = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );
        if (!isMatch) return null;

        // Return user object for JWT/session
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          photoUrl: user.photoUrl || "",
          phone: user.phone || "",
          address: user.address || "",
          role: user.role,
          accountCreatedAt: user.accountCreatedAt,
          updatedInfoAt: user.updatedInfoAt,
        };
      },
    }),

    // Google OAuth login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  // -----------------------------
  // Callbacks for JWT & session
  // -----------------------------
  callbacks: {
    // OAuth sign-in callback: link Google account to existing user
    async signIn({ user, account }) {
      if (!user?.email) return false;

      await dbConnect();
      const existingUser = await userModel.findOne({ email: user.email });

      // MongoDB client for accounts collection
      const client = await mongoClientPromise;
      const accounts = client
        .db(process.env.ENVIRONMENT)
        .collection("accounts");

      if (existingUser) {
        // Check if Google account is already linked
        const linked = await accounts.findOne({
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
        });

        if (!linked && account?.provider === "google") {
          // Link Google OAuth to existing credentials account
          await accounts.insertOne({
            userId: new ObjectId(existingUser._id.toString()),
            type: account.type,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            access_token: account.access_token,
            refresh_token: account.refresh_token,
            expires_at: account.expires_at,
            token_type: account.token_type,
            scope: account.scope,
            id_token: account.id_token,
            session_state: account.session_state,
          });
        }
      }
      // If new Google user, NextAuth adapter creates account automatically
      return true;
    },

    // JWT callback: attach user info to token
    async jwt({ token, user }) {
      const email = user?.email || token.email;

      if (email) {
        await dbConnect();
        const dbUser = await userModel.findOne({ email });
        if (dbUser) {
          token.id = dbUser._id.toString();
          token.role = dbUser.role;
          token.photoUrl = dbUser.photoUrl || "";
          token.name = dbUser.name;
          token.email = dbUser.email;
        }
      }
      return token;
    },

    // Session callback: attach token info to session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.photoUrl = token.photoUrl || token.picture || "";
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }

      // 🔹 Console log session for debugging
      console.log("[Session Info]", session);

      return session;
    },
  },

  // -----------------------------
  // Session configuration
  // -----------------------------
  session: {
    strategy: "jwt",
  },

  // -----------------------------
  // Secret for NextAuth
  // -----------------------------
  secret: process.env.NEXTAUTH_SECRET,
});
