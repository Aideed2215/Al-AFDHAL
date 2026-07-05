const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://afdalclinic.com",
      name: "عيادات أفضل كلينك | Afdal Clinic",
      description:
        "عيادة جلدية وتجميل وليزر في الرياض - حي الحمراء. أحدث تقنيات الجلدية والتجميل وأمهر الأطباء.",
      url: "https://afdalclinic.com",
      telephone: ["+966581151740", "+966544503179"],
      image: "https://afdalclinic.com/images/gallery/1.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "طريق الملك عبدالله الفرعي",
        addressLocality: "الرياض",
        addressRegion: "حي الحمراء",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.7696675,
        longitude: 46.7625779,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday",
            "Sunday",
          ],
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
        ratingValue: "4.2",
        reviewCount: "441",
        bestRating: "5",
      },
      priceRange: "$$$",
      areaServed: "Riyadh",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "الخدمات الطبية والتجميلية",
        itemListElement: [
          { "@type": "Offer", name: "عيادة جلدية وتجميل" },
          { "@type": "Offer", name: "عيادة ليزر وبشرة" },
          { "@type": "Offer", name: "حقن التجميل" },
          { "@type": "Offer", name: "طب الأسنان التجميلي" },
          { "@type": "Offer", name: "العناية بالبشرة" },
          { "@type": "Offer", name: "تقشير ونضارة" },
        ],
      },
      medicalSpecialty: ["Dermatology", "CosmeticSurgery", "Dentistry"],
    },
    {
      "@type": "Physician",
      name: "د. حنان البحيري",
      medicalSpecialty: "Dermatology",
      description:
        "استشارية جلدية وتجميل متخصصة في علاج الأمراض الجلدية والتجميل غير الجراحي",
      knowsAbout: ["أمراض جلدية", "ليزر", "بوتوكس", "فيلر"],
    },
    {
      "@type": "Physician",
      name: "د. ريم الغنام",
      medicalSpecialty: "CosmeticSurgery",
      description:
        "أخصائية تجميل وحقن متخصصة في حقن الفيلر والبوتكس ورسم الوجه",
      knowsAbout: ["فيلر", "بوتوكس", "رسم الوجه", "نضارة البشرة"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "هل جلسات الليزر مؤلمة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "معظم المرضى يصفون الإحساس بأنه خفيف يشبه وخزات بسيطة. نستخدم أجهزة تبريد متطورة لتخفيف أي شعور بعدم الراحة، ويمكن استخدام كريم مخدر قبل الجلسة عند الحاجة.",
          },
        },
        {
          "@type": "Question",
          name: "كم جلسة أحتاج لنتائج واضحة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "يختلف العدد حسب العلاج. عادةً تحتاج جلسات إزالة الشعر من ٦ إلى ٨ جلسات، بينما تظهر نتائج البوتوكس خلال ٣-٧ أيام وتدوم ٣-٦ أشهر. فريقنا يضع خطة علاج مخصصة لك.",
          },
        },
        {
          "@type": "Question",
          name: "هل هناك أي تحضيرات قبل الزيارة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، ننصح بتجنب التعرض المباشر للشمس قبل الجلسة، وإخبار الطبيب بكل الأدوية والمستحضرات التي تستخدمينها. سنرسل لك تعليمات كاملة بعد الحجز.",
          },
        },
        {
          "@type": "Question",
          name: "ما الفرق بين الفيلر والبوتوكس؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "البوتوكس يعمل على إرخاء العضلات لتقليل التجاعيد الحركية (مثل تجاعيد الجبهة)، بينما الفيلر يملأ الفراغات ويعيد الحجم المفقود (مثل الخدود والشفتين). كلاهما إجراءات غير جراحية وآمنة.",
          },
        },
        {
          "@type": "Question",
          name: "هل يوجد عروض أو باقات؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نقدم باقات مخفضة للجلسات المتعددة وعروض موسمية. تابعينا على إنستغرام @afdal_clinic لتصلك أحدث العروض، أو اسأل فريقنا عن الباقات المتاحة.",
          },
        },
        {
          "@type": "Question",
          name: "كيف أحجز موعداً؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "يمكنك الحجز عبر واتساب بالضغط على زر «احجز موعدك» في أي وقت، أو الاتصال بنا على ٠٥٨١١٥١٧٤٠. فريقنا سعيد بخدمتك من السبت إلى الخميس ٩ صباحاً - ١٠ مساءً.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "إزالة الشعر بالليزر",
      description: "دليل خطوة بخطوة لجلسة إزالة الشعر بالليزر في عيادات أفضل كلينك",
      step: [
        { "@type": "HowToStep", position: 1, name: "الاستشارة", text: "جلسة استشارة مجانية مع أخصائي الليزر لتقييم نوع البشرة وتحديد الخطة." },
        { "@type": "HowToStep", position: 2, name: "التحضير", text: "حلق الشعر قبل الجلسة بيوم وتجنب التعرض للشمس. كريم مخدر عند الحاجة." },
        { "@type": "HowToStep", position: 3, name: "الجلسة", text: "تسليط نبضات الليزر مع نظام تبريد مدمج. تستغرق ١٥-٦٠ دقيقة." },
        { "@type": "HowToStep", position: 4, name: "العناية بعد الجلسة", text: "تعليمات شاملة للعناية بالبشرة مع منتجات مهدئة ومُرطبات." },
      ],
    },
    {
      "@type": "HowTo",
      name: "حقن الفيلر",
      description: "دليل خطوة بخطوة لجلسة حقن الفيلر في عيادات أفضل كلينك",
      step: [
        { "@type": "HowToStep", position: 1, name: "الاستشارة", text: "تحديد المناطق المستهدفة ومناقشة النتائج المتوقعة مع الدكتورة." },
        { "@type": "HowToStep", position: 2, name: "التخطيط", text: "رسم خريطة دقيقة للوجه وتحديد نقاط الحقن." },
        { "@type": "HowToStep", position: 3, name: "الحقن", text: "جلسة سريعة ١٥-٣٠ دقيقة بإبر دقيقة جداً مع كريم مخدر موضعي." },
        { "@type": "HowToStep", position: 4, name: "المتابعة", text: "نتائج فورية. جلسة متابعة مجانية بعد أسبوعين." },
      ],
    },
    {
      "@type": "HowTo",
      name: "حقن البوتوكس",
      description: "دليل خطوة بخطوة لجلسة حقن البوتوكس في عيادات أفضل كلينك",
      step: [
        { "@type": "HowToStep", position: 1, name: "الاستشارة", text: "تقييم التجاعيد الحركية وتحديد المناطق المستهدفة." },
        { "@type": "HowToStep", position: 2, name: "الحقن", text: "حقن كميات دقيقة من البوتوكس في العضلات المستهدفة بإبر رفيعة." },
        { "@type": "HowToStep", position: 3, name: "التعليمات", text: "تجنب فرك المنطقة والاستلقاء لمدة ٤ ساعات بعد الجلسة." },
        { "@type": "HowToStep", position: 4, name: "النتائج", text: "تظهر النتائج خلال ٣-٧ أيام وتدوم من ٣-٦ أشهر." },
      ],
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
