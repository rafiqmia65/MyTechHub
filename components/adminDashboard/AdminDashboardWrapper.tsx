"use client";

import React from "react";
import { ThemeProvider } from "../shared/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../shared/app-sidebar";

interface AdminDashboardWrapperProps {
  children: React.ReactNode;
}

const AdminDashboardWrapper: React.FC<AdminDashboardWrapperProps> = ({
  children,
}) => {
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
          <AppSidebar></AppSidebar>
          <SidebarInset>
            <SidebarTrigger></SidebarTrigger>
            {/* Main content */}
            <main> {children}</main>
          </SidebarInset>
        </SidebarProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default AdminDashboardWrapper;
