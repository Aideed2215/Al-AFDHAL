"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const sectionIds = ["services", "process", "doctors", "faq", "testimonials", "gallery", "final-cta", "location"];

export default function ScrollDownIndicator() {
  const [visible, setVisible] = useState(true);
  const currentRef = useRef(0);

  useEffect(() => {
    const check = () => {
      let idx = -1;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          idx = i;
          break;
        }
      }
      currentRef.current = idx;

      // hide when last section is at or above viewport center
      const last = document.getElementById("location");
      if (last) {
        setVisible(last.getBoundingClientRect().top > 300);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const scrollToNext = () => {
    const nextIdx = currentRef.current < 0 ? 0 : currentRef.current + 1;
    if (nextIdx < sectionIds.length) {
      const el = document.getElementById(sectionIds[nextIdx]);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-indicator"
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full border border-amber-400/40 bg-white/15 backdrop-blur-md text-amber-400 shadow-lg shadow-black/10 transition-all duration-300 hover:bg-white/25 hover:text-amber-300 hover:border-amber-400/60"
          aria-label="الانتقال إلى القسم التالي"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center leading-none"
          >
            <ChevronDown size={14} className="-mb-1 text-amber-400" />
            <ChevronDown size={14} className="-mt-1 text-amber-400" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
