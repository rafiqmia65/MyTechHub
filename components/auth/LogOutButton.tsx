"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const LogOutButton = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login", redirect: true });
    toast.success("Logout successful");
  };

  return (
    <Button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 px-5 rounded-xl shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
    >
      <LogOut size={18} />
      Logout
    </Button>
  );
};

export default LogOutButton;
