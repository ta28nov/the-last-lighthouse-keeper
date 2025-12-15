"use client"

import { motion } from "framer-motion"

interface TextMarqueeProps {
  text: string
  speed?: number
}

export function TextMarquee({ text, speed = 20 }: TextMarqueeProps) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="flex"
      >
        <span className="font-serif text-[15vw] leading-none pr-4">{text}</span>
        <span className="font-serif text-[15vw] leading-none pr-4">{text}</span>
      </motion.div>
    </div>
  )
}
