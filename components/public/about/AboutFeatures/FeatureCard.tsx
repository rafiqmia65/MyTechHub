import React from "react";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-200 dark:border-slate-700">
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-500/20 rounded-full mb-5">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-slate-800 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
