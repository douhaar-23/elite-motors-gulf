import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { vehicles, type Vehicle, type VehicleCondition, type VehicleBodyType } from "@/data/vehicles";

export type PriceRange = "all" | "under100" | "r100to200" | "r200to300" | "over300";

export type InventoryFilters = {
  brand: string; // brand id = English brand name, language-independent
  bodyType: VehicleBodyType | "all";
  year: number | "all";
  price: PriceRange;
  condition: VehicleCondition | "all";
};

export const emptyFilters: InventoryFilters = {
  brand: "all",
  bodyType: "all",
  year: "all",
  price: "all",
  condition: "all",
};

const inPriceRange = (price: number, range: PriceRange) => {
  switch (range) {
    case "under100":
      return price < 100_000;
    case "r100to200":
      return price >= 100_000 && price < 200_000;
    case "r200to300":
      return price >= 200_000 && price < 300_000;
    case "over300":
      return price >= 300_000;
    default:
      return true;
  }
};

export function filterVehicles(list: Vehicle[], f: InventoryFilters): Vehicle[] {
  return list.filter(
    (v) =>
      (f.brand === "all" || v.brand.en === f.brand) &&
      (f.bodyType === "all" || v.bodyType === f.bodyType) &&
      (f.year === "all" || v.year === f.year) &&
      (f.condition === "all" || v.condition === f.condition) &&
      inPriceRange(v.price, f.price),
  );
}

type InventoryContextValue = {
  filters: InventoryFilters;
  setFilters: (f: InventoryFilters) => void;
  resetFilters: () => void;
  results: Vehicle[];
};

const InventoryContext = createContext<InventoryContextValue | null>(null);

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<InventoryFilters>(emptyFilters);

  const value = useMemo<InventoryContextValue>(
    () => ({
      filters,
      setFilters,
      resetFilters: () => setFilters(emptyFilters),
      results: filterVehicles(vehicles, filters),
    }),
    [filters],
  );

  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory(): InventoryContextValue {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error("useInventory must be used inside <InventoryProvider>");
  return ctx;
}
