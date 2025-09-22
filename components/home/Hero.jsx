"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            Upgrade Your World with{" "}
            <span className="text-yellow-400">MyTechHub</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-lg">
            Discover the latest gadgets and electronics — mobiles, monitors,
            watches, and accessories. Quality products, affordable prices, and
            fast delivery.
          </p>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl"
            >
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-72 md:h-[420px]">
          <Image
            src="/hero-gadgets.png"
            alt="Gadgets"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
