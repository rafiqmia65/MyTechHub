"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import GoogleSignUpButton from "../GoogleSignUpButton";
import { Card } from "@/components/ui/card";

type SignUpFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  photo: FileList;
};

const SignUpForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);

    try {
      // 1. Upload photo to Cloudinary
      let photoUrl = "";
      if (data.photo && data.photo.length > 0) {
        const cloudForm = new FormData();
        cloudForm.append("file", data.photo[0]);
        cloudForm.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
        );

        const uploadRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: cloudForm }
        );

        const uploadData = await uploadRes.json();
        if (uploadData.secure_url) photoUrl = uploadData.secure_url;
        else throw new Error("Image upload failed!");
      }

      // 2. Register user
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          password: data.password,
          photoUrl,
          role: "customer",
        }),
      });

      if (res.ok) {
        toast.success("Your account created successfully!");
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
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-lg p-10">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-primary">
          Sign Up
        </h1>
        <p className="text-center text-secondary mb-4">
          Create your MyTechHub account in seconds
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Phone Number
            </label>
            <Input
              type="text"
              placeholder="+8801XXXXXXXXX"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Address
            </label>
            <Input
              type="text"
              placeholder="123 Street, City, Country"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Upload Profile Photo
            </label>
            <Input
              type="file"
              accept="image/*"
              {...register("photo", { required: "Profile photo is required" })}
            />
            {errors.photo && (
              <span className="text-red-500 text-sm">
                {errors.photo.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-semibold text-primary mb-2">
              Password
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-primary"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" disabled={loading} className="w-full ">
            {loading ? "Creating your account..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-6">
          <GoogleSignUpButton />
        </div>

        <p className="text-center text-sm text-secondary mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-semibold"
          >
            Log In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUpForm;
