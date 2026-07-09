"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  CalendarDays,
  MessageCircle,
  Phone,
  FileText,
  Lock,
  AlertCircle,
  UserCircle,
  Calendar,
  Stethoscope,
} from "lucide-react";
import { site } from "@/data/site";
import { bookingServices } from "@/data/services";
import { INITIAL_FORM, type BookingFormValues } from "@/lib/booking/types";
import { validateField, isFormValid } from "@/lib/booking/validation";
import { WhatsAppBookingProvider } from "@/lib/booking/provider";

const bookingDoctors = [
  { id: "reem", name: "د. ريم الغنام" },
  { id: "nansee", name: "د. نانسي سامر" },
  { id: "hanan", name: "د. حنان البحيري" },
];

const bookingProvider = new WhatsAppBookingProvider(bookingServices, bookingDoctors, site.whatsappNumber);

export default function BookingPage() {
  const [data, setData] = useState<BookingFormValues>(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const set = <K extends keyof BookingFormValues>(key: K, val: BookingFormValues[K]) => {
    setData((prev) => ({ ...prev, [key]: val }));
  };

  const errors = useMemo(() => {
    const e: Partial<Record<keyof BookingFormValues, string>> = {};
    for (const key of Object.keys(INITIAL_FORM) as (keyof BookingFormValues)[]) {
      const err = validateField(key, data[key], touched[key] ?? false);
      if (err) e[key] = err;
    }
    return e;
  }, [data, touched]);

  const isValid = isFormValid(data);

  const handleSubmit = async () => {
    const allTouched: Record<string, boolean> = {};
    for (const key of Object.keys(INITIAL_FORM) as (keyof BookingFormValues)[]) {
      allTouched[key] = true;
    }
    setTouched(allTouched);
    if (!isValid) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    const result = await bookingProvider.createBooking({
      patientName: data.name,
      phone: data.phone,
      serviceId: data.service,
      doctorId: data.doctor || undefined,
      preferredDate: data.date,
      notes: data.notes || undefined,
    });
    if (result.redirectUrl) {
      window.open(result.redirectUrl, "_blank", "noopener,noreferrer");
    }
  };

  const blur = (key: keyof BookingFormValues) => setTouched((t) => ({ ...t, [key]: true }));

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 transition-all duration-200";

  const labelBase = "flex items-center gap-2 text-sm font-semibold text-text-primary mb-2";

  function inputBorder(key: keyof BookingFormValues) {
    return errors[key]
      ? "border-error focus:border-error focus:ring-error-soft"
      : "border-border focus:border-accent focus:ring-accent-soft";
  }

  function errorId(key: string) {
    return `error-${key}`;
  }

  function inputId(key: string) {
    return `field-${key}`;
  }

  return (
    <main className="relative min-h-screen bg-background" dir="rtl">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/gallery/1005-1920w.webp)" }}
      />
      <div className="fixed inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-lg px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-text-secondary hover:text-accent transition-colors"
        >
          <ChevronRight size={18} />
          العودة إلى الرئيسية
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 overflow-hidden rounded-2xl bg-surface shadow-card"
        >
          <div className="border-b border-border px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <CalendarDays size={20} />
                </span>
                <div>
                  <h1 className="text-lg font-bold font-heading text-text-primary">احجز موعدك</h1>
                  <p className="text-xs text-text-secondary">املأ البيانات وسنتواصل معك لتأكيد الموعد</p>
                </div>
              </div>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold text-accent">
                سريع ومجاني
              </span>
            </div>
          </div>

          <div className="px-6 py-6">
            <div className="space-y-5" role="form" aria-label="نموذج حجز موعد">
              <div>
                <label htmlFor={inputId("name")} className={labelBase}>
                  <UserCircle size={16} className="text-accent" />
                  الاسم الكامل
                </label>
                <input
                  id={inputId("name")}
                  type="text"
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  onBlur={() => blur("name")}
                  placeholder="مثال: سارة أحمد"
                  className={`${inputBase} ${inputBorder("name")}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? errorId("name") : undefined}
                />
                {errors.name && (
                  <p id={errorId("name")} className="mt-1.5 flex items-center gap-1 text-xs font-bold text-error" role="alert">
                    <AlertCircle size={13} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={inputId("phone")} className={labelBase}>
                  <Phone size={16} className="text-accent" />
                  رقم جوال واتساب
                </label>
                <input
                  id={inputId("phone")}
                  type="tel"
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onBlur={() => blur("phone")}
                  placeholder="مثال: 05xxxxxxxx"
                  dir="ltr"
                  className={`${inputBase} text-left ${inputBorder("phone")}`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? errorId("phone") : undefined}
                />
                {errors.phone && (
                  <p id={errorId("phone")} className="mt-1.5 flex items-center gap-1 text-xs font-bold text-error" role="alert">
                    <AlertCircle size={13} />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={inputId("service")} className={labelBase}>
                  <Calendar size={16} className="text-accent" />
                  الخدمة المطلوبة
                </label>
                <select
                  id={inputId("service")}
                  value={data.service}
                  onChange={(e) => set("service", e.target.value)}
                  onBlur={() => blur("service")}
                  className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237A7267%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[left_12px_center] bg-no-repeat pr-10 ${inputBorder("service")}`}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? errorId("service") : undefined}
                >
                  <option value="">اختر الخدمة...</option>
                  {bookingServices.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
                {errors.service && (
                  <p id={errorId("service")} className="mt-1.5 flex items-center gap-1 text-xs font-bold text-error" role="alert">
                    <AlertCircle size={13} />
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={inputId("doctor")} className={labelBase}>
                  <Stethoscope size={16} className="text-accent" />
                  الدكتور
                </label>
                <select
                  id={inputId("doctor")}
                  value={data.doctor}
                  onChange={(e) => set("doctor", e.target.value)}
                  onBlur={() => blur("doctor")}
                  className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237A7267%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[left_12px_center] bg-no-repeat pr-10 ${inputBorder("doctor")}`}
                  aria-invalid={!!errors.doctor}
                  aria-describedby={errors.doctor ? errorId("doctor") : undefined}
                >
                  <option value="">اختر الدكتور...</option>
                  {bookingDoctors.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
                {errors.doctor && (
                  <p id={errorId("doctor")} className="mt-1.5 flex items-center gap-1 text-xs font-bold text-error" role="alert">
                    <AlertCircle size={13} />
                    {errors.doctor}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={inputId("date")} className={labelBase}>
                  <CalendarDays size={16} className="text-accent" />
                  التاريخ
                </label>
                <input
                  id={inputId("date")}
                  type="date"
                  value={data.date}
                  onChange={(e) => set("date", e.target.value)}
                  onBlur={() => blur("date")}
                  min={new Date().toISOString().split("T")[0]}
                  className={`${inputBase} ${inputBorder("date")}`}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? errorId("date") : undefined}
                />
                {errors.date && (
                  <p id={errorId("date")} className="mt-1.5 flex items-center gap-1 text-xs font-bold text-error" role="alert">
                    <AlertCircle size={13} />
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor={inputId("notes")} className={labelBase}>
                  <FileText size={16} className="text-accent" />
                  ملاحظات <span className="text-text-secondary/50 font-normal text-xs">(اختياري)</span>
                </label>
                <textarea
                  id={inputId("notes")}
                  value={data.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="أي معلومات إضافية ترغب في إخبارنا بها"
                  rows={3}
                  className={`${inputBase} resize-none border-border focus:border-accent focus:ring-accent-soft`}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={sending}
              className={`mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-sm font-bold transition-all duration-200 ${
                sending
                  ? "bg-border text-text-secondary/50 cursor-wait"
                  : "bg-[#1FA85A] text-white shadow-soft hover:brightness-110 active:scale-[0.98]"
              }`}
            >
              {sending ? (
                <>
                  <span className="inline-block size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جارٍ التجهيز…
                </>
              ) : (
                <>
                  <MessageCircle size={18} />
                  أرسل عبر واتساب
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-text-secondary/60">
              <Lock size={13} />
              <p className="text-[11px]">بياناتك محفوظة بسرية تامة ولن تُستخدم إلا لغرض الحجز</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
