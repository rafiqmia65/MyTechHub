"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Home,
  ShoppingBag,
  Layers,
  Info,
  Phone,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const baseNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: ShoppingBag },
    { href: "/categories", label: "Categories", icon: Layers },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const navItems = session?.user
    ? [
        ...baseNavItems,
        { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      ]
    : baseNavItems;

  return (
    <header className="sticky top-0 z-50 bg-accent border-b">
      <nav className="container mx-auto px-4 lg:px-0 flex justify-between items-center h-16">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary cursor-pointer"
        >
          MyTechHub
        </Link>

        {/* Desktop Nav */}
        <DesktopNav
          navItems={navItems}
          activePath={pathname || ""}
          session={session}
        />

        {/* Mobile Nav */}
        <MobileNav
          navItems={navItems}
          activePath={pathname || ""}
          session={session}
        />
      </nav>
    </header>
  );
};

export default Navbar;
