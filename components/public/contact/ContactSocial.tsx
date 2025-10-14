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
          className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default ContactSocial;
