"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HandsAnimation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const leftInitial = isMobile ? -100 : -300;
  const leftTarget = isMobile ? -30 : -10;

  const rightInitial = isMobile ? 100 : 300;
  const rightTarget = isMobile ? 30 : 10;

  return (
    <div className="relative w-screen h-screen  overflow-hidden">
      {/* اليد اليسرى */}
      <motion.div
        initial={{ x: leftInitial }}
        animate={{ x: leftTarget }}
        transition={{
          duration: 3,
          // repeat: 1,
          // repeatType: "reverse",
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        <Image
          src="/image/cyborg.png"
          alt="Cyborg Hand"
          width={300}
          height={300}
          className="w-[180px] md:w-[200px] lg:w-[450px] object-cover"
        />
      </motion.div>

      {/* اليد اليمنى */}
      <motion.div
        initial={{ x: rightInitial }}
        animate={{ x: rightTarget }}
        transition={{
          duration: 3,
          // repeat: 1,
          // repeatType: "reverse",
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        <Image
          src="/image/technology-human.png"
          alt="Human Hand"
          width={300}
          height={300}
          className="w-[180px] md:w-[150px] lg:w-[450px] object-cover"
        />
      </motion.div>
    </div>
  );
}
