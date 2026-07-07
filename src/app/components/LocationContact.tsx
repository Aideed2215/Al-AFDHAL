"use client";

import { MapPin, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.161959918689!2d46.7625779!3d24.7696675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0137a006078d%3A0x9fa9809105bd943!2z2YXYs9i52YUg2KfZhNiz2KfZhdmKINmF2YjZhNin2YTZhdmK!5e0!3m2!1sar!2ssa!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع عيادات أفضل كلينك"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm shadow-black/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading text-text-primary">العنوان</h3>
                    <p className="mt-1 text-sm text-text-secondary/80">
                      الرياض - حي الحمراء
                      <br />
                      طريق الملك عبدالله الفرعي
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=24.7696675,46.7625779"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      احصل على الاتجاهات ←
                    </a>
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
                    <p className="mt-1 text-sm text-text-secondary/80">
                      السبت - الخميس: ٩:٠٠ ص - ١٠:٠٠ م
                      <br />
                      الجمعة: ٢:٠٠ م - ١٠:٠٠ م
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
