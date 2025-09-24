import { FC } from "react";
import { Globe2, Truck, ShieldCheck, Headphones, Zap } from "lucide-react";
import { Card } from "../ui/card";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "We deliver cutting-edge tech products to customers in over 100+ countries with reliable global shipping.",
  },
  {
    icon: Truck,
    title: "Fast & Secure Delivery",
    description:
      "Your orders arrive lightning-fast and safely with our trusted logistics network.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine & Trusted",
    description:
      "We guarantee 100% authentic products from top global brands — no fakes, no compromises.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Our friendly support team is always here to help you — anytime, anywhere.",
  },
  {
    icon: Zap,
    title: "Next-Gen Tech",
    description:
      "We bring the latest and smartest gadgets so you always stay ahead in the tech world.",
  },
];

const WhyWeAreFavorite: FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-[#081224] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-500 mb-3">
          Why We’re the Favorite Choice Worldwide 🌍
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          At MytechHub, we’re more than just a tech store — we’re a global
          community that delivers innovation, quality, and trust to every corner
          of the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <Card
              key={idx}
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-500/20 text-teal-600 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreFavorite;
