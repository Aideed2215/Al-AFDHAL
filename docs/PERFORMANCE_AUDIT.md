# Next.js Performance Audit

Website audited: Afdal Clinic Next.js site

Audit date: 2026-07-09

Role lens: Next.js Performance Engineer

Scope: Images, fonts, bundle size, dynamic imports, lazy loading, hydration, Server Components, SEO, Core Web Vitals, Lighthouse readiness, and optimization roadmap.

## Executive Summary

The site has a strong static-generation foundation: the production build succeeds, and the homepage, booking page, sitemap, and service pages are exported as static/SSG pages. That is a good baseline for TTFB and crawlability.

The biggest performance problems are client-side and asset-related:

- The hero image is a 6000x4000 JPG weighing 2.18 MB and is preloaded as the LCP image.
- Another hero slide is 2.14 MB, and the third is 553 KB.
- `next.config.ts` sets `images.unoptimized: true`, so `next/image` is not generating responsive image sizes or modern formats.
- Almost every homepage section is a Client Component because Framer Motion is used broadly.
- Framer Motion is loaded across static content such as footer, pricing, contact, cards, headings, and trust sections.
- The homepage export is about 190 KB HTML and loads several large JS chunks, including 227 KB, 150 KB, 131 KB, and 83 KB uncompressed chunks.
- The homepage preloads 8 Tajawal font files, which competes with hero image priority.
- Google Maps iframe is lazy-loaded, which is good, but still a third-party performance risk when the user reaches contact.
- Lighthouse is not installed locally, so no Lighthouse score was generated. The build and asset evidence still shows clear LCP, INP, and Total Blocking Time risks.

Expected top wins:

1. Convert and resize hero images.
2. Re-enable image optimization or generate responsive static image variants.
3. Remove Framer Motion from static sections.
4. Split heavy interactive sections with dynamic imports.
5. Reduce font weights/preloads.

## Build Findings

Command run:

```bash
npm run build
```

Result:

- Build completed successfully.
- Next.js version: 16.2.10 with Turbopack.
- Output mode: static export.
- Routes:
  - `/` static.
  - `/booking` static.
  - `/services/[slug]` SSG with generated paths.
  - `/sitemap.xml` static.

This is good for:

- Low TTFB on static hosting/CDN.
- SEO crawlability.
- Reliability under traffic.

Main limitation:

- Static export plus `images.unoptimized: true` removes Next's normal runtime image optimization benefits.

## Asset Size Findings

### Largest Public Images

| Image | Size | Dimensions | Performance Risk |
|---|---:|---:|---|
| `hero-1.jpg` | 2,178,547 bytes | 6000x4000 | Critical LCP risk |
| `hero-3.jpg` | 2,142,724 bytes | 5615x3875 | Critical carousel/network risk |
| `hero-2.jpg` | 552,626 bytes | 3840x2160 | Medium risk |
| `1005.jpg` | 468,926 bytes | 4032x2268 | Booking page background risk |
| `1001.jpg` | 204,682 bytes | 1000x667 | Acceptable but can improve |
| `1002.jpg` | 187,962 bytes | 1000x667 | Acceptable but can improve |
| `1000.jpg` | 177,906 bytes | 1000x667 | Acceptable but can improve |
| `1.jpg` | 42,534 bytes | 736x736 | Good |

### Key Exported Files

| File | Raw Size | Gzip Size |
|---|---:|---:|
| `out/index.html` | 190,350 bytes | 26,442 bytes |
| Main large JS chunk | 227,315 bytes | 70,981 bytes |
| Second large JS chunk | 149,785 bytes | 40,458 bytes |
| 131 KB JS chunk | 131,067 bytes | 44,190 bytes |
| 83 KB JS chunk | 83,284 bytes | 26,711 bytes |
| CSS chunk | 76,264 bytes | 11,707 bytes |
| `hero-1.jpg` | 2,178,547 bytes | 2,174,803 bytes |
| `hero-3.jpg` | 2,142,724 bytes | 2,131,938 bytes |
| `hero-2.jpg` | 552,626 bytes | 539,263 bytes |

