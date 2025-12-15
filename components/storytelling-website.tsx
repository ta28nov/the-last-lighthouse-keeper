"use client"

import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { motion, AnimatePresence } from "framer-motion"
import { IntroSequence } from "./story/intro-sequence"
import { StoryProgress } from "./story/story-progress"
import { CustomCursor } from "./custom-cursor"

// 10 Chapters of "The Last Lighthouse Keeper"
import { Chapter01Prologue } from "./story/chapters/chapter-01-prologue"
import { Chapter02TheCall } from "./story/chapters/chapter-02-the-call"
import { Chapter03TheJourney } from "./story/chapters/chapter-03-the-journey"
import { Chapter04TheIsland } from "./story/chapters/chapter-04-the-island"
import { Chapter05TheLighthouse } from "./story/chapters/chapter-05-the-lighthouse"
import { Chapter06TheStorm } from "./story/chapters/chapter-06-the-storm"
import { Chapter07TheMemories } from "./story/chapters/chapter-07-the-memories"
import { Chapter08TheRescue } from "./story/chapters/chapter-08-the-rescue"
import { Chapter09TheChoice } from "./story/chapters/chapter-09-the-choice"
import { Chapter10Epilogue } from "./story/chapters/chapter-10-epilogue"

export function StorytellingWebsite() {
  const lenisRef = useRef<Lenis | null>(null)
  const [introComplete, setIntroComplete] = useState(false)
  const [currentChapter, setCurrentChapter] = useState(0)

  useEffect(() => {
    if (!introComplete) return

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [introComplete])

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!introComplete && <IntroSequence onComplete={() => setIntroComplete(true)} />}
      </AnimatePresence>

      {introComplete && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <StoryProgress currentChapter={currentChapter} totalChapters={10} />

          <Chapter01Prologue onInView={() => setCurrentChapter(0)} />
          <Chapter02TheCall onInView={() => setCurrentChapter(1)} />
          <Chapter03TheJourney onInView={() => setCurrentChapter(2)} />
          <Chapter04TheIsland onInView={() => setCurrentChapter(3)} />
          <Chapter05TheLighthouse onInView={() => setCurrentChapter(4)} />
          <Chapter06TheStorm onInView={() => setCurrentChapter(5)} />
          <Chapter07TheMemories onInView={() => setCurrentChapter(6)} />
          <Chapter08TheRescue onInView={() => setCurrentChapter(7)} />
          <Chapter09TheChoice onInView={() => setCurrentChapter(8)} />
          <Chapter10Epilogue onInView={() => setCurrentChapter(9)} />
        </motion.main>
      )}
    </>
  )
}
