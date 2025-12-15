"use client"

import { motion } from "framer-motion"

interface StoryProgressProps {
  currentChapter: number
  totalChapters: number
}

const chapterNames = [
  "Prologue",
  "The Call",
  "The Journey",
  "The Island",
  "The Lighthouse",
  "The Storm",
  "The Memories",
  "The Rescue",
  "The Choice",
  "Epilogue",
]

export function StoryProgress({ currentChapter, totalChapters }: StoryProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3"
    >
      {Array.from({ length: totalChapters }).map((_, index) => (
        <div key={index} className="flex items-center gap-4 group cursor-pointer">
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: currentChapter === index ? 1 : 0,
              x: currentChapter === index ? 0 : 10,
            }}
            className="text-[10px] font-mono text-amber-400 tracking-[0.2em] uppercase group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap"
          >
            {String(index + 1).padStart(2, "0")} — {chapterNames[index]}
          </motion.span>

          <motion.div
            className="relative"
            animate={{ scale: currentChapter === index ? 1.2 : 0.6 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentChapter >= index ? "bg-amber-400" : "bg-white/20"
              }`}
            />
            {currentChapter === index && (
              <motion.div
                layoutId="activeChapter"
                className="absolute inset-0 -m-2 border border-amber-400/50 rounded-full"
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.div>
        </div>
      ))}

      <div className="absolute right-[3px] top-0 bottom-0 w-px bg-white/10 -z-10">
        <motion.div
          className="w-full bg-gradient-to-b from-amber-400 to-amber-600 origin-top"
          animate={{ height: `${((currentChapter + 1) / totalChapters) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}