The important pattern: JS and HTML compress well; JPG payloads do not. Image optimization is the highest priority.

## Images

### Current Problems

1. `images.unoptimized: true` disables Next image optimization.
2. The LCP hero image is served at full 6000x4000 resolution.
3. The hero carousel has three large background images, but only one should matter for initial load.
4. The first hero image is preloaded, but it is far too large.
5. Remote gallery images from `clinicksa.com` are used directly, which means:
   - no local control over format,
   - no predictable CDN behavior,
   - no responsive generation through static export,
   - possible third-party latency.
6. Booking page uses a 4032x2268 background image through CSS `backgroundImage`, bypassing `next/image`.
7. Hero image uses `fill` and `sizes="100vw"`, which is conceptually right, but because optimization is off, the browser still receives the original file.

### Recommendations

#### P0: Generate Responsive Hero Assets

Create these variants for each hero:

- Desktop: 1920px wide AVIF/WebP.
- Tablet: 1280px wide AVIF/WebP.
- Mobile: 768px wide AVIF/WebP.
- Fallback JPG at compressed quality.

Target sizes:

- Hero desktop AVIF/WebP: 180-350 KB.
- Hero mobile AVIF/WebP: 60-140 KB.
- Non-active carousel slides: lazy-load after first interaction or idle.

Expected impact:

- LCP improvement: high.
- Mobile data reduction: 1.5-2 MB on first view.
- Lighthouse Performance: likely +10-25 points depending network/device.

#### P0: Do Not Preload Multi-MB Images

Keep preload only after reducing the LCP image. Preloading a 2.18 MB image forces the browser to prioritize a huge resource.

Recommended:

- Preload optimized mobile/desktop `picture` candidate.
- Avoid preloading non-first carousel slides.

#### P1: Replace CSS Background on Booking Page

Use an optimized image element, or generate a much smaller CSS background:

- Current `1005.jpg`: 468 KB at 4032x2268.
- Target: 120-220 KB desktop, 50-100 KB mobile.

#### P1: Localize Remote Gallery Images

Download, license-check, resize, and serve local optimized versions of gallery images.

Expected impact:

- Better image cache predictability.
- Fewer third-party DNS/TLS requests.
- Lower layout and image loading variability.

## Fonts

### Current State

The layout imports Tajawal twice:

- Heading variable with weights 400, 500, 700, 800.
- Body variable with weights 400, 500, 700.

The exported homepage preloads 8 `.woff2` font files.

Largest font files:

- Around 8.8-10.5 KB each.
- Total font preload bytes are not massive, but 8 preloads compete with LCP image discovery and can delay first render on slower devices.

### Problems

1. Too many weights are loaded upfront.
2. Same family is instantiated twice.
3. Heading and body both use Tajawal, but configured as separate font objects.
4. `font-display: swap` is good, but preload count is higher than needed.

### Recommendations

#### P1: Reduce Font Weights

Recommended first pass:

- Body: 400, 500.
- Heading: 700, 800.

If 800 is not visually essential, remove it and use 700.

Expected impact:

- Lower preload contention.
- Small but real FCP/LCP improvement.
- Cleaner font cache.

#### P1: Use One Tajawal Import

Use a single `Tajawal` import with required weights and one CSS variable if the same family is used for both body and headings.

Expected impact:

- Simplifies CSS.
- May reduce duplicate font manifest behavior.

## Bundle Size

### Current Evidence

Production static chunks include:

- 227 KB JS chunk.
- 150 KB JS chunk.
- Multiple 131 KB chunks.
- 112 KB polyfill chunk.
- 83 KB JS chunk.
- 76 KB CSS.

The largest component files are:

