import { MapPin, Mail, Phone } from "lucide-react";
import ContactCard from "./ContactCard/ContactCard";
import Section from "@/components/shared/Section/Section";

const contactData = {
  grid: [
    {
      icon: "MapPin",
      title: "Our Office",
      description: "123 Tech Avenue, Silicon Valley, CA 90210",
      link: "#",
      linkText: "View on map",
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "support@mytechhub.com",
      link: "mailto:support@mytechhub.com",
      linkText: "Send an email",
    },
    {
      icon: "Phone",
      title: "Give Us a Call",
      description: "+1 (234) 567-890",
      link: "tel:+1234567890",
      linkText: "Call now",
    },
  ],
};

const icons = { MapPin, Mail, Phone };

const ContactInfoGrid = () => {
  return (
    <Section className="grid md:grid-cols-3 gap-8">
      {contactData.grid.map((item, i) => {
        const Icon = icons[item.icon as keyof typeof icons]; 
        return (
          <ContactCard
            key={i}
            icon={<Icon size={24} className="text-primary" />}
            title={item.title}
            description={item.description}
            link={item.link}
            linkText={item.linkText}
          />
        );
      })}
    </Section>
  );
};

export default ContactInfoGrid;
