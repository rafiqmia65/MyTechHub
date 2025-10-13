"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import GoogleSignUpButton from "../GoogleSignUpButton";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Login handler
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error("Something went wrong during login.");
      } else {
        toast.success("Login successful!");
        router.refresh(); // refresh server components
        router.push("/"); // navigate to home or dashboard
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-10 border border-slate-200 dark:border-slate-700">
        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
          Log In
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
          Welcome back! Sign in to continue exploring tech.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Password
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              required
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-slate-500 dark:text-slate-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Signing you in..." : "Log In"}
          </Button>
        </form>

        <div className="mt-6">
          <GoogleSignUpButton />
        </div>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-8">
          Don’t have an account?{" "}
          <Link
            href="/signUp"
            className="text-teal-600 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
