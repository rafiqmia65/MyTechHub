"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Home,
  ShoppingBag,
  Layers,
  Info,
  Phone,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import LogOutButton from "../auth/LogOutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Base nav items
  const baseNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: ShoppingBag },
    { href: "/categories", label: "Categories", icon: Layers },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  // Add dashboard link if user logged in
  const navItems = session?.user
    ? [
        ...baseNavItems,
        { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      ]
    : baseNavItems;

  const desktopLinks = navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`transition-colors cursor-pointer ${
        pathname === item.href
          ? "text-primary font-semibold"
          : "text-secondary hover:text-primary"
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
            ? "text-primary font-semibold"
            : "text-secondary hover:text-primary"
        }`}
      >
        <Icon className="h-4 w-4" /> {item.label}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:opacity-80 transition-colors cursor-pointer"
            >
              MyTechHub
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 font-medium">
              {desktopLinks}
              <ModeToggle />

              {/* Auth Buttons */}
              <div className="flex items-center gap-3 ml-4">
                {session?.user ? (
                  <div className="flex gap-2 items-center">
                    <Image
                      src={
                        session?.user?.photoUrl ||
                        "https://i.ibb.co.com/bjKVM3RJ/avatar.jpg"
                      }
                      alt="User Photo"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <LogOutButton />
                  </div>
                ) : (
                  <>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/signUp">
                      <Button className="bg-primary text-secondary hover:opacity-90 transition-colors cursor-pointer">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile / Tablet Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <div className="flex items-center space-x-2">
                    <ModeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-secondary"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </div>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="bg-background text-secondary"
                >
                  {/* Mobile Header */}
                  <div className="flex justify-between items-center mb-6 ml-4">
                    <Link
                      href="/"
                      className="text-2xl font-bold text-primary hover:opacity-80 transition-colors cursor-pointer"
                    >
                      MyTechHub
                    </Link>
                    <SheetClose asChild />
                  </div>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col space-y-4 ml-4 font-medium">
                    {mobileLinks}
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-3 mt-8 ml-4">
                    {session?.user ? (
                      <LogOutButton />
                    ) : (
                      <>
                        <Link href="/login">
                          <Button
                            variant="outline"
                            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            Login
                          </Button>
                        </Link>
                        <Link href="/signup">
                          <Button className="w-full bg-primary text-background hover:opacity-90 transition-colors">
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
