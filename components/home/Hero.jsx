"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-teal-50 dark:bg-[#1e2939] min-h-[70vh] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Right Image - Mobile version image in the top */}
          <div className="relative w-full h-72 md:h-[420px] order-1 md:order-2">
            <Image
              src="https://i.ibb.co.com/dJKVLCWP/banner-Image.jpg"
              alt="Gadgets"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-neutral-900 dark:text-white">
              Upgrade Your World with{" "}
              <span className="text-teal-500">MyTechHub</span>
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-lg mx-auto md:mx-0">
              Discover the latest gadgets and electronics — mobiles, monitors,
              watches, and accessories. Quality products, affordable prices, and
              fast delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-neutral-800 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
