export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  patients: string;
  specializations: string[];
  bio: string;
  gradient: string;
  initial: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "د. حنان البحيري",
    specialty: "استشارية جلدية وتجميل",
    rating: 4.9,
    experience: "أكثر من ١٠ سنوات",
    patients: "٥٠٠٠+",
    specializations: ["أمراض جلدية", "ليزر", "بوتوكس", "فيلر"],
    bio: "متخصصة في علاج الأمراض الجلدية والتجميل غير الجراحي، معروفة بصدقها وأمانتها وحرصها على مصلحة المريض.",
    gradient: "from-rose-200/40 via-primary/5 to-amber-200/30",
    initial: "ح",
  },
  {
    id: 2,
    name: "د. ريم الغنام",
    specialty: "أخصائية تجميل وحقن",
    rating: 4.8,
    experience: "أكثر من ٨ سنوات",
    patients: "٣٠٠٠+",
    specializations: ["فيلر", "بوتوكس", "رسم الوجه", "نضارة البشرة"],
    bio: "متخصصة في حقن الفيلر والبوتكس ورسم الوجه، تتميز بدقة العمل ونتائج طبيعية بإشراف نخبة من الاستشاريين.",
    gradient: "from-sky-200/40 via-secondary/5 to-teal-200/30",
    initial: "ر",
  },
  {
    id: 3,
    name: "فريق الأسنان",
    specialty: "طب الأسنان التجميلي",
    rating: 4.7,
    experience: "أكثر من ١٢ سنة",
    patients: "٧٠٠٠+",
    specializations: ["حشوات تجميلية", "تركيبات", "زراعة أسنان", "تبييض"],
    bio: "نخبة من أطباء الأسنان المتخصصين في الحشوات التجميلية والتركيبات وزراعة الأسنان وتبييضها بأحدث التقنيات.",
    gradient: "from-emerald-200/40 via-secondary/5 to-lime-200/30",
    initial: "ف",
  },
];
