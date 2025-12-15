"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter09TheChoice({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[500vh] bg-background">
      {/* Chapter intro */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/crossroads-symbolic.jpg"
            alt="Crossroads"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        </div>

        {/* Two paths visualization */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 50 100 Q 30 50 20 0"
            fill="none"
            stroke="oklch(0.82 0.14 75 / 0.3)"
            strokeWidth="0.5"
            style={{ pathLength }}
          />
          <motion.path
            d="M 50 100 Q 70 50 80 0"
            fill="none"
            stroke="oklch(0.82 0.14 75 / 0.3)"
            strokeWidth="0.5"
            style={{ pathLength }}
          />
        </svg>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase mb-6"
          >
            Chapter Nine
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center"
          >
            The Choice
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-muted-foreground mt-8 text-lg"
          >
            Năm 2010 — Quyết định cuối cùng
          </motion.p>
        </div>
      </div>

      {/* The choice narrative */}
      <div className="relative z-10 -mt-[30vh]">
        {/* The letter */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-card backdrop-blur-sm rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground">CÔNG VĂN SỐ 2010/BGTVT</p>
                <p className="font-sans text-foreground/70">Bộ Giao thông Vận tải</p>
              </div>
            </div>

            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              "Kính gửi đồng chí Nguyễn Văn Thành, Theo quyết định hiện đại hóa hệ thống hải đăng quốc gia, Hải đăng Đảo
              Xa sẽ được chuyển sang vận hành tự động từ ngày 01/01/2011. Đồng chí được nghỉ hưu với chế độ đặc biệt, và
              sẽ được bố trí nhà ở tại thành phố Hải Phòng..."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mt-16"
          >
            32 năm. Đó là khoảng thời gian Thành sống trên đảo. Giờ đây, ở tuổi 55, ông được mời rời đi.
          </motion.p>
        </div>

        {/* Internal struggle */}
        <div className="min-h-screen py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1: Leave */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl p-8 md:p-12"
              >
                <h3 className="font-mono text-accent text-sm tracking-widest mb-6">LỰA CHỌN 1</h3>
                <p className="font-serif text-2xl text-foreground mb-6">Rời đảo</p>
                <ul className="space-y-4 font-sans text-foreground/60">
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Được ở gần con cháu
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Có chế độ nghỉ hưu tốt
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Cuộc sống tiện nghi, hiện đại
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent">•</span>
                    Bệnh viện, thuốc men đầy đủ
                  </li>
                </ul>
              </motion.div>

              {/* Option 2: Stay */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12"
              >
                <h3 className="font-mono text-primary text-sm tracking-widest mb-6">LỰA CHỌN 2</h3>
                <p className="font-serif text-2xl text-foreground mb-6">Ở lại</p>
                <ul className="space-y-4 font-sans text-foreground/60">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    Được ở nơi mình thuộc về
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    Tiếp tục công việc yêu thích
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    Giữ gìn ngọn đèn của cha
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    Cô đơn, xa cách, khó khăn
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* The decision */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-lg md:text-xl text-foreground/60 leading-relaxed mb-16"
          >
            Thành mất ba tháng để suy nghĩ. Ông viết thư cho con trai ở Sài Gòn, hỏi ý kiến. Con trai ông trả lời: "Bố
            ơi, nơi nào bố hạnh phúc, đó là nhà của bố."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-video overflow-hidden rounded-2xl mb-16"
          >
            <img
              src="/middle-aged-man-sea.jpg"
              alt="Man looking at sea"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed"
          >
            Ngày cuối cùng của năm 2010, Thành gửi lại công văn cho Bộ. Trong đó chỉ có một dòng:
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="my-16 text-center"
          >
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              "Tôi xin được ở lại. Ngọn đèn cần một người gác."
            </p>
          </motion.blockquote>
        </div>

        {/* Reflection */}
        <div className="min-h-[60vh] flex items-center justify-center px-6 py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="font-sans text-lg md:text-xl text-foreground/60 leading-relaxed text-center max-w-3xl"
          >
            Bộ đồng ý. Hải đăng Đảo Xa trở thành ngọn hải đăng duy nhất ở Việt Nam vẫn còn người gác đèn. Không phải vì
            công nghệ không thể thay thế, mà vì có một người đàn ông không muốn rời đi.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
