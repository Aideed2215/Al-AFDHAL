# Landing Page CRO Audit

Website audited: Afdal Clinic landing page

Audit date: 2026-07-09

Scope: Homepage conversion path from first visit to booking intent. This is a heuristic CRO audit, not an analytics report. Impact estimates are directional ranges based on common conversion patterns for local healthcare and cosmetic clinic landing pages.

## Executive Summary

The landing page has a premium visual foundation and frequent booking CTAs, but it does not yet remove enough uncertainty before asking visitors to book.

The biggest conversion blockers are:

- The hero sells aspiration but not a specific offer, outcome, or reason to act now.
- The primary CTA goes straight to WhatsApp, which is fast but may feel abrupt before the visitor has chosen a service.
- Pricing is almost absent, so price-sensitive visitors may delay or leave.
- Testimonials are present but not packaged as decision-making proof.
- Service cards explain categories but do not answer the visitor's buying questions: price range, session time, pain/recovery, best for, available offer, and next step.
- Trust signals exist but are scattered instead of placed near every high-intent CTA.
- The contact section is useful for location, but weak as a final conversion block.

High-level CRO opportunity: reposition the page from "beautiful clinic brochure" to "low-risk booking path." The visitor should know exactly what to book, what happens after booking, what it may cost, and why the clinic is trustworthy before they reach WhatsApp.

## Conversion Diagnosis

| Area | Current State | Conversion Risk | Priority | Estimated Impact |
|---|---|---:|---:|---:|
| Hero | Emotional headline: "Your skin deserves the best." | Strong feeling, weak specificity. Does not say what service, offer, or booking promise. | P0 | +8-18% lead starts |
| CTA | "Book your appointment" opens WhatsApp. | Generic CTA, abrupt channel jump, no microcopy about response time or free consult. | P0 | +10-25% CTA clicks |
| Trust | Ratings, reviews, doctors, years are shown. | Proof is not contextualized near key decisions. | P0 | +5-15% bookings |
| Services | Cards show service category and short summary. | No price, offer, duration, pain level, recovery, or suitability cues. | P0 | +8-20% service-to-booking flow |
| Testimonials | Reviews exist in carousel/grid. | Hard to scan, not grouped by service/outcome, weak before/after decision support. | P1 | +4-12% bookings |
| Contact | Map, address, hours, buttons. | Does not reassure on parking, response time, ladies/privacy, or immediate appointment availability. | P1 | +3-10% final conversions |
| Pricing | Only vague mention of competitive prices/packages. | Price anxiety blocks booking, especially for cosmetic services. | P0 | +10-30% qualified lead rate |
| Booking friction | WhatsApp is easy, but `/booking` form exists and is not promoted from homepage. | Two booking models exist, but homepage mostly pushes direct WhatsApp. | P1 | +5-15% completed inquiries |

## Critical Booking Blockers

### 1. The Hero Is Beautiful But Not Conversion-Specific

Current hero message:

- Main headline: "بشرتك تستحق الأفضل"
- Supporting copy: clinic combines dermatology, cosmetics, laser, doctors, global standards.
- CTAs: "احجز موعدك" and "تصفح الخدمات"
- Proof line: Google rating, reviews, doctors.

Problem:

The hero creates a premium mood, but it does not immediately answer:

- What can I book today?
- Is consultation free?
- How fast will they reply?
- Is there a current offer?
- Why should I choose this clinic instead of another clinic in Riyadh?

Recommended hero direction:

```text
احجزي استشارة جلدية أو تجميلية في أفضل كلينك
أطباء متخصصون، أجهزة حديثة، وخطة علاج تناسب بشرتك من أول زيارة.

[احجزي استشارة مجانية عبر واتساب]
[شاهدي العروض والخدمات]

4.2 على Google من 441 مراجعة | 12 طبيب/أخصائي | رد خلال دقائق في أوقات العمل
```

Alternative hero for offer-led campaigns:

```text
عروض الليزر والعناية بالبشرة في الرياض
احجزي موعدك الآن واحصلي على تقييم مناسب لبشرتك قبل الجلسة.

[احجزي عبر واتساب]
[اعرفي الأسعار والباقات]
```

Expected impact:

- +8-18% increase in hero CTA clicks.
- +5-12% increase in scroll depth because visitors understand the promise faster.

Effort:

- Low for copy changes.
- Medium if adding an offer/pricing strip.

