# Google Staff Engineer Review - Afdal Clinic Website

Review date: 2026-07-08  
Review focus: React patterns, rerenders, duplication, folder structure, reusability, abstractions, naming, TypeScript, performance, and accessibility.

## Executive Summary

The project has moved in a good direction with shared modules such as `src/data/site.ts`, `src/data/faq.ts`, `src/data/testimonials.ts`, and `src/lib/booking/*`. That is the right foundation.

The remaining high-leverage work is to:

- Reduce unnecessary Client Components.
- Finish consolidating duplicated service and booking data.
- Improve booking abstractions before CRM/booking integrations arrive.
- Fix expensive hero/testimonial behavior.
- Improve accessibility in navigation, carousel, and form flows.
- Move shared components out of `src/app/components`.

## Findings

## 1. Too Much of the Page Is Client-Side React

**Severity:** High

**Reason:**  
Static sections such as `ServicesGrid`, `SectionHeading`, `LocationContact`, `Footer`, and parts of `WhyChooseUs` are marked with `"use client"` mainly because animation is embedded directly into the content layer. This increases JavaScript shipped to the browser and makes static content less efficient.

Examples:

- `src/app/components/ServicesGrid.tsx`
- `src/app/components/SectionHeading.tsx`
- `src/app/components/LocationContact.tsx`

**How to fix:**  
Split static markup from animation wrappers. Keep content and data rendering as Server Components, and isolate motion into small Client Components.

**Example code:**

```tsx
// components/sections/ServicesSection.tsx
// Server Component
import { services } from "@/data/services";
import Reveal from "@/components/motion/Reveal.client";

export function ServicesSection() {
  return (
    <section id="services">
      {services.map((service) => (
        <Reveal key={service.slug}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </section>
  );
}
```

```tsx
// components/motion/Reveal.client.tsx
"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

## 2. Canonical Service and Doctor Identity Is Still Duplicated

**Severity:** High

**Reason:**  
The project has `src/data/services.ts`, but `ServicesGrid` still defines a local `services` array. The booking page also defines separate service IDs like `laser` and `dentistry`, while the service pages use slugs such as `laser-hair-removal`.

This will cause problems when adding CRM, booking, analytics, or reporting because the same service can appear under multiple IDs.

**How to fix:**  
Use one canonical ID system. Prefer `service.slug` everywhere. Add optional display metadata if cards need shorter text.

**Example code:**

```ts
// data/services.ts
export interface Service {
  slug: string;
  title: string;
  summary: string;
  cardTitle?: string;
  cardSummary?: string;
  bookingEnabled?: boolean;
}

export const bookingServices = services
  .filter((service) => service.bookingEnabled !== false)
  .map((service) => ({
    id: service.slug,
    title: service.title,
  }));
```

```tsx
// components/sections/ServicesGrid.tsx
import { services } from "@/data/services";

{services.map((service) => (
  <ServiceCard
    key={service.slug}
    href={`/services/${service.slug}`}
    title={service.cardTitle ?? service.title}
    description={service.cardSummary ?? service.summary}
  />
))}
```

## 3. Invisible Testimonial Links Remain Keyboard-Focusable

**Severity:** High

**Reason:**  
`TestimonialsCarousel` renders every testimonial as an `<a>`. Hidden cards are only hidden with opacity and pointer events. `pointer-events: none` does not remove an element from keyboard tab order, so keyboard users can tab into invisible review cards.

**How to fix:**  
Set `tabIndex`, `aria-hidden`, and ideally render only the visible window of cards.

**Example code:**

```tsx
const isReachable = Boolean(level && level.op > 0.5);

<a
  href={t.reviewUrl}
  target="_blank"
  rel="noopener noreferrer"
  tabIndex={isReachable ? 0 : -1}
  aria-hidden={!isReachable}
  style={{
    opacity,
    pointerEvents: isReachable ? "auto" : "none",
    transform,
    zIndex,
  }}
>
  ...
</a>
```

## 4. Hero LCP Path Is Expensive

**Severity:** High

**Reason:**  
The hero uses large full-screen images. Two hero images are over 2 MB. At the same time, `next.config.ts` disables Next.js image optimization through `images.unoptimized: true`.

The hero also rotates images every 4 seconds and marks the current slide as priority. This can put unnecessary pressure on initial rendering and bandwidth.

**How to fix:**

- Convert hero images to AVIF or WebP.
- Keep the first image small and optimized.
- Preload only the first slide.
- Lazy load later slides.
- Consider delaying carousel activation until after first interaction or idle time.

**Example code:**

```tsx
<Image
  src={slides[current].src}
  alt={slides[current].alt}
  fill
  sizes="100vw"
  priority={current === 0}
  loading={current === 0 ? "eager" : "lazy"}
/>
```

## 5. Booking Flow Mixes UI State With Integration Behavior

**Severity:** Medium

**Reason:**  
The booking page still owns form state, validation orchestration, fake sending delay, and WhatsApp submission behavior. The helper files are a good start, but there is no provider abstraction for future CRM or real booking.

**How to fix:**  
Introduce a provider interface now, even if the first implementation only opens WhatsApp.

**Example code:**

```ts
export interface BookingRequest {
  patientName: string;
  phone: string;
  serviceId: string;
  doctorId?: string;
  preferredDate: string;
  notes?: string;
}

