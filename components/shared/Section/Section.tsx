import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string; // optional background color prop
  className?: string; // optional extra classes
}

const Section: React.FC<SectionProps> = ({ children, bgColor, className }) => {
  return (
    <div
      className={`container mx-auto px-4 lg:px-0 py-10 transition-colors ${
        bgColor || "bg-background"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
