"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Determine if dark mode is active
  const isDark = mounted && theme === "dark";

  if (!mounted) {
    return null; // Avoid rendering until client-side to prevent hydration mismatch
  }

  return (
    <button
      onClick={toggleTheme}
      className={`         w-[80px] sm:w-[100px] md:w-[120px]
        h-[40px] sm:h-[45px] md:h-[50px]
 rounded-full flex items-center px-2 ${
   isDark ? "justify-end" : "justify-start"
 } cursor-pointer dark:bg-gray-100 bg-black transition-colors duration-500`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <motion.div
        className="          w-[28px] sm:w-[32px] md:w-[40px]
          h-[28px] sm:h-[32px] md:h-[40px]
 dark:bg-black bg-gray-100 rounded-full flex items-center justify-center"
        layout
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.4,
          stiffness: 180,
          damping: 20,
        }}
      >
        <div className="w-[5px] h-[5px] dark:bg-white bg-black rounded-full" />
      </motion.div>
    </button>
  );
}
