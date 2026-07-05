"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
          ابدأ رحلة العناية بنفسك اليوم
        </h2>
        <p className="mt-4 text-lg text-white/80 leading-relaxed">
          فريقنا الطبي المتميز في انتظارك. احجز موعدك الآن واستمتع بتجربة
          علاجية استثنائية.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/966581151740?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-bold text-primary shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-xl active:scale-[0.98]"
          >
            <MessageCircle size={20} />
            احجز واتساب
          </a>
          <a
            href="tel:+966581151740"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 text-base font-bold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]"
          >
            <Phone size={20} />
            اتصل الآن
          </a>
        </div>
      </motion.div>
    </section>
  );
}
