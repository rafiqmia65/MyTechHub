import React from "react";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const ContactSocial = () => {
  const links = [
    { icon: <Twitter size={28} />, href: "#" },
    { icon: <Linkedin size={28} />, href: "#" },
    { icon: <Instagram size={28} />, href: "#" },
  ];

  return (
    <div className="flex gap-6 mt-4">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="w-6 h-6 text-primary hover:text-primary/80 transition-colors cursor-pointer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default ContactSocial;
