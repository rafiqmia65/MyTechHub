"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const links = (
    <>
      <Link href="/" className="hover:text-yellow-400">
        Home
      </Link>
      <Link href="/products" className="hover:text-yellow-400">
        Products
      </Link>
      <Link href="/categories" className="hover:text-yellow-400">
        Categories
      </Link>
      <Link href="/about" className="hover:text-yellow-400">
        About
      </Link>
      <Link href="/contact" className="hover:text-yellow-400">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="bg-neutral-50 shadow-md dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="text-2xl font-bold text-yellow-400">
            MyTechHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            {links}
            {/* Mode toggle at the right side */}
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <ModeToggle></ModeToggle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-black dark:text-white"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white"
              >
                <div className="flex flex-col space-y-4 ml-10 mt-6 font-medium">
                  <Link href="/" className="text-2xl font-bold text-yellow-400">
                    MyTechHub
                  </Link>
                  {links}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
