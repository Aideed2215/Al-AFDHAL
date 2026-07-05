"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  { id: 1, label: "عياداتنا", image: "/images/gallery/1.jpg", description: "مساحاتنا المصممة لراحتك وخصوصيتك" },
  { id: 2, label: "واجهة العيادة", image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img001.webp", description: "مدخل مجهز بأعلى معايير الجودة والترحيب" },
  { id: 3, label: "قاعة الاستقبال", image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img002.webp", description: "استقبال راقي ينتظرك منذ اللحظة الأولى" },
  { id: 4, label: "منطقة الانتظار", image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img003.webp", description: "مساحة انتظار مريحة بتصميم عصري أنيق" },
  { id: 5, label: "عيادة الجلدية", image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img004.webp", description: "أحدث تقنيات العناية بالبشرة والعلاجات الجلدية" },
  { id: 6, label: "عيادة الليزر", image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img005.webp", description: "تقنيات ليزر متطورة تحت إشراف نخبة من الخبراء" },
];

export default function GalleryMasonry() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="معرض الصور"
          title="بيئة عياداتنا"
          description="نوفر بيئة مريحة وعصرية لضمان أفضل تجربة علاجية"
        />

        <ScrollReveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className="flip-card relative aspect-square rounded-xl overflow-hidden border border-border/60 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
              >
                <div className="flip-card-inner relative w-full h-full">
                  <div className="flip-front absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 left-0 p-3 text-right">
                      <span className="text-sm font-medium text-white drop-shadow-sm">
                        {item.label}
                      </span>
                    </div>
                  </div>
                  <div className="flip-back absolute inset-0 bg-gradient-to-br from-primary to-secondary/80 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-2xl bg-white p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 left-3 p-2 rounded-full bg-glow hover:bg-primary/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-glow">
                  <img
                    src={galleryItems.find((g) => g.id === selected)?.image || ""}
                    alt={galleryItems.find((g) => g.id === selected)?.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary">
                  {galleryItems.find((g) => g.id === selected)?.label}
                </h3>
                <p className="mt-2 text-text-secondary/80">
                  {galleryItems.find((g) => g.id === selected)?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
