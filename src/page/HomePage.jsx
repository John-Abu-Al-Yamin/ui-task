import React from "react";
import HeroSection from "../components/Home/HeroSection";
import SponsersSection from "../components/Home/SponsersSection";
import ProjectSection from "../components/Home/ProjectSection";
import AskSection from "../components/Home/AskSection";
import Testimonials from "../components/Home/Testimonials";

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
