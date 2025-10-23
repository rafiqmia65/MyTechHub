"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogOutButton from "@/components/auth/LogOutButton";
import CustomButton from "../../CustomButton/CustomButton";

interface AuthButtonsProps {
  session: any;
  fullWidth?: boolean;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  session,
  fullWidth = false,
}) => {
  if (session?.user) {
    return (
      <div
        className={`flex gap-2 items-center ${
          fullWidth ? "flex-col w-full" : "cursor-pointer"
        }`}
      >
        <Image
          src={
            session.user.photoUrl || "https://i.ibb.co.com/bjKVM3RJ/avatar.jpg"
          }
          alt="User Photo"
          width={32}
          height={32}
          className="rounded-full object-cover border-2 border-primary"
        />
        <LogOutButton className={fullWidth ? "w-full" : ""} />
      </div>
    );
  }

  return (
    <div className={fullWidth ? "flex flex-col gap-3 w-full" : "flex gap-2"}>
      <Link href="/login" className={fullWidth ? "w-full" : ""}>
        <CustomButton className={`${fullWidth ? "w-full" : ""}`}>
          Login
        </CustomButton>
      </Link>
      <Link href="/signup" className={fullWidth ? "w-full" : ""}>
        <Button className={`${fullWidth ? "w-full" : ""} `}>Sign Up</Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
