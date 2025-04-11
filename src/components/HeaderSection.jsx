import React from "react";

const HeaderSection = ({ title, subtitle }) => {
  return (
    <div className="py-16 "data-aos="fade-right">
      <p className="font-bold text-3xl text-center text-black">
        {title}
        </p>
      <p className="text-base text-gray-600 text-center font-bold">
        {subtitle}
      </p>
    </div>
  );
};

export default HeaderSection;
