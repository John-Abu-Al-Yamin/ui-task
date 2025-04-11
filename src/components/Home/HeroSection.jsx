import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="w-full h-[400px]  md:h-[600px] relative">
      <div
        className="w-full h-full flex items-center justify-center py-16 px-4"
        style={{
          backgroundImage: `url(/image/heroimg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <Typewriter
              words={["Create Your Professional Website in Minutes!"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <p className="text-sm sm:text-base lg:text-lg mb-8 px-2 sm:px-0">
            It is a long established fact that a reader will be distracted by
            the readable
          </p>

          <button className="bg-[#35367E] hover:bg-[#35365E] transition-colors duration-300 text-white font-medium py-2 px-6 sm:px-8 rounded-md text-sm sm:text-base">
            Explore Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
