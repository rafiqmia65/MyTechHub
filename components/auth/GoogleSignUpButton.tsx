"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const GoogleSignUpButton = () => {
  const handleGoogleSignUp = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Google Sign Up failed:", error);
    }
  };

  return (
    <Button
      onClick={handleGoogleSignUp}
      className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-teal-50 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-600 shadow-sm transition cursor-pointer"
    >
      <Globe className="h-5 w-5 text-[#4285F4]" /> {/* Google Blue */}
      Continue with <span className="font-semibold text-[#DB4437]">G</span>
      <span className="font-semibold text-[#F4B400]">o</span>
      <span className="font-semibold text-[#4285F4]">o</span>
      <span className="font-semibold text-[#0F9D58]">g</span>
      <span className="font-semibold text-[#DB4437]">l</span>
      <span className="font-semibold text-[#4285F4]">e</span>
    </Button>
  );
};

export default GoogleSignUpButton;
