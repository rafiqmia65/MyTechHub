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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Section from "@/components/shared/Section/Section";

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

const FeaturedCategory = () => {
  return (
    <Section>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Featured Category
        </h2>
        <p className="text-secondary mb-14 text-lg">
          Get Your Desired Product from Our Top Categories
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map(({ name, icon: Icon }, idx) => (
          <Card key={idx} className={`group cursor-pointer`}>
            <CardHeader className="flex flex-col items-center justify-center pt-8">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10
          text-primary group-hover:scale-110 transition-transform duration-300"
              >
                <Icon size={32} />
              </div>
            </CardHeader>

            <CardContent className="text-center pb-8">
              <CardTitle className="text-base font-medium text-secondary group-hover:text-primary transition-colors">
                {name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedCategory;
