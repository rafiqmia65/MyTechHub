import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardMobileNavbar = () => {
  return (
    <div className="sticky top-0 z-20 w-full md:hidden bg-background border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Sidebar trigger */}
        <button className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200 ">
          <SidebarTrigger className="cursor-pointer" />
        </button>

        {/* Brand name */}
        <span className="font-bold text-lg tracking-tight">MyTechHub</span>
      </div>
    </div>
  );
};

export default DashboardMobileNavbar;
