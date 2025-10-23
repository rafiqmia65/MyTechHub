"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Home, Package, Tags, Info, Phone } from "lucide-react";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface AppSidebarContentProps {
  dashboardItems: SidebarItem[];
  activePath?: string; // add this to detect active link
}

export function AppSidebarContent({
  dashboardItems,
  activePath = "",
}: AppSidebarContentProps) {
  const appItems: SidebarItem[] = [
    { title: "Home", url: "/", icon: Home },
    { title: "Products", url: "/products", icon: Package },
    { title: "Categories", url: "/categories", icon: Tags },
    { title: "About", url: "/about", icon: Info },
    { title: "Contact", url: "/contact", icon: Phone },
  ];

  const renderMenuItems = (items: SidebarItem[]) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <Link
            href={item.url}
            className={`flex items-center gap-2 p-2 rounded-md transition-colors duration-200 text-primary hover:bg-transparent ${
              activePath === item.url
                ? "font-bold underline underline-offset-4"
                : "font-normal hover:font-semibold hover:underline hover:underline-offset-4"
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <SidebarContent className="flex flex-col justify-between bg-accent">
      {/* Dashboard Section */}
      <div>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems(dashboardItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>

      {/* Application Section */}
      <div>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{renderMenuItems(appItems)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
    </SidebarContent>
  );
}
