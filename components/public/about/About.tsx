import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutMissionVision from "./AboutMissionVision/AboutMissionVision";
import AboutFeatures from "./AboutFeatures/AboutFeatures";
import AboutStory from "./AboutStory/AboutStory";

const About = () => {
  return (
    <div className="bg-background  transition-colors duration-300 min-h-screen">
      <AboutHeader />
      <AboutMissionVision />
      <AboutFeatures />
      <AboutStory />
    </div>
  );
};

export default About;
