import FeaturedCategory from "@/components/public/home/FeaturedCategory";
import Hero from "@/components/public/home/Hero";
import TopCategories from "@/components/public/home/TopCategories";
import WhyWeAreFavorite from "@/components/public/home/WhyWeAreFavorite";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturedCategory></FeaturedCategory>
      <TopCategories></TopCategories>
      <WhyWeAreFavorite></WhyWeAreFavorite>
    </div>
  );
}
