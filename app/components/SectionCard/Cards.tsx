"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const cardVariants = {
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
  },
};

const Cards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <motion.div
        className="rounded overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        variants={cardVariants}
        drag={true}
      >
        <Image
          src="https://placehold.co/600x400/EEE/31343C.png"
          alt="card"
          className="w-full h-auto rounded-md"
          width={600}
          height={400}
        />
      </motion.div>

      <motion.div
        className="rounded overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        variants={cardVariants}
      >
        <Image
          src="https://placehold.co/600x400/EEE/31343C.png"
          alt="card"
          className="w-full h-auto rounded-md"
          width={600}
          height={400}
        />
      </motion.div>

      <motion.div
        className="rounded overflow-hidden"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        variants={cardVariants}
      >
        <Image
          src="https://placehold.co/600x400/EEE/31343C.png"
          alt="card"
          className="w-full h-auto rounded-md"
          width={600}
          height={400}
        />
      </motion.div>

      <motion.div
        className="rounded overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        variants={cardVariants}
      >
        <Image
          src="https://placehold.co/600x400/EEE/31343C.png"
          alt="card"
          className="w-full h-auto rounded-md"
          width={600}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default Cards;
