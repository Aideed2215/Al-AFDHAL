"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import StoryGalleryItem from "./StoryGalleryItem";

export default function StoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Map<number, HTMLElement>>(new Map());

  const selectedItem = selected
    ? galleryData.find((g) => g.id === selected)
    : null;

  useEffect(() => {
    if (selected && modalRef.current) {
      const focusEl = modalRef.current.querySelector<HTMLElement>(
        'button, [tabindex], a, input'
      );
      focusEl?.focus();
    }
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <ScrollReveal>
        <SectionHeading
          label="معرض الصور"
          title="جولة في عياداتنا"
          description="خذ جولة بصرية في أرجاء عياداتنا وتعرف على بيئتنا المصممة لراحتك"
        />
      </ScrollReveal>

      <div className="mt-8 sm:mt-16">
        {galleryData.map((item, index) => (
          <StoryGalleryItem
            key={item.id}
            item={item}
            index={index}
            onSelect={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl bg-white p-4 sm:p-8 shadow-2xl"
              tabIndex={-1}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>
              <div className="aspect-video rounded-xl overflow-hidden bg-glow shadow-inner relative">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-text-primary">
                  {selectedItem.title}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed max-w-lg mx-auto">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
