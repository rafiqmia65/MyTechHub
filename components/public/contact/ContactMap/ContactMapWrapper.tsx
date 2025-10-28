"use client";

import dynamic from "next/dynamic";

// Dynamically import ContactMap with SSR disabled
const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });

const ContactMapWrapper = () => {
  return <ContactMap />;
};

export default ContactMapWrapper;
