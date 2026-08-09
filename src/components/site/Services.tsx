import {
  Truck,
  Gauge,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/i18n";

const icons = [Truck, Gauge, BadgeDollarSign, ShieldCheck];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-16 sm:py-24 bg-surface/40 border-y border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} desc={t.services.desc} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 hover:border-gold/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-surface text-gold group-hover:bg-gold group-hover:text-background transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
