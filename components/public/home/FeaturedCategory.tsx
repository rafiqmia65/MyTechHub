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
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-teal-500 mb-4">
          Featured Category
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-14 text-lg">
          Get Your Desired Product from Our Top Categories
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map(({ name, icon: Icon }, idx) => (
            <Card
              key={idx}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <CardHeader className="flex flex-col items-center justify-center pt-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-500/20 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>
              </CardHeader>

              <CardContent className="text-center pb-8">
                <CardTitle className="text-base font-medium text-slate-700 dark:text-gray-200 group-hover:text-teal-600 transition-colors">
                  {name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
