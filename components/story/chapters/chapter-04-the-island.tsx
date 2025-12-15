"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter04TheIsland({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.3], [1.3, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[500vh] bg-background">
      {/* Immersive island reveal */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src="/island-overview-from-sea.jpg"
            alt="Rocky island"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <span className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase mb-6">Chapter Four</span>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center">The Island</h2>
          <p className="font-sans text-muted-foreground mt-6 text-lg">Nơi tận cùng của thế giới</p>
        </motion.div>
      </div>

      {/* Content sections */}
      <div className="relative z-10 -mt-[50vh] pb-32">
        {/* First impression */}
        <div className="max-w-5xl mx-auto px-6 py-48">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground/90 leading-relaxed"
          >
            Đảo Hải Đăng không có tên trên bản đồ. Người dân gọi nó là "Đảo Xa" — hòn đảo xa nhất mà họ biết đến.
          </motion.p>
        </div>

        {/* Island details - Bento grid layout */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-8 aspect-[16/9] overflow-hidden rounded-2xl"
            >
              <img
                src="/coastal-cliffs-waves.jpg"
                alt="Coastal cliffs"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-12 md:col-span-4 bg-card backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center"
            >
              <h3 className="font-mono text-primary text-xs tracking-widest mb-4">DIỆN TÍCH</h3>
              <p className="font-serif text-5xl text-foreground mb-2">2.4</p>
              <p className="font-sans text-muted-foreground">km²</p>
              <div className="w-full h-px bg-border my-6" />
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                Đủ nhỏ để đi bộ quanh trong một buổi chiều, đủ lớn để cảm thấy cô đơn.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-6 md:col-span-4 bg-primary/10 rounded-2xl p-8"
            >
              <h3 className="font-mono text-primary text-xs tracking-widest mb-4">DÂN SỐ</h3>
              <p className="font-serif text-6xl text-foreground">1</p>
              <p className="font-sans text-muted-foreground mt-2">người</p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-6 md:col-span-4 aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src="/rocky-shore-closeup.jpg"
                alt="Rocky shore"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-12 md:col-span-4 bg-card rounded-2xl p-8 flex items-center"
            >
              <blockquote className="font-serif text-xl text-foreground/80 italic leading-relaxed">
                "Lần đầu đặt chân lên đảo, tôi tưởng mình đã đến tận cùng thế giới."
              </blockquote>
            </motion.div>
          </div>
        </div>

        {/* Walking the island */}
        <div className="max-w-4xl mx-auto px-6 py-48 space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-sans text-lg md:text-xl text-foreground/60 leading-relaxed mb-8">
              Ngày đầu tiên trên đảo, Thành đi bộ quanh đảo. Đá, đá, và đá. Vài bụi cây còi cọc bám vào những kẽ đá. Một
              con suối nhỏ chảy ra biển. Và ngọn hải đăng đứng ở điểm cao nhất, như một vị thần đang canh giữ biển khơi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-3 gap-3"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="/island-rocky-terrain.jpg"
                alt="Rocky terrain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-12">
              <img
                src="/ocean-view-from-island.jpg"
                alt="Ocean view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-24">
              <img
                src="/cliffs-at-sunset.jpg"
                alt="Sunset cliffs"
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
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed">
              Không có điện. Không có nước máy. Không có gì ngoài tiếng sóng và tiếng gió. Nhưng lạ thay, Thành không
              cảm thấy sợ. Anh cảm thấy như đã tìm được nơi mình thuộc về.
            </p>
          </motion.div>
        </div>

        {/* Night scene */}
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/starry-night-sky.jpg"
              alt="Starry night"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/80" />
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-center px-6 max-w-3xl"
            >
              <p className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
                Đêm đầu tiên, Thành nằm trong căn nhà nhỏ cạnh hải đăng, nghe tiếng sóng vỗ như tiếng mẹ ru, và ngủ giấc
                ngủ sâu nhất trong đời.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
