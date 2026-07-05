import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import MotionWrapper from "@/app/components/MotionWrapper";
import StructuredData from "@/app/components/StructuredData";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "عيادات أفضل كلينك | Afdal Clinic - Dermatology, Cosmetics & Laser",
  description:
    "أفضل كلينك هي وجهتك الأولى للعناية بالبشرة، التجميل، والليزر في الرياض. احجز موعدك الآن مع أمهر الأطباء.",
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
  openGraph: {
    title: "عيادات أفضل كلينك | Afdal Clinic",
    description: "اختيارك الأول - جلدية، تجميل، ليزر",
    type: "website",
    locale: "ar_SA",
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
      className={`${tajawal.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body bg-background text-text-primary">
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
