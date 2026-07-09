# UI Design Audit

Website audited: Afdal Clinic current Next.js site in `C:\Users\Maideed\Documents\Websites\1`

Audit date: 2026-07-08

Role lens: Principal UI Designer, Design System Architect, Accessibility Expert

## Executive Summary

The site has a strong premium direction: image-led hero, warm luxury palette, generous spacing, polished motion, and a clear medical booking path. The first viewport communicates care and aspiration well.

The biggest issue is system consistency. Several sections and service pages use the dark global page background while retaining dark text tokens, making headings and intro copy nearly invisible. The gold brand color also fails WCAG contrast in multiple common uses, including primary buttons and gold text on light surfaces. These two issues materially reduce perceived quality, accessibility, and trust.

The current design reads more like a luxury beauty clinic than a premium medical brand. That is not wrong for dermatology and cosmetics, but the brand needs stronger clinical signals: cleaner background hierarchy, more accessible color tokens, fewer decorative effects, licensed doctor imagery, and more disciplined component geometry.

## Audit Scope

Reviewed rendered and source-level patterns across:

- Homepage: navigation, hero, trust bar, service cards, process cards, doctor spotlight, FAQ, testimonials, gallery, CTA, location/contact, footer.
- Service detail pages: service header, description card, benefits, treatment steps, FAQ, CTA.
- Booking page: background image, booking card, form inputs, selects, textarea, validation states, WhatsApp submit.
- Shared system: color tokens, typography, spacing, radii, shadows, focus states, motion preferences.

## Critical Issues

| Issue | Priority | Recommended Fix | Expected UX Impact | Estimated Effort |
|---|---:|---|---|---:|
| Dark text is used on the dark page canvas in multiple sections and service pages. Homepage services, FAQ, testimonials headings, location headings, and service page headers can become hard to read. | P0 | Either move content sections to a light background token or introduce dark-section text tokens such as `--text-on-dark`, `--muted-on-dark`, and `--surface-on-dark`. | Very high. Restores readability, perceived completeness, and medical trust. | Low |
| Primary gold `#B8963E` fails WCAG contrast for white text and small gold text on white. White on gold is 2.81:1; gold on white is 2.81:1. | P0 | Darken interactive gold to at least `#8C6A24` for text/buttons or use dark text on gold fills. Keep lighter gold as decorative only. | Very high. Improves CTA readability and legal accessibility posture. | Medium |
| Doctor imagery includes visible stock/watermark artifacts in the rendered doctor section. | P0 | Replace with licensed clinic/team photography or neutral verified portraits. Avoid watermarked or placeholder medical images. | Very high. Watermarks immediately break premium healthcare credibility. | Medium |
| Success and WhatsApp green states fail contrast with white text. Success `#6CC196` on white is 2.16:1; white on WhatsApp `#25D366` is 1.98:1. | P1 | Use darker semantic greens such as `#218C5A` or add dark text on bright green backgrounds. | High. Improves booking flow clarity and accessibility. | Low |
| No warning token exists in the system. | P1 | Add warning color, soft warning surface, and warning text tokens. | Medium. Required for future medical/form states and alerts. | Low |

## Medium Issues

