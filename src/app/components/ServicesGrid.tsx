"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Zap, Droplets, Heart, Syringe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    slug: "dermatology",
    icon: Sparkles,
    title: "عيادة جلدية وتجميل",
    description: "نخبة من الاستشاريين للعناية بجمال وصحة بشرتك، نقدم حلولاً متكاملة لعلاج الأمراض الجلدية وأحدث إجراءات التجميل غير الجراحي.",
  },
  {
    slug: "laser-hair-removal",
    icon: Zap,
    title: "عيادة ليزر وبشرة",
    description: "استمتعي ببشرة ناعمة ونضرة مع أحدث تقنيات الليزر لإزالة الشعر ومعالجة عيوب البشرة تحت إشراف خبراء التجميل.",
  },
  {
    slug: "cosmetic-injections",
    icon: Droplets,
    title: "حقن التجميل",
    description: "الفيلر، البوتوكس، الميزوثيرابي، والبلازما لتجديد الشباب بأيدي مختصات ذوات خبرة.",
  },
  {
    slug: "cosmetic-dentistry",
    icon: Heart,
    title: "طب الأسنان التجميلي",
    description: "ابتسامتك هي شغفنا — حشوات تجميلية، تركيبات، زراعة أسنان، وتبييض بأحدث التقنيات.",
  },
  {
    slug: "skincare",
    icon: Syringe,
    title: "العناية بالبشرة",
    description: "علاج حب الشباب، التصبغات، التجاعيد، وتقشير البشرة بأحدث خطوط العناية.",
  },
  {
    slug: "skin-peeling",
    icon: Sparkles,
    title: "تقشير ونضارة",
    description: "جلسات تقشير عميق ونضارة المشاهير لاستعادة حيوية البشرة وإشراقتها.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="خدماتنا"
          title="كل ما تحتاجه للعناية بنفسك"
          description="نقدم مجموعة متكاملة من الخدمات الطبية والتجميلية بأحدث التقنيات"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} variants={item}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-border/60 bg-white p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 grow text-sm text-text-secondary/80 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
