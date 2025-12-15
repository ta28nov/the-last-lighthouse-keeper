"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter01Prologue({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.9])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[400vh] bg-background">
      {/* Opening - Full screen image with text overlay */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img src="/cinematic-lighthouse-silhouette-on-rocky-cliff-at-.jpg" alt="Lighthouse at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </motion.div>

        <motion.div
          style={{ opacity, y: y1 }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] text-primary/70 tracking-[0.5em] uppercase mb-8 font-medium"
          >
            Chapter One
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground text-center leading-[0.95] tracking-tight"
          >
            Prologue
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-8"
          />
        </motion.div>
      </div>

      {/* Scrolling text sections */}
      <div className="relative z-10 -mt-[50vh]">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/95 leading-[1.5] tracking-tight mb-16"
          >
            Có những nơi trên thế giới này, thời gian dường như ngừng trôi. Nơi mà sóng biển vẫn vỗ vào bờ đá như hàng
            nghìn năm trước, và ánh đèn vẫn quét qua màn đêm đen như thể chưa có gì thay đổi.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed mb-32"
          >
            Đảo Hải Đăng nằm cách đất liền 47 hải lý về phía Đông. Một hòn đảo nhỏ bé, cô độc giữa biển khơi mênh mông,
            với ngọn hải đăng cao 32 mét đứng sừng sững như một người lính gác bất tử.
          </motion.p>
        </div>

        {/* Parallax image section */}
        <div className="relative h-[80vh] overflow-hidden my-16">
          <motion.div style={{ y: y2 }} className="absolute inset-0 -top-32">
            <img src="/powerful-dark-ocean-waves-crashing-against-rocks--.jpg" alt="Ocean waves" className="w-full h-[120%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          </motion.div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mx-auto px-6 text-center"
            >
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground italic leading-[1.4] tracking-tight">
                "Biển cả không bao giờ ngủ, và ngọn đèn của tôi cũng vậy."
              </p>
              <footer className="mt-8 font-mono text-sm text-primary/70 tracking-wider">
                — Nguyễn Văn Thành, Người gác đèn cuối cùng
              </footer>
            </motion.blockquote>
          </div>
        </div>

        {/* Continuing story */}
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed mb-12"
          >
            Năm 1978, một chàng trai 23 tuổi đã bước chân lên hòn đảo này với một chiếc ba lô và một quyển sổ tay. Anh
            ta không biết rằng 45 năm sau, mình vẫn sẽ ở đây, một mình, với ngọn đèn và biển cả.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed mb-12"
          >
            Đây là câu chuyện của ông — người gác đèn cuối cùng của Việt Nam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4 mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src="/misty-ocean-horizon-at-dawn--ethereal-golden-light.jpg"
                alt="Ocean horizon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-xl mt-16">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src="/dark-stormy-sea-with-dramatic-waves--moody-weather.jpg"
                alt="Stormy sea"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
