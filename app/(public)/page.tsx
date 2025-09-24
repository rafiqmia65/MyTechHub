import FeaturedCategory from "@/components/home/FeaturedCategory";
import Hero from "@/components/home/Hero";
import TopCategories from "@/components/home/TopCategories";
import WhyWeAreFavorite from "@/components/home/WhyWeAreFavorite";

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
