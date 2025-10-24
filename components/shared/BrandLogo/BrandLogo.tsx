import Link from "next/link";
import React from "react";

const BrandLogo = () => {
  return (
    <>
      {/* Brand */}
      <Link
        href="/"
        className="text-3xl font-bold text-primary transition-all hover:text-primary/80 cursor-pointer"
      >
        MyTechHub
      </Link>
    </>
  );
};

export default BrandLogo;
