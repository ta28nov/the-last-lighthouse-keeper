"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter05TheLighthouse({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })
  const [lightRotation, setLightRotation] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [200, -200])
  const lightOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setLightRotation((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[600vh] bg-background">
      {/* Chapter intro with lighthouse silhouette */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lighthouse-silhouette.jpg"
            alt="Lighthouse silhouette"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Animated light beam */}
        <motion.div
          style={{ opacity: lightOpacity }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full h-[60vh] pointer-events-none"
        >
          <div
            className="absolute top-0 left-1/2 origin-top"
            style={{
              transform: `translateX(-50%) rotate(${lightRotation}deg)`,
              width: "4px",
              height: "60vh",
              background: "linear-gradient(to bottom, oklch(0.82 0.14 75 / 0.8), transparent)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase mb-6"
          >
            Chapter Five
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center"
          >
            The Lighthouse
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 150 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-muted-foreground mt-6 text-lg"
          >
            Ngọn đèn không bao giờ tắt
          </motion.p>
        </div>
      </div>

      {/* Lighthouse details */}
      <div className="relative z-10 -mt-[30vh]">
        {/* Stats section */}
        <div className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "32", unit: "mét", label: "Chiều cao" },
                { number: "156", unit: "bậc", label: "Cầu thang xoắn" },
                { number: "1925", unit: "", label: "Năm xây dựng" },
                { number: "24", unit: "hải lý", label: "Tầm chiếu sáng" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-card backdrop-blur-sm rounded-2xl p-8"
                >
                  <p className="font-serif text-5xl md:text-6xl text-primary">
                    {stat.number}
                    <span className="text-2xl text-foreground/60 ml-1">{stat.unit}</span>
                  </p>
                  <p className="font-mono text-xs text-muted-foreground tracking-widest mt-4 uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* First encounter narrative */}
        <div className="max-w-4xl mx-auto px-6 py-32 space-y-16">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed"
          >
            Lần đầu tiên bước vào hải đăng, Thành ngửa cổ nhìn lên. Cầu thang xoắn ốc chạy lên cao như không có điểm
            dừng. 156 bậc thang — anh đếm từng bậc một trong lần leo đầu tiên.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[2/3] max-w-md mx-auto overflow-hidden rounded-2xl"
          >
            <img
              src="/spiral-staircase-interior.jpg"
              alt="Spiral staircase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-lg md:text-xl text-foreground/60 leading-relaxed"
          >
            Ở đỉnh tháp, ánh sáng buổi chiều xuyên qua lăng kính khổng lồ, tạo nên những dải cầu vồng nhảy múa trên
            tường. Thành đứng đó, ngây người, quên cả mệt mỏi. Anh biết, từ giây phút này, cuộc đời anh sẽ gắn liền với
            ngọn đèn này.
          </motion.p>
        </div>

        {/* The lantern room */}
        <div className="relative min-h-screen py-32">
          <motion.div style={{ y }} className="absolute inset-0 -z-10">
            <img
              src="/fresnel-lens-light.jpg"
              alt="Lighthouse lens"
              className="w-full h-full object-cover opacity-30"
            />
          </motion.div>

          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-8">
                <h3 className="font-mono text-primary text-sm tracking-widest">PHÒNG ĐÈN</h3>
                <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed">
                  Trái tim của ngọn hải đăng nằm ở phòng đèn — nơi đặt ngọn đèn Fresnel bậc 3 được chế tạo tại Pháp năm
                  1923.
                </p>
                <p className="font-sans text-lg text-foreground/60 leading-relaxed">
                  Hàng nghìn mảnh thủy tinh cắt tinh xảo, xếp thành vòng tròn đồng tâm, khuếch đại ánh sáng từ một ngọn
                  đèn nhỏ thành chùm sáng có thể nhìn thấy cách xa 24 hải lý.
                </p>
              </div>

              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/fresnel-lens-closeup.jpg"
                  alt="Fresnel lens"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Daily routine */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-mono text-primary text-sm tracking-widest mb-16 text-center"
          >
            MỘT NGÀY CỦA NGƯỜI GÁC ĐÈN
          </motion.h3>

          <div className="space-y-16">
            {[
              { time: "05:00", task: "Thức dậy cùng bình minh", desc: "Tắt đèn hải đăng, kiểm tra hệ thống" },
              {
                time: "06:00",
                task: "Lau chùi lăng kính",
                desc: "Công việc quan trọng nhất — lăng kính phải luôn trong suốt",
              },
              { time: "12:00", task: "Ghi nhật ký thời tiết", desc: "Nhiệt độ, độ ẩm, hướng gió, tầm nhìn xa" },
              { time: "17:30", task: "Chuẩn bị thắp đèn", desc: "Kiểm tra dầu, tim đèn, hệ thống xoay" },
              { time: "18:00", task: "Thắp sáng ngọn đèn", desc: "Khoảnh khắc thiêng liêng nhất trong ngày" },
              { time: "22:00", task: "Tuần tra đêm", desc: "Đi quanh đảo, quan sát tàu thuyền" },
            ].map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex gap-8 items-start"
              >
                <span className="font-mono text-2xl text-primary w-24 shrink-0">{item.time}</span>
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-2">{item.task}</h4>
                  <p className="font-sans text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="min-h-[60vh] flex items-center justify-center px-6 py-32">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl text-center"
          >
            <p className="font-serif text-3xl md:text-4xl text-foreground italic leading-relaxed">
              "Ngọn đèn này không chỉ soi sáng biển cả. Nó soi sáng cả tâm hồn tôi."
            </p>
            <footer className="mt-8 font-mono text-sm text-primary/60 tracking-wider">
              — Trích nhật ký, ngày 20 tháng 3 năm 1978
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
