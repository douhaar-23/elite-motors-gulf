import { Search, RotateCcw } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Field, selectCls } from "./LeadForm";
import { useInventory, type InventoryFilters, type PriceRange } from "./inventory-context";
import { vehicleBrands, vehicleYears, type VehicleBodyType, type VehicleCondition } from "@/data/vehicles";
import { useI18n } from "@/i18n";

const bodyTypes: VehicleBodyType[] = ["sedan", "suv", "coupe"];
const conditions: VehicleCondition[] = ["new", "used"];
const priceRanges: Exclude<PriceRange, "all">[] = ["under100", "r100to200", "r200to300", "over300"];

export function FiltersSection() {
  const { t, lang } = useI18n();
  const { filters, setFilters, resetFilters } = useInventory();

  const update = <K extends keyof InventoryFilters>(key: K, value: InventoryFilters[K]) =>
    setFilters({ ...filters, [key]: value });

  const brands = vehicleBrands("en");
  const years = vehicleYears();

  return (
    <section id="search" className="py-16 sm:py-24 bg-surface/40 border-y border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.filters.eyebrow} title={t.filters.title} desc={t.filters.desc} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-2xl border border-border bg-surface p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <Field label={t.filters.brand}>
              <select
                className={selectCls}
                value={filters.brand}
                onChange={(e) => update("brand", e.target.value)}
              >
                <option value="all">{t.common.all}</option>
                {brands.map((b, i) => (
                  <option key={b} value={b}>
                    {vehicleBrands(lang)[i]}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={t.filters.model}>
              <select
                className={selectCls}
                value={filters.bodyType}
                onChange={(e) => update("bodyType", e.target.value as InventoryFilters["bodyType"])}
              >
                <option value="all">{t.common.all}</option>
                {bodyTypes.map((b) => (
                  <option key={b} value={b}>
                    {t.cars.bodyType[b]}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={t.filters.year}>
              <select
                className={selectCls}
                value={String(filters.year)}
                onChange={(e) => update("year", e.target.value === "all" ? "all" : Number(e.target.value))}
              >
                <option value="all">{t.common.all}</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={t.filters.price}>
              <select
                className={selectCls}
                value={filters.price}
                onChange={(e) => update("price", e.target.value as PriceRange)}
              >
                <option value="all">{t.common.all}</option>
                {priceRanges.map((r) => (
                  <option key={r} value={r}>
                    {t.filters.priceRanges[r]}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={t.filters.condition}>
              <select
                className={selectCls}
                value={filters.condition}
                onChange={(e) => update("condition", e.target.value as InventoryFilters["condition"])}
              >
                <option value="all">{t.common.all}</option>
                {conditions.map((c) => (
                  <option key={c} value={c}>
                    {t.cars.condition[c]}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 min-h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
            >
              <Search className="h-4 w-4" />
              {t.filters.search}
            </button>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 min-h-11 text-sm font-semibold text-foreground hover:border-gold/60 hover:text-gold transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              {t.filters.reset}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