| Issue | Priority | Recommended Fix | Expected UX Impact | Estimated Effort |
|---|---:|---|---|---:|
| Visual identity leans heavily on warm gold, cream, and brown. It feels luxury beauty-led but not enough clinical healthcare. | P1 | Add a restrained medical secondary color such as muted teal or blue-green, used for clinical trust moments, focus states, and informational UI. | High. Better balance of premium and medical credibility. | Medium |
| Typography system references `Alexandria` in CSS but only loads `Tajawal` and `Inter`. Arabic body text relies on fallback behavior rather than a deliberate Arabic body font. | P1 | Use one Arabic-capable family for body and headings, or intentionally pair `Tajawal`/`IBM Plex Sans Arabic` with Inter only for Latin/numeric content. | High. Improves Arabic readability and brand refinement. | Medium |
| Section background logic is inconsistent: transparent sections inherit the dark body, while white sections and gradient sections appear intermittently. | P1 | Define page bands: light page background, white surfaces, subtle alternate background, dark hero/footer only. | High. Creates predictable depth and better scanning. | Low |
| Component radii range from 8px to 24px/rounded-3xl. The look can become soft and cosmetic instead of precise and medical. | P2 | Standardize: 8px for controls, 12px for inputs/cards, 16px for large media, 999px only for pills. | Medium. Makes the UI feel more systematic and premium. | Low |
| Testimonials 3D carousel is visually playful and may compete with medical trust. | P2 | Use a calmer carousel or review grid with rating, source, review excerpt, and patient initials. | Medium. Improves seriousness and scanability. | Medium |
| Floating scroll indicator overlaps content and uses off-system amber. | P2 | Remove it or align it to the design system with a less intrusive position and accessible contrast. | Medium. Reduces visual noise. | Low |
| Footer and location sections need stronger information hierarchy. | P2 | Use clearer column rhythm, stronger contact actions, and consistent dark/light contrast. | Medium. Improves conversion and confidence. | Medium |

## Minor Issues

| Issue | Priority | Recommended Fix | Expected UX Impact | Estimated Effort |
|---|---:|---|---|---:|
| Some labels and supporting text use opacity variants such as `text-secondary/50` that can drop below accessible contrast. | P3 | Use explicit muted tokens instead of opacity on text. | Medium | Low |
| Border colors are elegant but sometimes too subtle against white cards. | P3 | Keep `#E8E2D8`, add a stronger border `#D8CFC2` for input/card boundaries. | Low | Low |
| The hero H1 is visually memorable but extremely large and tightly stacked. | P3 | Keep expressive scale but increase breathing room and ensure consistent mobile line rhythm. | Medium | Low |
| Badge styling is repeated but not centralized. | P3 | Create badge variants: service, status, trust, doctor specialty. | Low | Low |
| Placeholder text is too low contrast in forms. | P3 | Use `#8B8176` minimum for placeholders. | Medium | Low |

## 1. Color System

### Current Palette Ratings

| Token / Use | Current | Rating | WCAG / Design Assessment | Better Alternative |
|---|---:|---:|---|---|
| Primary | `#B8963E` | 5/10 | Elegant and premium, but fails contrast as text on white and as a button fill with white text. | `#8C6A24` for accessible primary; keep `#B8963E` as decorative gold. |
| Primary hover | `#A68535` | 6/10 | Better contrast than primary, but white text is still only 3.48:1. | `#75581C` |
| Secondary | `#7A7267` | 6/10 | Currently functions as muted text, not a real secondary brand color. | `#2F6F73` or `#356F86` for clinical trust. |
| Accent | `#B8963E` | 5/10 | Duplicates primary, limiting hierarchy. | Use accent as soft coral `#C96F5A` or clinical teal accent. |
| Accent soft | `#F5EDDA` | 7/10 | Warm and useful for badges, but gold text on it is low contrast. | Pair with darker gold text `#6F5319`. |
| Success | `#6CC196` | 4/10 | Too light for text and status dots on light surfaces. | `#218C5A`, soft `#E7F6EE`. |
| Warning | Missing | 2/10 | Missing semantic category. | `#A15C00`, soft `#FFF4D6`. |
| Error | `#D46A6A` | 5/10 | Warm and gentle, but not strong enough for accessible small error text on white. | `#B42318`, soft `#FDEAEA`. |
| Neutral dark | `#1A1714` | 6/10 | Premium dark brown, but currently overused as the default canvas. | Use only for hero/footer/dark bands. |
| Surface | `#FFFFFF` | 8/10 | Clean and medical. Works well for cards and forms. | Keep. |
| Surface 2 | `#F7F4EF` | 8/10 | Premium warm neutral. Good alternate background. | Keep, slightly cooler if adding teal. |
| Border | `#E8E2D8` | 7/10 | Soft and elegant. Some inputs/cards need more definition. | Add strong border `#D8CFC2`. |
| Text primary | `#2E2A26` | 9/10 | Excellent on white, 14.23:1. | Keep. |
| Text secondary | `#7A7267` | 7/10 | Passes on white at 4.74:1, but opacity variants often fail. | Keep solid; avoid opacity below 80 percent. |
| WhatsApp CTA | `#25D366` | 3/10 | Native brand green, but white text is only 1.98:1. | Use darker green fill or dark text. |

