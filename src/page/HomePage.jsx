import React from "react";
import HeroSection from "../components/Home/HeroSection";
import SponsersSection from "../components/Home/SponsersSection";
import Testimonials from "../components/Home/testimonials";
import ProjectSection from "../components/Home/ProjectSection";
import AskSection from "../components/Home/AskSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="sm:px-4 md:px-10 lg:px-20 ">
        <SponsersSection />
        <Testimonials />
        <ProjectSection />
        <AskSection />
      </div>
    </div>
  );
};

export default HomePage;
