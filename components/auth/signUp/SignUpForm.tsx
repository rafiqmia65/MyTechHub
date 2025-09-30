"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import GoogleSignUpButton from "../GoogleSignUpButton";

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const password = formData.get("password");
    const photoFile = formData.get("photo") as File;

    try {
      // 1 Upload photo to Cloudinary
      let photoUrl = "";
      if (photoFile) {
        const cloudForm = new FormData();
        cloudForm.append("file", photoFile);
        cloudForm.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
        );

        const uploadRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: cloudForm,
          }
        );

        const uploadData = await uploadRes.json();
        if (uploadData.secure_url) {
          photoUrl = uploadData.secure_url;
          console.log(photoUrl);
        } else {
          throw new Error("Image upload failed!");
        }
      }

      console.log();

      // 2 Register user with uploaded photo URL
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          password,
          photoUrl,
          role: "customer",
        }),
      });

      if (res.ok) {
        toast.success("Your Account created successfully!");
        router.push("/login");
      } else {
        const error = await res.json();
        toast.error(error.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-10 border border-slate-200 dark:border-slate-700">
        <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
          Sign Up
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
          Create your MyTechHub account in seconds
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500"
            />
          </div>

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

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Phone Number
            </label>
            <Input
              type="text"
              name="phone"
              placeholder="+8801XXXXXXXXX"
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Address
            </label>
            <Input
              type="text"
              name="address"
              placeholder="123 Street, City, Country"
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Upload Profile Photo
            </label>
            <Input
              type="file"
              name="photo"
              accept="image/*"
              required
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500 cursor-pointer"
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
            {loading ? "Creating your account..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-6">
          <GoogleSignUpButton></GoogleSignUpButton>
        </div>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-teal-600 hover:underline font-semibold"
          >
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
