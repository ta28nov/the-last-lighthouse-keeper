"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter08TheRescue({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const shipX = useTransform(scrollYProgress, [0.2, 0.5], [100, 0])
  const shipOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[550vh] bg-background">
      {/* Chapter intro */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/night-sea-lighthouse.jpg" alt="Night sea" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Animated ship silhouette */}
        <motion.div style={{ x: shipX, opacity: shipOpacity }} className="absolute bottom-[30%] right-[20%]">
          <div className="w-32 h-16 bg-foreground/10 rounded-sm transform -skew-x-12" />
        </motion.div>

        {/* Light beam sweeping */}
        <motion.div
          animate={{ rotate: [30, -30, 30] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-[20%] left-1/2 origin-top w-1 h-[40vh] bg-gradient-to-b from-primary/60 to-transparent"
          style={{ filter: "blur(4px)" }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase mb-6"
          >
            Chapter Eight
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center"
          >
            The Rescue
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-muted-foreground mt-8 text-lg"
          >
            Đêm 23 tháng 12 năm 1995
          </motion.p>
        </div>
      </div>

      {/* Rescue narrative */}
      <div className="relative z-10 -mt-[30vh]">
        {/* The distress signal */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-16"
          >
            Đêm Giáng sinh năm 1995, Thành đang ngồi trong phòng đèn thì nghe tiếng còi tàu vọng lại từ xa — ba tiếng
            ngắn, ba tiếng dài, ba tiếng ngắn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 text-center"
          >
            <p className="font-mono text-4xl md:text-6xl text-destructive tracking-[0.5em]">• • • — — — • • •</p>
            <p className="font-sans text-foreground/60 mt-6">SOS — Tín hiệu cầu cứu quốc tế</p>
          </motion.div>
        </div>

        {/* Taking action */}
        <div className="relative min-h-screen py-32">
          <div className="absolute inset-0">
            <img
              src="/ocean-at-night-dark.jpg"
              alt="Ocean at night"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                  Không cần suy nghĩ, Thành chạy xuống bờ đá. Trong ánh đèn hải đăng quét qua, anh nhìn thấy một chiếc
                  tàu đánh cá đang chìm dần cách bờ khoảng 500 mét.
                </p>

                <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                  Nước lạnh như cắt da cắt thịt. Sóng cao hơn đầu người. Nhưng Thành vẫn bơi ra, chiếc phao cứu sinh
                  buộc sau lưng.
                </p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-serif text-2xl text-foreground/90"
                >
                  "Cầm lấy phao! Cầm lấy!"
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src="/rescue-at-sea.jpg"
                  alt="Rescue at sea"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* The saved */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-6xl md:text-8xl text-primary">7</p>
            <p className="font-sans text-xl text-foreground/60 mt-4">ngư dân được cứu sống</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed mb-12"
          >
            Bảy ngư dân, trong đó có một cậu bé 12 tuổi. Thành kéo từng người một vào bờ. Mất gần 3 tiếng đồng hồ trong
            nước lạnh. Khi người cuối cùng được đưa lên đảo, Thành kiệt sức, nằm vật ra trên bãi đá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src="/dawn-after-storm.jpg" alt="Dawn" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src="/campfire-warm-light.jpg" alt="Fire" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img src="/hope-symbol-light.jpg" alt="Hope" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* The boy's promise */}
        <div className="min-h-screen flex items-center py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-12"
            >
              <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed">
                Cậu bé 12 tuổi ấy tên là Minh. Trước khi được đưa về đất liền, cậu nắm tay Thành và nói:
              </p>

              <blockquote className="border-l-4 border-primary pl-8">
                <p className="font-serif text-3xl md:text-4xl text-foreground italic leading-relaxed">
                  "Cháu sẽ không bao giờ quên chú. Khi lớn lên, cháu cũng sẽ làm người cứu người."
                </p>
              </blockquote>

              <p className="font-sans text-lg text-foreground/60 leading-relaxed">
                25 năm sau, Minh trở thành thuyền trưởng tàu cứu hộ của Cảnh sát biển Việt Nam. Và mỗi năm, vào đêm 23
                tháng 12, anh đều ra đảo thăm người gác đèn đã cứu mạng mình.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Medal */}
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
              <svg className="w-16 h-16 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>

            <p className="font-serif text-xl text-foreground/80 mb-4">Huân chương Dũng cảm</p>
            <p className="font-mono text-sm text-primary/60 tracking-widest">TRAO TẶNG NĂM 1996</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-muted-foreground mt-12 max-w-xl mx-auto"
          >
            Thành từ chối nhận huân chương. Ông nói: "Tôi chỉ làm những gì bất kỳ ai ở vị trí tôi cũng sẽ làm."
          </motion.p>
        </div>
      </div>
    </section>
  )
}