## Better CTA Strategy

### Current CTA Issues

- "احجز موعدك" is clear but generic.
- Direct WhatsApp booking is repeated, but it does not clarify what happens next.
- Secondary CTA "تصفح الخدمات" moves visitors away from booking instead of helping them choose.
- The `/booking` form is not clearly positioned as an alternative to WhatsApp.
- CTAs do not adapt by section intent.

### Recommended CTA System

Use different CTAs by visitor readiness:

| Stage | CTA | Use |
|---|---|---|
| Cold visitor | "اعرفي الخدمة المناسبة لك" | Hero secondary, service intro |
| Interested visitor | "شاهدي الأسعار والباقات" | Services and pricing section |
| High-intent visitor | "احجزي استشارة مجانية" | Hero primary, sticky nav, final CTA |
| Doctor-led visitor | "احجزي مع الدكتورة" | Doctor cards |
| Urgent visitor | "اتصلي الآن" | Sticky mobile bar, contact section |
| WhatsApp-ready visitor | "ارسلي طلب الحجز عبر واتساب" | Final CTA and booking form |

### Best Primary CTA

Recommended:

```text
احجزي استشارة مجانية
```

Why:

- Higher perceived value than "book appointment."
- Reduces commitment anxiety.
- Better fit for cosmetic/dermatology visitors who may not know the right treatment yet.

CTA microcopy:

```text
رد خلال دقائق في أوقات العمل - بدون دفع مسبق
```

Expected impact:

- +10-25% primary CTA click-through.
- +5-15% booking starts from anxious first-time visitors.

Effort:

- Low.

## Better Hero Recommendations

### Recommended Hero Elements

Add these above the fold:

- Clear offer or entry point: "استشارة مجانية" or "تقييم بشرة قبل الجلسة".
- Fast-response promise: "رد خلال دقائق في أوقات العمل".
- Low-risk promise: "بدون دفع مسبق" if true.
- Social proof line directly under CTA.
- Optional service selector: "ليزر / حقن / جلدية / أسنان / عناية بالبشرة".

### Suggested Hero Layout

1. Eyebrow:

```text
عيادات جلدية وتجميل وليزر في الرياض
```

2. Headline:

```text
ابدئي بخطة علاج تناسب بشرتك من أول زيارة
```

3. Supporting copy:

```text
استشارة مع فريق متخصص، أجهزة حديثة، ومتابعة واضحة قبل وبعد الجلسة.
```

4. CTA group:

```text
[احجزي استشارة مجانية]
[شاهدي الأسعار والباقات]
```

5. Trust row:

```text
4.2 Google | 441+ مراجعة | 15+ سنة خبرة | 12 طبيب/أخصائي
```

Expected impact:

- +8-18% lead starts.
- +5-10% lower bounce rate.
- +5-15% more pricing/service exploration.

Effort:

- Low to medium.

## Better Testimonials

### Current Issues

- Reviews are real and valuable, but the carousel makes proof slower to consume.
- Reviews are not categorized by service.
- Review snippets are long and not converted into quick proof bullets.
- Desktop carousel is visually interesting, but CRO prefers fast scanning.
- The strongest quotes are not placed near relevant service cards.

### Recommended Testimonial Structure

Replace or supplement carousel with proof modules:

1. Overall proof block:

```text
441+ مراجعة على Google
تقييم 4.2
مرضى يذكرون: النظافة، لطف الفريق، نتائج الليزر، احترافية الطبيبات
```

2. Service-specific review cards:

| Service | Review Angle |
|---|---|
| Laser | "جلسة مريحة، يد خفيفة، جهاز مناسب للبشرة الحساسة" |
| Skin care | "تنظيف عميق، عناية بعد الجلسة، بشرة أنظف" |
| Injections | "نتيجة طبيعية، دقة، شرح قبل الإجراء" |
| Clinic experience | "استقبال محترم، نظافة، مواعيد منظمة" |

3. Review card format:

```text
★★★★★
"بشرة حساسة جدا وجربت جهازين ليزر وكان من أجمل الجلسات..."
سلمى - مراجعة Google
[عرض المراجعة]
```

4. Add proof near CTAs:

- Under hero CTA.
- Under service cards.
- Next to final booking CTA.

Expected impact:

- +4-12% bookings.
- +6-15% service-card click-through.
- +3-8% improvement in returning visitor confidence.

