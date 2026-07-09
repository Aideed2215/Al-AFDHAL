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
    description: "مدخل عصري يعكس هويتنا التي تجمع بين الأناقة والاحترافية. مساحة ترحيبية تمنحك انطباعاً أولياً عن مستوى العناية والخصوصية التي تنتظرك.",
    alt: "واجهة عيادات أفضل كلينك من الخارج",
  },
  {
    id: 2,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img002.webp",
    title: "قاعة الاستقبال",
    description: "صممت قاعة الاستقبال لتكون مساحة هادئة ومريحة. خصوصية تامة، تعقيم مستمر، وفريق استقبال يرحب بك ويوجهك منذ لحظة وصولك.",
    alt: "قاعة استقبال عيادات أفضل كلينك",
  },
  {
    id: 3,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img004.webp",
    title: "عيادة الجلدية والتجميل",
    description: "غرف علاج مجهزة بأحدث أجهزة الجلدية والتجميل، معقمة بالكامل قبل كل جلسة. نلتزم بأعلى معايير النظافة والسلامة الطبية لضمان راحتك وأمانك.",
    alt: "عيادة الجلدية في أفضل كلينك",
  },
  {
    id: 4,
    image: "https://clinicksa.com/wp-content/uploads/riyadh-clinics-gallery/c10548-aftalklinic-img005.webp",
    title: "عيادة الليزر",
    description: "أجهزة ليزر معتمدة عالمياً بإشراف أطباء متخصصين. نستخدم أنظمة تبريد متطورة لجلسات مريحة، مع معايير سلامة صارمة تغطي جميع أنواع البشرة.",
    alt: "جهاز ليزر في عيادات أفضل كلينك",
  },
];
