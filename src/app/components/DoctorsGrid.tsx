"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const doctors = [
  {
    name: "د. ريم الغنام",
    specialty: "أخصائية تجميل وحقن",
    experience: "خبرة في الفيلر والبوتكس",
    bio: "متخصصة في حقن الفيلر والبوتكس ورسم الوجه، تتميز بدقة العمل ونتائج طبيعية بإشراف نخبة من الاستشاريين.",
  },
  {
    name: "د. حنان البحيري",
    specialty: "أخصائية جلدية وتجميل",
    experience: "خبرة في الأمراض الجلدية والتجميل",
    bio: "متخصصة في علاج الأمراض الجلدية والتجميل غير الجراحي، معروفة بصدقها وأمانتها وحرصها على مصلحة المريض.",
  },
  {
    name: "فريق الأسنان",
    specialty: "طب الأسنان التجميلي",
    experience: "حشوات تجميلية - تركيبات - زراعة",
    bio: "نخبة من أطباء الأسنان المتخصصين في الحشوات التجميلية والتركيبات وزراعة الأسنان وتبييضها بأحدث التقنيات.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function DoctorsGrid() {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="أطباؤنا"
          title="نخبة من أمهر الأطباء"
          description="فريق طبي متميز بخبرات واسعة في مختلف التخصصات التجميلية والجلدية"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {doctors.map((doctor, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group rounded-2xl border border-border/60 bg-background p-6 text-center transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mx-auto mb-5 h-28 w-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-2 ring-primary/10">
                <span className="text-4xl">
                  {doctor.name.includes("ريم") || doctor.name.includes("حنان")
                    ? "👩‍⚕️"
                    : "👨‍⚕️"}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading text-text-primary">
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {doctor.specialty}
              </p>
              <p className="mt-2 text-xs text-text-secondary/70">
                {doctor.experience}
              </p>
              <p className="mt-3 text-sm text-text-secondary/80 leading-relaxed">
                {doctor.bio}
              </p>
              <a
                href="https://wa.me/966581151740"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-xl bg-primary text-sm font-medium text-white transition-all duration-200 hover:bg-primary-hover"
              >
                احجز مع الدكتور
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
