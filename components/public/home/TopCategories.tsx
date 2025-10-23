import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import Section from "@/components/shared/Section/Section";

interface TopCategory {
  title: string;
  image: string;
  link?: string;
}

const topCategories: TopCategory[] = [
  {
    title: "Smartphones",
    image: "https://i.ibb.co.com/7N0L5VBH/phones.jpg",
    link: "/products",
  },
  {
    title: "Smart Wearables",
    image: "https://i.ibb.co.com/Cp1CCQvS/Smart-Wearables.jpg",
    link: "/products",
  },
  {
    title: "Smart Home",
    image: "https://i.ibb.co.com/35zD4F8D/Smart-Home.jpg",
    link: "/products",
  },
  {
    title: "Gaming Zone",
    image: "https://i.ibb.co.com/1JM5ZWPC/Gaming-Zone.jpg",
    link: "/products",
  },
];

const TopCategories = () => {
  return (
    <Section>
      <div className="text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-primary mb-3">Top Categories</h2>
        <p className="text-secondary mb-14 text-lg">
          Explore the most popular tech categories on MytechHub!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topCategories.map((category, idx) => (
            <Card
              key={idx}
              className="relative group overflow-hidden h-64 sm:h-72 lg:h-80"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>

              <CardFooter className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-lg">
                  {category.title}
                </h3>
                <Link href={category.link || "#"}>
                  <Button>Explore</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TopCategories;
