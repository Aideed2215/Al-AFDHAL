"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] as const },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] as const },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center lg:items-end text-center lg:text-right"
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        اختيارك الأول للعناية بالبشرة والتجميل
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-6 font-heading leading-[0.95]"
      >
        <span className="text-[clamp(2.5rem,10vw,6.5rem)] font-light block tracking-tight text-text-primary">
          بشرتك
        </span>
        <span className="text-[clamp(3rem,11vw,7rem)] font-bold block text-primary">
          تستحق
        </span>
        <span className="text-[clamp(2.5rem,10vw,6.5rem)] font-light block tracking-tight text-text-primary mt-1">
          الأفضل
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[560px]"
      >
        عيادات أفضل كلينك تجمع بين أحدث تقنيات الجلدية والتجميل وأمهر الأطباء
        لتقديم تجربة علاجية استثنائية بمعايير عالمية.
      </motion.p>

      <motion.div
        variants={slideUp}
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a
          href="https://wa.me/966581151740?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:scale-[0.97]"
        >
          احجز موعدك
          <ArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </a>
        <a
          href="tel:+966581151740"
          className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border border-border bg-white px-8 text-base font-bold text-text-primary shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.97]"
        >
          <MessageCircle
            size={20}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          />
          اتصل بنا
        </a>
      </motion.div>


    </motion.div>
  );
}
