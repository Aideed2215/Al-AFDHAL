"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
        {label && (
          <span className="inline-block rounded-full bg-primary/10 px-5 py-2 text-base font-bold text-primary mb-4">
            {label}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
