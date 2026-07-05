"use client";

import { motion } from "framer-motion";
import { Star, Users, Award, type LucideIcon } from "lucide-react";
import type { FloatingStat as FloatingStatType } from "./hero-data";

const icons: Record<string, LucideIcon> = { Star, Users, Award };

interface Props {
  stat: FloatingStatType;
  index: number;
  className?: string;
}

export default function FloatingStat({ stat, index, className = "" }: Props) {
  const Icon = icons[stat.icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.5, ease: "easeOut" }}
      className={`absolute z-20 ${className}`}
      style={{
        top: stat.top,
        left: stat.left,
        right: stat.right,
        bottom: stat.bottom,
      }}
    >
      <div className="flex items-center gap-2.5 rounded-2xl border border-white/40 bg-white/70 px-3.5 py-2.5 shadow-xl shadow-black/5 backdrop-blur-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Icon size={16} className="text-primary" />
        </div>
        <div className="text-right">
          <p className="text-sm font-bold font-heading text-text-primary leading-none">
            {stat.value}
          </p>
          <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
