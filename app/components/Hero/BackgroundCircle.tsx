"use client";
import { motion } from "framer-motion";

const BackgroundCircle = () => {
  return (
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-50 blur-3xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 0.5,
        rotate: [0, 360],
      }}
      transition={{
        duration: 6,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

export default BackgroundCircle;
