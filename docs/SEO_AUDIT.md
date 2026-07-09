# SEO Audit - Afdal Clinic

Date: 2026-07-09  
Scope: Metadata, structured data, Open Graph, Twitter Cards, medical SEO, Schema.org, internal links, heading structure, keyword targeting, image alt text, sitemap, and performance-related SEO.

## Executive Summary

The website had a good SEO foundation: static Next.js routes, service-specific pages, semantic headings, crawlable content, a sitemap, robots.txt, visible contact details, local business information, and service FAQ content.

The main gaps were in technical SEO enrichment: incomplete social metadata, missing canonical tags, limited Twitter Card support, weaker structured data entity relationships, placeholder footer trust links, and sitemap omissions for booking/legal pages.

## Implemented Code

### Metadata

- Added canonical metadata for the homepage, booking page, and all service pages.
- Added robots directives with large image previews enabled.
- Added publisher, creator, authors, application name, and healthcare category metadata.
- Added Open Graph URLs and share images.
- Added Twitter Card metadata for homepage, booking, and service routes.
- Expanded service metadata with local Riyadh medical/cosmetic keyword context.

Files updated:

- `src/app/layout.tsx`
- `src/app/booking/layout.tsx`
- `src/app/services/[slug]/page.tsx`

Expected impact: High  
Estimated effort completed: Low-medium

### Structured Data

- Rebuilt global JSON-LD into a connected Schema.org graph.
- Added stable entity IDs:
  - `#clinic`
  - `#website`
  - `#webpage`
  - `#breadcrumb`
  - doctor IDs
- Added `MedicalBusiness`, `LocalBusiness`, `MedicalWebPage`, `WebSite`, `Physician`, `FAQPage`, `Offer`, and `ReserveAction` entities.
- Added clinic address, geo coordinates, contact points, opening hours, social profiles, reviews, map URL, payment/currency signals, medical specialties, services, and booking action.
- Added service-page JSON-LD for `MedicalWebPage`, `MedicalProcedure`, `BreadcrumbList`, `Article`, `HowTo`, and `FAQPage`.

Files updated:

- `src/app/components/StructuredData.tsx`
- `src/app/services/[slug]/page.tsx`

Expected impact: High  
Estimated effort completed: Medium

### Sitemap And Internal Links

- Added `/booking`, `/privacy`, and `/terms` to the sitemap.
- Replaced footer placeholder legal links with real crawlable routes.
- Added lightweight Privacy Policy and Terms pages.
- Replaced unstable per-build sitemap dates with a stable last-modified date.

Files updated:

- `src/app/sitemap.ts`
- `src/app/components/Footer.tsx`
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`

Expected impact: Medium  
Estimated effort completed: Low

## Audit Findings

## 1. Metadata

Status after fix: Strong

Before:

- Homepage had title, description, keywords, and basic Open Graph.
- Service pages had title, description, keywords, and basic Open Graph.
- Missing canonical URLs.
- Missing Twitter Cards.
- Missing Open Graph image data.
- Missing explicit crawler preview directives.

After:

- Metadata is now complete for homepage, booking, and service pages.
- Canonical URLs reduce duplicate URL ambiguity.
- Social previews are more reliable.
- Twitter/X previews can render large image cards.

Priority: High  
UX/search impact: Better search snippets and share previews  
Development effort: Completed

## 2. Structured Data

Status after fix: Strong

Before:

- Structured data existed but was less connected.
- Clinic entity ID was the bare domain instead of a stable fragment ID.
- Service offers lacked URLs and richer detail.
- Doctors were not connected back to the clinic.
- Homepage lacked a complete website/webpage/entity graph.

After:

- Clinic, website, homepage, doctors, FAQs, offers, services, map, reviews, and booking action are connected.
- Service pages now describe the medical page, procedure/service, breadcrumb, FAQ, and how-to flow.

Priority: High  
UX/search impact: Better local SEO, entity recognition, and rich-result eligibility  
Development effort: Completed

## 3. Open Graph

Status after fix: Strong

Before:

- Open Graph existed but lacked URLs and images.
- Service pages did not provide service-specific image previews.

After:

- Homepage and booking page use a clinic image.
- Service pages use each service image.
- Locale, type, URL, site name, title, description, and image are present.

Priority: Medium-high  
UX/search impact: Better previews on WhatsApp, social apps, and messaging platforms  
Development effort: Completed

## 4. Twitter Cards

Status after fix: Strong

Before:

- No Twitter Card metadata.

After:

- Added `summary_large_image` cards to homepage, booking, and service pages.

Priority: Medium  
UX/search impact: Better link presentation on X/Twitter and apps that read Twitter metadata  
Development effort: Completed

## 5. Medical SEO

Status after fix: Improved

Strengths:

- Clear clinic location in Riyadh.
- Medical/cosmetic service pages exist.
- FAQ content supports long-tail search.
- Booking path is prominent and now represented in schema.
- Google rating and review count are present in structured data.

Remaining opportunities:

- Add doctor profile pages with credentials, specialties, certifications, and appointment CTAs.
- Add medically reviewed content sections on service pages.
- Add author/reviewer schema for medical pages.
- Add before/after gallery pages only if compliant with local medical advertising rules.
- Add Arabic-first legal/medical disclaimer text on all medical service pages.

Priority: High  
Expected impact: High  
Estimated effort: Medium-high

## 6. Internal Links

Status after fix: Good

Before:

- Footer legal links used `#`, which created dead trust paths.
- Sitemap did not include booking/legal pages.

