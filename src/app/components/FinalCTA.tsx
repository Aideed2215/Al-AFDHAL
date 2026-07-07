"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const waUrl = "https://wa.me/966581151740?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك";

const btnSpring = { type: "spring" as const, stiffness: 400, damping: 25 };

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover" />
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />
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

        <div className="mt-8 flex justify-center">
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.97 }}
            transition={btnSpring}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-bold text-primary shadow-sm hover:bg-white/90"
          >
            <MessageCircle size={20} />
            احجز موعدك عبر الواتساب
          </motion.a>
        </div>

        <p className="mt-6 text-base text-white/70 font-medium">
          أو اتصل الآن
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+966581151740"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 text-base font-bold text-white transition-all duration-200 hover:bg-white/10"
          >
            <Phone size={18} />
            ٠٥٨١١٥١٧٤٠
          </a>
          <a
            href="tel:+966544503179"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 text-base font-bold text-white transition-all duration-200 hover:bg-white/10"
          >
            <Phone size={18} />
            ٠٥٤٤٥٠٣١٧٩
          </a>
        </div>
      </motion.div>
    </section>
  );
}
