"use client";
import { motion } from "framer-motion";
const OurProjects = () => {
  return (
    <motion.div
      id="projects"
      className="py-4 lg:py-10 px-2 lg:px-20 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-4 lg:mb-10">
        <motion.p className="text-xs sm:text-sm font-bold mb-6">
          Brain Encrypt
        </motion.p>
        <motion.h1 className="text-4xl  md:text-6xl lg:text-7xl mb-4 dark:text-white text-black font-mono uppercase tracking-tighter drop-shadow-xl">
          Our Projects
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className=" bg-black text-white p-2 rounded-lg w-full max-w-lg font-mono"
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm cursor-pointer">Link</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">$ npm install Haki</p>
            <p className="text-white">+ Haki</p>
            <p className="text-white">
              added 1 package, and audited 2 packages in 3s
            </p>
            <p className="text-green-400">$</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className=" bg-black text-white p-2 rounded-lg w-full max-w-lg font-mono"
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm cursor-pointer">Link</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">$ npm install Pretty</p>
            <p className="text-white">+ Pretty</p>
            <p className="text-white">
              added 1 package, and audited 2 packages in 3s
            </p>
            <p className="text-green-400">$</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className=" bg-black text-white p-2 rounded-lg w-full max-w-lg font-mono"
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm cursor-pointer">Link</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">$ npm install MhwarFlowers</p>
            <p className="text-white">+ MhwarFlowers</p>
            <p className="text-white">
              added 1 package, and audited 2 packages in 3s
            </p>
            <p className="text-green-400">$</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
