import React from "react";
import { ShieldCheck, Zap, Settings, Star } from "lucide-react";

const TechProductContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      <h2 className="text-4xl font-bold text-primary">
        Welcome Back to MyTechHub
      </h2>

      <p className="text-lg text-secondary leading-relaxed">
        Log in and pick up right where you left off — track your orders, manage
        your wishlist, and enjoy member-only deals tailored for you.
      </p>

      <ul className="space-y-3 text-secondary">
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <ShieldCheck className="text-primary" size={20} />
          Securely manage your account and preferences
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <Zap className="text-primary" size={20} />
          Access fast checkout and saved payment options
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <Settings className="text-primary" size={20} />
          Easily update your details and preferences
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <Star className="text-primary" size={20} />
          Get personalized recommendations instantly
        </li>
      </ul>

      <div className="pt-4">
        <p className="text-sm text-secondary">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-primary hover:underline font-semibold"
          >
            Create one here
          </a>
        </p>
      </div>
    </div>
  );
};

export default TechProductContent;
