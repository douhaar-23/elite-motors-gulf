import { n as dealership, s as getVehicle } from "./vehicles-rtPQX5NL.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cars._vehicleId-BSZfoURm.js
var $$splitComponentImporter = () => import("./cars._vehicleId-CKlPjzna.mjs");
var Route = createFileRoute("/cars/$vehicleId")({
	loader: ({ params }) => {
		const vehicle = getVehicle(params.vehicleId);
		if (!vehicle) throw notFound();
		return {
			id: vehicle.id,
			title: `${vehicle.brand.en} ${vehicle.model.en} ${vehicle.year}`
		};
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.title} — ${dealership.nameEn}` : "Vehicle";
		const description = `${title} — available now at ${dealership.nameEn}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "product"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
