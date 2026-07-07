"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
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
      className="flex flex-col items-center text-center"
    >
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
        className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-[560px] text-center"
      >
        عيادات أفضل كلينك تجمع بين أحدث تقنيات الجلدية والتجميل وأمهر الأطباء
        لتقديم تجربة علاجية استثنائية بمعايير عالمية.
      </motion.p>

      <motion.div
        variants={slideUp}
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <motion.a
          href="https://wa.me/966581151740?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-colors duration-300 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25"
        >
          احجز موعدك
          <motion.span
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowLeft size={20} />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
