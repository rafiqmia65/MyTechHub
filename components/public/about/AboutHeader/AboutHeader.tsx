import Section from "@/components/shared/Section/Section";
import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <Section>
      <h1 className="text-4xl text-center md:text-5xl font-bold text-primary mb-6">
        About MytechHub
      </h1>
      <p className="text-secondary max-w-4xl text-center mx-auto text-lg md:text-xl leading-relaxed">
        At MytechHub, we don’t just sell gadgets — we connect the world with
        cutting-edge technology, exceptional service, and a commitment to
        innovation. Our mission is to make the latest technology accessible to
        everyone, while providing a seamless and trustworthy shopping
        experience. Every product we offer reflects our dedication to quality,
        reliability, and customer satisfaction.
      </p>
    </Section>
  );
};

export default AboutHeader;