### Contrast Findings

| Pair | Ratio | Result |
|---|---:|---|
| Text primary `#2E2A26` on white | 14.23:1 | AAA |
| Text secondary `#7A7267` on white | 4.74:1 | AA for normal text |
| Text secondary on surface 2 | 4.32:1 | Slightly under AA for normal text |
| Gold `#B8963E` on white | 2.81:1 | Fail for normal text |
| White on gold `#B8963E` | 2.81:1 | Fail for normal text and buttons |
| White on gold hover `#A68535` | 3.48:1 | Fail for normal text |
| Gold on accent-soft `#F5EDDA` | 2.41:1 | Fail |
| Error `#D46A6A` on white | 3.46:1 | Fail for normal text |
| Success `#6CC196` on white | 2.16:1 | Fail |
| White on WhatsApp `#25D366` | 1.98:1 | Fail |

## 2. Typography

### Current Assessment

- Headings use `font-heading`, declared as `Alexandria`, `Tajawal`, sans-serif in CSS.
- The app loads `Tajawal` for the heading variable and `Inter` for the body variable.
- Body is set to Inter, which is not the right primary Arabic body face. Arabic text renders through fallback behavior, reducing typographic control.
- Headings are expressive and premium, especially in the hero.
- Body sizes are mostly 14px, 16px, and 18px with relaxed line height.
- Section headings use 30/36/48px through Tailwind classes, generally strong.
- The hero H1 uses clamp-based fluid type, which is effective visually but very large and dense.

### 8pt / Modular Scale

The layout mostly follows an 8pt rhythm at the section level:

- Section padding: 80px and 112px.
- Containers: 4/6/8 Tailwind padding steps, mapping to 16/24/32px.
- Card padding: 24px and 32px.

Some component details use 4pt increments, which is normal in Tailwind, but not fully disciplined:

- `py-3.5` equals 14px.
- `gap-5` equals 20px.
- Radii vary between 8px, 12px, 16px, 24px, and 32px.

### Typography Recommendations

- Use an Arabic-first type system:
  - Option A: `Tajawal` for both heading and body, Inter only for Latin/numbers.
  - Option B: `IBM Plex Sans Arabic` or `Noto Sans Arabic` for body, `Tajawal` for headings.
- Remove `Alexandria` from the CSS stack unless it is intentionally loaded.
- Define type tokens:
  - Display: 72px/1.0 desktop, 44px/1.05 mobile.
  - H1: 48px/1.15 desktop, 36px/1.2 mobile.
  - H2: 40px/1.2 desktop, 30px/1.25 mobile.
  - H3: 24px/1.3.
  - Body large: 18px/1.7.
  - Body: 16px/1.7.
  - Body small: 14px/1.6.
  - Caption: 12px/1.45.
- Keep letter spacing at 0 for Arabic. Avoid negative tracking.

## 3. Text Colors

| Text Use | Current Assessment | Recommendation |
|---|---|---|
| Heading color | Excellent on white, fails on dark inherited backgrounds. | Add `text-heading`, `text-heading-inverse`. |
| Body text | Good on white if solid `#7A7267`; weak when opacity is used. | Use solid muted tokens, not opacity utilities. |
| Secondary text | Good as solid color, inconsistent with `text-secondary/50` and `/60`. | Define `--text-muted` and `--text-subtle`. |
| Placeholder text | Often `text-secondary/50`, likely too faint. | Use `#8B8176`. |
| Links | Gold links are elegant but often fail contrast on white. | Use darker gold for link text, underline on hover/focus. |
| Buttons | White on gold and white on WhatsApp green fail contrast. | Darken fills or use dark text on lighter fills. |
| Error text | Too light for small error copy. | Use darker accessible error token. |

