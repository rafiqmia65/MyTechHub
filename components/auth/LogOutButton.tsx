"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

interface LogOutButtonProps {
  className?: string;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({ className }) => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login", redirect: true });
    toast.success("Logout successful");
  };

  return (
    <Button onClick={handleLogout} className={`${className || ""}`}>
      <LogOut size={18} />
      Logout
    </Button>
  );
};

export default LogOutButton;
