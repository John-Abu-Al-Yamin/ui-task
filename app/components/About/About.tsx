"use client";
import { motion } from "framer-motion";
import { Atom, Brain, CreativeCommons, Maximize } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -3 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    rotate: 1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.98,
    rotate: -1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
  },
};

const About = () => {
  return (
    <motion.div id="about"
      className="py-10 px-2 lg:px-20 h-dvh dark:bg-black bg-white dark:text-white text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10">
        <motion.p className="text-xs sm:text-sm font-bold mb-6">
          Hallow to Encrypt Brain
        </motion.p>
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4  font-mono uppercase tracking-tighter drop-shadow-xl">
          Who Are We?
        </motion.h1>
        <motion.p className="text-xs sm:text-sm font-bold mb-6">
          A subsidiary of 77Media Digital Holding. We are a digital solutions
          partner, implementer & advisor...
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-2 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Atom className="w-10 h-10  " />
              <p className="dark:text-white text-black">Quality</p>
            </div>
            <p className="dark:text-gray-400 text-sm  text-black ">
              We believe that quality should never be sacrificed and that it's
              better to leave the work untouched than to deliver it with less
              than expected quality.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Brain className="w-10 h-10  " />
              <p className="">Creativity</p>
            </div>
            <p className="dark:text-gray-400 text-sm  text-black ">
              Our talented team will generate creative ideas for your project.
              Just bring us your ideas and your needs, and let us build your
              solution.
            </p>
          </div>{" "}
        </motion.div>
        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <CreativeCommons className="w-10 h-10  " />
              <p className="">Experience</p>
            </div>
            <p className="dark:text-gray-400 text-sm  ">
              We are experienced developers and have years of knowledge and
              experience that we bring to the table. We have been on the market
              since 2010!
            </p>
          </div>{" "}
        </motion.div>
        <motion.div
          className="h-32 dark:bg-black dark:text-white dark:shadow-md dark:border dark:border-white bg-gray-100  shadow-md   text-lg font-semibold"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={cardVariants}
        >
          <div className="p-3">
            <div className="flex items-center justify-center gap-2  ">
              <Maximize className="w-10 h-10  " />
              <p className="">Cost</p>
            </div>
            <p className="dark:text-gray-400 text-sm  text-black">
              We offer competitive pricing for your project. We guarantee to
              give you a cost-effective solution without compromising the
              quality.
            </p>
          </div>{" "}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
