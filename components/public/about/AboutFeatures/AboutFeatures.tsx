import React from "react";
import { Globe2, Truck, Headphones, ShieldCheck } from "lucide-react";
import FeatureCard from "./FeatureCard";

interface Feature {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const AboutFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Globe2 size={28} className="text-teal-600" />,
      title: "Global Reach",
      description:
        "Delivering cutting-edge tech products to over 100+ countries worldwide, ensuring everyone has access to innovation.",
    },
    {
      id: 2,
      icon: <Truck size={28} className="text-teal-600" />,
      title: "Fast & Secure Delivery",
      description:
        "Lightning-fast and reliable shipping, with full tracking and secure handling, to make sure your products arrive safely.",
    },
    {
      id: 3,
      icon: <ShieldCheck size={28} className="text-teal-600" />,
      title: "Trusted & Genuine",
      description:
        "Only authentic products from top global brands. No fakes, no compromises — just trust and quality in every purchase.",
    },
    {
      id: 4,
      icon: <Headphones size={28} className="text-teal-600" />,
      title: "24/7 Support",
      description:
        "Our expert support team is always ready to assist you, ensuring a smooth and satisfying tech experience anytime you need help.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <h2 className="text-3xl font-bold text-teal-500 dark:text-white text-center mb-12">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
