import React from "react";
import ContactSocial from "./ContactSocial";

const ContactText = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
        Get in Touch
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        Have questions, ideas, or feedback? We would love to hear from you. Our
        team is dedicated to providing quick and helpful responses to all
        inquiries.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        You can reach us via the contact form, email, or phone. Follow us on
        social media to stay updated with our latest news and projects.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Whether you are a startup looking for collaboration, a client seeking
        custom solutions, or a tech enthusiast exploring new ideas — we are here
        to help. At{" "}
        <span className="font-semibold text-teal-500">MytechHub</span>,
        communication is at the heart of everything we do.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Do not hesitate to share your project details, partnership proposals, or
        any questions you might have. We aim to respond within{" "}
        <strong>24 hours</strong>, ensuring you always get the support you
        deserve.
      </p>

      <ContactSocial />
    </div>
  );
};

export default ContactText;
