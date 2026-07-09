import type { BookingFormValues, BookingService, BookingDoctor } from "./types";

export function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function buildWhatsAppUrl(
  data: BookingFormValues,
  services: BookingService[],
  doctors: BookingDoctor[],
  whatsappNumber: string
) {
  const serviceLabel = services.find((s) => s.id === data.service)?.title || data.service;
  const doctorLabel = doctors.find((d) => d.id === data.doctor)?.name || data.doctor;

  const msg = [
    "🆕 طلب حجز جديد",
    "┈┈┈┈┈┈┈┈┈┈┈┈",
    `الخدمة: ${serviceLabel}`,
    `الدكتور: ${doctorLabel}`,
    `التاريخ: ${formatDate(data.date)}`,
    "",
    `الاسم: ${data.name}`,
    `الجوال: ${data.phone}`,
    data.notes ? `ملاحظات: ${data.notes}` : "",
    "┈┈┈┈┈┈┈┈┈┈┈┈",
    "⏳ يرجى التواصل لتأكيد الموعد",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
