"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorText, setCursorText] = useState("")

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const updateCursorListeners = useCallback(() => {
    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
      const target = e.target as HTMLElement
      const text = target.getAttribute("data-cursor-text")
      if (text) setCursorText(text)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText("")
    }

    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover], .group")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    window.addEventListener("mousemove", moveCursor)
    const cleanup = updateCursorListeners()

    // Re-attach listeners when DOM changes
    const observer = new MutationObserver(() => {
      cleanup()
      updateCursorListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      cleanup()
      observer.disconnect()
    }
  }, [cursorX, cursorY, updateCursorListeners])

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          borderColor: "oklch(0.85 0.15 45)",
          marginLeft: isHovering ? -24 : 0,
          marginTop: isHovering ? -24 : 0,
        }}
        transition={{
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          marginLeft: { duration: 0.3 },
          marginTop: { duration: 0.3 },
        }}
      >
        {/* Cursor text */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-mono text-primary tracking-wider uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 600 }),
          y: useSpring(cursorY, { damping: 50, stiffness: 600 }),
          opacity: isVisible && !isHovering ? 1 : 0,
          translateX: 13,
          translateY: 13,
        }}
      />
    </>
  )
}
