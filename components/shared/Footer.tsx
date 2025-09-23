"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-50 dark:bg-[#1e2939] text-gray-800 dark:text-gray-300 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Logo & About */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight">
            MyTechHub
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Your trusted source for the latest tech and gadgets. We offer
            curated products and swift, reliable delivery.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 mt-4">
            <Facebook className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get exclusive deals and product updates right to your inbox.
          </p>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-l-md  dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white font-semibold p-3 rounded-r-md hover:bg-teal-500 dark:hover:bg-teal-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} <span className="text-teal-700 font-medium">MyTechHub</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
