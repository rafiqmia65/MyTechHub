"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { AppSidebarHeader } from "./AppSidebarHeader/AppSidebarHeader";
import { AppSidebarContent } from "./AppSidebarContent/AppSidebarContent";
import { AppSidebarFooter } from "./AppSidebarFooter/AppSidebarFooter";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface AppSidebarProps {
  dashboardItems: SidebarItem[];
}

export function AppSidebar({ dashboardItems }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <AppSidebarHeader />
      <AppSidebarContent dashboardItems={dashboardItems} />
      <AppSidebarFooter />
    </Sidebar>
  );
}
