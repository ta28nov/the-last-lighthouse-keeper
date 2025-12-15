"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter02TheCall({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageX = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const textX = useTransform(scrollYProgress, [0, 1], [100, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[450vh] bg-background">
      {/* Chapter title - horizontal reveal */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vintage-wooden-desk-with-old-handwritten-letter--o.jpg"
            alt="Old desk with letters"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase"
          >
            Chapter Two
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground mt-4"
          >
            The Call
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-muted-foreground mt-8 text-lg tracking-wide"
          >
            Mùa xuân năm 1978
          </motion.p>
        </div>
      </div>

      {/* Story content with parallax images */}
      <div className="relative z-10 -mt-[30vh]">
        {/* Letter scene */}
        <div className="min-h-screen flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div style={{ x: imageX, rotate }} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                <img src="/vintage-handwritten-letter-in-vietnamese-script--a.jpg" alt="Old letter" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <span className="font-serif text-4xl text-primary">1978</span>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: textX }} className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed"
              >
                Lá thư đến vào một buổi sáng mùa xuân, khi cây đào trước nhà vừa bung những cánh hoa đầu tiên.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-sans text-lg text-foreground/60 leading-relaxed"
              >
                "Kính gửi đồng chí Nguyễn Văn Thành, Bộ Giao thông Vận tải trân trọng thông báo: đồng chí đã được chọn
                làm người gác đèn cho Hải đăng Đảo Xa..."
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans text-lg text-foreground/60 leading-relaxed"
              >
                Thành đọc đi đọc lại lá thư, tay run run. Anh 23 tuổi, vừa tốt nghiệp trường Hàng hải, với giấc mơ được
                đi khắp thế giới trên những con tàu lớn. Nhưng số phận lại dẫn anh đến một hòn đảo nhỏ bé giữa biển
                khơi.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Mother's scene */}
        <div className="min-h-screen py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-video overflow-hidden rounded-lg mb-16"
            >
              <img src="/vietnamese-elderly-mother-and-young-adult-son-havi.jpg" alt="Mother and son" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-12"
            >
              "Mẹ à, con sẽ đi."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-sans text-lg text-foreground/60 leading-relaxed mb-8"
            >
              Mẹ anh không khóc. Bà chỉ lặng lẽ gói ghém đồ đạc vào chiếc ba lô cũ — vài bộ quần áo, một quyển sổ tay,
              và chiếc đèn dầu nhỏ mà cha anh để lại trước khi mất.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="border-l-2 border-primary/50 pl-8 my-16"
            >
              <p className="font-serif text-xl md:text-2xl text-foreground/80 italic">
                "Đèn này cha con thắp suốt 20 năm trên tàu. Giờ con mang theo, để nhớ rằng dù ở đâu, con cũng đang soi
                đường cho ai đó về nhà."
              </p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-sans text-lg text-foreground/60 leading-relaxed"
            >
              Đêm trước ngày đi, Thành ngồi ngoài hiên nhìn trăng. Anh không biết rằng đó sẽ là đêm cuối cùng anh nhìn
              thấy mẹ. Bà mất hai năm sau, khi anh đang ở ngoài đảo, không kịp về.
            </motion.p>
          </div>
        </div>

        {/* Departure scene */}
        <div className="min-h-screen py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[3/4] overflow-hidden rounded-lg"
              >
                <img
                  src="/vintage-1970s-vietnamese-train-station--steam-loco.jpg"
                  alt="Train station"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="aspect-[3/4] overflow-hidden rounded-lg md:mt-24"
              >
                <img
                  src="/worn-canvas-backpack-with-old-brass-oil-lamp-besid.jpg"
                  alt="Old suitcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="aspect-[3/4] overflow-hidden rounded-lg md:mt-48"
              >
                <img
                  src="/1970s-hai-phong-harbor-vietnam--fishing-boats--mis.jpg"
                  alt="Harbor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mt-24 text-center max-w-3xl mx-auto"
            >
              Ngày 15 tháng 3 năm 1978, Nguyễn Văn Thành bước lên chiếc tàu nhỏ tại cảng Hải Phòng, bắt đầu hành trình
              đến với định mệnh của mình.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
