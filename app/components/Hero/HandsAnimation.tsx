"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HandsAnimation() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ x: -500 }}
        whileInView={{ x: 120 }} // الأنيميشين ده هيتنفذ لما العنصر يظهر في الviewport
        transition={{
          duration: 4,
          repeat: 1,
          repeatType: "reverse",
          delay: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/image/cyborg.png"
          alt="Cyborg Hand"
          width={450}
          height={100}
        />
      </motion.div>

      <motion.div
        initial={{ x: 500 }}
        whileInView={{ x: -120 }} // الأنيميشين ده هيتنفذ لما العنصر يظهر في الviewport
        transition={{
          duration: 4,
          repeat: 1,
          repeatType: "reverse",
          delay: 1,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/image/technology-human.png"
          alt="Human Hand"
          width={450}
          height={100}
        />
      </motion.div>
    </div>
  );
}
