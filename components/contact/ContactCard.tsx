import React, { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ContactCard: FC<ContactCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText,
}) => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <div className="w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-900/40 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:underline group"
      >
        {linkText}
        <ArrowUpRight
          size={16}
          className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>
  );
};

export default ContactCard;
