import About from "./components/About/About";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import OurTeam from "./components/OurTeam/OurTeam";
import ParallaxSection from "./components/ParallaxSection/ParallaxSection";
import SectionCard from "./components/SectionCard/SectionCard";
import SectionVideo from "./components/SectionVideo/SectionVideo";

export default function Home() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black">
      <Navbar />
      <Hero />
      <About />
      <SectionVideo />
      <SectionCard />
      <ParallaxSection />
      <OurTeam />
    </div>
  );
}