After:

- Footer links now point to `/privacy` and `/terms`.
- Sitemap includes booking and trust pages.

Remaining opportunities:

- Add cross-links between related services.
- Add service CTAs to booking with preselected service query parameters.
- Add breadcrumbs visually, not only in schema.

Priority: Medium  
Expected impact: Medium  
Estimated effort: Low-medium

## 7. Heading Structure

Status: Good

Findings:

- Homepage uses a clear H1 in the hero.
- Sections use H2-level structure.
- Service pages use one H1 and supporting H2/H3 sections.

Remaining opportunities:

- Ensure every page has exactly one H1 after future edits.
- Consider more search-intent-specific H2s on service pages, such as cost, safety, candidates, preparation, and aftercare.

Priority: Medium  
Expected impact: Medium  
Estimated effort: Medium

## 8. Keyword Optimization

Status after fix: Good

Strengths:

- Service data includes keyword arrays.
- Core local terms include Riyadh and clinic/service wording.
- Service pages target individual intent instead of one generic homepage.

Remaining opportunities:

- Add Arabic search-intent sections for each service:
  - Price/cost
  - Treatment duration
  - Number of sessions
  - Safety
  - Recovery
  - Who it is for
- Avoid keyword stuffing; use natural medical copy.

Priority: High  
Expected impact: High  
Estimated effort: Medium

## 9. Image Alt Text

Status: Good

Findings:

- Existing gallery, doctor, and hero images generally include alt text.
- Service metadata now includes image alt through Open Graph.

Remaining opportunities:

- Audit any future image additions for descriptive, non-stuffed Arabic alt text.
- Prefer local optimized images where possible instead of remote clinic gallery URLs.

Priority: Medium  
Expected impact: Medium  
Estimated effort: Low-medium

## 10. Performance SEO

Status: Good foundation

Strengths:

- Next.js static generation is used.
- Build produces static homepage, booking, legal pages, sitemap, and SSG service pages.
- Font loading uses `next/font`.

Remaining opportunities:

- Replace remote service images with local optimized assets or configured image domains.
- Add explicit image dimensions wherever images render.
- Lazy-load below-the-fold media and interactive sections.
- Run Lighthouse after deployment to confirm Core Web Vitals.

Priority: Medium-high  
Expected impact: High for mobile SEO and conversion  
Estimated effort: Medium

## Validation

Production build passed successfully with Next.js.

Generated routes include:

- `/`
- `/booking`
- `/privacy`
- `/terms`
- `/sitemap.xml`
- `/services/[slug]`

## Final SEO Scores

| Area | Before | After |
|---|---:|---:|
| Metadata | 6/10 | 9/10 |
| Structured Data | 6/10 | 9/10 |
| Open Graph | 5/10 | 9/10 |
| Twitter Cards | 1/10 | 9/10 |
| Medical SEO | 7/10 | 8/10 |
| Internal Links | 6/10 | 8/10 |
| Heading Structure | 8/10 | 8/10 |
| Keyword Optimization | 7/10 | 8/10 |
| Image Alt | 8/10 | 8/10 |
| Performance SEO | 7/10 | 8/10 |
| Overall SEO Quality | 6.5/10 | 8.5/10 |

## Next Priority Roadmap

1. Add doctor profile pages with credentials and medical reviewer schema.
2. Add Arabic medical disclaimer and medically reviewed labels on service pages.
3. Add richer service sections for price, safety, session count, preparation, and aftercare.
4. Add visual breadcrumbs to service pages.
5. Localize Privacy and Terms pages into Arabic.
6. Move remote service images into local optimized assets or configure image optimization properly.
7. Run Lighthouse and Rich Results Test after deployment.