- `DoctorSpotlight.tsx`: 9.6 KB source.
- `TestimonialsCarousel.tsx`: 8.9 KB source.
- `Footer.tsx`: 8.3 KB source.
- `Navbar.tsx`: 8.0 KB source.
- `LocationContact.tsx`: 5.6 KB source.
- `StoryGallery.tsx`: 4.9 KB source.

Source size is not the same as bundle size, but these files correlate with shipped interactivity and hydration.

### Main Bundle Drivers

1. Framer Motion.
2. Lucide icons.
3. Client components across nearly the entire homepage.
4. Carousel/animation logic.
5. Gallery modal logic.
6. Doctor selector logic.
7. Booking form state and validation.

### Recommendations

#### P0: Remove Framer Motion From Static Sections

Candidate sections to convert to Server Components or mostly static components:

- `Footer`
- `PricingPreview`
- `LocationContact`
- `FinalCTA`
- `ServicesGrid`
- `WhyChooseUs`
- `SectionHeading`
- `StoryGalleryItem`

Use CSS transitions/intersection animation only where meaningful, or remove reveal animations entirely for below-the-fold static content.

Expected impact:

- Lower JS.
- Lower hydration time.
- Better INP/TBT.
- Less main-thread work on scroll.

#### P1: Split Heavy Interactive Sections

Use `next/dynamic` for non-critical interactive sections:

- `DoctorSpotlight`
- `TestimonialsCarousel`
- `StoryGallery`
- `ScrollDownIndicator`

Recommended:

```tsx
const DoctorSpotlight = dynamic(() => import("./components/DoctorSpotlight"), {
  ssr: true,
});
```

For components that are entirely client-only and far below fold, consider:

```tsx
const TestimonialsCarousel = dynamic(() => import("./components/TestimonialsCarousel"), {
  ssr: false,
  loading: () => null,
});
```

Use `ssr: false` sparingly because it trades SEO/HTML completeness for less hydration.

Expected impact:

- Better initial load.
- Lower initial JS parse/execute.
- Potential Lighthouse TBT reduction.

#### P1: Replace 3D Testimonials Carousel

The carousel uses state, timers, resize observer, transforms, and many animated cards. A static review grid is faster, more accessible, and likely better for conversion.

Expected impact:

- Lower JS and hydration.
- Better INP.
- Less visual instability risk.

## Dynamic Imports

### Current State

No `dynamic()` imports were found.

### Recommendation

Add dynamic imports based on viewport priority:

Critical:

- Navbar
- Hero
- First CTA
- Pricing preview if above fold

Defer:

- Doctor spotlight
- Testimonials carousel
- Gallery modal
- Scroll indicator
- Map/contact interactive pieces

Best first implementation:

- Convert static sections to Server Components first.
- Then dynamically import the remaining heavy client sections.

## Lazy Loading

### Current Wins

- Non-first hero slides set `loading="lazy"`.
- Gallery images use lazy loading.
- Google Maps iframe uses `loading="lazy"`.

### Problems

1. Hero carousel still keeps slide logic and image components in the initial client bundle.
2. Lazy loading does not help enough when image optimization is disabled.
3. The iframe still loads a heavy third-party map once reached.
4. Gallery modal image is part of a client component for the entire gallery.

### Recommendations

#### P1: Map Placeholder

Replace immediate Google Maps iframe with a static map/image placeholder and a button:

- "Open in Google Maps"
- "Load map"

Only load iframe after user intent.

Expected impact:

- Lower third-party work.
- Better Lighthouse best-practices/performance.
- Less memory and network use.

#### P1: Idle-Load Carousel Slides

Load non-first hero slides after:

- `requestIdleCallback`, or
- first user interaction, or
- after LCP has completed.

## Hydration

### Current Problem

Nearly all homepage sections are Client Components:

