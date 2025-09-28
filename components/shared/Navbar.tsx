"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, ShoppingBag, Layers, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import LogOutButton from "./LogOutButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession(); // NextAuth session

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: ShoppingBag },
    { href: "/categories", label: "Categories", icon: Layers },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const desktopLinks = navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`transition-colors cursor-pointer ${
        pathname === item.href
          ? "text-teal-600 font-semibold"
          : "hover:text-teal-500"
      }`}
    >
      {item.label}
    </Link>
  ));

  const mobileLinks = navItems.map((item) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`flex items-center gap-2 transition-colors cursor-pointer ${
          pathname === item.href
            ? "text-teal-600 font-semibold"
            : "hover:text-teal-500"
        }`}
      >
        <Icon className="h-4 w-4" /> {item.label}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b-2 border-teal-500 dark:border-teal-700 backdrop-blur-md shadow-sm">
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <Link
              href="/"
              className="text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
            >
              MyTechHub
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 font-medium text-neutral-700 dark:text-neutral-200">
              {desktopLinks}
              <ModeToggle />

              {/* Auth Buttons */}
              <div className="flex items-center gap-3 ml-4">
                {session?.user ? (
                  <LogOutButton />
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition-colors dark:bg-slate-800 cursor-pointer"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signUp">
                      <Button className="bg-teal-600 text-white hover:bg-teal-800 transition-colors cursor-pointer">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <div className="flex items-center space-x-2">
                    <ModeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-black dark:text-white cursor-pointer"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </div>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white"
                >
                  <div className="flex justify-between items-center mb-6 ml-4">
                    <Link
                      href="/"
                      className="text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
                    >
                      MyTechHub
                    </Link>
                    <SheetClose asChild />
                  </div>

                  <div className="flex flex-col space-y-4 ml-4 font-medium">
                    {mobileLinks}
                  </div>

                  <div className="flex flex-col gap-3 mt-8 ml-4">
                    {session?.user ? (
                      <LogOutButton />
                    ) : (
                      <>
                        <Link href="/login">
                          <Button
                            variant="outline"
                            className="w-full border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
                          >
                            Login
                          </Button>
                        </Link>
                        <Link href="/signup">
                          <Button className="w-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                            Sign Up
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
