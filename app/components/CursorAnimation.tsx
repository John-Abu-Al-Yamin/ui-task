"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointing, setIsPointing] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsPointing(true)
    const handleMouseUp = () => setIsPointing(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Hide the default cursor
    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 20, // نص الـ SVG 40px
        y: mousePosition.y - 20,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
      style={{
        width: "40px",
        height: "40px",
        pointerEvents: "none",
        mixBlendMode: "difference", // اختيارية لو عايزة تبيني المؤشر أوضح
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Robot Head */}
        <motion.rect
          x="8"
          y="5"
          width="24"
          height="20"
          rx="4"
          fill="black"
          animate={{
            scale: isPointing ? 0.95 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Robot Eyes */}
        <circle cx="15" cy="12" r="3" fill="#00AAFF" />
        <circle cx="25" cy="12" r="3" fill="#00AAFF" />

        {/* Robot Mouth */}
        <rect x="14" y="18" width="12" height="2" rx="1" fill="#444" />

        {/* Robot Finger */}
        <motion.path
          d="M20 25 L20 35 L23 35 L23 25"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          fill="black"
          animate={{
            y: isPointing ? 2 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Finger Tip */}
        <motion.circle
          cx="21.5"
          cy="35"
          r="3.5"
          fill="black"
          animate={{
            y: isPointing ? 2 : 0,
            scale: isPointing ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </motion.div>
  )
}

export default CursorAnimation
