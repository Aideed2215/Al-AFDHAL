# Architecture Review - Afdal Clinic Website

Review date: 2026-07-08  
Project path: `C:\Users\Maideed\Documents\Websites\1`

## 1. Executive Summary

This project is a static marketing website for Afdal Clinic, built with Next.js App Router, React, Tailwind CSS, and Framer Motion. It is configured for static export and Cloudflare Pages deployment.

The site has a strong visual direction, clear landing-page sections, service detail pages, basic SEO foundations, sitemap generation, robots configuration, and structured data. As a public clinic website, the current implementation is a solid starting point.

From an architecture perspective, the project is still closer to a static landing site than a scalable platform. Before adding CRM or real booking integrations, the codebase should be cleaned up around shared data, configuration, component boundaries, and integration readiness.

Main risks:

- Too many components are client-side because animation and content are tightly coupled.
- Services, doctors, FAQs, contact details, WhatsApp links, testimonials, and gallery data are duplicated across files.
- Booking currently only builds a WhatsApp message; there is no real booking backend, availability model, or CRM lead pipeline.
- The static export setup limits native Next.js API routes, so future integrations will need an external endpoint or a deployment model change.
- Some files and style hooks appear unused or incomplete, such as `GalleryMasonry.tsx`, `hero-data.ts`, `bg-glow`, and `ambientShift`.
- The project lacks tests, architectural documentation, and a project-specific README.

Overall assessment: good static website foundation, but it needs a small architecture cleanup before CRM or booking integrations are added.

## 2. Scope

Reviewed:

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `wrangler.jsonc`
- `src/app/**`
- `src/data/**`
- `public/robots.txt`
- image assets under `public/images`

Excluded from architectural review:

- `node_modules`
- `.next`
- `out`
- `.wrangler`

## 3. Technology Stack

- Framework: Next.js 16 App Router
- UI: React 19
- Styling: Tailwind CSS 4
- Animation: Framer Motion
- Icons: lucide-react
- Deployment: static export with Cloudflare Pages
- Data source: static TypeScript files and inline constants

## 4. Folder Structure

Current structure:

```text
src/
  app/
    booking/
      page.tsx
    components/
      hero/
      *.tsx
    services/
      [slug]/
        page.tsx
    globals.css
    layout.tsx
    page.tsx
    sitemap.ts
  data/
    clinicStats.ts
    doctors.ts
    gallery.ts
    services.ts
public/
  images/
  robots.txt
```

Strengths:

- The App Router structure is clear.
- The homepage is composed from named sections, which makes the page easy to scan.
- Service detail pages are generated from `src/data/services.ts`, which is a good fit for static export.
- There is already a `src/data` directory for some domain data.

Issues:

- `src/app/components` mixes layout sections, UI helpers, motion wrappers, schema, and feature-specific components.
- Several data sources are still inline inside components instead of living in `src/data`.
- There is no shared `site.ts` or config module for clinic name, base URL, phone numbers, WhatsApp number, address, social links, and map coordinates.
- There is no clear separation between UI components, page sections, domain data, SEO/schema helpers, and future integrations.
- Some files appear unused or experimental:
  - `src/app/components/GalleryMasonry.tsx`
  - `src/app/components/hero/hero-data.ts`
  - `public/prototype-*`

Recommended structure:

```text
src/
  app/
    booking/
    services/[slug]/
    layout.tsx
    page.tsx
    sitemap.ts
  components/
    layout/
    sections/
    ui/
    motion/
  data/
    site.ts
    services.ts
    doctors.ts
    gallery.ts
    testimonials.ts
    faq.ts
  lib/
    booking/
      types.ts
      whatsapp.ts
      adapters.ts
    crm/
      types.ts
      leadPayload.ts
    seo/
      metadata.ts
      structuredData.ts
  styles/
    globals.css
```

## 5. Component Architecture

The homepage composition in `src/app/page.tsx` is clean:

