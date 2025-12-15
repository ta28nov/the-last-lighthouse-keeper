import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useMemo } from "react"

interface IntroSequenceProps {
  onComplete: () => void
}

const introTexts = [
  { text: "Nơi đại dương gặp bầu trời...", subtext: "" },
  { text: "Có một ngọn đèn không bao giờ tắt...", subtext: "" },
  { text: "Và người đàn ông đã thắp sáng nó suốt 40 năm...", subtext: "" },
  { text: "Đây là câu chuyện của ông ấy.", subtext: "THE LAST LIGHTHOUSE KEEPER" },
]

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState(0)
  const [showScroll, setShowScroll] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Generate particles positions only on client side
  const particles = useMemo(() => {
    if (!mounted) return []
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      yOffset: -100 - Math.random() * 100,
      xOffset: (Math.random() - 0.5) * 50,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 5,
    }))
  }, [mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    timers.push(setTimeout(() => setPhase(1), 3500))
    timers.push(setTimeout(() => setPhase(2), 7000))
    timers.push(setTimeout(() => setPhase(3), 10500))
    timers.push(setTimeout(() => setShowScroll(true), 14000))

    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (!showScroll) return

    const handleInteraction = () => onComplete()

    window.addEventListener("wheel", handleInteraction)
    window.addEventListener("touchmove", handleInteraction)
    window.addEventListener("keydown", handleInteraction)

    return () => {
      window.removeEventListener("wheel", handleInteraction)
      window.removeEventListener("touchmove", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
    }
  }, [showScroll, onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 14, ease: "linear" }}
      >
        <img
          src="/intro-mysterious-door.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
      </motion.div>

      {/* Animated light beam */}
      <motion.div
        className="absolute top-0 left-1/2 w-[2px] h-0 bg-gradient-to-b from-amber-400/80 via-amber-400/20 to-transparent"
        animate={{ height: ["0%", "60%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        style={{ transform: "translateX(-50%)" }}
      />

      {/* Text content */}
      <div className="relative z-10 h-48 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {phase <= 3 && (
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute text-center px-6"
            >
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white/90 leading-relaxed">
                {introTexts[phase].text}
              </p>
              {introTexts[phase].subtext && (
                <motion.h1
                  initial={{ opacity: 0, letterSpacing: "0.5em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  className="mt-8 font-mono text-sm md:text-base text-amber-400/90 tracking-[0.3em]"
                >
                  {introTexts[phase].subtext}
                </motion.h1>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-20 flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">Scroll to begin</span>
              <svg width="24" height="40" viewBox="0 0 24 40" className="text-white/30">
                <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2" fill="none" />
                <motion.circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="currentColor"
                  animate={{ cy: [12, 24, 12] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles - only render on client */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, particle.yOffset],
            x: [0, particle.xOffset],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  )
}
