import Section from "@/components/shared/Section/Section";
import { Card } from "@/components/ui/card";
import { Globe2, Truck, ShieldCheck, Headphones, Zap } from "lucide-react";

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

const WhyWeAreFavorite = () => {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-3">
          Why We’re the Favorite Choice Worldwide
        </h2>
        <p className="text-secondary max-w-2xl mx-auto mb-16">
          At MytechHub, we’re more than just a tech store — we’re a global
          community that delivers innovation, quality, and trust to every corner
          of the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <Card key={idx} className="group">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full mx-auto group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="text-secondary text-sm leading-relaxed">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyWeAreFavorite;
