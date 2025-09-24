"use client";

import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-white text-neutral-900 dark:bg-[#081224] dark:text-white transition-colors duration-300">
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-teal-500">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
          Oops! Page not found
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button with Lucide Icon */}
        <Link href="/" passHref>
          <Button
            className="mt-6 px-6 py-2 text-lg rounded-lg shadow-md 
          bg-teal-500 hover:bg-teal-600 text-white cursor-pointer 
          transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
