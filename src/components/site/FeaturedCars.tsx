import { CarCard } from "./CarCard";
import { SectionHeading } from "./SectionHeading";
import { useInventory } from "./inventory-context";
import { useI18n } from "@/i18n";

export function FeaturedCars() {
  const { t, num } = useI18n();
  const { results } = useInventory();

  return (
    <section id="cars" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.cars.eyebrow} title={t.cars.title} desc={t.cars.desc} />

        {results.length === 0 ? (
          <p className="rounded-xl border border-border bg-surface p-8 text-center text-sm text-muted-foreground">
            {t.cars.noResults}
          </p>
        ) : (
          <>
            <p className="mb-6 text-center text-xs text-muted-foreground">
              {num(results.length)} {t.cars.resultsCount}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
