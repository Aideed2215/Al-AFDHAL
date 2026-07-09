"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { label: "الخدمات", href: "/#services" },
  { label: "الأطباء", href: "/#doctors" },
  { label: "الأسئلة الشائعة", href: "/#faq" },
  { label: "آراء المرضى", href: "/#testimonials" },
  { label: "معرض الصور", href: "/#gallery" },
  { label: "الموقع", href: "/#location" },
];

const waUrl = `${site.whatsappUrl}?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك`;

export default function Navbar() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [inCTA, setInCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" }
    );

    const ids = ["services", "doctors", "faq", "testimonials", "gallery", "location"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cta = document.getElementById("final-cta");
    if (!cta) return;
    const ctaObserver = new IntersectionObserver(
      ([entry]) => setInCTA(entry.isIntersecting),
      { threshold: 0.3 }
    );
    ctaObserver.observe(cta);
    return () => ctaObserver.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm"
          : "bg-black/25 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={`tel:${site.phones[0]}`}
            className={`p-2.5 rounded-lg transition-colors ${
              scrolled
                ? "hover:bg-glow text-text-primary"
                : "hover:bg-white/10 text-white"
            }`}
            aria-label="اتصل بنا"
          >
            <Phone size={20} />
          </a>
          <button
            className={`p-2.5 rounded-lg transition-colors ${
              scrolled
                ? "hover:bg-glow text-text-primary"
                : "hover:bg-white/10 text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <Link href="/" className="flex items-center gap-3">
          <span className={`text-xl font-bold font-heading ${scrolled ? "text-primary" : "text-white"}`}>
            أفضل كلينك
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.href.replace("/#", "") === activeSection;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? scrolled
                      ? "text-primary bg-primary/5"
                      : "text-white bg-white/10"
                    : scrolled
                      ? "text-text-secondary hover:text-primary hover:bg-primary/5 hover:shadow-sm"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="min-w-[136px] flex justify-end">
          <AnimatePresence mode="popLayout">
            {!inCTA && (
              <motion.a
                key="booking-btn"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                whileTap={{ scale: 0.96, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                className={`inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-bold shadow-sm transition-colors duration-200 hover:shadow-lg ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                احجز موعدك
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            className="overflow-hidden bg-white/95 backdrop-blur-lg border-t border-border lg:hidden"
          >
            <nav className="flex flex-col gap-2 px-4 pb-6 pt-2" aria-label="التنقل الرئيسي">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { document.body.style.overflow = ""; setMobileOpen(false); }}
                  className="py-3 px-4 rounded-lg text-text-secondary hover:text-primary hover:bg-glow transition-all"
                >
                  {link.label}
                </Link>
              ))}
              {!inCTA && (
                <motion.a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white"
                >
                  احجز موعدك
                </motion.a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
