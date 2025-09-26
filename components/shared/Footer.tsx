import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-300 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Logo & About */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-teal-500 hover:text-teal-600 tracking-tight">
            <Link href="/" className="cursor-pointer">
              MyTechHub
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Your trusted source for the latest tech and gadgets. We offer
            curated products and swift, reliable delivery.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 mt-4">
            <Facebook className="w-6 h-6 text-teal-400 hover:text-teal-600 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 text-teal-400 hover:text-teal-600 transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 text-teal-400 hover:text-teal-600 transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 text-teal-400 hover:text-teal-600 transition-colors cursor-pointer" />
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
          <form className="flex flex-col gap-2 w-full max-w-md">
            <Input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-xl border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:border-teal-500"
            />
            <Button
              type="submit"
              className="bg-teal-500 max-w-[100px] text-white font-semibold p-3 rounded-r-md hover:bg-teal-600 transition-colors cursor-pointer"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="dark:bg-[#081224] border-t border-gray-200 dark:border-gray-700 text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-teal-400 font-medium">MyTechHub</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
