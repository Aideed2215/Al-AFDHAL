import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CheckCircle, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | عيادات أفضل كلينك`,
    description: service.summary,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | أفضل كلينك`,
      description: service.summary,
    },
  };
}

/** Inline JSON-LD for Article + HowTo schema */
function ServiceSchema({ service }: { service: typeof services[number] }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: service.title,
        description: service.summary,
        author: { "@type": "Organization", name: "عيادات أفضل كلينك" },
        publisher: { "@type": "Organization", name: "عيادات أفضل كلينك" },
      },
      {
        "@type": "HowTo",
        name: service.title,
        description: service.summary,
        step: service.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceSchema service={service} />
      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        {/* Back link */}
        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            العودة إلى الرئيسية
          </Link>
        </div>

        {/* Header */}
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold font-heading text-text-primary sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-3xl">
            {service.summary}
          </p>
        </section>

        {/* Full description */}
        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/60 bg-white p-8">
            <p className="text-base text-text-secondary leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white border-y border-border/40">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-heading text-text-primary">
              مميزات الخدمة
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm text-text-secondary">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HowTo steps */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold font-heading text-text-primary">
            خطوات العلاج
          </h2>
          <div className="mt-8 space-y-6">
            {service.steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-text-primary">{step.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-y border-border/40">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-heading text-text-primary">
              الأسئلة الشائعة
            </h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border/60 bg-background/50">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-bold text-text-primary">
                    {faq.q}
                  </summary>
                  <div className="border-t border-border/40 px-5 py-4 text-sm text-text-secondary leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold font-heading text-text-primary">
            احجز موعدك الآن
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            فريقنا مستعد لخدمتك، اتصل بنا أو راسلنا على واتساب
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href={`https://wa.me/966581151740?text=${encodeURIComponent(`مرحباً، أرغب بالاستفسار عن خدمة ${service.title} في عيادة أفضل كلينك`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover"
            >
              احجز عبر واتساب
            </a>
            <a
              href="tel:+966581151740"
              className="rounded-xl border border-primary/20 bg-white px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-glow/50"
            >
              اتصل بنا
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
