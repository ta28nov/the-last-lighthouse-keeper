"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
}

export function ImageReveal({ src, alt, className = "" }: ImageRevealProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      className="relative overflow-hidden"
    >
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Overlay that slides away */}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute inset-0 bg-primary origin-bottom"
      />
    </motion.div>
  )
}
