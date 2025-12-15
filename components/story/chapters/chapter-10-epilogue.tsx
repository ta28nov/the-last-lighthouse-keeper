"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter10Epilogue({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const [currentYear] = useState(new Date().getFullYear())

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.8])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  const yearsOnIsland = currentYear - 1978

  return (
    <section ref={containerRef} className="relative min-h-[600vh] bg-background">
      {/* Chapter intro */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src="/lighthouse-golden-hour.jpg"
            alt="Lighthouse at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>

        {/* Gentle light pulse */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
        />

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase mb-6"
          >
            Final Chapter
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center"
          >
            Epilogue
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-muted-foreground mt-8 text-lg"
          >
            Hiện tại — Ngọn đèn vẫn sáng
          </motion.p>
        </motion.div>
      </div>

      {/* Epilogue content */}
      <div className="relative z-10 -mt-[30vh]">
        {/* Current state */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <p className="font-mono text-primary/60 text-sm tracking-widest mb-4">TÍNH ĐẾN {currentYear}</p>
            <p className="font-serif text-7xl md:text-9xl text-foreground">{yearsOnIsland}</p>
            <p className="font-sans text-xl text-foreground/60 mt-4">năm gác đèn</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-16"
          >
            Nguyễn Văn Thành năm nay {currentYear - 1955} tuổi. Tóc đã bạc trắng như muối biển. Lưng đã còng vì hàng
            nghìn lần leo lên xuống 156 bậc thang. Nhưng đôi mắt vẫn sáng, và bàn tay vẫn đều đặn lau chùi lăng kính mỗi
            ngày.
          </motion.p>
        </div>

        {/* Photo of today */}
        <div className="relative min-h-screen py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/elderly-man-70-portrait.jpg"
                  alt="Elderly man"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="font-sans text-lg text-foreground/70 leading-relaxed"
                >
                  Mỗi ngày, ông vẫn dậy lúc 5 giờ sáng. Vẫn leo lên đỉnh hải đăng kiểm tra đèn. Vẫn ghi nhật ký thời
                  tiết. Vẫn ngồi nhìn biển đến khi mặt trời lặn.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="font-sans text-lg text-foreground/70 leading-relaxed"
                >
                  Con trai ông ra thăm mỗi tháng một lần. Cháu nội ông, năm nay 10 tuổi, luôn đòi theo ông leo lên đỉnh
                  hải đăng để "nhìn biển như ông nội".
                </motion.p>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="border-l-2 border-primary/50 pl-6"
                >
                  <p className="font-serif text-xl text-foreground/80 italic">
                    "Cháu có muốn làm người gác đèn như ông không?"
                  </p>
                  <p className="font-serif text-xl text-foreground/80 italic mt-2">
                    "Dạ muốn! Nhưng cháu sợ... không ai giỏi bằng ông."
                  </p>
                </motion.blockquote>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Legacy section */}
        <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent py-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-mono text-primary text-sm tracking-widest mb-16 text-center"
            >
              DI SẢN
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "16,425", label: "đêm gác đèn" },
                { number: "23", label: "người được cứu sống" },
                { number: "∞", label: "tàu thuyền về bờ an toàn" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <p className="font-serif text-4xl md:text-5xl text-primary">{stat.number}</p>
                  <p className="font-sans text-foreground/60 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final words */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed">
              Khi được hỏi về điều gì khiến ông ở lại suốt {yearsOnIsland} năm, ông Thành chỉ mỉm cười và chỉ ra biển:
            </p>

            <blockquote className="text-center py-12">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-relaxed">
                "Mỗi đêm, khi tôi thắp đèn, tôi biết có ai đó ngoài kia đang nhìn về phía này và nói: 'Đèn sáng rồi, sắp
                về đến nhà rồi.' Cảm giác đó... không gì có thể thay thế được."
              </p>
            </blockquote>
          </motion.div>
        </div>

        {/* The End */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center"
          >
            {/* Light symbol */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-24 h-24 mx-auto mb-12 relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute inset-4 bg-primary/40 rounded-full blur-md" />
              <div className="absolute inset-8 bg-primary rounded-full" />
            </motion.div>

            <p className="font-serif text-4xl md:text-5xl text-foreground mb-8">The End</p>

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8" />

            <p className="font-sans text-muted-foreground text-sm">
              Câu chuyện này được lấy cảm hứng từ những người gác đèn biển thực sự
              <br />
              trên khắp Việt Nam và thế giới.
            </p>
          </motion.div>

          {/* Scroll to top hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <svg
                className="w-6 h-6 text-foreground/30 group-hover:text-primary transition-colors rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="font-mono text-[10px] text-foreground/30 group-hover:text-primary tracking-[0.3em] uppercase transition-colors">
                Scroll to beginning
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Credits */}
        <div className="py-32 border-t border-border">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="font-mono text-xs text-foreground/20 tracking-widest mb-8">A STORYTELLING EXPERIENCE</p>

            <p className="font-serif text-lg text-foreground/40 mb-4">The Last Lighthouse Keeper</p>

            <p className="font-sans text-sm text-foreground/20">
              Built with passion, scroll, and light.
              <br />
              Created by Nguyễn Ngọc Tuấn Anh
              <br />
              {currentYear}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
