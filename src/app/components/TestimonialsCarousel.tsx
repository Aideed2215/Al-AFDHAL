"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "سارة",
    rating: 5,
    comment:
      "تجربة رائعة! الفريق محترف جداً والمكان نظيف ومريح. أنصح الجميع بتجربة خدماتهم.",
  },
  {
    name: "محمد",
    rating: 5,
    comment:
      "أفضل عيادة دخلتها من ناحية النظافة والشغل والاستقبال. نتيجة الليزر ممتازة.",
  },
  {
    name: "نورة",
    rating: 4,
    comment:
      "خدمة ممتازة وفريق عمل متقن. العيادة راقية والأجهزة حديثة. سعيدة بالتجربة.",
  },
  {
    name: "عبدالله",
    rating: 5,
    comment:
      "شغل احترافي وتعامل راقي. الفيلر طبيعي جداً والنتيجة أحسن من المتوقع.",
  },
  {
    name: "هدى",
    rating: 4,
    comment:
      "العناية بالبشرة عندهم ممتازة. استخدمت نضارة البشرة والنتيجة مذهلة.",
  },
  {
    name: "مشاعل",
    rating: 5,
    comment:
      "سويت تنظيف بشره عند أفضل عيادة في الرياض، التنظيف كان عميق وأكيد أنصح بتجربته. ينظفون البشره من قلب وبعدها يحطون ماسك بارد. وشكراً لأستاذه هبه على حسن الاستقبال.",
  },
  {
    name: "خلود",
    rating: 5,
    comment:
      "الدكتوره ريم الغنام شاطره، ثاني مره أجيها يدها خفيفه. الفيلر والبوتكس ترسم الوجه رسم وتحققن في الأماكن الي تحتاج وتعطيك الصراحه. سلمت يدها ع الشغل الجميل.",
  },
  {
    name: "Monia",
    rating: 5,
    comment:
      "تجربتي الأولى مع العيادة كانت سهلة وسريعة. عرفت العيادة من خلال بحثي عن الدكتورة حنان البحيري. وما ندمت أبدًا إني جيتها؛ إنسانة صادقة وأمينة، وتعطيك وقتك بكل أريحية. تعاملها مريح وعلمها عالي جداً.",
  },
  {
    name: "شوق",
    rating: 5,
    comment:
      "تجربتي كانت تشقير حواجب ممتاز وسريعين جداً وأسعارهم مناسبه مع العروض. أشكر الأستاذه وضحى على توضيحها لجميع الخدمات والعروض المتوفره وحسن الاستقبال.",
  },
];

const levels = [
  { max: 0, xR: 0, z: 60, rot: 0, s: 1.0, zi: 30, op: 1 },
  { max: 1, xR: 0.5, z: -5, rot: 12, s: 0.7, zi: 20, op: 0.88 },
  { max: 2, xR: 0.75, z: -35, rot: 24, s: 0.49, zi: 10, op: 0.65 },
  { max: 3, xR: 0.9, z: -70, rot: 36, s: 0.34, zi: 5, op: 0.35 },
  { max: 4, xR: 1, z: -110, rot: 48, s: 0.24, zi: 1, op: 0.15 },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
  }, []);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const [stageW, setStageW] = useState(800);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setStageW(e.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const maxOff = Math.max(stageW / 2, 160);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="آراء المرضى"
          title="ماذا يقول مرضانا عنا"
          description="نفخر بثقة مرضانا التي هي سر نجاحنا"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div
            className="relative flex items-center justify-center gap-2 sm:gap-4"
            style={{ perspective: 1200 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              onClick={prev}
              aria-label="السابق"
              className="z-40 flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white/90 text-xl text-primary shadow-sm backdrop-blur transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
            >
              ‹
            </button>

            <div
              ref={stageRef}
              className="relative flex w-full items-center justify-center overflow-hidden"
              style={{ height: 360 }}
            >
              {testimonials.map((t, i) => {
                let diff = i - current;
                const len = testimonials.length;
                if (diff > len / 2) diff -= len;
                if (diff < -len / 2) diff += len;

                const abs = Math.abs(diff);
                const level = levels.find((l) => abs <= l.max);
                const isActive = diff === 0;

                let transform = "translateX(0) translateZ(-200px) scale(0.2)";
                let zIndex = 0;
                let opacity = 0;
                let pointerEvents: "auto" | "none" = "none";

                if (level) {
                  const sign = diff < 0 ? -1 : 1;
                  const xPx = level.xR * maxOff;
                  transform = `translateX(${sign * xPx}px) translateZ(${level.z}px) rotateY(${sign * level.rot}deg) scale(${level.s})`;
                  zIndex = level.zi;
                  opacity = level.op;
                  pointerEvents = level.op > 0.5 ? "auto" : "none";
                }

                return (
                  <div
                    key={t.name}
                    onClick={() => goTo(i)}
                    className="absolute w-80 cursor-pointer select-none rounded-2xl border border-primary/10 bg-white/80 p-7 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-500 will-change-transform"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      pointerEvents,
                      transitionTimingFunction:
                        "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    <span className="pointer-events-none absolute top-1 left-4 select-none font-serif text-6xl leading-none text-primary/5">
                      &quot;
                    </span>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/35 via-secondary/25 to-transparent" />
                    )}

                    <div className="relative z-1 mb-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          size={16}
                          className={
                            s < t.rating
                              ? "fill-primary/70 text-primary/70"
                              : "text-border"
                          }
                        />
                      ))}
                    </div>

                    <p className="relative z-1 text-sm leading-relaxed text-text-secondary/80 line-clamp-4">
                      &quot;{t.comment}&quot;
                    </p>

                    <p className="relative z-1 mt-4 text-sm font-bold font-heading text-text-primary">
                      {t.name}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={next}
              aria-label="التالي"
              className="z-40 flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white/90 text-xl text-primary shadow-sm backdrop-blur transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
            >
              ›
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`الانتقال إلى رأي ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/place/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA+%D8%A3%D9%81%D8%B6%D9%84+%D9%83%D9%84%D9%8A%D9%86%D9%83%E2%80%AD/@24.7696675,46.7625779,12z/data=!4m16!1m7!3m6!1s0x3e2f0137a006078d:0x9fa9809105bd943!2z2LnZitin2K_Yp9iqINij2YHYttmEINmD2YTZitmG2YM!8m2!3d24.7696675!4d46.7625779!16s%2Fg%2F11vz4bxxrp!3m7!1s0x3e2f0137a006078d:0x9fa9809105bd943!8m2!3d24.7696675!4d46.7625779!9m1!1b1!16s%2Fg%2F11vz4bxxrp?authuser=0&hl=ar&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            عرض جميع التقييمات على Google →
          </a>
        </div>
      </div>
    </section>
  );
}
