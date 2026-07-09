import type { BookingFormValues } from "./types";

export function validateField(key: keyof BookingFormValues, value: string, touched: boolean): string | undefined {
  if (!touched) return undefined;
  switch (key) {
    case "name":
      if (value.trim().length < 2) return "الاسم يجب أن يكون حرفين على الأقل";
      return undefined;
    case "phone":
      if (value.trim().length < 9) return "رقم الجوال غير صحيح";
      return undefined;
    case "service":
      if (!value) return "يرجى اختيار الخدمة";
      return undefined;
    case "doctor":
      if (!value) return "يرجى اختيار الدكتور";
      return undefined;
    case "date":
      if (!value) return "يرجى اختيار التاريخ";
      return undefined;
    default:
      return undefined;
  }
}

export function isFormValid(data: BookingFormValues): boolean {
  return (
    data.name.trim().length >= 2 &&
    data.phone.trim().length >= 9 &&
    !!data.service &&
    !!data.doctor &&
    !!data.date
  );
}