Effort:

- Medium.

## Better Trust Signals

### Current Trust Signals

The page includes:

- 15+ years experience.
- 5000+ clients.
- 12+ specialist doctors.
- 4.2 Google rating.
- 441 reviews.
- Doctors section.
- Location/map.
- Process section.

### Gaps That Prevent Booking

Visitors still may wonder:

- Are the doctors licensed?
- Are devices approved?
- Are prices transparent?
- Is consultation paid or free?
- Are procedures safe for sensitive skin?
- Are there women doctors/specialists?
- How quickly will someone reply?
- Is the clinic easy to reach and park near?

### Recommended Trust Signal Additions

| Trust Signal | Placement | Expected Impact |
|---|---|---:|
| "استشارة مجانية" or consultation price | Hero, final CTA, pricing | +8-18% lead starts |
| "رد خلال دقائق في أوقات العمل" | Under every WhatsApp CTA | +5-12% CTA clicks |
| Doctor credentials/licensing | Doctor section/cards | +3-10% booking confidence |
| Device/technology names | Laser/service cards | +3-8% service inquiry quality |
| "مناسب للبشرة الحساسة" proof | Laser and skincare services | +4-10% service bookings |
| Before/after policy or result gallery disclaimer | Gallery/services | +2-6% trust |
| Privacy/ladies-care reassurance | Hero/booking/contact | +3-8% conversions |
| Real Google review embed/link | Testimonials | +3-9% trust |
| Parking/access info | Contact section | +2-5% visit intent |

## Better Service Cards

### Current Issues

Service cards are attractive but too brochure-like. They do not help visitors choose quickly.

Missing conversion details:

- Starting price or price range.
- Session duration.
- Who it is best for.
- Pain/recovery expectation.
- Offer/package.
- CTA inside card.
- Trust proof or review per service.

### Recommended Service Card Formula

Each card should answer:

```text
Service name
Best for: [visitor problem]
From: [price or consultation required]
Time: [session duration]
Recovery: [none / same day / depends]
Trust: [doctor/device/review cue]

[احجزي هذه الخدمة]
[اعرفي التفاصيل]
```

Example:

```text
ليزر إزالة الشعر
لبشرة أنعم مع أجهزة تبريد مريحة

الجلسة: 15-60 دقيقة
مناسب للبشرة الحساسة بعد التقييم
باقات متاحة

[احجزي الليزر]
[شاهدي التفاصيل]
```

### Service Card Priority Order

Put highest-converting services first:

1. Laser hair removal.
2. Skin care / hydrafacial / cleaning.
3. Cosmetic injections.
4. Dermatology consultation.
5. Cosmetic dentistry.
6. Peeling/glow.

Expected impact:

- +8-20% service-card click-through.
- +5-15% WhatsApp inquiries with clearer intent.
- +3-8% reduction in low-quality "how much?" chats if pricing is added.

Effort:

- Medium.

## Better Contact Section

### Current Issues

The contact section currently focuses on map, address, hours, and small action buttons. It is useful but not persuasive enough as a final conversion moment.

Missing:

- "Book now" CTA prominence.
- Response time.
- Parking/access reassurance.
- Current opening status.
- Direct phone/WhatsApp hierarchy.
- "What to send us" instruction.
- Nearby landmarks.

### Recommended Contact Section

Structure:

```text
جاهزون لاستقبال حجزك
اختاري الخدمة أو ارسلي لنا صورة/سؤالك عبر واتساب، وسيتواصل معك الفريق لتأكيد الموعد.

[احجزي عبر واتساب]
[اتصلي الآن]
[افتحي الموقع في Google Maps]

العنوان: الرياض - حي الحمراء...
ساعات العمل: ...
الرد: خلال دقائق في أوقات العمل
معلومة مساعدة: مواقف / مدخل / قسم نسائي إن وجد
```

Expected impact:

- +3-10% final-section conversions.
- +2-6% phone clicks.
- +3-8% fewer abandoned visitors after scrolling.

Effort:

- Low to medium.

## Better Pricing Presentation

### Current Pricing Problem

Pricing is nearly absent. The services mention packages/competitive prices, but visitors do not see enough to decide whether to book.

This is a major friction point for cosmetic clinics because visitors often compare:

- Laser package prices.
- Injection/session price ranges.
- Consultation fee.
- First-visit offer.
- Payment expectations.

