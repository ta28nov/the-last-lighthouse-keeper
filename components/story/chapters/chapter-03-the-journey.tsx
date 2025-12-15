"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

function ProgressBar({ scrollProgress, index }: { scrollProgress: number; index: number }) {
  const segmentStart = index * 0.25
  const progress = Math.max(0, Math.min(1, (scrollProgress - segmentStart) / 0.25))

  return (
    <div className="w-16 h-1 bg-foreground/20 rounded-full overflow-hidden">
      <motion.div className="h-full bg-primary origin-left" style={{ scaleX: progress }} />
    </div>
  )
}

export function Chapter03TheJourney({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-75%"])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  const [scrollValue, setScrollValue] = React.useState(0)

  React.useEffect(() => {
    const unsubscribe = horizontalProgress.on("change", (latest) => {
      setScrollValue(latest)
    })
    return unsubscribe
  }, [horizontalProgress])

  return (
    <section ref={containerRef} className="relative bg-background">
      {/* Chapter opening */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <img src="/wooden-fishing-boat-on-open-ocean-at-golden-sunset.jpg" alt="Ocean at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase"
          >
            Chapter Three
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground mt-4"
          >
            The Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-muted-foreground mt-8 text-lg"
          >
            47 hải lý về phía mặt trời mọc
          </motion.p>
        </div>
      </div>

      {/* Horizontal scrolling section */}
      <div ref={horizontalRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex h-full w-[400vw]">
            {/* Panel 1 */}
            <div className="w-screen h-full flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0">
                <img
                  src="/small-wooden-boat-leaving-harbor-at-dawn--young-ma.jpg"
                  alt="Boat on sea"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              <div className="relative z-10 max-w-2xl px-8">
                <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
                  Chiếc tàu nhỏ lắc lư giữa những con sóng. Thành ngồi ở mũi tàu, nhìn đất liền dần khuất xa phía chân
                  trời.
                </p>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="w-screen h-full flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0">
                <img
                  src="/vast-open-ocean-stretching-to-horizon--deep-blue-w.jpg"
                  alt="Open ocean"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl px-8">
                <div className="space-y-6">
                  <h3 className="font-mono text-primary text-sm tracking-widest">NGÀY THỨ NHẤT</h3>
                  <p className="font-sans text-xl text-foreground/80 leading-relaxed">
                    Buồn nôn. Sóng liên tục đánh vào mạn tàu. Thành nằm trong khoang, cố gắng không nghĩ đến việc mình
                    đang ở giữa đại dương mênh mông.
                  </p>
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/interior-of-old-wooden-boat-cabin--hammock--dim-la.jpg" alt="Ship cabin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="w-screen h-full flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0">
                <img
                  src="/breathtaking-sunrise-over-calm-ocean--golden-and-p.jpg"
                  alt="Dawn at sea"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative z-10 max-w-4xl px-8 text-center">
                <h3 className="font-mono text-primary text-sm tracking-widest mb-8">NGÀY THỨ HAI</h3>
                <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed mb-8">
                  Bình minh trên biển — điều đẹp nhất mà Thành từng thấy trong đời.
                </p>
                <p className="font-sans text-lg text-foreground/60">
                  Mặt trời nhô lên từ đường chân trời, nhuộm đỏ cả một vùng trời và biển. Lần đầu tiên, anh hiểu vì sao
                  cha mình yêu biển đến thế.
                </p>
              </div>
            </div>

            {/* Panel 4 */}
            <div className="w-screen h-full flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0">
                <img
                  src="/island-through-mist.jpg"
                  alt="Island in distance"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="relative z-10 text-center px-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="font-mono text-primary text-sm tracking-widest mb-8">NGÀY THỨ BA</h3>
                  <p className="font-serif text-4xl md:text-6xl text-foreground leading-tight">"ĐẢO KIA RỒI!"</p>
                  <p className="font-sans text-xl text-foreground/60 mt-8 max-w-xl mx-auto">
                    Tiếng thuyền trưởng vang lên. Thành chạy ra mũi tàu. Và ở đó, giữa màn sương mờ ảo, ngọn hải đăng
                    hiện ra như một cây nến khổng lồ giữa đại dương.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <ProgressBar key={i} scrollProgress={scrollValue} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Closing of chapter */}
      <div className="min-h-screen flex items-center justify-center py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed">
              Ba ngày trên biển dường như dài bằng cả một đời người. Nhưng khi đặt chân lên hòn đảo, Thành biết rằng
              cuộc hành trình thực sự mới chỉ bắt đầu.
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />

            <p className="font-mono text-sm text-primary/60 tracking-widest">NGÀY 18 THÁNG 3, 1978</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
