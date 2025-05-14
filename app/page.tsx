import About from "./components/About/About";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import OurTeam from "./components/OurTeam/OurTeam";
import ParallaxSection from "./components/ParallaxSection/ParallaxSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import SectionVideo from "./components/SectionVideo/SectionVideo";
import OurProjects from "./components/Projects/OurProjects";

export default function Home() {
  return (
    <div className="dark:bg-black bg-white dark:text-white text-black">
      <section className=" h-dvh snap-start">
        <Navbar />
        <Hero />
      </section>
      <section className="h-dvh snap-start">
        <About />
      </section>
      <section className="h-dvh snap-start">
        <SectionVideo />
      </section>
      <section className=" h-dvh snap-start">
        <ServicesSection />
      </section>
      <section className=" h-dvh snap-start">
        <OurProjects />
      </section>
      <section className=" h-dvh snap-start">
        <ParallaxSection />
      </section>
      <section className=" h-dvh snap-start">
        <OurTeam />
      </section>
    </div>
  );
}
