import CustomButton from "@/components/shared/CustomButton/CustomButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-background min-h-[60vh] pt-18 pb-10">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Right Image - Mobile version image in the top */}
          <div className="relative w-full min-h-72 md:h-[300px] order-1 md:order-2">
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
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-primary">
              Upgrade Your World with{" "}
              <span className="text-secondary">MyTechHub</span>
            </h1>
            <p className="text-lg text-secondary max-w-lg mx-auto md:mx-0">
              Discover the latest gadgets and electronics — mobiles, monitors,
              watches, and accessories. Quality products, affordable prices, and
              fast delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button>Shop Now</Button>
              <CustomButton>Explore Products</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
