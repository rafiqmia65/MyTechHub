"use client";

import React from "react";
import { ThemeProvider } from "../shared/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../shared/DashboardSidebar/app-sidebar";
import DashboardMobileNavbar from "../shared/DashboardMobileNavbar/DashboardMobileNavbar";
import { LayoutDashboard, Settings } from "lucide-react";

interface AdminDashboardWrapperProps {
  children: React.ReactNode;
}

const AdminDashboardWrapper: React.FC<AdminDashboardWrapperProps> = ({
  children,
}) => {
  const dashboardItems = [
    { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ];

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <Toaster position="top-right" expand={false} richColors />

        <SidebarProvider>
          <AppSidebar dashboardItems={dashboardItems}></AppSidebar>
          <SidebarInset>
            <DashboardMobileNavbar></DashboardMobileNavbar>
            {/* Main content */}
            <main> {children}</main>
          </SidebarInset>
        </SidebarProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default AdminDashboardWrapper;
