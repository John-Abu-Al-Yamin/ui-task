import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import ParallaxSection from "./components/ParallaxSection/ParallaxSection";
import SectionCard from "./components/SectionCard/SectionCard";
import SectionVideo from "./components/SectionVideo/SectionVideo";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SectionVideo />
      <SectionCard />
      <ParallaxSection />
    </div>
  );
}
