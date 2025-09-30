import { MapPin, Mail, Phone } from "lucide-react";
import ContactCard from "./ContactCard";

const ContactInfoGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <ContactCard
        icon={<MapPin size={24} className="text-cyan-500" />}
        title="Our Office"
        description="123 Tech Avenue, Silicon Valley, CA 90210"
        link="#"
        linkText="View on map"
      />
      <ContactCard
        icon={<Mail size={24} className="text-cyan-500" />}
        title="Email Us"
        description="support@mytechhub.com"
        link="mailto:support@mytechhub.com"
        linkText="Send an email"
      />
      <ContactCard
        icon={<Phone size={24} className="text-cyan-500" />}
        title="Give Us a Call"
        description="+1 (234) 567-890"
        link="tel:+1234567890"
        linkText="Call now"
      />
    </div>
  );
};

export default ContactInfoGrid;
