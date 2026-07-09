import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${site.nameEn}`,
  description: `Website and appointment terms for ${site.nameEn}.`,
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="content" className="min-h-screen bg-background pt-24">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-bold text-primary hover:underline">
            Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-extrabold font-heading text-text-primary">
            Terms and Conditions
          </h1>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-text-secondary">
            <p>
              Website content is provided for general clinic information and does
              not replace a consultation with a qualified healthcare professional.
            </p>
            <p>
              Appointment requests are not confirmed until the clinic contacts the
              visitor through phone or WhatsApp.
            </p>
            <p>
              Treatment suitability, pricing, duration, and results vary by case
              and are confirmed after professional assessment at {site.nameEn}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
