import { MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import MapEmbed from "./MapEmbed";

export default function LocationContact() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="موقعنا"
          title="تفضل بزيارتنا"
          description="ننتظرك في عياداتنا بحي الحمراء، الرياض"
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <ScrollReveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-md shadow-black/5 h-[350px]">
              <MapEmbed />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2 flex flex-col gap-4" delay={0.1}>
            <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm shadow-black/5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-text-primary">العنوان</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-text-secondary/80">
                    {site.address.full.replace("، ", "\n")}
                  </p>
                  <p className="mt-2 text-xs text-text-secondary/50">
                    مواقف متاحة · مدخل خاص
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm shadow-black/5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-text-primary">
                    ساعات العمل
                  </h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-text-secondary/80">
                    {site.openingHours.map((h) => `${h.days}: ${h.hours}`).join("\n")}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
