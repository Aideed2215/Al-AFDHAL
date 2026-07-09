import Link from "next/link";
import { Sparkles, Zap, Droplets, Heart, Syringe, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";

const serviceIcons: Record<string, LucideIcon> = {
  dermatology: Sparkles,
  "laser-hair-removal": Zap,
  "cosmetic-injections": Droplets,
  "cosmetic-dentistry": Heart,
  skincare: Syringe,
  "skin-peeling": Sparkles,
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] || Sparkles;
            return (
              <div
                key={service.slug}
                className="group flex flex-col h-full rounded-2xl border border-border/60 bg-white p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20"
              >
                {service.intent && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {service.intent}
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold font-heading text-text-primary">
                  {service.cardTitle ?? service.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary/60">
                  {service.priceFrom && <span>💰 {service.priceFrom}</span>}
                  {service.duration && <span>⏱ {service.duration}</span>}
                  {service.recovery && service.recovery !== "—" && <span>✅ {service.recovery}</span>}
                </div>

                <p className="mt-2 grow text-sm text-text-secondary/80 leading-relaxed">
                  {service.cardSummary ?? service.summary}
                </p>

                <div className="mt-4 flex items-center">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-bold text-primary opacity-0 transition-all duration-200 group-hover:opacity-100"
                  >
                    عرض التفاصيل ←
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
