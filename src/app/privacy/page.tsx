import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.nameEn}`,
  description: `Privacy and patient information policy for ${site.nameEn}.`,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="content" className="min-h-screen bg-background pt-24">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-bold text-primary hover:underline">
            Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-extrabold font-heading text-text-primary">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-text-secondary">
            <p>
              {site.nameEn} collects appointment details only to contact visitors,
              confirm requests, and provide clinic services.
            </p>
            <p>
              Information submitted through booking, phone, or WhatsApp is handled
              confidentially and shared only with the clinic team responsible for
              appointment coordination and patient care.
            </p>
            <p>
              Visitors can contact the clinic at {site.phones[0]} to update or
              request removal of submitted contact information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
