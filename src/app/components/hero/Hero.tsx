"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-background via-surface to-glow/50"
      />

      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.04]"
      >
        <div
          className="h-full w-full bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,#9E633F_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_30%_30%,#1A6B5A_0%,transparent_50%)]"
          style={{
            backgroundSize: "200% 200%",
            animation: "ambientShift 12s ease-in-out infinite",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </motion.div>
    </section>
  );
}
