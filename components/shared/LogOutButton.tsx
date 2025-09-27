"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const LogOutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        alert("👋 Logged out successfully!");
        router.push("/login");
      } else {
        alert("Logout failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 px-5 rounded-xl shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
    >
      <LogOut size={18} />
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default LogOutButton;
