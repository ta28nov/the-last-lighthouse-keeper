"use client"

import { animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function Counter({ end, suffix = "", prefix = "", className = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated && numberRef.current) {
      setHasAnimated(true)

      animate(0, end, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(latest).toString()
          }
        },
      })
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <span ref={numberRef}>0</span>
      {suffix}
    </span>
  )
}
