"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { site } from "@/data/site";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-glow/30 transition-colors hover:bg-glow/50 cursor-pointer"
        aria-label="تحميل الخريطة"
      >
        <MapPin size={32} className="text-primary" />
        <span className="text-sm font-bold text-primary">اضغط لتحميل الخريطة</span>
        <a
          href={site.googleMapsDirectionUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary-hover transition-colors"
        >
          <Navigation size={12} />
          فتح في Google Maps
        </a>
      </button>
    );
  }

  return (
    <iframe
      src={site.googleMapsEmbedUrl}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="موقع عيادات أفضل كلينك"
    />
  );
}
