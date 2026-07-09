import { site } from "@/data/site";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { faqs } from "@/data/faq";

const clinicId = `${site.url}#clinic`;
const websiteId = `${site.url}#website`;
const homepageId = `${site.url}#webpage`;
const logoUrl = `${site.url}/favicon.ico`;
const primaryImageUrl = `${site.url}/images/gallery/1.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      alternateName: site.nameEn,
      inLanguage: "ar-SA",
      publisher: { "@id": clinicId },
    },
    {
      "@type": "MedicalWebPage",
      "@id": homepageId,
      url: site.url,
      name: `${site.name} | ${site.nameEn}`,
      description: site.description,
      inLanguage: "ar-SA",
      isPartOf: { "@id": websiteId },
      about: { "@id": clinicId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: primaryImageUrl,
      },
      breadcrumb: { "@id": `${site.url}#breadcrumb` },
    },
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": clinicId,
      name: site.name,
      alternateName: site.nameEn,
      description: site.description,
      url: site.url,
      telephone: site.phones,
      logo: logoUrl,
      image: primaryImageUrl,
      sameAs: Object.values(site.social),
      hasMap: site.googleMapsDirectionUrl,
      priceRange: "$$$",
      paymentAccepted: "Cash, Credit Card, Debit Card",
      currenciesAccepted: "SAR",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.locality,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      contactPoint: site.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "appointments",
        areaServed: "SA",
        availableLanguage: ["Arabic", "English"],
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "14:00",
          closes: "22:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.stats.googleRating.toString(),
        reviewCount: site.stats.totalReviews.toString(),
        bestRating: "5",
      },
      areaServed: {
        "@type": "City",
        name: "Riyadh",
      },
      knowsAbout: [
        "Dermatology",
        "Laser hair removal",
        "Cosmetic injections",
        "Skin care",
        "Cosmetic dentistry",
      ],
      medicalSpecialty: ["Dermatology", "CosmeticSurgery", "Dentistry"],
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        url: `${site.url}/services/${service.slug}`,
        itemOffered: {
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.summary,
          image: service.image,
        },
      })),
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${site.url}/booking`,
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Appointment request",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: site.name,
          item: site.url,
        },
      ],
    },
    ...doctors.map((doctor) => ({
      "@type": "Physician" as const,
      "@id": `${site.url}#doctor-${doctor.id}`,
      name: doctor.name,
      description: doctor.bio,
      medicalSpecialty: doctor.id === 2 ? "CosmeticSurgery" as const : "Dermatology" as const,
      knowsAbout: doctor.specializations,
      worksFor: { "@id": clinicId },
    })),
    {
      "@type": "FAQPage",
      "@id": `${site.url}#faq`,
      inLanguage: "ar-SA",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
