import Section from "@/components/shared/Section/Section";
import { Card } from "@/components/ui/card";
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
    <Section className="grid md:grid-cols-2 gap-10">
      {cards.map((card) => (
        <Card key={card.title}>
          <h2 className="text-3xl font-bold text-primary mb-4">{card.title}</h2>
          <p className="text-secondary text-lg leading-relaxed">
            {card.content}
          </p>
        </Card>
      ))}
    </Section>
  );
};

export default AboutMissionVision;