## 4. Background System

### Current Assessment

- The root body background is dark brown `#1A1714`.
- Many page sections are transparent, so they inherit the dark brown background.
- Most cards are white, which creates depth, but headings outside cards can become invisible.
- Hero uses real imagery with a dark overlay and works well.
- Gallery uses a clean white background and feels more premium than the dark inherited sections.
- Footer uses a light gradient and feels disconnected from the dark body sections.
- Booking page uses a full-screen background image with dark overlay and a white form card; this direction is good, but the top back link is too muted.

### Recommendation

Create a deliberate background hierarchy:

- Page default: warm light `#FAF8F3`.
- Alternate section: `#F6F1EA`.
- Surface/card: `#FFFFFF`.
- Dark hero/footer/CTA: `#161310`.
- Dark section text: white and warm muted white.
- Avoid transparent content sections unless the inherited background is intentional.

## 5. Spacing System

### Current Assessment

- Strong container pattern: `max-w-7xl`, `px-4/6/8`.
- Section vertical rhythm is generous and premium.
- Cards are comfortable with 24px padding.
- Gallery sections have very large vertical gaps, which creates editorial pacing but may slow conversion.
- Service page uses a narrower `max-w-5xl`, which is appropriate.
- Booking form spacing is efficient and readable.

### Recommended Spacing Scale

Use this as the official scale:

| Token | Value | Use |
|---|---:|---|
| `space-1` | 4px | Icon/text micro gaps |
| `space-2` | 8px | Compact gaps |
| `space-3` | 12px | Form label spacing |
| `space-4` | 16px | Default component gap |
| `space-5` | 24px | Card padding |
| `space-6` | 32px | Large card padding |
| `space-7` | 48px | Section internal grouping |
| `space-8` | 64px | Compact section padding |
| `space-9` | 80px | Default section padding |
| `space-10` | 112px | Feature section padding |

## 6. Components

### Buttons

Score: 6/10

Strengths:

- Clear CTA hierarchy in the hero.
- Large touch targets.
- Good icon use.
- Consistent 12px button radius.

Issues:

- Primary fill fails contrast with white text.
- WhatsApp green button fails contrast with white text.
- Secondary outline buttons on image/dark backgrounds need stronger border contrast.
- Button styles are repeated rather than tokenized.

### Cards

Score: 7/10

Strengths:

- White card surfaces feel clean.
- Padding is comfortable.
- Service and process cards are consistent.

Issues:

- Radius is too soft in places for a premium medical brand.
- Hover elevation can feel SaaS/beauty rather than clinical.
- Cards sometimes sit on overly dark backgrounds with low-visibility section headings.

### Badges

Score: 6/10

Strengths:

- Pills help categorize services and doctors.
- Soft gold surfaces feel premium.

Issues:

- Gold text on gold-soft fails contrast.
- Many badges use the same visual treatment, weakening hierarchy.

### Inputs

Score: 7/10

Strengths:

- Good 50px height.
- Labels are visible.
- Validation hooks exist.
- Focus rings exist.

Issues:

- Placeholder contrast is too low.
- Focus color uses light gold, not ideal for accessibility.
- Error color is too soft for small text.
- Select arrows are custom but use muted gray; acceptable, but should be tokenized.

### Navigation

Score: 7/10

Strengths:

- Sticky nav improves access.
- Desktop links are clear after scroll.
- Mobile menu exists with appropriate aria attributes.

Issues:

- Top nav over hero depends heavily on image overlay contrast.
- Active state uses gold on soft gold, often low contrast.
- Brand mark is text-only. A premium medical brand would benefit from a stronger logo lockup.

### Testimonials

Score: 6/10

Strengths:

- Google review proof is valuable.
- Mobile uses a simple grid.

