import { ReactNode } from "react";
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

const ContactCard = ({
  icon,
  title,
  description,
  link,
  linkText,
}: ContactCardProps) => {
  return (
    <Card className="">
      {/* Header */}
      <CardHeader className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-primary">
          {title}
        </CardTitle>
        <CardDescription className="text-secondary">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Content (optional – if you want extra content) */}
      <CardContent></CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-center">
        <a
          href={link}
          className="inline-flex items-center text-primary font-medium hover:underline group"
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
