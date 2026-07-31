import { Quote, Info } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { dealership } from "@/config/dealership";
import { useI18n } from "@/i18n";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          desc={t.testimonials.desc}
        />

        {dealership.testimonialsAreSamples && (
          <div className="mx-auto mb-8 flex max-w-2xl items-start gap-2 rounded-lg border border-gold/30 bg-background p-4 text-xs text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <p>{t.testimonials.sampleNotice}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.testimonials.items.map((item) => (
            <div
              key={item.name}
              className="relative rounded-xl border border-border bg-background p-6 hover:border-gold/40 transition-colors"
            >
              {dealership.testimonialsAreSamples && (
                <span className="absolute top-4 end-4 rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                  {t.common.sampleContent}
                </span>
              )}
              <Quote className="h-8 w-8 text-gold/40 mb-4" />
              <p className="text-sm text-foreground/90 leading-loose">{item.text}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-bold text-foreground">{item.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
