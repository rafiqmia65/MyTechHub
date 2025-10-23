"use client";

import {
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebarHeader() {
  const { state } = useSidebar();

  return (
    <SidebarHeader className="border-b bg-accent text-primary">
      {/* Desktop Header */}
      <div
        className={`hidden md:flex items-center px-4 py-3 ${
          state === "expanded" ? "justify-between" : "justify-center"
        }`}
      >
        {state === "expanded" ? (
          <>
            <span className="font-bold text-lg">MyTechHub</span>
            <SidebarTrigger className="cursor-pointer text-primary hover:text-primary/90 transition-colors" />
          </>
        ) : (
          <SidebarTrigger className="cursor-pointer text-primary hover:text-primary/90 transition-colors" />
        )}
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        <span className="font-bold text-lg">MyTechHub</span>
        <SidebarTrigger className="cursor-pointer text-primary hover:text-primary/90 transition-colors" />
      </div>
    </SidebarHeader>
  );
}
