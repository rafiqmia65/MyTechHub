import Section from "@/components/shared/Section/Section";
import React from "react";
import ContactText from "./ContextTextInfo/ContactTextInfo/ContactText";
import ContactForm from "./ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ContactText></ContactText>
      <ContactForm></ContactForm>
    </Section>
  );
};

export default ContactSection;
