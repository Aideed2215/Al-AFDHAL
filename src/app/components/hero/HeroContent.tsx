"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/site";
import { fadeUpBlur as fadeUp, slideUp, springHover, springTap } from "@/components/motion/presets";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
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
        <span className="text-[clamp(2.5rem,10vw,6.5rem)] font-light block tracking-tight text-white">
          بشرتك
        </span>
        <span className="text-[clamp(3rem,11vw,7rem)] font-bold block text-white">
          تستحق
        </span>
        <span className="text-[clamp(2.5rem,10vw,6.5rem)] font-light block tracking-tight text-white mt-1">
          الأفضل
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-[560px] text-center"
      >
        عيادات أفضل كلينك تجمع بين أحدث تقنيات الجلدية والتجميل وأمهر الأطباء
        لتقديم تجربة علاجية استثنائية بمعايير عالمية.
      </motion.p>

      <motion.div
        variants={slideUp}
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <motion.a
          href={`${site.whatsappUrl}?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={springHover}
          whileTap={springTap}
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
        <a
          href="#services"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
        >
          تصفح الخدمات
        </a>
      </motion.div>
    </motion.div>
  );
}
