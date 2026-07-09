import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import MotionWrapper from "@/app/components/MotionWrapper";
import StructuredData from "@/app/components/StructuredData";
import { site } from "@/data/site";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const defaultOgImage = {
  url: "/images/gallery/1.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} - ${site.nameEn}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.nameEn,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Healthcare",
  title: {
    default: `عيادات ${site.name} | ${site.nameEn} - Dermatology, Cosmetics & Laser`,
    template: `%s | عيادات ${site.name}`,
  },
  description: site.description,
  keywords: [
    "عيادات أفضل كلينك",
    "أفضل كلينك",
    "Afdal Clinic",
    "ديرماتولوجي",
    "تجميل",
    "ليزر",
    "الرياض",
    "عناية بالبشرة",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `عيادات ${site.name} | ${site.nameEn}`,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "ar_SA",
    siteName: site.name,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.nameEn}`,
    description: site.description,
    images: [defaultOgImage.url],
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body bg-background text-heading">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-lg focus:outline-2 focus:outline-primary"
        >
          تخطٍ إلى المحتوى
        </a>
        <StructuredData />
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}
