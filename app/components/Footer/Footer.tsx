"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: false, amount: 0.2 })

  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={item} initial="hidden" animate={isInView ? "show" : "hidden"} className="col-span-1">
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              Company
            </motion.h3>
            <motion.p className="text-gray-400 mb-4">
              Creating amazing digital experiences with cutting-edge technology.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={item}
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} initial="hidden" animate={isInView ? "show" : "hidden"} className="col-span-1">
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link, index) => (
                <motion.li key={index} variants={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5, color: "#60a5fa" }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={item} initial="hidden" animate={isInView ? "show" : "hidden"} className="col-span-1">
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              Services
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {["Web Development", "Mobile Apps", "UI/UX Design", "Consulting", "Support"].map((service, index) => (
                <motion.li key={index} variants={item}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5, color: "#60a5fa" }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} initial="hidden" animate={isInView ? "show" : "hidden"} className="col-span-1">
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              Contact Us
            </motion.h3>
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div variants={item} className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <a href="mailto:info@company.com" className="text-gray-400 hover:text-white transition-colors">
                  info@company.com
                </a>
              </motion.div>
              <motion.div variants={item}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Subscribe to Newsletter
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p className="text-gray-500 text-sm" whileHover={{ color: "#60a5fa" }}>
            © {currentYear} Company Name. All rights reserved.
          </motion.p>
          <motion.div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-500 text-sm hover:text-white transition-colors"
                whileHover={{ color: "#60a5fa" }}
              >
                {policy}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