- `Navbar`
- `Hero`
- `HeroContent`
- `PricingPreview`
- `TrustBar`
- `ServicesGrid`
- `WhyChooseUs`
- `DoctorSpotlight`
- `FAQ`
- `TestimonialsCarousel`
- `StoryGallery`
- `FinalCTA`
- `LocationContact`
- `Footer`
- `SectionHeading`
- `ScrollReveal`
- `StoryGalleryItem`
- `MotionWrapper`
- `ScrollDownIndicator`

This means the browser has to hydrate far more UI than the visitor can interact with immediately.

### Recommendations

#### P0: Server-First Component Boundary

Convert default sections to Server Components:

- `ServicesGrid`
- `WhyChooseUs`
- `PricingPreview`
- `FinalCTA`
- `LocationContact` except map loader if interactive
- `Footer`
- `SectionHeading`

Keep Client Components only for:

- Navbar mobile menu and scroll state.
- Hero carousel if retained.
- FAQ accordion.
- Doctor selector.
- Gallery modal.
- Booking form.

#### P1: Isolate Client Islands

Pattern:

```tsx
// Server component renders content.
export default function ServicesGrid() {
  return <Static service data />;
}

// Tiny client component only where needed.
function ServiceCtaTracker() {
  "use client";
}
```

Expected impact:

- Lower hydration cost.
- Better INP.
- Better Total Blocking Time.

## Server Components

### Current Strength

The app router is used, and route pages are static/SSG.

### Current Weakness

Client Components are overused for animation rather than interaction.

### Recommendation

Use Server Components as the default and opt into Client Components only when state/effects are required.

Priority conversion:

1. `Footer`
2. `ServicesGrid`
3. `WhyChooseUs`
4. `PricingPreview`
5. `FinalCTA`
6. `LocationContact`
7. `SectionHeading`

## SEO

### Strengths

- Metadata exists in root layout.
- Booking metadata exists.
- Service pages use `generateMetadata`.
- Sitemap exists.
- Robots file exists.
- Structured data exists.
- Service pages are SSG.
- Good static crawlability.

### Risks

1. `sitemap.ts` uses `new Date()` at build time. This changes every build and can make all pages look freshly modified even when unchanged.
2. Open Graph image is not explicitly set in metadata.
3. `StructuredData` includes large FAQ/HowTo data globally on the homepage, increasing HTML size.
4. `index.html` is 190 KB, partly due to rich page content and embedded RSC/static payload.
5. Some source text appears mojibake in shell output, though browser rendering may still be correct. Confirm encoding in files and metadata.
6. Remote gallery images are not guaranteed for social sharing or crawler reliability.

### Recommendations

- Use stable `lastModified` dates from content data or omit them when not meaningful.
- Add `openGraph.images`.
- Keep structured data targeted:
  - Homepage: LocalBusiness/MedicalBusiness + aggregate rating.
  - Service pages: service-specific FAQ/HowTo.
- Avoid embedding all FAQ/HowTo content globally if not needed.
- Ensure metadata strings are UTF-8 clean in source.

Expected impact:

- Better crawl consistency.
- Smaller homepage HTML.
- Better social preview quality.

## Core Web Vitals

### LCP

Primary risk:

- LCP is likely the hero image or hero text over the hero image.
- The first hero image is 2.18 MB at 6000x4000 and is preloaded.

Expected issue:

- Slow LCP on mobile and slow networks.

Fix:

- Serve responsive AVIF/WebP.
- Reduce initial hero payload to under 250 KB desktop and under 120 KB mobile.
- Keep text visible independent of image completion.

### CLS

Strengths:

- Hero uses fixed full-screen section.
- `next/image` with `fill` in stable containers helps avoid layout shifts.

Risks:

- Fonts swapping can still cause text shift.
- Dynamic carousel/testimonial/doctor animation may create visual movement.
- Google map iframe area has fixed height, which is good.

Fix:

- Keep fixed aspect ratios.
- Reduce font weight loading.
- Avoid late-inserting large dynamic UI above current viewport.