Issues:

- Desktop 3D carousel feels less medical and more playful.
- Review text is small and muted.
- Carousel controls use symbolic characters that appear off-brand.

### Gallery

Score: 8/10

Strengths:

- Real clinic imagery supports trust.
- Alternating editorial layout feels premium.
- Modal has focus management and Escape handling.

Issues:

- Gallery takes a large amount of vertical space.
- Images should be curated for clinical cleanliness and lighting consistency.

### Service Cards

Score: 7/10

Strengths:

- Clear service scanning.
- Icons help quick recognition.
- Cards are easy to tap.

Issues:

- Hidden hover-only "view details" cue is not available to touch users until tap intent.
- Icon metaphors are sometimes generic for medical services.
- Section heading contrast issue weakens the whole area.

### Footer

Score: 6/10

Strengths:

- Contains core contact/social pathways.
- Warm and approachable.

Issues:

- Light gradient footer feels detached from preceding dark/location areas.
- Social icons are custom SVGs instead of a unified icon system.
- Legal links point to `#`, which weakens trust.

## 7. Visual Hierarchy

### What Works

- Hero image, H1, and CTA form a strong first impression.
- White cards create clear islands of content.
- The booking path is easy to identify.
- Section spacing gives a premium feel.

### What Fails

- Dark text on dark backgrounds breaks the eye flow after the hero.
- Repeated centered section headings make the page feel templated.
- Doctor section is visually strong, but stock/watermarked imagery severely damages credibility.
- The floating scroll control competes with content and CTA areas.
- The site uses many visual effects: blur, parallax, gradients, 3D carousel, hover lifts, animated counters. Individually they are polished; together they can reduce clinical calm.

## 8. Accessibility

### Strengths

- Skip link exists.
- `:focus-visible` exists globally.
- Reduced motion media query exists.
- Mobile menu uses `aria-expanded` and `aria-controls`.
- Gallery dialog uses `role="dialog"`, `aria-modal`, Escape close, and focus return.
- Booking form has labels and validation error relationships.

### Risks

- Multiple text/background combinations fail WCAG AA.
- Gold focus outline may not be visible enough against some warm backgrounds.
- Motion is heavy even though reduced motion support exists.
- Carousel content can be hard for keyboard and screen reader users.
- Hidden hover-only affordances reduce clarity for touch and keyboard users.
- Placeholder and disabled states are too faint.
- Some icon-only buttons have labels, which is good, but visual focus should be checked after color changes.

## 9. Medical Brand Identity

### Communicates Well

- Premium care through large imagery and generous spacing.
- Warmth and beauty through gold, cream, soft cards, and aspirational copy.
- Conversion clarity through repeated appointment CTAs.
- Trust through rating, review count, doctors, location, and process content.

### Needs Improvement

- Safety and professionalism need more clinical structure and less decorative behavior.
- The color system needs a clinical secondary color, not only gold/brown.
- Watermarked doctor imagery is not acceptable for a premium medical brand.
- Accessibility failures undermine the trust promise.
- Dark inherited sections feel accidental, which makes the site look less finished.

## 10. Design Token Recommendation

### Color Tokens

```css
:root {
  --color-brand-primary: #8C6A24;
  --color-brand-primary-hover: #75581C;
  --color-brand-primary-soft: #F3E9CF;

  --color-clinical-secondary: #2F6F73;
  --color-clinical-secondary-hover: #24585C;
  --color-clinical-secondary-soft: #E5F2F1;

  --color-accent-coral: #C96F5A;
  --color-accent-coral-soft: #FCE7E0;

  --color-success: #218C5A;
  --color-success-soft: #E7F6EE;
  --color-warning: #A15C00;
  --color-warning-soft: #FFF4D6;
  --color-error: #B42318;
  --color-error-soft: #FDEAEA;

  --color-background: #FAF8F3;
  --color-background-alt: #F6F1EA;
  --color-background-dark: #161310;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #FFFFFF;

  --color-heading: #241F1A;
  --color-text: #3A342E;
  --color-text-muted: #6F665C;
  --color-text-subtle: #8B8176;
  --color-text-inverse: #FFFFFF;
  --color-text-inverse-muted: rgba(255, 255, 255, 0.78);

  --color-border: #DED6C8;
  --color-border-soft: #EEE8DE;
  --color-focus: #2F6F73;
}
```

