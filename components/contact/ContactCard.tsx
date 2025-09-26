import { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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
    <Card className="bg-white dark:bg-slate-800 rounded-2xl text-center shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-slate-200 border dark:border-slate-700">
      {/* Header */}
      <CardHeader className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-teal-100 dark:bg-teal-900/40 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-slate-800 dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Content (optional – if you want extra content) */}
      <CardContent></CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-center">
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
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
