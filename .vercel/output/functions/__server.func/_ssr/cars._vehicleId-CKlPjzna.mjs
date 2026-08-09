import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as Fuel, F as Calendar, L as BadgeCheck, M as ChevronRight, N as ChevronLeft, R as ArrowRight, T as Gauge, u as Settings2, v as MessageCircle, z as ArrowLeft } from "../_libs/lucide-react.mjs";
import { _ as waLink, n as dealership, o as dealershipName, p as useI18n, s as getVehicle, u as similarVehicles } from "./vehicles-rtPQX5NL.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./cars._vehicleId-BSZfoURm.mjs";
import { a as Header, i as Footer, o as LeadForm, r as FloatingWhatsApp, t as CarCard } from "./LeadForm-fsGOg2_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cars._vehicleId-CKlPjzna.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VehiclePage() {
	const { id } = Route.useLoaderData();
	const { t, lang, price, mileage } = useI18n();
	const currentLang = lang;
	const vehicle = getVehicle(id);
	const [active, setActive] = (0, import_react.useState)(0);
	const name = `${vehicle.brand[currentLang]} ${vehicle.model[currentLang]} ${vehicle.year}`;
	const Back = lang === "ar" ? ArrowRight : ArrowLeft;
	const Prev = lang === "ar" ? ChevronRight : ChevronLeft;
	const Next = lang === "ar" ? ChevronLeft : ChevronRight;
	const specs = [
		{
			icon: Calendar,
			label: t.cars.specs.year,
			value: String(vehicle.year)
		},
		{
			icon: Gauge,
			label: t.cars.specs.mileage,
			value: mileage(vehicle.mileage)
		},
		{
			icon: Settings2,
			label: t.cars.specs.transmission,
			value: t.cars.transmission[vehicle.transmission]
		},
		{
			icon: Fuel,
			label: t.cars.specs.fuel,
			value: t.cars.fuel[vehicle.fuel]
		},
		{
			icon: BadgeCheck,
			label: t.cars.specs.condition,
			value: t.cars.condition[vehicle.condition]
		}
	];
	const showPrevious = () => {
		setActive((current) => current === 0 ? vehicle.images.length - 1 : current - 1);
	};
	const showNext = () => {
		setActive((current) => current === vehicle.images.length - 1 ? 0 : current + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-20 pt-24 sm:pt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: "cars",
							className: "\r\n              inline-flex items-center gap-2\r\n              text-sm font-medium\r\n              text-muted-foreground\r\n              transition-colors\r\n              hover:text-gold\r\n            ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, { className: "h-4 w-4" }), t.common.backToCars]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "\r\n                  group\r\n                  relative\r\n                  overflow-hidden\r\n                  rounded-2xl\r\n                  border border-white/10\r\n                  bg-surface\r\n                  shadow-[0_24px_80px_rgba(0,0,0,0.28)]\r\n                ",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: vehicle.images[active],
												alt: name,
												width: 1200,
												height: 750,
												className: "\r\n                    aspect-[16/10] w-full\r\n                    object-cover\r\n                    transition-transform duration-700\r\n                    group-hover:scale-[1.015]\r\n                  "
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												"aria-hidden": "true",
												className: "\r\n                    absolute inset-0\r\n                    bg-gradient-to-t\r\n                    from-background/45\r\n                    via-transparent\r\n                    to-transparent\r\n                  "
											}),
											vehicle.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: showPrevious,
												"aria-label": "Previous image",
												className: "\r\n                        absolute start-4 top-1/2\r\n                        grid h-11 w-11 -translate-y-1/2 place-items-center\r\n                        rounded-full\r\n                        border border-white/15\r\n                        bg-background/55\r\n                        text-foreground\r\n                        opacity-0\r\n                        backdrop-blur-md\r\n                        transition-all\r\n                        hover:border-gold/60\r\n                        hover:text-gold\r\n                        group-hover:opacity-100\r\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prev, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: showNext,
												"aria-label": "Next image",
												className: "\r\n                        absolute end-4 top-1/2\r\n                        grid h-11 w-11 -translate-y-1/2 place-items-center\r\n                        rounded-full\r\n                        border border-white/15\r\n                        bg-background/55\r\n                        text-foreground\r\n                        opacity-0\r\n                        backdrop-blur-md\r\n                        transition-all\r\n                        hover:border-gold/60\r\n                        hover:text-gold\r\n                        group-hover:opacity-100\r\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, { className: "h-5 w-5" })
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "\r\n                    absolute bottom-4 end-4\r\n                    rounded-full\r\n                    border border-white/10\r\n                    bg-background/60\r\n                    px-3 py-1.5\r\n                    text-xs text-foreground/75\r\n                    backdrop-blur-md\r\n                  ",
												children: [
													active + 1,
													" / ",
													vehicle.images.length
												]
											})
										]
									}),
									vehicle.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex gap-3 overflow-x-auto pb-2",
										"aria-label": t.vehicle.gallery,
										children: vehicle.images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActive(index),
											"aria-label": `${t.vehicle.gallery} ${index + 1}`,
											className: `
                        relative
                        h-20 w-28 shrink-0
                        overflow-hidden
                        rounded-lg
                        border
                        transition-all duration-200
                        ${index === active ? "border-gold shadow-[0_0_0_1px_rgba(198,161,91,0.35)]" : "border-white/10 opacity-65 hover:border-gold/50 hover:opacity-100"}
                      `,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: image,
												alt: "",
												loading: "lazy",
												className: "h-full w-full object-cover"
											})
										}, image))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium text-gold",
													children: vehicle.model[currentLang]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
													className: "mt-2 text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl",
													children: [
														vehicle.model[currentLang],
														" ",
														vehicle.year
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-2xl font-black gold-text sm:text-3xl",
													children: vehicle.price > 0 ? price(vehicle.price) : currentLang === "ar" ? "تواصل لمعرفة السعر" : "Contact for price"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3",
												children: specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "\r\n                        rounded-xl\r\n                        border border-white/10\r\n                        bg-surface\r\n                        p-4\r\n                        transition-colors\r\n                        hover:border-gold/30\r\n                      ",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 text-xs text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(spec.icon, { className: "h-4 w-4 text-gold" }), spec.label]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 text-sm font-bold text-foreground sm:text-base",
														children: spec.value
													})]
												}, spec.label))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "mt-10 border-t border-white/10 pt-8",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-2xl font-black text-foreground",
													children: t.vehicle.overview
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 max-w-2xl text-base leading-8 text-muted-foreground",
													children: vehicle.description[currentLang]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
												className: "mt-9",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-2xl font-black text-foreground",
													children: t.vehicle.features
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",
													children: vehicle.features[currentLang].map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "\r\n                          flex items-center gap-3\r\n                          rounded-lg\r\n                          border border-white/8\r\n                          bg-surface/55\r\n                          px-4 py-3\r\n                          text-sm text-foreground/75\r\n                        ",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/10 text-gold",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4" })
														}), feature]
													}, feature))
												})]
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
								className: "space-y-4 lg:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lg:sticky lg:top-28",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "\r\n                    rounded-2xl\r\n                    border border-white/10\r\n                    bg-surface\r\n                    p-5\r\n                    shadow-[0_24px_70px_rgba(0,0,0,0.22)]\r\n                    sm:p-6\r\n                  ",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-5 border-b border-white/10 pb-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm text-muted-foreground",
														children: vehicle.brand[currentLang]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 text-xl font-black text-foreground",
														children: [
															vehicle.model[currentLang],
															" ",
															vehicle.year
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-2xl font-black gold-text",
														children: vehicle.price > 0 ? price(vehicle.price) : currentLang === "ar" ? "تواصل لمعرفة السعر" : "Contact for price"
													})
												]
											}),
											dealership.whatsappEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: waLink(t.vehicle.inquiryMessage(name)),
												target: "_blank",
												rel: "noopener noreferrer",
												className: "\r\n                        flex min-h-12 w-full items-center justify-center gap-2\r\n                        rounded-md\r\n                        bg-whatsapp\r\n                        px-6 py-3\r\n                        text-sm font-bold\r\n                        text-background\r\n                        transition-all duration-200\r\n                        hover:-translate-y-0.5\r\n                        hover:opacity-90\r\n                        hover:shadow-[0_14px_35px_rgba(37,211,102,0.18)]\r\n                      ",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), t.vehicle.inquire]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
														className: "text-lg font-bold text-foreground",
														children: t.vehicle.testDrive
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-xs leading-6 text-muted-foreground",
														children: t.vehicle.testDriveDesc
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
															kind: "testDrive",
															vehicleName: name,
															submitLabel: t.vehicle.testDrive
														})
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-xs leading-6 text-muted-foreground",
										children: [
											t.footer.disclaimer,
											" — ",
											dealershipName(lang)
										]
									})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-24 border-t border-white/10 pt-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-black text-foreground sm:text-3xl",
									children: t.vehicle.similar
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									hash: "cars",
									className: "text-sm font-medium text-muted-foreground transition-colors hover:text-gold",
									children: t.common.backToCars
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3",
								children: similarVehicles(vehicle).map((similarVehicle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCard, { car: similarVehicle }, similarVehicle.id))
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
//#endregion
export { VehiclePage as component };
