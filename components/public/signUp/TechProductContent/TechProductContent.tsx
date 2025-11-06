import { Heart, Package, ShoppingCart, Tag } from "lucide-react";
import React from "react";

const TechProductContent = () => {
  return (
    <div className="lg:mt-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
      <h2 className="text-4xl font-extrabold text-primary leading-tight">
        Join MyTechHub &amp; Upgrade Your Tech Life
      </h2>

      <p className="text-lg text-secondary leading-relaxed">
        Become a part of Bangladesh’s fastest-growing tech marketplace. From the
        latest gadgets to essential accessories — discover, compare, and shop
        all your favorite tech products in one place.
      </p>

      <ul className="space-y-3 text-secondary">
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <ShoppingCart className="text-primary" size={20} />
          Get early access to exclusive product launches
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <Tag className="text-primary" size={20} />
          Unlock member-only discounts & special offers
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <Package className="text-primary" size={20} />
          Track orders & manage purchases effortlessly
        </li>
        <li className="flex items-center gap-2 justify-center md:justify-start">
          <Heart className="text-primary" size={20} />
          Save your favorite products to your wishlist
        </li>
      </ul>

      <div className="pt-4">
        <p className="text-sm text-secondary">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-primary hover:underline font-semibold"
          >
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default TechProductContent;
