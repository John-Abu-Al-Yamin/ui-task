"use client";
import { motion } from "framer-motion";
import ParallaxText from "./ParallaxText";
import Image from "next/image";

export default function ParallaxSection() {
  return (
    <div className="px-2 md:px-4">
      <section className="relative py-4 lg:py-10">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll Velocity</ParallaxText>
      </section>
      <div className="container mx-auto">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-lg tracking-tight">
            Plance Engineering
          </h2>
          <p className="dark:text-gray-400 leading-relaxed text-gray-600 w-full lg:w-1/2  font-bold">
            <span className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </span>{" "}
            elit. Placeat vero, earum reiciendis deserunt totam ipsam magni
            suscipit at. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Placeat vero, earum reiciendis deserunt totam ipsam magni
            suscipit at.
          </p>
        </motion.div>
        <div className="flex flex-col gap-6 lg:flex-row lg:flex items-center justify-between mt-8">
          <div className="">
            <motion.div
              className="flex flex-wrap gap-3 justify-start md:justify-end"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {["Placeat", "Ai", "Lorem"].map((text, index) => (
                <motion.button
                  key={text}
                  className={`border dark:border-gray-700 border-gray-300 py-2 px-6 rounded-full text-sm font-medium dark:hover:bg-gray-800 hover:bg-gray-50 transition-colors ${
                    text === "Ai"
                      ? "dark:bg-gray-800 bg-gray-50 hover:bg-gray-100"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {text}
                </motion.button>
              ))}
            </motion.div>
          </div>
          <div className="font-bold ">it@encryptbrain.com</div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center mt-20"
      >
        <Image
          src="/image/hum-hands/Encrypt Brain Logo.svg"
          alt="logo"
          width={100}
          height={100}
          className=" mt-4 text-center"
        />{" "}
      </motion.div>
    </div>
  );
}
