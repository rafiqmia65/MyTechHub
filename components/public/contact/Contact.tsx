import React from "react";
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactInfoGrid from "./ContactInfoGrid/ContactInfoGrid";
import ContactSection from "./ContactSection/ContactSection";
import ContactMapWrapper from "./ContactMap/ContactMapWrapper";

const Contact = () => {
  return (
    <div className="mb-10">
      <ContactHeader />
      <ContactInfoGrid />

      <ContactSection></ContactSection>

      <div className="mt-10">
        <h1 className="text-3xl text-center font-bold mb-6">
          Our Company Location
        </h1>
        <ContactMapWrapper />
      </div>

      <p className="text-center text-secondary mt-8">
        We’re always here to help. Reach out anytime and we’ll respond as soon
        as possible.
      </p>
    </div>
  );
};

export default Contact;
