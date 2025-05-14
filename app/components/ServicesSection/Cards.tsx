"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    title: "Mobile App Development",
    description:
      "We bring more than just strong coding skills to the table. Our experience sets us apart in creating impactful apps that transform how people work and live, using Swift and Kotlin for native development, and React Native, Flutter for cross-platform solutions",
  },
  {
    title: "Modern Web Applications",
    description:
      "We specialize in both frontend and backend web development, crafting seamless, scalable web solutions. On the frontend, we use React.js, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript, Next.js, and Tailwind CSS. For the backend, we leverage Node.js, .NET, PHP, Laravel, Django, and Spring Boot to build robust, high-performance applications",
  },
  {
    title: "UI/UX Design",
    description:
      "Deliver the product you need on time with an experienced team that follows a clear, efficient design process",
  },
  {
    title: "Testing",
    description:
      "Turn to our experts for comprehensive, multi-stage testing and auditing of your software, covering manual and automated testing, performance, and security to ensure quality and reliability at every stage.",
  },
  {
    title: "Tech Consulting & Support",
    description:
      "Rely on our experts to eliminate workflow inefficiencies, integrate cutting-edge technologies, and streamline your app portfolio",
  },
];

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const directions = [
    { x: 100 },
    { y: 100 },
    { y: -100 },
    { x: -100 },
    { x: -100 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={index}
            className="rounded overflow-hidden relative sm:h-38 cursor-pointer"
            initial={{ opacity: 0, ...directions[index % directions.length] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover="hover"
            whileTap="tap"
            onClick={() =>
              setActiveIndex((prev) => (prev === index ? null : index))
            }
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={cardVariants}
          >
            <Image
              src="https://placehold.co/600x400/EEE/31343C.png"
              alt="card"
              className="w-full h-full rounded-md object-cover"
              width={600}
              height={400}
            />
            <motion.div
              className="absolute left-0 right-0 bg-black bg-opacity-70 text-white p-2 lg:p-4 overflow-y-auto scroll-hidden"
              animate={
                isActive
                  ? { top: 0, bottom: 0, height: "100%" }
                  : { top: "auto", bottom: 0, height: "30%" }
              }
              whileHover={{ top: 0, bottom: 0, height: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="text-xs">{card.description}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Cards;
