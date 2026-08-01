import { CarCard } from "./CarCard";
import { SectionHeading } from "./SectionHeading";
import { useInventory } from "./inventory-context";
import { useI18n } from "@/i18n";

export function FeaturedCars() {
  const { t, num } = useI18n();
  const { results } = useInventory();

  return (
    <section
      id="cars"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute -start-40 top-24 h-80 w-80 rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.cars.eyebrow}
          title={t.cars.title}
          desc={t.cars.desc}
        />

        {results.length === 0 ? (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border/80 bg-surface/70 p-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur">
            <p className="text-sm leading-7 text-muted-foreground">
              {t.cars.noResults}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold/40" />
              <p className="text-xs font-medium tracking-wide text-muted-foreground">
                {num(results.length)} {t.cars.resultsCount}
              </p>
              <span className="h-px w-8 bg-gold/40" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {results.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}