### INP

Primary risks:

- Heavy hydration from many Client Components.
- Framer Motion across static content.
- Scroll listeners and intersection observers.
- Testimonials carousel timer/resize observer.
- Hero carousel interval and parallax scroll transforms.

Fix:

- Convert static sections to Server Components.
- Remove non-essential motion.
- Defer below-fold interactivity.
- Prefer CSS-only hover/reveal when possible.

### TTFB

Strength:

- Static export should provide excellent TTFB on a CDN.

Risk:

- Static hosting/CDN cache headers still matter and should be configured by hosting.

Fix:

- Long-cache immutable `_next/static/*`.
- Reasonable cache for images.
- HTML should be revalidated on deploy.

## Lighthouse Readiness

Lighthouse was not run because the `lighthouse` package/CLI is not installed locally. No network install was performed.

Based on build output and exported assets, likely Lighthouse issues:

| Lighthouse Area | Likely Finding | Evidence |
|---|---|---|
| Performance | Poor LCP | 2.18 MB preloaded hero image |
| Performance | Reduce unused JavaScript | Framer Motion and client components across static sections |
| Performance | Reduce JavaScript execution time | Multiple large JS chunks, broad hydration |
| Performance | Properly size images | 6000px hero served to all viewports |
| Performance | Serve images in next-gen formats | JPG hero files, optimization disabled |
| Performance | Avoid enormous network payloads | Exported `out` directory 8.83 MB, hero assets dominate |
| Best Practices | Third-party embeds | Google Maps iframe |
| SEO | Missing social image risk | Root metadata lacks explicit OG image |
| Accessibility/SEO | Text/metadata encoding should be confirmed | Mojibake observed in shell file reads |

Recommended lab test once Lighthouse is available:

```bash
lighthouse http://localhost:3000 --view --preset=desktop
lighthouse http://localhost:3000 --view --form-factor=mobile
```

Also test:

- `/booking`
- `/services/laser-hair-removal`

## Optimization Roadmap

### Phase 1: Highest ROI, Lowest Risk

| Task | Priority | Impact | Effort |
|---|---:|---:|---:|
| Convert hero images to AVIF/WebP responsive variants | P0 | Very high LCP improvement | Medium |
| Reduce hero image dimensions from 6000px to practical viewport sizes | P0 | Very high | Low |
| Avoid loading/preloading non-first carousel images before idle | P0 | High | Medium |
| Reduce Tajawal font weights/preloads | P1 | Medium | Low |
| Add explicit image dimensions/variants for booking background | P1 | Medium | Low |

### Phase 2: Hydration and JavaScript Reduction

| Task | Priority | Impact | Effort |
|---|---:|---:|---:|
| Convert static sections to Server Components | P0 | Very high INP/TBT improvement | Medium |
| Remove Framer Motion from footer, pricing, contact, service cards, static headings | P0 | High | Medium |
| Replace testimonials carousel with static review grid | P1 | High | Medium |
| Dynamically import below-fold interactive sections | P1 | High | Medium |
| Remove floating scroll indicator or lazy-load it | P2 | Low-medium | Low |

### Phase 3: Third-Party and SEO Payload

| Task | Priority | Impact | Effort |
|---|---:|---:|---:|
| Replace Google Maps iframe with click-to-load map | P1 | Medium | Medium |
| Localize and optimize remote gallery images | P1 | Medium-high | Medium |
| Target structured data per route instead of global heavy schema | P2 | Medium | Low |
| Add stable sitemap `lastModified` values | P2 | Low-medium | Low |
| Add explicit Open Graph image | P2 | SEO/social impact | Low |

### Phase 4: Measurement and Tooling

| Task | Priority | Impact | Effort |
|---|---:|---:|---:|
| Add Lighthouse CI or local Lighthouse script | P1 | Measurement quality | Low-medium |
| Add bundle analyzer script | P1 | Debuggability | Low |
| Add Web Vitals reporting | P1 | Field visibility | Medium |
| Track conversion and performance together | P2 | Business insight | Medium |