- Navbar
- Hero
- TrustBar
- ServicesGrid
- WhyChooseUs
- DoctorSpotlight
- FAQ
- TestimonialsCarousel
- StoryGallery
- FinalCTA
- LocationContact
- ScrollDownIndicator
- Footer

Strengths:

- The section-based layout is appropriate for a clinic website.
- Component names are understandable.
- `SectionHeading` and `ScrollReveal` reduce some repeated presentation patterns.
- Service pages reuse typed service data and generate static paths.

Issues:

- Most components use `"use client"`, even sections that are mostly static content.
- Framer Motion is coupled directly to content and layout, which increases client JavaScript.
- Data and UI are mixed in multiple files.
- `booking/page.tsx` is a large single component that contains data, validation, URL building, state, and presentation.

Recommended direction:

- Keep static content as Server Components where possible.
- Move only interactive parts into small Client Components.
- Move shared data and constants into `src/data`.
- Move booking and WhatsApp helpers into `src/lib/booking`.

Example future booking split:

```text
booking/page.tsx
booking/BookingForm.client.tsx
lib/booking/types.ts
lib/booking/whatsapp.ts
lib/booking/validation.ts
```

## 6. Code Duplication

High-duplication areas:

- Services are defined in `src/data/services.ts`, but also repeated in `ServicesGrid.tsx` and `booking/page.tsx`.
- Doctors are defined in `src/data/doctors.ts`, but a separate doctor list exists in `booking/page.tsx`.
- FAQs are repeated across `FAQ.tsx`, `StructuredData.tsx`, and service data.
- Phone numbers and WhatsApp links are repeated in `Navbar`, `HeroContent`, `FinalCTA`, `Footer`, `DoctorSpotlight`, service pages, booking page, and structured data.
- Gallery data exists in `src/data/gallery.ts`, while `GalleryMasonry.tsx` defines another gallery list and appears unused.

Recommendation:

Create a single source of truth:

```text
src/data/site.ts
src/data/services.ts
src/data/doctors.ts
src/data/faq.ts
src/data/testimonials.ts
src/data/gallery.ts
```

Then derive UI, structured data, sitemap, booking options, and WhatsApp messages from those shared sources.

## 7. Performance Review

Strengths:

- `next/image` is used in several important places.
- Fonts use `display: "swap"`.
- `prefers-reduced-motion` exists in CSS.
- Static export can be very fast when images and JavaScript are optimized.

Issues:

- Hero images are large:
  - `hero-1.jpg`: about 2.18 MB
  - `hero-3.jpg`: about 2.14 MB
  - `hero-2.jpg`: about 553 KB
- `next.config.ts` uses `images.unoptimized: true`, so Next.js image optimization is disabled.
- The homepage ships a lot of client JavaScript because most sections use Framer Motion.
- Multiple scroll listeners and observers exist across `Navbar`, `ScrollDownIndicator`, `TrustBar`, `DoctorSpotlight`, and `ScrollReveal`.
- The Google Maps iframe can add weight even with lazy loading.
- Some styling hooks appear undefined or incomplete: `bg-glow`, `ambientShift`, `flip-card`, `flip-card-inner`, `flip-front`, and `flip-back`.

Recommendations:

- Convert hero images to WebP or AVIF and target much smaller first-load image sizes.
- Load only the first hero image with priority; defer other carousel images.
- Convert mostly static sections to Server Components.
- Use dynamic imports for heavy interactive sections like testimonials and gallery.
- Load the Google Map on user interaction or use a static preview first.

## 8. Accessibility Review

Strengths:

- The root document uses `lang="ar"` and `dir="rtl"`.
- A skip link is present.
- Several buttons include `aria-label`.
- FAQ buttons use `aria-expanded`.
- The gallery modal uses `role="dialog"` and `aria-modal`.
- Framer Motion is configured with `reducedMotion="user"`.

Issues:

- Booking form labels are not connected to inputs with `htmlFor` and `id`.
- Validation errors do not use `aria-invalid`, `aria-describedby`, or a live region.
- Testimonial cards use clickable `div` elements instead of accessible links or buttons.
- Gallery modal focus is moved on open, but focus is not trapped and not restored to the trigger after close.
- The mobile menu button should include `aria-expanded` and `aria-controls`.
- Some low-opacity text over images or gradients should be contrast-tested.

