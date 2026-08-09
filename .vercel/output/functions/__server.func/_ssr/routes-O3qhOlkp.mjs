import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { I as BadgeDollarSign, R as ArrowRight, T as Gauge, _ as MessageSquare, b as MapPin, f as Search, i as Wallet, k as Clock, l as ShieldCheck, m as Phone, o as Truck, p as RotateCcw, r as Wrench, v as MessageCircle, x as Mail, z as ArrowLeft } from "../_libs/lucide-react.mjs";
import { _ as waLink, a as dealershipHoursSecondary, d as smsHref, f as telHref, h as vehicleYears, i as dealershipHours, l as mailHref, m as vehicleBrands, n as dealership, p as useI18n, r as dealershipAddress } from "./vehicles-rtPQX5NL.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Header, i as Footer, n as Field, o as LeadForm, r as FloatingWhatsApp, s as selectCls, t as CarCard } from "./LeadForm-fsGOg2_n.mjs";
import { n as useInventory } from "./inventory-context-FfEZzmog.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-O3qhOlkp.js
var import_jsx_runtime = require_jsx_runtime();
var hero_car_default = "/assets/hero-car-jklGmV9_.jpg";
function Hero() {
	const { t, lang } = useI18n();
	const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "\r\n        relative isolate\r\n        min-h-[760px]\r\n        overflow-hidden\r\n        bg-background\r\n        scroll-mt-20\r\n      ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_car_default,
				alt: t.hero.imageAlt,
				className: "\r\n          absolute inset-0 -z-30\r\n          h-full w-full\r\n          object-cover\r\n          object-center\r\n        "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "\r\n    absolute inset-0 -z-20\r\n    bg-gradient-to-l\r\n    ltr:bg-gradient-to-r\r\n\r\n    from-[#faf8f2]/95\r\n    from-0%\r\n    via-[#faf8f2]/72\r\n    via-24%\r\n    to-transparent\r\n    to-58%\r\n\r\n    dark:from-background/90\r\n    dark:via-background/55\r\n    dark:to-background/5\r\n  "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "\r\n    absolute inset-0 -z-20\r\n    bg-gradient-to-t\r\n\r\n    from-[#faf8f2]/10\r\n    from-0%\r\n    via-transparent\r\n    via-20%\r\n    to-transparent\r\n\r\n    dark:from-background/90\r\n    dark:via-background/5\r\n    dark:to-background/35\r\n  "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "\r\n    absolute inset-0 -z-20\r\n    bg-transparent\r\n    dark:bg-black/10\r\n  "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "\r\n          absolute -bottom-32 start-[15%] -z-10\r\n          h-[26rem] w-[26rem]\r\n          rounded-full\r\n          bg-gold/[0.04]\r\n          blur-[110px]\r\n\r\n          dark:bg-gold/10\r\n\r\n          sm:h-[34rem]\r\n          sm:w-[34rem]\r\n        "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "\r\n          absolute inset-x-0 top-0 -z-10\r\n          h-px\r\n          bg-gradient-to-r\r\n          from-transparent\r\n          via-gold/30\r\n          to-transparent\r\n        "
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "\r\n          relative\r\n          mx-auto\r\n          flex\r\n          min-h-[760px]\r\n          w-full\r\n          max-w-7xl\r\n          items-center\r\n          px-4\r\n          pb-16\r\n          pt-24\r\n\r\n          sm:px-6\r\n          sm:pb-20\r\n          sm:pt-28\r\n\r\n          lg:px-8\r\n        ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n              animate-fade-in\r\n              mb-6\r\n              inline-flex\r\n              items-center\r\n              gap-2\r\n              rounded-full\r\n\r\n              border\r\n              border-gold/35\r\n\r\n              bg-white/55\r\n              dark:bg-background/35\r\n\r\n              px-4\r\n              py-2\r\n\r\n              text-xs\r\n              font-medium\r\n              text-gold\r\n\r\n              shadow-[0_12px_40px_rgba(0,0,0,0.08)]\r\n              dark:shadow-[0_12px_40px_rgba(0,0,0,0.18)]\r\n\r\n              backdrop-blur-xl\r\n\r\n              sm:text-sm\r\n            ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "\r\n                  absolute\r\n                  inline-flex\r\n                  h-full\r\n                  w-full\r\n                  animate-ping\r\n                  rounded-full\r\n                  bg-gold/40\r\n                " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "\r\n                  relative\r\n                  inline-flex\r\n                  h-2\r\n                  w-2\r\n                  rounded-full\r\n                  bg-gold\r\n                " })]
							}), t.hero.badge]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "\r\n              animate-fade-in\r\n              max-w-3xl\r\n\r\n              text-4xl\r\n              font-black\r\n              leading-[1.08]\r\n              tracking-[-0.035em]\r\n              text-foreground\r\n\r\n              sm:text-5xl\r\n              md:text-6xl\r\n              lg:text-7xl\r\n            ",
							children: [t.hero.titleLine1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block gold-text",
								children: t.hero.titleLine2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "\r\n              mt-6\r\n              max-w-2xl\r\n\r\n              text-base\r\n              leading-8\r\n              text-foreground/90\r\n\r\n              sm:text-lg\r\n              lg:text-xl\r\n            ",
							children: t.hero.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n              mt-8\r\n              flex\r\n              flex-col\r\n              gap-3\r\n\r\n              sm:flex-row\r\n              sm:flex-wrap\r\n            ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "cars",
								className: "\r\n                group\r\n\r\n                inline-flex\r\n                min-h-12\r\n                items-center\r\n                justify-center\r\n                gap-2\r\n\r\n                rounded-md\r\n                bg-gold\r\n\r\n                px-7\r\n                py-3\r\n\r\n                text-sm\r\n                font-bold\r\n                text-white\r\n                dark:text-background\r\n\r\n                shadow-[0_14px_40px_rgba(198,161,91,0.18)]\r\n\r\n                transition-all\r\n                duration-200\r\n\r\n                hover:-translate-y-0.5\r\n                hover:bg-gold-soft\r\n                hover:shadow-[0_18px_50px_rgba(198,161,91,0.28)]\r\n\r\n                focus-visible:outline-none\r\n                focus-visible:ring-2\r\n                focus-visible:ring-gold\r\n                focus-visible:ring-offset-2\r\n                focus-visible:ring-offset-background\r\n              ",
								children: [t.hero.browse, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "\r\n                  h-4\r\n                  w-4\r\n                  transition-transform\r\n                  duration-200\r\n\r\n                  group-hover:translate-x-1\r\n                  rtl:group-hover:-translate-x-1\r\n                " })]
							}), dealership.whatsappEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(t.cta.message),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "\r\n                  inline-flex\r\n                  min-h-12\r\n                  items-center\r\n                  justify-center\r\n                  gap-2\r\n\r\n                  rounded-md\r\n\r\n                  border\r\n                  border-black/10\r\n                  dark:border-white/15\r\n\r\n                  bg-white/65\r\n                  dark:bg-background/35\r\n\r\n                  px-7\r\n                  py-3\r\n\r\n                  text-sm\r\n                  font-semibold\r\n                  text-foreground\r\n\r\n                  shadow-[0_12px_40px_rgba(0,0,0,0.08)]\r\n                  dark:shadow-[0_12px_40px_rgba(0,0,0,0.16)]\r\n\r\n                  backdrop-blur-xl\r\n\r\n                  transition-all\r\n                  duration-200\r\n\r\n                  hover:-translate-y-0.5\r\n                  hover:border-gold/50\r\n                  hover:bg-white/85\r\n                  dark:hover:bg-background/55\r\n                  hover:text-gold\r\n\r\n                  focus-visible:outline-none\r\n                  focus-visible:ring-2\r\n                  focus-visible:ring-gold\r\n                  focus-visible:ring-offset-2\r\n                  focus-visible:ring-offset-background\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), t.common.whatsapp]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref,
								className: "\r\n                  inline-flex\r\n                  min-h-12\r\n                  items-center\r\n                  justify-center\r\n                  gap-2\r\n\r\n                  rounded-md\r\n\r\n                  border\r\n                  border-black/10\r\n                  dark:border-white/15\r\n\r\n                  bg-white/65\r\n                  dark:bg-background/35\r\n\r\n                  px-7\r\n                  py-3\r\n\r\n                  text-sm\r\n                  font-semibold\r\n                  text-foreground\r\n\r\n                  shadow-[0_12px_40px_rgba(0,0,0,0.08)]\r\n                  dark:shadow-[0_12px_40px_rgba(0,0,0,0.16)]\r\n\r\n                  backdrop-blur-xl\r\n\r\n                  transition-all\r\n                  duration-200\r\n\r\n                  hover:-translate-y-0.5\r\n                  hover:border-gold/50\r\n                  hover:bg-white/85\r\n                  dark:hover:bg-background/55\r\n                  hover:text-gold\r\n\r\n                  focus-visible:outline-none\r\n                  focus-visible:ring-2\r\n                  focus-visible:ring-gold\r\n                  focus-visible:ring-offset-2\r\n                  focus-visible:ring-offset-background\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), t.common.call]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": "true",
				className: "\r\n          absolute\r\n          bottom-7\r\n          start-1/2\r\n\r\n          hidden\r\n          -translate-x-1/2\r\n          flex-col\r\n          items-center\r\n          gap-2\r\n\r\n          text-[10px]\r\n          uppercase\r\n          tracking-[0.28em]\r\n          text-foreground/40\r\n\r\n          lg:flex\r\n        ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang === "ar" ? "اكتشف" : "Explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "\r\n            relative\r\n            h-10\r\n            w-px\r\n            overflow-hidden\r\n            bg-black/10\r\n            dark:bg-white/15\r\n          ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "\r\n              absolute\r\n              inset-x-0\r\n              top-0\r\n              h-4\r\n              animate-bounce\r\n              bg-gold/80\r\n            " })
				})]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, desc, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs tracking-[0.3em] gold-text uppercase mb-3",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl sm:text-4xl font-black text-foreground",
				children: title
			}),
			desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `hairline mt-6 ${center ? "mx-auto w-24" : "w-24"}` })
		]
	});
}
function FeaturedCars() {
	const { t, num } = useI18n();
	const { results } = useInventory();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cars",
		className: "relative scroll-mt-20 overflow-hidden py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -start-40 top-24 h-80 w-80 rounded-full bg-gold/5 blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t.cars.eyebrow,
					title: t.cars.title,
					desc: t.cars.desc
				}), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 max-w-2xl rounded-2xl border border-border/80 bg-surface/70 p-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-7 text-muted-foreground",
						children: t.cars.noResults
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 mt-2 flex items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-medium tracking-wide text-muted-foreground",
							children: [
								num(results.length),
								" ",
								t.cars.resultsCount
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/40" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8",
					children: results.map((car) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCard, { car }, car.id))
				})] })]
			})
		]
	});
}
var bodyTypes = [
	"sedan",
	"suv",
	"coupe"
];
var conditions = ["new", "used"];
var priceRanges = [
	"under100",
	"r100to200",
	"r200to300",
	"over300"
];
function FiltersSection() {
	const { t, lang } = useI18n();
	const { filters, setFilters, resetFilters } = useInventory();
	const update = (key, value) => setFilters({
		...filters,
		[key]: value
	});
	const brands = vehicleBrands("en");
	const years = vehicleYears();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "search",
		className: "py-16 sm:py-24 bg-surface/40 border-y border-border scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t.filters.eyebrow,
				title: t.filters.title,
				desc: t.filters.desc
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });
				},
				className: "rounded-2xl border border-border bg-surface p-4 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.filters.brand,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectCls,
								value: filters.brand,
								onChange: (e) => update("brand", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: t.common.all
								}), brands.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b,
									children: vehicleBrands(lang)[i]
								}, b))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.filters.model,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectCls,
								value: filters.bodyType,
								onChange: (e) => update("bodyType", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: t.common.all
								}), bodyTypes.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b,
									children: t.cars.bodyType[b]
								}, b))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.filters.year,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectCls,
								value: String(filters.year),
								onChange: (e) => update("year", e.target.value === "all" ? "all" : Number(e.target.value)),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: t.common.all
								}), years.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: y,
									children: y
								}, y))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.filters.price,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectCls,
								value: filters.price,
								onChange: (e) => update("price", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: t.common.all
								}), priceRanges.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: r,
									children: t.filters.priceRanges[r]
								}, r))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t.filters.condition,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: selectCls,
								value: filters.condition,
								onChange: (e) => update("condition", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: t.common.all
								}), conditions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c,
									children: t.cars.condition[c]
								}, c))]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 min-h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), t.filters.search]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: resetFilters,
						className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 min-h-11 text-sm font-semibold text-foreground hover:border-gold/60 hover:text-gold transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), t.filters.reset]
					})]
				})]
			})]
		})
	});
}
var icons$1 = [
	Search,
	ShieldCheck,
	Wallet,
	Wrench
];
function WhyUs() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t.whyUs.eyebrow,
				title: t.whyUs.title,
				desc: t.whyUs.desc
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: t.whyUs.items.map((it, i) => {
					const Icon = icons$1[i % icons$1.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl border border-border bg-surface p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-lg border border-gold/30 bg-background text-gold group-hover:bg-gold group-hover:text-background transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-bold text-foreground",
								children: it.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: it.desc
							})
						]
					}, it.title);
				})
			})]
		})
	});
}
var icons = [
	Truck,
	Gauge,
	BadgeDollarSign,
	ShieldCheck
];
function Services() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-16 sm:py-24 bg-surface/40 border-y border-border scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t.services.eyebrow,
				title: t.services.title,
				desc: t.services.desc
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: t.services.items.map((s, i) => {
					const Icon = icons[i % icons.length];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group relative overflow-hidden rounded-xl border border-border bg-background p-6 hover:border-gold/40 transition-all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-surface text-gold group-hover:bg-gold group-hover:text-background transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-foreground",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: s.desc
								})]
							})]
						})
					}, s.title);
				})
			})]
		})
	});
}
function About() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "\r\n        scroll-mt-20\r\n        border-y border-border\r\n        bg-surface/35\r\n        py-16\r\n        sm:py-24\r\n      ",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-gold",
							children: t.about.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-xl text-3xl font-black leading-tight text-foreground sm:text-4xl",
							children: t.about.titleFallback
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 max-w-xl space-y-4 text-sm leading-8 text-muted-foreground sm:text-base",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.about.p1 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.about.p2 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.about.p3 })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-20 bg-gold/50" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-1 relative lg:order-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n                relative\r\n                aspect-[4/3]\r\n                overflow-hidden\r\n                rounded-2xl\r\n                border border-border\r\n                bg-surface\r\n                shadow-[0_20px_60px_rgba(0,0,0,0.10)]\r\n                dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]\r\n              ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_car_default,
							alt: t.about.imageAlt,
							width: 1200,
							height: 900,
							loading: "lazy",
							className: "\r\n                  h-full\r\n                  w-full\r\n                  object-cover\r\n                  object-center\r\n                  transition-transform\r\n                  duration-700\r\n                  hover:scale-[1.02]\r\n                "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "\r\n                  absolute inset-0\r\n                  bg-gradient-to-t\r\n                  from-black/20\r\n                  via-transparent\r\n                  to-transparent\r\n                  dark:from-black/35\r\n                "
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\r\n                absolute\r\n                -bottom-5\r\n                -end-3\r\n                hidden\r\n                rounded-xl\r\n                border border-gold/35\r\n                bg-background/90\r\n                px-5\r\n                py-4\r\n                shadow-xl\r\n                backdrop-blur-xl\r\n                sm:block\r\n                lg:-end-5\r\n              ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold text-gold",
							children: t.about.badgeLabel
						})
					})]
				})]
			})
		})
	});
}
function CTA() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border border-gold/30 bg-surface p-10 sm:p-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,var(--gold)_0%,transparent_60%)] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-4xl lg:text-5xl font-black text-foreground",
							children: [
								t.cta.titlePrefix,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-text",
									children: t.cta.titleHighlight
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed",
							children: t.cta.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [dealership.whatsappEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(t.cta.message),
								target: "_blank",
								rel: "noopener",
								className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 min-h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), t.common.whatsapp]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mailHref(t.contact.tabs.general, t.cta.message),
								className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 min-h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), t.common.email]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref,
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 min-h-11 text-sm font-semibold text-foreground hover:border-gold/60 hover:text-gold transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), t.common.call]
							})]
						})
					]
				})]
			})
		})
	});
}
function Contact() {
	const { t, lang } = useI18n();
	const hours = [dealershipHours(lang), dealershipHoursSecondary(lang)].filter((value) => value.trim() !== "").join(" • ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative border-t border-white/10 py-16 sm:py-24 scroll-mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "\r\n          absolute inset-x-0 top-0\r\n          h-px\r\n          bg-gradient-to-r\r\n          from-transparent\r\n          via-gold/30\r\n          to-transparent\r\n        "
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t.contact.eyebrow,
				title: t.contact.title,
				desc: t.contact.desc
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: Phone,
							label: t.contact.phone,
							value: dealership.phone,
							href: telHref
						}),
						dealership.whatsappEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: MessageCircle,
							label: t.common.whatsapp,
							value: dealership.phone,
							href: waLink(t.cta.message)
						}),
						dealership.smsEnabled && !dealership.whatsappEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: MessageSquare,
							label: t.common.sms,
							value: dealership.phone,
							href: smsHref(t.cta.message)
						}),
						dealership.email.trim() !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: Mail,
							label: t.common.email,
							value: dealership.email,
							href: mailHref()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: MapPin,
							label: t.contact.address,
							value: dealershipAddress(lang),
							href: dealership.mapsUrl
						}),
						hours && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: Clock,
							label: t.contact.hours,
							value: hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\r\n                aspect-video\r\n                overflow-hidden\r\n                rounded-2xl\r\n                border border-white/10\r\n                bg-surface\r\n                shadow-[0_20px_60px_rgba(0,0,0,0.18)]\r\n              ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: t.contact.mapTitle,
								src: `https://www.google.com/maps?q=${encodeURIComponent(dealership.mapsEmbedQuery)}&output=embed`,
								className: "h-full w-full grayscale transition duration-500 hover:grayscale-0",
								loading: "lazy"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n              rounded-2xl\r\n              border border-white/10\r\n              bg-background/85\r\n              p-5\r\n              shadow-[0_24px_80px_rgba(0,0,0,0.25)]\r\n              backdrop-blur-xl\r\n              sm:p-8\r\n              lg:col-span-3\r\n            ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-black text-foreground",
							children: lang === "ar" ? "استفسر عن سيارة" : "Ask about a vehicle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: lang === "ar" ? "أرسل استفسارك وسنتواصل معك بخصوص السيارة والسعر والتوفر." : "Send your inquiry and we'll get back to you about the vehicle, price, and availability."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {
						kind: "general",
						submitLabel: t.contact.submit.general
					})]
				})]
			})]
		})]
	});
}
function InfoRow({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "\r\n        flex items-start gap-4\r\n        rounded-xl\r\n        border border-white/10\r\n        bg-surface/55\r\n        p-4\r\n        transition-colors\r\n        hover:border-gold/30\r\n      ",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				dir: href?.startsWith("tel:") ? "ltr" : void 0,
				className: `mt-1.5 break-words text-sm font-semibold leading-6 text-foreground ${href?.startsWith("tel:") ? "text-right" : ""}`,
				children: value
			})]
		})]
	});
	if (!href) return content;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
		className: "block",
		children: content
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCars, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltersSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {})
		]
	});
}
//#endregion
export { Index as component };