## Specific File-Level Recommendations

### `next.config.ts`

Current:

```ts
images: {
  unoptimized: true
}
```

Recommendation:

- If deployment supports Next image optimization, remove `unoptimized: true`.
- If static export must remain, generate static responsive image variants manually and use `<picture>` or route-aware image selection.

### `src/app/components/hero/Hero.tsx`

Issues:

- Client component.
- Uses Framer Motion.
- Uses interval.
- Uses scroll parallax.
- Loads a 2.18 MB first image.

Recommendations:

- Make a static server-rendered hero shell.
- Move carousel controls into a small client island or remove carousel.
- Use one optimized hero image for initial load.
- Lazy/idle-load alternate slides.

### `src/app/components/hero/HeroContent.tsx`

Issues:

- Client component only for animation.

Recommendation:

- Convert to Server Component.
- Replace entrance animation with CSS or remove it.

### `src/app/components/TrustBar.tsx`

Issues:

- Client component for animated number counters.

Recommendation:

- Render static numbers server-side.
- If animation is essential, isolate only the number animation as a tiny client island.

### `src/app/components/TestimonialsCarousel.tsx`

Issues:

- Client state, timers, resize observer, 3D transforms.

Recommendation:

- Replace with static review grid.
- Defer any carousel enhancement until after interaction.

### `src/app/components/DoctorSpotlight.tsx`

Issues:

- Heavy interactive client component below fold.
- Framer Motion, scroll transforms, state, image animation.

Recommendation:

- Dynamic import below fold.
- Consider static doctor cards with one small client selector only if needed.

### `src/app/components/Footer.tsx`

Issue:

- Client component only for Framer Motion.

Recommendation:

- Convert to Server Component.

### `src/app/components/LocationContact.tsx`

Issues:

- Client component.
- Google Maps iframe.

Recommendations:

- Convert static contact details to Server Component.
- Use click-to-load map iframe.

### `src/app/components/PricingPreview.tsx`

Issue:

- Client component only for motion.

Recommendation:

- Convert to Server Component.

### `src/app/booking/page.tsx`

Strength:

- Booking page being interactive is valid.

Recommendations:

- Keep as Client Component.
- Consider removing Framer Motion from the wrapper.
- Optimize CSS background image.

## Target Performance Budgets

Recommended budgets for this site:

| Budget | Target |
|---|---:|
| Initial LCP image | Under 250 KB desktop, under 120 KB mobile |
| Initial JS gzip | Under 170 KB for homepage |
| CSS gzip | Under 20 KB |
| Font preload files | 3-4 files max |
| Homepage HTML gzip | Under 35 KB |
| Total initial page weight mobile | Under 700 KB before user interaction |
| LCP mobile | Under 2.5s |
| CLS | Under 0.1 |
| INP | Under 200ms |

## Final Priority List

1. Optimize hero images and remove multi-megabyte LCP payload.
2. Rework image strategy for static export.
3. Convert animation-only Client Components to Server Components.
4. Reduce Framer Motion footprint.
5. Dynamically import below-fold interactive sections.
6. Reduce font weights and preload count.
7. Replace Google Maps iframe with click-to-load.
8. Localize/optimize remote gallery images.
9. Add Lighthouse and bundle analyzer tooling.
10. Add field Web Vitals monitoring.

## Expected Combined Impact

If Phases 1 and 2 are implemented:

- LCP: likely major improvement, especially mobile.
- INP/TBT: likely moderate to major improvement from hydration reduction.
- Lighthouse Performance: likely +15-35 points depending test device/network.
- Total initial transfer: likely reduced by 1.5-3 MB on the homepage.
- SEO: improved crawl consistency and social preview quality.
- User experience: faster first view, less scroll jank, quicker interaction readiness.
