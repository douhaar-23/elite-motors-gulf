import heroCar from "@/assets/hero-car.jpg";
import { dealership } from "@/config/dealership";
import { useI18n } from "@/i18n";

export function About() {
  const { t } = useI18n();
  const years = dealership.stats.yearsExperience.trim();
  const customers = dealership.stats.happyCustomers.trim();
  const brands = dealership.stats.brands.trim();

  const stats = [
    years && { n: `${years}+`, l: t.hero.stats.years },
    customers && { n: `${customers}+`, l: t.hero.stats.customers },
    brands && { n: `${brands}+`, l: t.hero.stats.brands },
  ].filter(Boolean) as { n: string; l: string }[];

  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs tracking-[0.3em] gold-text uppercase mb-3">{t.about.eyebrow}</div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              {years ? (
                <>
                  {t.about.titlePrefix}{" "}
                  <span className="gold-text">
                    {years} {t.about.yearsWord}
                  </span>{" "}
                  {t.about.titleSuffix}
                </>
              ) : (
                t.about.titleFallback
              )}
            </h2>
            <div className="hairline mt-6 w-24" />
            <div className="mt-6 space-y-4 text-muted-foreground leading-loose">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {stats.length > 0 && (
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.l} className="rounded-lg border border-border bg-surface p-4 text-center">
                    <div className="text-2xl font-black gold-text">{s.n}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <img
                src={heroCar}
                alt={t.about.imageAlt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -end-6 hidden sm:block rounded-xl border border-gold/40 bg-surface p-5 shadow-xl">
              <div className="gold-text text-3xl font-black">A+</div>
              <div className="text-xs text-muted-foreground mt-1">{t.about.badgeLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
