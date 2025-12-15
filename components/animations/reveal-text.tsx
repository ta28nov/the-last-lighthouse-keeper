"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealTextProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function RevealText({ children, delay = 0, className = "" }: RevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
