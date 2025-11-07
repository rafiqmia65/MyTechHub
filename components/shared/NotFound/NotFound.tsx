import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-background transition-colors duration-300">
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-6 text-2xl md:text-3xl text-secondary font-semibold">
          Oops! Page not found
        </h2>
        <p className="mt-3 text-secondary max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button with Lucide Icon */}
        <Link href="/" passHref>
          <Button className="mt-6 px-6 py-2 text-lg flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
