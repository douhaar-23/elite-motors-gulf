import { ArrowLeft, MessageCircle } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { waLink } from "@/config/dealership";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="سيارة فاخرة"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-gold mb-6 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            وكيل معتمد للسيارات الفاخرة
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] text-foreground animate-fade-in">
            سيارتك القادمة <br />
            <span className="gold-text">تبدأ من هنا</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            مجموعة مختارة من السيارات الجديدة والمستعملة بمعايير عالية وأسعار
            تنافسية، مع خدمة موثوقة تعتمد عليها.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cars"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-background hover:bg-gold-soft transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              تصفح السيارات
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a
              href={waLink("مرحباً، أرغب بالاستفسار عن السيارات المتاحة.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل عبر واتساب
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "+500", l: "سيارة مباعة" },
              { n: "+15", l: "سنة خبرة" },
              { n: "98%", l: "رضا العملاء" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl sm:text-3xl font-black gold-text">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
