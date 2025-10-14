import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-teal-700 dark:text-white mb-6">
        About MytechHub
      </h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
        At MytechHub, we don’t just sell gadgets — we connect the world with
        cutting-edge technology, exceptional service, and a commitment to
        innovation. Our mission is to make the latest technology accessible to
        everyone, while providing a seamless and trustworthy shopping
        experience. Every product we offer reflects our dedication to quality,
        reliability, and customer satisfaction.
      </p>
    </div>
  );
};

export default AboutHeader;
