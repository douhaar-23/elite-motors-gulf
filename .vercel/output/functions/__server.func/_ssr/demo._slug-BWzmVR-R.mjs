import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./demo._slug-DEhUlPMk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo._slug-BWzmVR-R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DemoContext = (0, import_react.createContext)(null);
function DemoProvider({ value, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoContext.Provider, {
		value,
		children
	});
}
function useDemo() {
	const demo = (0, import_react.useContext)(DemoContext);
	if (!demo) throw new Error("useDemo must be used inside DemoProvider");
	return demo;
}
function DemoRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoProvider, {
		value: Route.useLoaderData(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoPage, {})
	});
}
function DemoPage() {
	const demo = useDemo();
	const themeStyle = {
		"--gold": demo.theme.primary,
		"--gold-soft": demo.theme.primarySoft,
		"--ring": demo.theme.primary
	};
	const isUS = demo.country === "US";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		dir: isUS ? "ltr" : "rtl",
		lang: isUS ? "en" : "ar",
		style: themeStyle,
		className: "min-h-screen bg-background text-foreground transition-colors duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n            w-full\n            rounded-2xl\n            border border-border\n            bg-surface\n            p-6\n            text-center\n            shadow-[0_24px_70px_rgba(0,0,0,0.12)]\n            transition-colors duration-300\n            sm:p-10\n          ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: demo.logoHorizontal || demo.logoSquare,
						alt: isUS ? demo.nameEn : demo.nameAr,
						className: "mx-auto mb-6 h-20 max-w-72 object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-black text-foreground",
						children: isUS ? demo.nameEn : demo.nameAr
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: demo.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: isUS ? `tel:${demo.phone}` : `https://wa.me/${demo.whatsapp}`,
						className: "\n              mt-6\n              inline-flex\n              items-center\n              justify-center\n              rounded-lg\n              bg-gold\n              px-6 py-3\n              font-bold\n              text-background\n              transition-all duration-200\n              hover:bg-gold-soft\n            ",
						children: isUS ? "Call Us" : "تواصل عبر واتساب"
					})
				]
			})
		})
	});
}
//#endregion
export { DemoRoute as component };
