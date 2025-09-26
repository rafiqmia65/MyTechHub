import SignUpForm from "@/components/signUp/SignUpForm";
import { ShoppingCart, Tag, Package, Heart } from "lucide-react";
import React from "react";

const SignUp = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Sign Up Form */}
        <div>
          <SignUpForm />
        </div>

        {/* Right Side - Tech Product Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent leading-tight">
            Join <span className="text-teal-600">MyTechHub</span> &amp; Upgrade
            Your Tech Life
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Become a part of Bangladesh’s fastest-growing tech marketplace. From
            the latest gadgets to essential accessories — discover, compare, and
            shop all your favorite tech products in one place.
          </p>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <ShoppingCart className="text-teal-500" size={20} />
              Get early access to exclusive product launches
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Tag className="text-teal-500" size={20} />
              Unlock member-only discounts & special offers
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Package className="text-teal-500" size={20} />
              Track orders & manage purchases effortlessly
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Heart className="text-teal-500" size={20} />
              Save your favorite products to your wishlist
            </li>
          </ul>

          <div className="pt-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-teal-600 hover:underline font-semibold"
              >
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
