import { Car, HandCoins, Repeat, Landmark, ClipboardCheck, KeyRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Car, title: "بيع السيارات", desc: "تشكيلة واسعة من السيارات الجديدة والمستعملة." },
  { icon: HandCoins, title: "شراء السيارات", desc: "نشتري سيارتك بأفضل سعر في السوق." },
  { icon: Repeat, title: "استبدال السيارة", desc: "استبدل سيارتك الحالية بأخرى تناسبك." },
  { icon: Landmark, title: "طلب تمويل", desc: "خيارات تمويل مرنة عبر شركاء موثوقين." },
  { icon: ClipboardCheck, title: "تقييم سيارتك", desc: "تقييم مجاني واحترافي لسيارتك." },
  { icon: KeyRound, title: "حجز تجربة قيادة", desc: "احجز موعد لتجربة السيارة بنفسك." },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول متكاملة لعالم السيارات"
          desc="من البيع والشراء إلى التمويل والتقييم، نغطي كل ما تحتاجه في مكان واحد."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 hover:border-gold/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-surface text-gold group-hover:bg-gold group-hover:text-background transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
