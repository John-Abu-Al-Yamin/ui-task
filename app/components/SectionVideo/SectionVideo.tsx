"use client";
import { motion } from "framer-motion";

const SectionVideo = () => {
  // Animation variants
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="py-10 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.video
        className="w-full h-auto rounded-lg"
        autoPlay
        loop
        muted
        variants={videoVariants}
      >
        <source src="/image/VD/3.mp4" type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

export default SectionVideo;
