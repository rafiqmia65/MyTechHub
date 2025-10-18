"use client"; // must be first line

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <Toaster position="top-right" expand={false} richColors />
        <Navbar />
        {children}
        <Footer></Footer>
      </SessionProvider>
    </ThemeProvider>
  );
}
