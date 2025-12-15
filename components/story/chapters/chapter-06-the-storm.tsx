"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter06TheStorm({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const [isStormActive, setIsStormActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0])

  useEffect(() => {
    if (isInView) {
      onInView()
      setIsStormActive(true)
    }
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[550vh] bg-background overflow-hidden">
      {/* Storm intro - dramatic */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          animate={isStormActive ? { scale: [1, 1.05, 1], x: [-5, 5, -5] } : {}}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0"
        >
          <img
            src="/stormy-ocean-dark.jpg"
            alt="Stormy ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/50" />
        </motion.div>

        {/* Lightning effect */}
        <motion.div
          animate={{ opacity: [0, 1, 0, 0, 1, 0, 0, 0, 0, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 bg-foreground/30 pointer-events-none"
        />

        {/* Rain effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-foreground/40 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                height: `${20 + Math.random() * 30}px`,
              }}
              animate={{ y: ["0vh", "120vh"] }}
              transition={{
                duration: 0.5 + Math.random() * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-destructive/80 tracking-[0.5em] uppercase mb-6"
          >
            Chapter Six
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center"
          >
            The Storm
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-foreground/60 mt-8 text-lg"
          >
            Mùa bão năm 1982
          </motion.p>
        </div>
      </div>

      {/* Storm narrative */}
      <div className="relative z-10 -mt-[30vh]">
        {/* Warning signs */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-16"
          >
            Bốn năm trên đảo, Thành đã quen với những cơn bão. Nhưng cơn bão năm 1982 khác hẳn. Ngay từ sáng sớm, bầu
            trời đã chuyển sang màu xám đen đáng sợ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
              <span className="font-mono text-destructive text-sm tracking-widest">CẢNH BÁO BÃO CẤP 12</span>
            </div>
            <p className="font-sans text-foreground/70 leading-relaxed">
              Đài khí tượng đã cảnh báo từ ngày hôm trước. Nhưng tàu tiếp tế không đến kịp. Thành một mình trên đảo với
              cơn bão đang tiến đến.
            </p>
          </motion.div>
        </div>

        {/* The storm hits */}
        <div className="relative min-h-screen">
          <div className="absolute inset-0">
            <img
              src="/giant-waves-10m.jpg"
              alt="Giant waves"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-mono text-primary text-sm tracking-widest mb-6">18:00 - BÃO ĐỔ BỘ</h3>
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                Sóng cao hơn 10 mét đập vào vách đá. Cả hòn đảo rung chuyển. Gió rít như tiếng gào thét của nghìn linh
                hồn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="/storm-waves-closeup.jpg"
                  alt="Storm waves"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="/dark-storm-clouds.jpg"
                  alt="Dark clouds"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-mono text-primary text-sm tracking-widest mb-6">21:00 - ĐÈN GẦN TẮT</h3>
              <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                Gió xé toạc cửa sổ phòng đèn. Mưa tạt vào, dập tắt ngọn lửa. Thành biết nếu đèn tắt đêm nay, những con
                tàu ngoài kia sẽ không thể tìm đường tránh đảo.
              </p>
            </motion.div>
          </div>
        </div>

        {/* The struggle */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent" />

            <div className="pl-8 space-y-12">
              <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                Thành lấy tấm bạt che cửa sổ, dùng cả cơ thể để chắn gió. Tay anh tê cóng vì lạnh, nhưng anh không dừng
                lại.
              </p>

              <p className="font-serif text-2xl text-foreground/90 leading-relaxed">
                "Phải giữ cho đèn sáng. Phải giữ cho đèn sáng."
              </p>

              <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                Anh lặp đi lặp lại như một câu thần chú. Ba lần đèn tắt, ba lần anh thắp lại. Mỗi lần đốt diêm, gió lại
                thổi tắt. Đến lần thứ tư, anh dùng chính chiếc áo của mình để che chắn.
              </p>
            </div>
          </motion.div>
        </div>

        {/* The light prevails */}
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img
              src="/lighthouse-light-in-storm.jpg"
              alt="Light in storm"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed">
              Và ngọn đèn sáng suốt đêm dài.
            </p>
            <p className="font-sans text-lg text-muted-foreground mt-8">
              12 tiếng đồng hồ, một mình chống chọi với bão. Khi mặt trời lên, Thành ngất đi ngay cạnh ngọn đèn vẫn đang
              cháy.
            </p>
          </motion.div>
        </div>

        {/* Aftermath */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-lg md:text-xl text-foreground/60 leading-relaxed"
          >
            Hai ngày sau, tàu tiếp tế đến. Họ tìm thấy Thành đang ngồi lau chùi lăng kính như thường ngày, như thể cơn
            bão chưa từng xảy ra. Chỉ có đôi tay bầm tím và giọng nói khàn đi là dấu vết còn lại của đêm hôm đó.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border-l-2 border-primary/50 pl-8 my-16"
          >
            <p className="font-serif text-xl md:text-2xl text-foreground/80 italic">
              "Đèn không tắt, nghĩa là tôi vẫn làm tốt việc của mình."
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
