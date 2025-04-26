"use client";
import { useState } from "react";
import { Voicemail, Podcast, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ToggleButoon from "./ToggleButoon";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-sm relative z-50"
    >
      <div className="flex justify-between items-center py-4 px-4 h-20 container mx-auto">
        <motion.div
          className="flex items-center gap-2 sm:gap-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Voicemail className="w-7 h-7 sm:w-9 sm:h-9" />
            </motion.div>
            <span className="font-bold text-sm sm:text-base">
              Machinafusion
            </span>
          </div>

          {/* Toggle button visible on all screens */}
          <div className="hidden sm:block">
            <ToggleButoon />
          </div>

          {/* R&D box - hidden on mobile, visible on md and up */}
          <motion.div
            className="hidden md:block w-64 h-12 bg-gray-300 rounded-full px-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between h-full">
              <p className="font-bold text-xs">Cutting-edge R&D</p>
              <p className="font-bold text-xs">Adachange AI</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media box - hidden on mobile, visible on lg and up */}
        <motion.div
          className="hidden lg:block"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="w-64 h-12 bg-gray-300 rounded-full px-4 relative flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute left-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Podcast className="w-9 h-9 bg-black text-white p-1 rounded-full" />
            </motion.div>
            <p className="w-full text-center font-bold text-sm">Social Media</p>
          </motion.div>
        </motion.div>

        {/* Mobile menu button - only visible on smaller screens */}
        <motion.button
          className="block sm:hidden"
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile menu - slides in from the top */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-6">
              <div className="flex items-center justify-center">
                <ToggleButoon />
              </div>

              <motion.div
                className="w-full h-12 bg-gray-300 rounded-full px-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between h-full">
                  <p className="font-bold text-xs">Cutting-edge R&D</p>
                  <p className="font-bold text-xs">Adachange AI</p>
                </div>
              </motion.div>

              <motion.div
                className="w-full h-12 bg-gray-300 rounded-full px-4 relative flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute left-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Podcast className="w-9 h-9 bg-black text-white p-1 rounded-full" />
                </motion.div>
                <p className="w-full text-center font-bold text-sm">
                  Social Media
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
