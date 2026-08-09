import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as vehicles } from "./vehicles-rtPQX5NL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inventory-context-FfEZzmog.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyFilters = {
	brand: "all",
	bodyType: "all",
	year: "all",
	price: "all",
	condition: "all"
};
var inPriceRange = (price, range) => {
	switch (range) {
		case "under100": return price < 1e5;
		case "r100to200": return price >= 1e5 && price < 2e5;
		case "r200to300": return price >= 2e5 && price < 3e5;
		case "over300": return price >= 3e5;
		default: return true;
	}
};
function filterVehicles(list, f) {
	return list.filter((v) => (f.brand === "all" || v.brand.en === f.brand) && (f.bodyType === "all" || v.bodyType === f.bodyType) && (f.year === "all" || v.year === f.year) && (f.condition === "all" || v.condition === f.condition) && inPriceRange(v.price, f.price));
}
var InventoryContext = (0, import_react.createContext)(null);
function InventoryProvider({ children }) {
	const [filters, setFilters] = (0, import_react.useState)(emptyFilters);
	const value = (0, import_react.useMemo)(() => ({
		filters,
		setFilters,
		resetFilters: () => setFilters(emptyFilters),
		results: filterVehicles(vehicles, filters)
	}), [filters]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryContext.Provider, {
		value,
		children
	});
}
function useInventory() {
	const ctx = (0, import_react.useContext)(InventoryContext);
	if (!ctx) throw new Error("useInventory must be used inside <InventoryProvider>");
	return ctx;
}
//#endregion
export { useInventory as n, InventoryProvider as t };
