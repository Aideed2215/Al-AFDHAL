"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Calendar, Heart, Stethoscope, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { siteStats } from "@/data/clinicStats";

const stats = [
  { value: siteStats.yearsExperience, suffix: "+", label: "سنوات خبرة", icon: Calendar },
  { value: siteStats.patientsTreated, suffix: "+", label: "مريض واثق", icon: Heart },
  { value: siteStats.specialistDoctors, suffix: "+", label: "أطباء متخصصون", icon: Stethoscope },
  { value: siteStats.googleRating, suffix: "", label: "تقييم Google", isDecimal: true, icon: Star },
];

function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-extrabold font-heading text-primary"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative lg:-mt-16 z-10">
      <ScrollReveal>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 rounded-2xl bg-white border border-border/60 p-8 sm:p-10 shadow-lg shadow-black/5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </div>
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
                <p className="mt-1 text-sm text-text-secondary/80">
                  {stat.label}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
