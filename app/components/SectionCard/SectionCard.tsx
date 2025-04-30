"use client";
import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

const SectionCard = () => {
  return (
    <motion.div
      className="py-10 px-2 lg:px-20 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10">
        <motion.p className="text-xs sm:text-sm font-bold mb-6">
          persent engineering
        </motion.p>
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-black font-mono uppercase tracking-tighter drop-shadow-xl">
          Touching Tomorrow,{" "}
          <span className="text-gray-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic">
            Today
          </span>
        </motion.h1>
      </div>
      <motion.div>
        <Cards />
      </motion.div>
     
    </motion.div>
  );
};

export default SectionCard;
