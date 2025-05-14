"use client";
import { motion } from "framer-motion";

const SectionVideo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const videoVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Video as background */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        variants={videoVariants}
      >
        <source src="/image/VD/3.mp4" type="video/mp4" />
      </motion.video>
      <div className="" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        {/* Top text */}
        {/* <p className="text-white text-8xl font-bold absolute top-10 left-0 z-10">
          MachinaFusion
        </p> */}
        {/* Centered text */}
        <motion.p className="dark:text-white text-gray-400 text-4xl md:text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Brain Encrypt
        </motion.p>

        {/* Bottom text */}
        <motion.p className="text-gray-200 w-72 text-xl font-bold absolute bottom-10 right-5 z-10">
          Brain Encrypt is an Egypt-based tech startup founded in January 2025,
          specializing in innovative digital solutions in web and mobile
          development, UI/UX, and software quality for clients in the Gulf and
          Europe.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SectionVideo;
