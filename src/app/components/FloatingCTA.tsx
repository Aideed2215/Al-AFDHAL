"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [atTarget, setAtTarget] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = document.getElementById("location");
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => setAtTarget(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observerRef.current.observe(target);

    const timer = setTimeout(() => setVisible(true), 2000);

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    const target = document.getElementById("location");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {visible && !atTarget && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.15, backgroundColor: "rgb(158,99,63)", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-text-primary shadow-lg shadow-black/10 backdrop-blur-lg border border-border/60"
          aria-label="التواصل معنا"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
