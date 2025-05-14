"use client";
import { motion } from "framer-motion";
import ParallaxText from "./ParallaxText";
import Image from "next/image";

export default function ParallaxSection() {
  return (
    <div className="px-2 md:px-4">
      <section className="relative py-4 lg:py-10">
        <ParallaxText baseVelocity={-5}>Brain Encrypt</ParallaxText>
        <ParallaxText baseVelocity={5}>software development</ParallaxText>
      </section>
      <div className="container mx-auto flex flex-col gap-6 lg:flex-row lg:flex items-center justify-between mt-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-lg tracking-tight">Why Us</h2>
          <p className="dark:text-gray-400 leading-relaxed text-gray-600 w-full lg:w-1/2  font-bold">
            <span className="dark:text-gray-100 text-gray-300">
              At Brain Encrypt
            </span>{" "}
            we specialize in delivering innovative, high-quality digital
            solutions with a focus on user experience and fast development. We
            work with clients across the Gulf and Europe, ensuring
            professionalism in execution, attention to detail, and reliable
            technical support.
          </p>
        </motion.div>
        <div className="font-bold ">it@encryptbrain.com</div>
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
          className="text-center object-cover"
        />{" "}
      </motion.div>
    </div>
  );
}