### Recommended Pricing Strategy

Do not necessarily publish every exact price if pricing changes. Use one of these CRO-safe formats:

#### Option A: Starting Prices

```text
أسعار تبدأ من
ليزر إزالة الشعر: تبدأ من ___ ريال
تنظيف البشرة: تبدأ من ___ ريال
استشارة جلدية: ___ ريال / مجانية عند الحجز
حقن التجميل: السعر حسب التقييم
```

#### Option B: Package Cards

```text
باقات الليزر
جلسة واحدة | باقة 3 جلسات | باقة 6 جلسات
[اسألي عن الباقات]
```

#### Option C: Transparent Non-Exact Pricing

```text
تختلف الأسعار حسب المنطقة والحالة.
ارسلي الخدمة المطلوبة وسيتم إرسال السعر والباقات قبل تأكيد الموعد.
```

Best recommendation:

Use a hybrid:

- Show exact starting price for common, low-risk services.
- Use "حسب التقييم" for injections and medical cases.
- Add a "اسألي عن السعر والباقات" CTA that opens WhatsApp with prefilled pricing intent.

Expected impact:

- +10-30% qualified lead rate.
- +5-15% more WhatsApp starts from price-sensitive visitors.
- Possible -5-10% reduction in unqualified leads if low-budget visitors self-filter.

Effort:

- Low for ranges.
- Medium if prices need admin/content updates.

## Reduce Friction

### Friction Points

| Friction | Why It Hurts | Fix | Impact |
|---|---|---|---:|
| WhatsApp opens before visitor chooses service | Visitor may not know what to ask. | Add service-specific WhatsApp messages and CTA labels. | +5-15% inquiry completion |
| No visible pricing | Visitor postpones booking to compare elsewhere. | Add pricing/range/package section. | +10-30% qualified leads |
| Generic CTA copy | No clear value exchange. | Use "احجزي استشارة مجانية" and response-time microcopy. | +10-25% CTA clicks |
| Service detail is one click away | Extra step before booking. | Put key decision data in service cards. | +8-20% service clicks/bookings |
| Testimonials require carousel interaction | Proof is not instantly scannable. | Show static review grid and service-specific quotes. | +4-12% bookings |
| Doctor section may appear too late | High-trust proof is below services/process. | Add mini doctor/license proof near hero/services. | +3-10% confidence |
| Contact section is informational, not action-led | Final scroll moment is underused. | Add strong booking block with WhatsApp/phone/maps. | +3-10% final conversions |
| Booking form is hidden from homepage | Some users prefer structured booking over chat. | Add "احجزي بنموذج سريع" secondary CTA. | +5-15% booking starts |

## Suggested Landing Page Order

Recommended order for higher conversion:

1. Hero with clear consult offer, fast response, trust row.
2. Service selector or top 3 high-demand services.
3. Pricing/packages preview.
4. Trust bar with reviews/doctors/years.
5. Service cards with mini decision details and CTAs.
6. Doctor proof/licensing section.
7. Service-specific testimonials.
8. Process: "What happens after you message us."
9. Gallery/clinic environment.
10. FAQ focused on price, pain, safety, consultation, booking.
11. Final CTA.
12. Contact/map with phone, WhatsApp, hours, parking/access.

Why:

The current page moves from hero to stats to services, but the visitor still lacks price and choice support. Pricing and service guidance should appear earlier, before long proof/editorial sections.

Expected impact:

- +10-25% total landing-page lead starts.
- +5-15% higher lead quality.

Effort:

- Medium.

## CTA Copy Bank

### Primary CTAs

- احجزي استشارة مجانية
- احجزي موعدك عبر واتساب
- ارسلي طلب الحجز الآن
- احجزي تقييم البشرة

### Service CTAs

- احجزي جلسة ليزر
- اسألي عن باقات الليزر
- احجزي تنظيف بشرة
- احجزي مع الدكتورة
- اعرفي السعر والباقات

### Low-Commitment CTAs

- اعرفي الخدمة المناسبة لك
- شاهدي الأسعار والباقات
- اسألي عن أفضل خيار لبشرتك
- ارسلي سؤالك للفريق

### CTA Microcopy

- رد خلال دقائق في أوقات العمل
- بدون دفع مسبق
- سنؤكد الموعد عبر واتساب
- بياناتك تستخدم لغرض الحجز فقط
- يمكن تغيير الموعد بعد التواصل مع الفريق

