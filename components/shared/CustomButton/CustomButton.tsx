import { Button } from "@/components/ui/button";
import React from "react";

interface CustomButtonProps {
  children: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className }) => {
  return (
    <Button
      className={`border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors cursor-pointer ${
        className || ""
      }`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
