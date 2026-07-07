"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Award, HeartHandshake, Users, Star } from "lucide-react";
import { siteStats } from "@/data/clinicStats";

const stats = [
  { value: siteStats.yearsExperience, suffix: "+", label: "سنوات خبرة", icon: Award },
  { value: siteStats.trustedClients, suffix: "+", label: "عميل وثق بنا", icon: HeartHandshake },
  { value: siteStats.specialistDoctors, suffix: "+", label: "أطباء متخصصون", icon: Users },
  { value: siteStats.googleRating, suffix: "", label: "تقييم Google", isDecimal: true, icon: Star },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 240, damping: 22, delay: i * 0.12 },
  }),
};

function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2.2, ease: "easeOut" });
    return controls.stop;
  }, [count, value, inView]);

  return (
    <motion.span
      ref={ref}
      whileHover={{ scale: 1.08, color: "var(--color-primary-hover, #0a7e6d)" }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-primary"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

function PulseRing() {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0.6 }}
      animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.6, 0, 0.6] }}
      transition={{ duration: 1.4, repeat: 2, ease: "easeOut", repeatDelay: 0.3 }}
      className="absolute inset-0 rounded-2xl bg-primary/20"
    />
  );
}

function ProgressBar({ inView: parentInView }: { inView: boolean }) {
  return (
    <div className="mx-auto mt-2 h-[3px] w-[60px] rounded-full bg-primary/15 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={parentInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.1 }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  );
}

function FloatingDots() {
  return (
    <span className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -6, 0],
            x: [0, i === 0 ? 4 : i === 2 ? -4 : 0, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          className="block h-[3px] w-[3px] rounded-full bg-primary/40"
        />
      ))}
    </span>
  );
}

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 20px 60px -10px rgba(0,100,80,0.25)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 p-6 sm:p-8 text-center shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
                  <PulseRing />
                  <motion.div
                    initial={{ scale: 0.5, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 18, delay: i * 0.12 + 0.05 }}
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    className="relative z-10"
                  >
                    <Icon size={28} className="text-primary" />
                  </motion.div>
                </div>

                <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />

                <ProgressBar inView={sectionInView} />

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="mt-3 text-sm font-medium text-text-secondary/80"
                >
                  {stat.label}
                </motion.p>

                <FloatingDots />

                <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
