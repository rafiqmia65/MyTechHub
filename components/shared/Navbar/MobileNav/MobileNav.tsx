"use client";

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../../ModeToggle";
import AuthButtons from "../AuthButtons/AuthButtons";

// Define nav item type
interface NavItem {
  href: string;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Define session types
interface SessionUser {
  name: string;
  email: string;
  id: string;
  role: "admin" | "customer";
  image?: string;
  photoUrl?: string;
}

interface SessionInfo {
  user: SessionUser;
  expires: string;
}

interface MobileNavProps {
  navItems: NavItem[];
  activePath: string;
  session: SessionInfo | null;
}

const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  activePath,
  session,
}) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        {/* Menu Trigger + Theme Toggle */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <SheetTrigger asChild>
            <button
              className="text-primary hover:text-primary/90 transition-colors duration-200 cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </SheetTrigger>
        </div>

        {/* Sidebar Drawer */}
        <SheetContent
          side="left"
          className="bg-background text-primary p-0 w-full max-w-xs [&>button]:hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6 w-full px-4 pt-4">
            <Link
              href="/"
              className="text-2xl font-bold text-primary cursor-pointer"
            >
              MyTechHub
            </Link>

            <SheetClose asChild>
              <button
                className="text-primary hover:text-primary/90 transition-colors duration-200 cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="h-8 w-8" />
              </button>
            </SheetClose>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col space-y-4 w-full px-4 font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "font-bold underline underline-offset-4 decoration-primary"
                      : "font-normal hover:underline hover:underline-offset-4"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-3 mt-8 w-full px-4 mb-4">
            <AuthButtons session={session} fullWidth />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
