export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img001.webp",
    title: "مدخل العيادة",
    description: "مدخل عصري يعكس هويتنا التي تجمع بين الأناقة والاحترافية. مساحة ترحيبية تمنحك انطباعاً أولياً لا يُنسى عن مستوى الخدمة التي تنتظرك.",
    alt: "واجهة عيادات أفضل كلينك من الخارج",
  },
  {
    id: 2,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img002.webp",
    title: "قاعة الاستقبال",
    description: "صممت قاعة الاستقبال لدينا لتكون أكثر من مجرد مساحة انتظار. إنها تجربة هادئة تبدأ بكوب قهوة وابتسامة ترحيب، حيث نهتم بكل تفصيل لراحتك.",
    alt: "قاعة استقبال عيادات أفضل كلينك",
  },
  {
    id: 3,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img004.webp",
    title: "عيادة الجلدية والتجميل",
    description: "غرف علاج مجهزة بأحدث تقنيات الجلدية والتجميل غير الجراحي. نقدم حلولاً متكاملة تشمل علاج الأمراض الجلدية، ومكافحة علامات التقدم، والعناية الشاملة ببشرتك.",
    alt: "عيادة الجلدية في أفضل كلينك",
  },
  {
    id: 4,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img005.webp",
    title: "عيادة الليزر",
    description: "تقنيات ليزر متطورة تحت إشراف نخبة من المتخصصين. نستخدم أحدث أجهزة الليزر المعتمدة عالمياً لإزالة الشعر، علاج التصبغات، وتوحيد لون البشرة بأمان تام.",
    alt: "جهاز ليزر في عيادات أفضل كلينك",
  },
];
