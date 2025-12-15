"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"

interface ChapterProps {
  onInView: () => void
}

export function Chapter07TheMemories({ onInView }: ChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0.3])
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0.3])
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0.3])

  useEffect(() => {
    if (isInView) onInView()
  }, [isInView, onInView])

  return (
    <section ref={containerRef} className="relative min-h-[500vh] bg-background">
      {/* Chapter intro - nostalgic tone */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vintage-background.jpg"
            alt="Old photographs"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        </div>

        {/* Floating memory fragments */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute top-[10%] left-[10%] w-48 h-64 overflow-hidden rounded-lg rotate-[-5deg] shadow-2xl"
        >
          <img
            src="/memory-sepia-1.jpg"
            alt="Memory 1"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute top-[20%] right-[15%] w-56 h-40 overflow-hidden rounded-lg rotate-[3deg] shadow-2xl"
        >
          <img
            src="/memory-sepia-2.jpg"
            alt="Memory 2"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute bottom-[25%] left-[20%] w-40 h-52 overflow-hidden rounded-lg rotate-[8deg] shadow-2xl"
        >
          <img
            src="/memory-sepia-3.jpg"
            alt="Memory 3"
            className="w-full h-full object-cover sepia"
          />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] text-primary/80 tracking-[0.5em] uppercase mb-6"
          >
            Chapter Seven
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground text-center"
          >
            The Memories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-muted-foreground mt-8 text-lg"
          >
            Những điều không thể quên
          </motion.p>
        </div>
      </div>

      {/* Memory content */}
      <div className="relative z-10 -mt-[30vh]">
        {/* Mother's memory */}
        <div className="max-w-5xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/elderly-vietnamese-woman.jpg"
                  alt="Mother portrait"
                  className="w-full h-full object-cover sepia-[0.3]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="font-mono text-xs text-primary">1980</p>
                <p className="font-serif text-lg text-foreground mt-1">Lần cuối gặp mẹ</p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed"
              >
                Mẹ mất vào mùa đông năm 1980. Thành không kịp về. Biển động, không có tàu nào ra đảo được.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-sans text-lg text-foreground/60 leading-relaxed"
              >
                Anh đứng trên đỉnh hải đăng, nhìn về phía đất liền, và khóc. Nước mắt rơi xuống biển, hòa vào muôn ngàn
                giọt nước mắt của những người con xa quê.
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="border-l-2 border-primary/30 pl-6"
              >
                <p className="font-serif text-xl text-foreground/70 italic">
                  "Con xin lỗi mẹ. Con không về kịp. Nhưng con sẽ thắp đèn sáng mãi, như mẹ đã dặn."
                </p>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>

        {/* Diary entries */}
        <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent py-32">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-mono text-primary text-sm tracking-widest mb-16 text-center"
            >
              NHỮNG TRANG NHẬT KÝ
            </motion.h3>

            <div className="space-y-16">
              {[
                {
                  date: "15/08/1985",
                  content:
                    "Hôm nay tròn 7 năm tôi ở đảo. Không còn nhớ mặt mẹ rõ ràng nữa. Chỉ còn nhớ mùi hương trầm mẹ hay đốt mỗi tối.",
                },
                {
                  date: "02/02/1990",
                  content:
                    "Tết Nguyên Đán. Một mình trên đảo. Gói bánh chưng bằng lá dong mang từ đất liền ra. Không ngon như bánh mẹ gói, nhưng ấm lòng.",
                },
                {
                  date: "18/03/1998",
                  content:
                    "20 năm. Tôi đã 43 tuổi. Tóc đã bạc. Nhưng ngọn đèn vẫn sáng như ngày đầu. Đó là tất cả những gì tôi cần.",
                },
              ].map((entry, i) => (
                <motion.div
                  key={entry.date}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="bg-card backdrop-blur-sm rounded-2xl p-8 md:p-12"
                >
                  <span className="font-mono text-sm text-primary">{entry.date}</span>
                  <p className="font-serif text-xl md:text-2xl text-foreground/90 mt-4 leading-relaxed">
                    {entry.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo gallery of memories */}
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "/gallery-mountain.jpg",
                alt: "Mountain landscape",
                span: "col-span-2 row-span-2",
              },
              {
                src: "/gallery-sunrise.jpg",
                alt: "Ocean at dawn",
                span: "",
              },
              {
                src: "/gallery-forest.jpg",
                alt: "Misty forest",
                span: "",
              },
              {
                src: "/gallery-sunset.jpg",
                alt: "Sunset panorama",
                span: "col-span-2",
              },
              {
                src: "/gallery-tree.jpg",
                alt: "Ancient tree",
                span: "",
              },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`overflow-hidden rounded-xl ${img.span} aspect-square`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing reflection */}
        <div className="min-h-[60vh] flex items-center justify-center px-6 py-32">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-relaxed text-center max-w-4xl"
          >
            Ký ức là ngọn đèn không bao giờ tắt trong tâm hồn. Dù thời gian có xóa nhòa mọi thứ, những người ta yêu
            thương sẽ mãi sống trong trái tim ta.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