Recommendations:

- Add proper label/input associations in the booking form.
- Add accessible validation semantics.
- Convert clickable testimonial cards to `<a>` or `<button>`.
- Add focus trap and focus restoration for modals.
- Run Lighthouse and axe accessibility checks after local build permissions are fixed.

## 9. SEO Review

Strengths:

- Global metadata exists in `layout.tsx`.
- Service pages generate metadata from service data.
- `sitemap.ts` includes service pages.
- `robots.txt` points to the sitemap.
- JSON-LD exists for local business, physicians, FAQs, and service content.
- Service slugs are clean and static-export friendly.

Issues:

- `https://afdalclinic.com` is hardcoded in multiple places.
- `sitemap.ts` uses `new Date()` for `lastModified`, which makes every page look updated at every build.
- Canonical metadata is missing.
- Open Graph images are not defined.
- `/booking` does not define page-specific metadata.
- Medical content should include stronger trust signals, such as privacy, disclaimers, licensing details if available, and content update dates.

Recommendations:

- Add `metadataBase` and canonical URLs.
- Move base URL and site identity into `src/data/site.ts`.
- Add Open Graph images globally and per important page.
- Add booking page metadata.
- Build JSON-LD from shared data instead of duplicated literals.
- Add a privacy policy before sending booking data to any CRM.

## 10. Maintainability

Strengths:

- TypeScript strict mode is enabled.
- Component names are readable.
- Core service and doctor data have TypeScript interfaces.
- ESLint is configured with Next.js core web vitals.

Issues:

- README is still the default Next.js README.
- There are no tests.
- No shared config module exists.
- Tailwind class strings are very long inside JSX.
- Unused or experimental files remain in the project.
- Booking and contact behavior is repeated manually across files.

Recommendations:

- Replace README with project-specific documentation.
- Add shared data/config modules.
- Add small smoke tests for key pages.
- Remove unused files or document why they exist.
- Add helper functions for WhatsApp links and booking messages.

## 11. Scalability

Current scalability is acceptable for a small static clinic website, but the architecture will become harder to maintain if the project adds:

- More doctors
- Multiple branches
- More service categories
- Seasonal offers
- Blog or educational content
- CRM integration
- Real appointment booking
- Multilingual support

Key scalability risks:

- Duplicated static data.
- No stable shared IDs across services and doctors.
- No API or integration adapter layer.
- Static export prevents native dynamic Next.js API routes.
- No backend validation for booking data.

Recommended growth path:

1. Clean the static architecture.
2. Centralize data and configuration.
3. Add integration types and adapters.
4. Introduce an external API layer when CRM or booking is needed.
5. Consider CMS or dynamic hosting only when content operations require it.

## 12. Future CRM Integration

Current state:

- No CRM integration exists.
- WhatsApp links are used as the lead capture mechanism.
- Booking information is not stored or tracked as structured lead data.

Recommended CRM lead model:

```ts
type LeadSource = "homepage" | "booking_page" | "service_page" | "doctor_section";

interface CRMLead {
  fullName: string;
  phone: string;
  serviceId?: string;
  doctorId?: string;
  preferredDate?: string;
  notes?: string;
  source: LeadSource;
  consent: boolean;
  locale: "ar-SA";
}
```

Recommended architecture:

```text
UI form
  -> client validation
  -> secure endpoint
  -> CRM adapter
  -> CRM provider
  -> success/failure tracking
  -> WhatsApp fallback
```

Important notes:

- Do not expose CRM API keys in the browser.
- Use a secure middleware endpoint, such as a Cloudflare Worker.
- Add consent before submitting user data.
- Add spam protection, such as Cloudflare Turnstile.
- Add failure handling and logging.
- Avoid collecting sensitive medical data unless absolutely required.

Best fit with the current deployment:

