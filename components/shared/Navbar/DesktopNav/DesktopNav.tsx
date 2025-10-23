"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "../../ModeToggle";
import AuthButtons from "../AuthButtons/AuthButtons";

interface NavItem {
  href: string;
  label: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  activePath: string;
  session: any;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  activePath,
  session,
}) => {
  return (
    <div className="hidden lg:flex items-center space-x-6 font-medium">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`cursor-pointer text-primary transition-colors duration-200 ${
            activePath === item.href
              ? "font-bold underline underline-offset-4 decoration-primary"
              : "font-normal hover:underline hover:underline-offset-4"
          }`}
        >
          {item.label}
        </Link>
      ))}

      <ModeToggle />

      <div className="flex items-center gap-3">
        <AuthButtons session={session} />
      </div>
    </div>
  );
};

export default DesktopNav;
