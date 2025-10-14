import React from "react";
import ContactHeader from "./ContactHeader";
import ContactInfoGrid from "./ContactInfoGrid";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <ContactHeader />
        <ContactInfoGrid />

        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <ContactText />
          <ContactForm />
        </div>

        <ContactMap />

        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          We’re always here to help. Reach out anytime and we’ll respond as soon
          as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;
