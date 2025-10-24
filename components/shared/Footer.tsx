import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import BrandLogo from "./BrandLogo/BrandLogo";
import Section from "./Section/Section";

const Footer = () => {
  return (
    <footer className="bg-background text-secondary transition-colors duration-300 font-sans">
      <Section className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Logo & About */}
        <div className="space-y-6">
          <BrandLogo></BrandLogo>
          <p className="text-secondary mt-4 leading-relaxed max-w-sm">
            Your trusted source for the latest tech and gadgets. We offer
            curated products and swift, reliable delivery.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 mt-4">
            <Facebook className="w-6 h-6 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-6">
            Stay Updated
          </h3>
          <p className="text-secondary mb-4">
            Get exclusive deals and product updates right to your inbox.
          </p>
          <form className="flex flex-col gap-2 w-full max-w-md">
            <Input type="email" placeholder="Your email address" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </Section>

      {/* Bottom Bar */}
      <div className="dark:bg-accent border-t border text-center py-6 text-sm text-secondary">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary font-bold">MyTechHub</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
