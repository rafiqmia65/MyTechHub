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
import { Card } from "@/components/ui/card";

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
      <Card className="w-full max-w-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center bg-primary bg-clip-text text-transparent">
          Log In
        </h1>
        <p className="text-center text-secondary mb-4">
          Welcome back! Sign in to continue exploring tech.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-semibold text-primary mb-2">
              Password
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-primary"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Signing you in..." : "Log In"}
          </Button>
        </form>

        <div className="mt-6">
          <GoogleSignUpButton />
        </div>

        <p className="text-center text-sm text-secondary mt-8">
          Don’t have an account?{" "}
          <Link
            href="/signUp"
            className="text-primary hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </section>
  );
};

export default LoginForm;
