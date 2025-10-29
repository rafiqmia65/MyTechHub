import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="group cursor-pointer">
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-primary text-center">
        {title}
      </h3>
      <p className="text-secondary text-center text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default FeatureCard;
