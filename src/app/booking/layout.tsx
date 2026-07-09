import type { Metadata } from "next";
import { site } from "@/data/site";

const bookingImage = "/images/gallery/1.jpg";

export const metadata: Metadata = {
  title: "احجز موعدك",
  description: `احجز موعدك في عيادات ${site.name}. املأ البيانات وسنتواصل معك لتأكيد الموعد عبر واتساب.`,
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    url: `${site.url}/booking`,
    type: "website",
    locale: "ar_SA",
    siteName: site.name,
    images: [
      {
        url: bookingImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
    title: `احجز موعدك | ${site.name}`,
    description: `احجز موعدك في عيادات ${site.name}. املأ البيانات وسنتواصل معك لتأكيد الموعد.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Book an appointment | ${site.nameEn}`,
    description: site.description,
    images: [bookingImage],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
