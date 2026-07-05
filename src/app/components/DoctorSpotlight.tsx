"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, Award, Users, Check } from "lucide-react";
import { doctors } from "@/data/doctors";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const contentVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" as const } },
};

export default function DoctorSpotlight() {
  const [active, setActive] = useState(0);
  const doctor = doctors[active];

  return (
    <section id="doctors" className="relative py-20 sm:py-28 overflow-hidden">
      <motion.div
        key={doctor.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`absolute inset-0 bg-gradient-to-br ${doctor.gradient} transition-colors duration-700`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,60,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="أطباؤنا"
            title="نخبة من أمهر الأطباء"
            description="فريق طبي متميز بخبرات واسعة في مختلف التخصصات التجميلية والجلدية"
          />
        </ScrollReveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md aspect-[3/4]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-white/10 backdrop-blur-sm border border-white/40 shadow-2xl shadow-black/5" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center overflow-hidden">
                <span className="text-[12rem] sm:text-[16rem] font-bold font-heading text-primary/20 select-none">
                  {doctor.initial}
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -top-2 -left-2 w-24 h-24 rounded-full bg-secondary/10 blur-2xl" />
            </motion.div>
          </AnimatePresence>

          <div className="text-center lg:text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={doctor.id}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                  <Award size={14} />
                  {doctor.specialty}
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text-primary leading-tight">
                  {doctor.name}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-border/40 px-3.5 py-1.5 text-sm font-medium text-text-primary shadow-sm">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    {doctor.rating}
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-border/40 px-3.5 py-1.5 text-sm font-medium text-text-primary shadow-sm">
                    <Award size={14} className="text-primary" />
                    {doctor.experience}
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-border/40 px-3.5 py-1.5 text-sm font-medium text-text-primary shadow-sm">
                    <Users size={14} className="text-secondary" />
                    {doctor.patients} مريض
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-bold text-text-primary mb-3">
                    التخصصات:
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {doctor.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 border border-border/30 px-3 py-1.5 text-sm text-text-secondary"
                      >
                        <Check size={12} className="text-primary" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={`https://wa.me/966581151740?text=مرحباً، أرغب بالحجز مع ${encodeURIComponent(doctor.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                  >
                    احجز مع {doctor.name.split(" ").slice(1).join(" ")}
                    <ArrowLeft
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {doctors.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              className={`relative rounded-2xl border-2 px-5 py-3 text-center transition-all duration-300 shrink-0 ${
                i === active
                  ? "border-primary bg-white shadow-lg shadow-primary/10"
                  : "border-transparent bg-white/60 hover:bg-white/80 hover:shadow-md"
              }`}
              aria-label={`اختيار ${d.name}`}
              aria-current={i === active ? "true" : undefined}
            >
              {i === active && (
                <motion.div
                  layoutId="activeDoctor"
                  className="absolute inset-0 rounded-2xl border-2 border-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative block text-sm font-bold transition-colors duration-200 ${
                  i === active ? "text-primary" : "text-text-secondary group-hover:text-text-primary"
                }`}
              >
                {d.name}
              </span>
              <span
                className={`relative block text-xs mt-0.5 transition-colors duration-200 ${
                  i === active ? "text-text-secondary/80" : "text-text-secondary/50"
                }`}
              >
                {d.specialty}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
