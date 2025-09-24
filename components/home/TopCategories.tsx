"use client";

import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface TopCategory {
  title: string;
  image: string;
  link?: string;
}

const topCategories: TopCategory[] = [
  {
    title: "Smartphones",
    image: "https://i.ibb.co.com/7N0L5VBH/phones.jpg",
  },
  {
    title: "Smart Wearables",
    image: "https://i.ibb.co.com/Cp1CCQvS/Smart-Wearables.jpg",
  },
  {
    title: "Smart Home",
    image: "https://i.ibb.co.com/35zD4F8D/Smart-Home.jpg",
  },
  {
    title: "Gaming Zone",
    image: "https://i.ibb.co.com/1JM5ZWPC/Gaming-Zone.jpg",
  },
];

const TopCategories: FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-[#020618] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-500 mb-3">
          Top Categories
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Explore the most popular tech categories on MytechHub!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCategories.map((category, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-800 rou cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={"400"}
                height={"400"}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <Link href={"/products"} className="">
                  <Button className="mt-2 px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-sm transition-all cursor-pointer">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
