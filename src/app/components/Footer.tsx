import { MessageCircle, MapPin, ArrowLeft, Phone } from "lucide-react";
import { site } from "@/data/site";

const quickLinks = [
  { label: "الخدمات", href: "#services" },
  { label: "الأطباء", href: "#doctors" },
  { label: "آراء المرضى", href: "#testimonials" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "الموقع", href: "#location" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: site.social.instagram,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: site.social.tiktok,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  {
    label: "Snapchat",
    href: site.social.snapchat,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8.5A6 6 0 0 0 6 8.5c0 4.5 2.5 6.5 6 8.5 3.5-2 6-4 6-8.5Z"/>
        <path d="M12 17v4"/>
        <path d="M8 22h8"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `${site.whatsappUrl}?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك`,
    icon: <MessageCircle size={20} />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-surface via-glow/30 to-surface border-t border-border/40">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-extrabold font-heading text-primary tracking-tight">
              {site.name}
            </h3>
            <p className="mt-3 text-sm text-text-secondary/80 leading-relaxed max-w-xs">
              اختيارك الأول للعناية بالبشرة والتجميل والليزر في الرياض — خبرة تمتد لأكثر من {site.stats.yearsExperience} عاماً في تقديم رعاية استثنائية.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-text-secondary/60">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-success" />
              متاحون للحجز الآن
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold font-heading text-text-primary tracking-wide uppercase">
              تصفح
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-text-secondary/80 hover:text-primary transition-colors duration-200"
                  >
                    <ArrowLeft
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold font-heading text-text-primary tracking-wide uppercase">
              تواصل
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <div className="group flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-glow/60">
                    <MapPin size={14} className="text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-text-secondary/60">العنوان</span>
                    <span className="block font-medium text-text-primary">
                      {site.address.city} - {site.address.locality}
                    </span>
                    <span className="block text-xs text-text-secondary/70">
                      {site.address.street}
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold font-heading text-text-primary tracking-wide uppercase">
              تابعنا
            </h4>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-text-secondary bg-white/50 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary/60">
          <p>© {year} عيادات {site.name}. جميع الحقوق محفوظة.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
            <span className="hidden sm:inline">·</span>
            <a href="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</a>
            <span className="hidden sm:inline">·</span>
            <a href={`tel:${site.phones[0]}`} className="inline-flex items-center gap-1 hover:text-primary transition-colors">
              <Phone size={12} />
              {site.phones[0].replace("+966", "٠")}
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href={`${site.whatsappUrl}?text=مرحباً، أرغب بحجز موعد في عيادة أفضل كلينك`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-primary font-bold hover:bg-primary/20 transition-colors"
            >
              <MessageCircle size={12} />
              احجز عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
