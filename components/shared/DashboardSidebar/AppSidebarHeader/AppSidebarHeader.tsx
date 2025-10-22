"use client";

import {
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebarHeader() {
  const { state } = useSidebar();

  return (
    <SidebarHeader className="border-b">
      {/* Desktop Header */}
      <div
        className={`hidden md:flex items-center px-4 py-2 ${
          state === "expanded" ? "justify-between" : "justify-center"
        }`}
      >
        {state === "expanded" ? (
          <>
            <span className="font-bold text-lg">MyTechHub</span>
            <SidebarTrigger className="cursor-pointer" />
          </>
        ) : (
          <SidebarTrigger className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-2">
        <span className="font-bold text-lg">MyTechHub</span>
        <SidebarTrigger className="cursor-pointer" />
      </div>
    </SidebarHeader>
  );
}