- Keep Cloudflare Pages for the static site.
- Add a Cloudflare Worker for CRM lead submission.
- Store API keys as Cloudflare environment variables.

## 13. Future Booking Integration

Current state:

- `/booking` collects user input and opens WhatsApp.
- There is no real availability, time slot selection, confirmation, cancellation, or backend validation.

Recommended booking model:

```ts
interface BookingRequest {
  patientName: string;
  phone: string;
  serviceId: string;
  doctorId?: string;
  preferredDate: string;
  preferredTime?: string;
  branchId?: string;
  notes?: string;
  timezone: "Asia/Riyadh";
}
```

Recommended booking provider interface:

```ts
interface BookingProvider {
  getServices(): Promise<Service[]>;
  getDoctors(serviceId?: string): Promise<Doctor[]>;
  getAvailability(input: AvailabilityQuery): Promise<Slot[]>;
  createBooking(input: BookingRequest): Promise<BookingResult>;
}
```

Initial provider:

- `whatsappBookingProvider`

Future providers:

- CRM booking provider
- Calendly-style provider
- Custom clinic system provider
- Odoo provider
- Zoho provider

UX recommendations:

- Ask for service first, then show relevant doctors.
- Replace plain date input with available appointment slots.
- Show clear states: pending confirmation, confirmed, failed, fallback via WhatsApp.
- Keep WhatsApp as a fallback even after adding real booking.

## 14. Security and Privacy

Current risks:

- Booking data is sent through WhatsApp links.
- There is no privacy policy.
- There is no explicit consent checkbox.
- There is no server-side validation.
- There is no spam protection.

Recommendations:

- Add a privacy policy page.
- Add consent to the booking flow.
- Use a backend or Cloudflare Worker for CRM submissions.
- Never expose provider secrets in frontend code.
- Minimize collected user data.
- Avoid storing medical details unless required and properly protected.

## 15. Testing and Verification

Attempted checks:

- `npm run lint`
- `npm run build`

Results:

- The first attempt failed because Windows blocked `npm.ps1`.
- Running through `npm.cmd` failed because Node could not access the parent path:

```text
Error: EPERM: operation not permitted, lstat 'C:\Users\Maideed'
```

Because of this environment permission issue, lint/build could not be verified from this session.

Recommended checks after fixing local permissions:

```bash
npm run lint
npm run build
```

Then run:

- Lighthouse Performance
- Lighthouse Accessibility
- Lighthouse SEO
- axe accessibility scan
- Manual mobile QA

## 16. Priority Action Plan

### P0 - Before CRM or Real Booking

- Centralize services, doctors, FAQs, testimonials, gallery, and contact details.
- Move phone numbers, WhatsApp number, base URL, address, and social links into `src/data/site.ts`.
- Remove or document unused files.
- Define or remove incomplete styling hooks such as `bg-glow`, `ambientShift`, and flip-card classes.
- Compress and convert hero images.
- Add metadata for `/booking`.

### P1 - Technical Quality

- Split the booking page into form, validation, and integration helpers.
- Convert static sections to Server Components where practical.
- Reduce broad Framer Motion usage.
- Improve accessibility for forms, modals, menus, and carousel cards.
- Replace the default README.

### P2 - Integration Readiness

- Create `src/lib/crm`.
- Create `src/lib/booking`.
- Define `CRMLead` and `BookingRequest` types.
- Add adapter interfaces.
- Prepare a Cloudflare Worker or equivalent secure endpoint.
- Add privacy policy and consent.

### P3 - Platform Growth

- Add real availability.
- Add content operations support if services/articles grow.
- Add analytics and conversion tracking with privacy in mind.
- Consider CMS or dynamic hosting only when operational needs justify it.

## 17. Final Assessment

The project is visually strong and suitable as a static clinic marketing website. The most important next step is not a full rewrite; it is a focused architecture cleanup.

Centralizing data, reducing client-side JavaScript, improving accessibility, and introducing integration boundaries will make the project much easier to extend into CRM and real appointment booking later.