## High-Impact Experiments

| Experiment | Hypothesis | Success Metric | Estimated Impact | Effort |
|---|---|---|---:|---:|
| Change hero CTA to "احجزي استشارة مجانية" | Lower commitment increases clicks. | Hero CTA CTR | +10-25% | Low |
| Add pricing/packages section above services | Price transparency reduces hesitation. | Pricing CTA clicks, WhatsApp starts | +10-30% qualified leads | Medium |
| Add sticky mobile bottom CTA | Mobile visitors need always-visible booking. | Mobile CTA CTR | +8-20% | Medium |
| Replace testimonials carousel with review grid | Faster proof consumption increases trust. | Review visibility, booking CTR after proof | +4-12% | Medium |
| Add service-specific WhatsApp messages | Visitors send clearer inquiries and complete more chats. | WhatsApp open rate, qualified chat rate | +5-15% | Low |
| Add "What happens after you message us" block | Reduces uncertainty after CTA. | CTA completion and booking confidence | +4-10% | Low |
| Add "starting from" pricing on service cards | Visitors can self-select and act faster. | Service CTA CTR | +8-20% | Medium |
| Add doctor/license proof near hero | Medical credibility improves early trust. | Scroll depth, CTA clicks | +3-10% | Low |

## Priority Fix List

### P0 - Do First

1. Rewrite hero around a concrete booking offer.
2. Change primary CTA to "احجزي استشارة مجانية" or similar lower-friction wording.
3. Add CTA microcopy: response time, no prepayment, confirmation process.
4. Add pricing/package preview.
5. Add service-specific CTAs and WhatsApp prefilled messages.

### P1 - Do Next

1. Rebuild testimonials into a scannable proof section.
2. Add trust proof near every major CTA.
3. Upgrade service cards with price, duration, best-for, and recovery cues.
4. Make the contact section action-led.
5. Promote the structured `/booking` form as an option for visitors who do not want open chat immediately.

### P2 - Optimize

1. A/B test offer-led hero vs trust-led hero.
2. Add segmented landing pages for laser, injections, skincare, and dermatology.
3. Add campaign-specific pricing and packages.
4. Track CTA source in WhatsApp prefilled messages.
5. Add analytics events for hero CTA, service CTA, pricing CTA, phone click, WhatsApp click, booking form submit.

## Measurement Plan

Track these events before and after changes:

- Hero primary CTA click.
- Hero secondary CTA click.
- Sticky nav CTA click.
- Service card click.
- Service-specific WhatsApp click.
- Pricing CTA click.
- Phone click.
- Map/directions click.
- Booking form start.
- Booking form submit.
- Final CTA click.

Recommended conversion funnel:

```text
Landing page view
-> Hero/service/pricing CTA click
-> WhatsApp open or booking form start
-> Qualified booking request
-> Confirmed appointment
```

## Overall CRO Score

| Category | Score | Notes |
|---|---:|---|
| Hero clarity | 6/10 | Premium but too generic. |
| CTA strength | 6/10 | Frequent but not benefit-specific. |
| Trust proof | 7/10 | Strong raw assets, weak placement. |
| Service clarity | 6/10 | Good categories, not enough buying data. |
| Testimonials | 6/10 | Real reviews, poor conversion packaging. |
| Pricing clarity | 2/10 | Major missing element. |
| Contact conversion | 5/10 | Informational, not action-led enough. |
| Friction reduction | 6/10 | WhatsApp is fast, but decision friction remains. |
| Overall CRO readiness | 6/10 | Strong base; needs offer, pricing, and proof architecture. |

## Final Recommendation

The landing page should keep its premium medical-beauty feel, but the conversion path needs to become more explicit:

1. Offer a low-risk first action.
2. Show pricing or package expectations.
3. Help visitors choose a service before WhatsApp.
4. Place proof next to decisions, not only in separate sections.
5. Turn the contact section into a final booking module.

Best next implementation sprint:

- Hero rewrite.
- CTA/microcopy update.
- Pricing preview section.
- Upgraded service cards.
- Review grid.
- Stronger final contact CTA.

Expected combined impact after these fixes:

- +15-35% increase in booking starts.
- +10-25% increase in qualified WhatsApp inquiries.
- +5-15% reduction in visitor hesitation and service confusion.
