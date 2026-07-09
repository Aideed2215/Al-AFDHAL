"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Award, HeartHandshake, Users, Star } from "lucide-react";
import { site } from "@/data/site";
import { fadeUp } from "@/components/motion/presets";

const stats = [
  { value: site.stats.yearsExperience, suffix: "+", label: "سنوات خبرة", helper: "في العناية بالبشرة والتجميل", icon: Award },
  { value: site.stats.trustedClients, suffix: "+", label: "عميل وثق بنا", helper: "خدمات جلدية وتجميلية", icon: HeartHandshake },
  { value: site.stats.specialistDoctors, suffix: "+", label: "أطباء متخصصون", helper: "جلدية، ليزر، أسنان", icon: Users },
  { value: site.stats.googleRating, suffix: "", label: "تقييم Google", helper: "بناءً على 441 مراجعة", isDecimal: true, icon: Star },
];

function AnimatedNumber({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [count, value, inView]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-primary">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 p-6 sm:p-8 text-center shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
                  <Icon size={24} className="text-primary" />
                </div>

                <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />

                <p className="mt-2 text-sm font-bold text-text-primary">
                  {stat.label}
                </p>

                {stat.helper && (
                  <p className="mt-1 text-xs text-text-secondary/60">
                    {stat.helper}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