### Radius Tokens

```css
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-pill: 999px;
```

Recommended use:

- Buttons: 8px or 12px.
- Inputs: 12px.
- Cards: 12px.
- Large image containers: 16px.
- Pills: 999px.

### Shadow Tokens

```css
--shadow-xs: 0 1px 2px rgba(22, 19, 16, 0.06);
--shadow-sm: 0 4px 12px rgba(22, 19, 16, 0.08);
--shadow-md: 0 12px 28px rgba(22, 19, 16, 0.10);
--shadow-lg: 0 24px 56px rgba(22, 19, 16, 0.14);
--shadow-focus: 0 0 0 3px rgba(47, 111, 115, 0.28);
```

### Spacing Tokens

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 80px;
--space-10: 112px;
```

### Typography Tokens

```css
--font-arabic: "Tajawal", "IBM Plex Sans Arabic", sans-serif;
--font-latin: "Inter", sans-serif;

--text-caption: 12px;
--text-small: 14px;
--text-body: 16px;
--text-body-lg: 18px;
--text-h3: 24px;
--text-h2: 40px;
--text-h1: 48px;
--text-display: 72px;

--leading-tight: 1.15;
--leading-heading: 1.25;
--leading-body: 1.7;
```

## 11. Final Scores

| Category | Score | Reason |
|---|---:|---|
| Colors | 5/10 | Elegant palette, but major contrast failures and missing warning/clinical secondary tokens. |
| Typography | 7/10 | Strong heading personality, but Arabic body font strategy is not fully deliberate. |
| Accessibility | 5/10 | Good structural intent, but contrast failures are significant. |
| Consistency | 6/10 | Reusable patterns exist, but backgrounds, radii, and color semantics drift. |
| Medical Branding | 6/10 | Premium beauty feel is strong; clinical trust needs more discipline and authentic imagery. |
| Visual Hierarchy | 6/10 | Hero is strong; later section hierarchy is damaged by dark-on-dark text. |
| Modern Design | 7/10 | Contemporary motion and layout, but some effects feel too decorative for healthcare. |
| Overall UI Quality | 6/10 | Solid foundation with a few high-impact system issues holding it back. |

## Priority Roadmap

### P0 - Fix Immediately

1. Correct dark-section text contrast across homepage and service pages.
2. Replace or darken the primary CTA color so buttons pass WCAG AA.
3. Replace watermarked/placeholder doctor imagery.
4. Make WhatsApp and success button states accessible.

### P1 - Fix Next

1. Add a clinical secondary color and full semantic color tokens.
2. Define light, alternate, dark, and surface background tokens.
3. Formalize Arabic typography and remove unloaded font references.
4. Improve placeholder, muted, error, and focus colors.

### P2 - Polish

1. Standardize component radii and shadows.
2. Simplify testimonials interaction.
3. Reduce decorative motion and floating controls.
4. Strengthen footer trust links and contact hierarchy.

## Recommended Fixes Summary

The website should not be redesigned from scratch. It needs a design-system hardening pass:

- Make the page canvas light by default.
- Keep dark backgrounds only where text tokens are explicitly inverted.
- Darken the gold used for text and buttons.
- Introduce a clinical secondary color for medical trust.
- Replace weak opacity-based text with solid accessible tokens.
- Standardize typography, radius, shadow, and spacing tokens.
- Replace unlicensed or placeholder medical imagery.
- Keep the hero direction, card structure, booking flow, and gallery foundation.

Expected result: the site will retain its luxury beauty appeal while gaining the readability, safety, cleanliness, and professional confidence expected from a premium medical brand.
