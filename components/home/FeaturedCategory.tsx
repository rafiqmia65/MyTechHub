"use client";

import { FC } from "react";
import {
  Laptop,
  Smartphone,
  Camera,
  Tv,
  Headphones,
  Gamepad2,
  Satellite,
  Watch,
  HardDrive,
  Radio,
  LucideIcon,
} from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { name: "Starlink", icon: Satellite },
  { name: "Drone", icon: Radio },
  { name: "Gimbal", icon: Camera },
  { name: "Table PC", icon: Laptop },
  { name: "TV", icon: Tv },
  { name: "Mobile Phone", icon: Smartphone },
  { name: "Mobile Accessories", icon: HardDrive },
  { name: "Portable SSD", icon: HardDrive },
  { name: "WiFi Camera", icon: Camera },
  { name: "Trimmer", icon: Radio },
  { name: "Smart Watch", icon: Watch },
  { name: "Action Camera", icon: Camera },
  { name: "Earphone", icon: Headphones },
  { name: "Earbuds", icon: Headphones },
  { name: "Bluetooth Speakers", icon: Radio },
  { name: "Gaming Console", icon: Gamepad2 },
];

const FeaturedCategory: FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-[#081224] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-500">
          Featured Category
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Get Your Desired Product from Featured Category!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map(({ name, icon: Icon }, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-slate-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-500/20 text-teal-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
              </div>
              <h3 className="text-base font-medium text-slate-700 dark:text-gray-200 group-hover:text-teal-600 transition-colors">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
