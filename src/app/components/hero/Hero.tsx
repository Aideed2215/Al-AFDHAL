"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroContent from "./HeroContent";

const slides = [
  { src: "/images/gallery/hero-1.jpg", alt: "جلسة عناية بالبشرة في أفضل كلينك" },
  { src: "/images/gallery/hero-2.jpg", alt: "طبيبة تطمئن على مريضة في أفضل كلينك" },
  { src: "/images/gallery/hero-3.jpg", alt: "حقنة تجميلية في أفضل كلينك" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-black/70" />

      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.06]"
      >
        <div
          className="h-full w-full bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,#fff_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_30%_30%,#1A6B5A_0%,transparent_50%)]"
          style={{
            backgroundSize: "200% 200%",
            animation: "ambientShift 12s ease-in-out infinite",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full">
        <HeroContent />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`الانتقال إلى الشريحة ${i + 1}`}
          />
        ))}
        </div>
    </section>
  );
}
