import Section from "@/components/shared/Section/Section";
import React from "react";

const ContactHeader = () => {
  return (
    <Section className="">
      <h2 className="text-4xl text-center md:text-5xl font-bold text-primary mb-6">
        Lets Build Something Great Together
      </h2>
      <p className="text-secondary max-w-4xl text-center mx-auto text-lg md:text-xl leading-relaxed">
        Whether you are looking for support, partnership, or just want to say
        hello, our team is ready to connect.
      </p>
    </Section>
  );
};

export default ContactHeader;
