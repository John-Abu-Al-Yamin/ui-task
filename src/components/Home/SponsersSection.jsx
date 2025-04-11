import React from "react";
import HeaderSection from "../HeaderSection";
import Investing1 from "/image/Investing1.png";
import Investing2 from "/image/Investing2.png";
import Investing3 from "/image/Investing3.png";
import Investing4 from "/image/Investing4.png";
import Investing5 from "/image/Investing5.png";
import Investing6 from "/image/Investing6.png";
import Investing7 from "/image/Investing7.png";
import Investing8 from "/image/Investing8.png";

const SponsersSection = () => {
  return (
    <div className=" py-10 ">
      <HeaderSection title="Our Sponsers" />
      <div className=" grid grid-cols-2 gap-y-8  md:grid-cols-3 lg:grid-cols-4 gap-4 w-full place-items-center"  data-aos="fade-up">
        <img src={Investing1} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing2} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing3} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing4} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing5} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing6} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing7} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
        <img src={Investing8} alt="Sponsers" className="sm:w-full sm:h-5   lg:w-56 lg:h-9 object-cover" loading="lazy"/>
      </div>
    </div>
  );
};

export default SponsersSection;
