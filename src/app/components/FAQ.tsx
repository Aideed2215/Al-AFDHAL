"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "هل جلسات الليزر مؤلمة؟",
    a: "معظم المرضى يصفون الإحساس بأنه خفيف يشبه وخزات بسيطة. نستخدم أجهزة تبريد متطورة لتخفيف أي شعور بعدم الراحة، ويمكن استخدام كريم مخدر قبل الجلسة عند الحاجة.",
  },
  {
    q: "كم جلسة أحتاج لنتائج واضحة؟",
    a: "يختلف العدد حسب العلاج. عادةً تحتاج جلسات إزالة الشعر من ٦ إلى ٨ جلسات، بينما تظهر نتائج البوتوكس خلال ٣-٧ أيام وتدوم ٣-٦ أشهر. فريقنا يضع خطة علاج مخصصة لك.",
  },
  {
    q: "هل هناك أي تحضيرات قبل الزيارة؟",
    a: "نعم، ننصح بتجنب التعرض المباشر للشمس قبل الجلسة، وإخبار الطبيب بكل الأدوية والمستحضرات التي تستخدمينها. سنرسل لك تعليمات كاملة بعد الحجز.",
  },
  {
    q: "ما الفرق بين الفيلر والبوتوكس؟",
    a: "البوتوكس يعمل على إرخاء العضلات لتقليل التجاعيد الحركية (مثل تجاعيد الجبهة)، بينما الفيلر يملأ الفراغات ويعيد الحجم المفقود (مثل الخدود والشفتين). كلاهما إجراءات غير جراحية وآمنة.",
  },
  {
    q: "هل يوجد عروض أو باقات؟",
    a: "نقدم باقات مخفضة للجلسات المتعددة وعروض موسمية. تابعينا على إنستغرام @afdal_clinic لتصلك أحدث العروض، أو اسأل فريقنا عن الباقات المتاحة.",
  },
  {
    q: "كيف أحجز موعداً؟",
    a: "يمكنك الحجز عبر واتساب بالضغط على زر «احجز موعدك» في أي وقت، أو الاتصال بنا على ٠٥٨١١٥١٧٤٠. فريقنا سعيد بخدمتك من السبت إلى الخميس ٩ صباحاً - ١٠ مساءً.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="الأسئلة الشائعة"
          title="إجابات لكل ما يخطر ببالك"
          description="نجيب على أكثر الأسئلة التي تهم مرضانا قبل الزيارة"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/60 bg-white overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right transition-colors hover:bg-glow/30"
                aria-expanded={open === i}
              >
                <span className="text-base font-bold font-heading text-text-primary">
                  {faq.q}
                </span>
                <span className="shrink-0 text-primary">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-sm text-text-secondary/80 leading-relaxed border-t border-border/40">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