export interface BookingResult {
  status: "redirect" | "submitted" | "failed";
  redirectUrl?: string;
}

export interface BookingProvider {
  createBooking(input: BookingRequest): Promise<BookingResult>;
}
```

```ts
export class WhatsAppBookingProvider implements BookingProvider {
  async createBooking(input: BookingRequest): Promise<BookingResult> {
    return {
      status: "redirect",
      redirectUrl: buildWhatsAppUrl(input),
    };
  }
}
```

## 6. Naming Collides With Browser APIs

**Severity:** Medium

**Reason:**  
`src/lib/booking/types.ts` exports an interface named `FormData`, which shadows the browser built-in `FormData`. This creates avoidable ambiguity in form submission code.

**How to fix:**  
Rename it to a domain-specific name.

**Example code:**

```ts
export interface BookingFormValues {
  name: string;
  phone: string;
  serviceId: string;
  doctorId: string;
  preferredDate: string;
  notes: string;
}
```

## 7. TypeScript Is Strict, but Still Has Escape Hatches

**Severity:** Medium

**Reason:**  
`tsconfig.json` has `strict: true`, which is good. However, `allowJs: true` and `skipLibCheck: true` weaken confidence. Also, booking fields are plain strings instead of types derived from canonical service and doctor data.

**How to fix:**

- Disable `allowJs` if no JavaScript source files are needed.
- Keep `skipLibCheck` only if dependency type checking causes unacceptable build time or third-party issues.
- Derive IDs from canonical data.

**Example code:**

```ts
export const services = [
  { slug: "laser-hair-removal", title: "Laser Hair Removal" },
  { slug: "cosmetic-injections", title: "Cosmetic Injections" },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export interface BookingFormValues {
  serviceId: ServiceSlug | "";
}
```

## 8. Folder Structure Is Still Route-Coupled

**Severity:** Medium

**Reason:**  
Reusable components live under `src/app/components`. In the App Router, `app` should primarily describe routes and route-local UI. Shared sections, layout pieces, motion utilities, and UI primitives should live outside `app`.

**How to fix:**  
Move reusable components into `src/components`.

**Recommended structure:**

```text
src/
  app/
    page.tsx
    booking/
    services/[slug]/
  components/
    layout/
    sections/
    ui/
    motion/
  data/
  lib/
```

## 9. Mobile Navigation Uses Imperative Browser Navigation

**Severity:** Medium

**Reason:**  
The mobile navigation manually calls `history.replaceState`, `setTimeout`, and `window.location.href`. This is brittle, can trigger full reloads, and fights Next.js routing.

**How to fix:**  
Use `Link` and allow normal hash navigation, or use `router.push` if needed.

**Example code:**

```tsx
<Link
  href={link.href}
  onClick={() => setMobileOpen(false)}
  className="py-3 px-4 rounded-lg"
>
  {link.label}
</Link>
```

## 10. Newline Formatting Does Not Render as Intended

**Severity:** Low

**Reason:**  
`LocationContact` creates strings containing `\n` inside normal `<p>` elements. HTML collapses whitespace, so intended line breaks may not display.

**How to fix:**  
Use `whitespace-pre-line` or render each line as its own block.

**Example code:**

```tsx
<p className="mt-1 whitespace-pre-line text-sm text-text-secondary/80">
  {site.openingHours.map((h) => `${h.days}: ${h.hours}`).join("\n")}
</p>
```

## 11. ARIA Menu Role Is Unnecessary

**Severity:** Low

**Reason:**  
The mobile nav uses `role="menu"`, but site navigation is not an application menu. If `role="menu"` is used, children should follow menu semantics. For normal site navigation, use `<nav>`.

**How to fix:**

```tsx
<nav id="mobile-menu" aria-label="Mobile navigation">
  {navLinks.map((link) => (
    <Link key={link.href} href={link.href}>
      {link.label}
    </Link>
  ))}
</nav>
```

## 12. Animation Constants Are Not Centralized

**Severity:** Low

**Reason:**  
Motion variants and timing values are repeated across components. This makes animation behavior harder to tune globally and contributes to inconsistent motion.

**How to fix:**  
Create shared animation presets.

**Example code:**

```ts
// components/motion/presets.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
```

```tsx
<motion.div variants={fadeUp} initial="hidden" whileInView="show">
  {children}
</motion.div>
```

## Recommended Priority Order

1. Consolidate service and doctor IDs across services, booking, CRM-prep, and UI.
2. Move shared components out of `src/app/components`.
3. Split static sections from animation client islands.
4. Fix testimonial carousel keyboard accessibility.
5. Optimize hero images and first-load behavior.
6. Add a booking provider abstraction.
7. Rename `FormData` to `BookingFormValues`.
8. Tighten TypeScript config and derive domain types from canonical data.
9. Simplify mobile navigation.
10. Centralize motion presets.

## Closing Assessment

The codebase is visually strong and already moving toward better shared data and booking helpers. The largest architectural issue is not the presence of React or Framer Motion; it is that static content, animation, and domain data are still too tightly coupled.

The best next step is a focused refactor, not a rewrite:

- canonical data,
- server-first sections,
- smaller client islands,
- typed integration boundaries,
- and accessibility fixes in interactive components.

