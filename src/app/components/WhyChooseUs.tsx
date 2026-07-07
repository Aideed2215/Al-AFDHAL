"use client";

import { CalendarSearch, Stethoscope, Sparkles, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: CalendarSearch,
    step: "01",
    title: "احجز موعدك",
    description: "اختر الوقت المناسب لك عبر واتساب أو اتصال هاتفي، وفريقنا ينتظرك بكل ترحيب.",
  },
  {
    icon: Stethoscope,
    step: "02",
    title: "استشارة شخصية",
    description: "يجلس معك أحد استشاريينا لمناقشة احتياجاتك ووضع خطة علاج مخصصة تناسب بشرتك.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "العلاج والتجميل",
    description: "نستخدم أحدث التقنيات والأجهزة المعتمدة عالمياً تحت إشراف نخبة من الأطباء المختصين.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "متابعة ونتائج",
    description: "نبقى على تواصل معك بعد كل جلسة لضمان أفضل النتائج وراحتك التامة.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-glow/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="رحلتك معنا"
          title="كيف تتم زيارتك لأفضل كلينك؟"
          description="نقدم لك تجربة متكاملة من أول اتصال حتى المتابعة بعد العلاج"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative rounded-2xl bg-white border border-border/60 p-6 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="text-2xl font-bold font-heading text-primary/20">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
