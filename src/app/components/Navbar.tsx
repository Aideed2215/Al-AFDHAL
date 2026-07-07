"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الخدمات", href: "/#services" },
  { label: "الأطباء", href: "/#doctors" },
  { label: "الأسئلة الشائعة", href: "/#faq" },
  { label: "آراء المرضى", href: "/#testimonials" },
  { label: "معرض الصور", href: "/#gallery" },
  { label: "الموقع", href: "/#location" },
];

const waUrl = "https://wa.me/966581151740?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك";

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
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="lg:hidden p-2.5 rounded-lg hover:bg-glow transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary font-heading">
            أفضل كلينك
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.href.replace("/#", "") === activeSection;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:shadow-sm ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
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
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-primary-hover hover:shadow-lg"
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
            className="overflow-hidden bg-white/95 backdrop-blur-lg border-t border-border lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 pb-6 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); document.body.style.overflow = ""; setMobileOpen(false); const id = link.href.replace("/#", ""); history.replaceState(null, "", `/#${id}`); setTimeout(() => { window.location.href = `/#${id}`; }, 100); }}
                  className="py-3 px-4 rounded-lg text-text-secondary hover:text-primary hover:bg-glow transition-all"
                >
                  {link.label}
                </a>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
