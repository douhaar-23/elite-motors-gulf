import { ShieldCheck, Search, Wallet, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/i18n";

const icons = [Search, ShieldCheck, Wallet, Wrench];

export function WhyUs() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} desc={t.whyUs.desc} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.whyUs.items.map((it, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={it.title}
                className="group rounded-xl border border-border bg-surface p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-background text-gold group-hover:bg-gold group-hover:text-background transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
