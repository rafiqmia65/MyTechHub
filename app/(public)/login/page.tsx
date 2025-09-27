import LoginForm from "@/components/login/LoginForm";
import { ShieldCheck, Zap, Settings, Star } from "lucide-react";
import React from "react";

const Login = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Login Form */}
        <div>
          <LoginForm />
        </div>

        {/* Right Side - Tech Product Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent leading-tight">
            Welcome Back to <span className="text-teal-600">MyTechHub</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Log in and pick up right where you left off — track your orders,
            manage your wishlist, and enjoy member-only deals tailored for you.
          </p>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <ShieldCheck className="text-teal-500" size={20} />
              Securely manage your account and preferences
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Zap className="text-teal-500" size={20} />
              Access fast checkout and saved payment options
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Settings className="text-teal-500" size={20} />
              Easily update your details and preferences
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Star className="text-teal-500" size={20} />
              Get personalized recommendations instantly
            </li>
          </ul>

          <div className="pt-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-teal-600 hover:underline font-semibold"
              >
                Create one here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
