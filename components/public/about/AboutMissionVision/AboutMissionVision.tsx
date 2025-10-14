import React from "react";

const AboutMissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      content:
        "Our mission is to empower people around the globe with the latest and most innovative technology. We aim to make gadgets and smart devices accessible to everyone, ensuring fast and reliable delivery, outstanding customer service, and products that inspire creativity and efficiency in everyday life.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become the world’s most trusted technology hub, connecting tech enthusiasts and innovators globally. We strive to create a community where everyone can explore the latest devices, discover smarter solutions, and stay ahead in a rapidly evolving digital world.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 mb-16">
      {cards.map((card) => (
        <div
          key={card.title}
          className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-3xl font-bold text-teal-500 dark:text-white mb-4">
            {card.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {card.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutMissionVision;
