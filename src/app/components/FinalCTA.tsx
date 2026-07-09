import { MessageCircle, Phone, FileText } from "lucide-react";
import { site } from "@/data/site";

const waFreeConsult = `${site.whatsappUrl}?text=مرحباً، أرغب بحجز استشارة مجانية في عيادة أفضل كلينك`;

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
          جاهزون لاستقبال حجزك
        </h2>
        <p className="mt-4 text-lg text-white/80 leading-relaxed">
          اختاري الخدمة أو ارسلي لنا استفسارك عبر واتساب، وسيتواصل معك الفريق لتأكيد الموعد.
        </p>

        <p className="mt-3 text-sm text-white/65">
          رد خلال دقائق في أوقات العمل · بدون دفع مسبق
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waFreeConsult}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-bold text-primary shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-xl active:scale-[0.97]"
          >
            <MessageCircle size={20} />
            احجزي استشارة مجانية
          </a>
          <a
            href="/booking"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.97]"
          >
            <FileText size={18} />
            احجزي بنموذج سريع
          </a>
        </div>

        <p className="mt-6 text-base text-white/70 font-medium">
          أو اتصل الآن
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${site.phones[0]}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.97]"
          >
            <Phone size={18} />
            {site.phones[0].replace("+966", "٠")}
          </a>
          <a
            href={`tel:${site.phones[1]}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 text-base font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.97]"
          >
            <Phone size={18} />
            {site.phones[1].replace("+966", "٠")}
          </a>
        </div>
      </div>
    </section>
  );
}
