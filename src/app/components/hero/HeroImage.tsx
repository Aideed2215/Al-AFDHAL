"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { floatingStats } from "./hero-data";
import FloatingStat from "./FloatingStat";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full max-w-[480px] aspect-[4/5]"
      >
        <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/15 via-glow/40 to-secondary/5 blur-2xl" />

        <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/40 shadow-2xl shadow-black/10">
          <Image
            src="/images/gallery/1.jpg"
            alt="واجهة عيادات أفضل كلينك"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {floatingStats.map((stat, i) => (
          <FloatingStat key={stat.label} stat={stat} index={i} className="hidden lg:block" />
        ))}
      </motion.div>
    </div>
  );
}
