import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo._slug-DEhUlPMk.js
var demos = { ratwah: {
	slug: "ratwah",
	nameAr: "رتوة للسيارات",
	nameEn: "Ratwah Motors",
	phone: "+966544888419",
	whatsapp: "966544888419",
	email: "info@ratwah.net",
	country: "SA",
	theme: {
		primary: "#dd2222",
		primarySoft: "#ff4444",
		background: "#08090B",
		surface: "#111316",
		foreground: "#F7F7F7"
	},
	logoSquare: "/demos/ratwah/logo-square.jpg",
	logoHorizontal: "/demos/ratwah/logo-horizontal.jpg"
} };
var $$splitComponentImporter = () => import("./demo._slug-BWzmVR-R.mjs");
var Route = createFileRoute("/demo/$slug")({
	loader: ({ params }) => {
		const demo = demos[params.slug];
		if (!demo) throw notFound();
		return demo;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
