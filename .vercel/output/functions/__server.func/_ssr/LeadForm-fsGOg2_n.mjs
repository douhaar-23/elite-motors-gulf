import { r as __toESM } from "../_runtime.mjs";
import { t as showroom } from "./showroom-CPcwG06j.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Clock3, C as Instagram, D as Facebook, E as Fuel, F as Calendar, S as Languages, T as Gauge, a as Twitter, b as MapPin, d as Send, g as Moon, j as CircleCheck, m as Phone, n as X, s as Sun, t as Youtube, u as Settings2, v as MessageCircle, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { _ as waLink, c as leadHref, f as telHref, n as dealership, o as dealershipName, p as useI18n, r as dealershipAddress } from "./vehicles-rtPQX5NL.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeadForm-fsGOg2_n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CarCard({ car }) {
	const { t, lang, price, mileage } = useI18n();
	const currentLang = lang;
	const name = `${car.brand[currentLang]} ${car.model[currentLang]} ${car.year}`;
	const message = t.vehicle.inquiryMessage(name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "\r\n        group\r\n        flex h-full flex-col\r\n        overflow-hidden\r\n        rounded-xl\r\n        border border-white/10\r\n        bg-card\r\n        transition-all duration-300\r\n        hover:-translate-y-1\r\n        hover:border-gold/30\r\n        hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]\r\n      ",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/cars/$vehicleId",
			params: { vehicleId: car.id },
			"aria-label": `${t.common.viewDetails} — ${name}`,
			className: "relative block aspect-[16/10] overflow-hidden bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: car.images[0],
					alt: name,
					loading: "lazy",
					className: "\r\n            h-full w-full\r\n            object-cover\r\n            transition-transform duration-500\r\n            group-hover:scale-[1.03]\r\n          "
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "\r\n            absolute inset-0\r\n            bg-gradient-to-t\r\n            from-background/80\r\n            via-transparent\r\n            to-transparent\r\n            opacity-70\r\n          "
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "\r\n            absolute end-3 top-3\r\n            rounded-full\r\n            border border-gold/30\r\n            bg-background/75\r\n            px-3 py-1.5\r\n            text-[11px] font-semibold\r\n            text-gold\r\n            shadow-[0_10px_30px_rgba(0,0,0,0.2)]\r\n            backdrop-blur-md\r\n          ",
					children: t.cars.condition[car.condition]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n            absolute inset-x-4 bottom-4\r\n            flex items-end justify-between gap-3\r\n            translate-y-2\r\n            opacity-0\r\n            transition-all duration-300\r\n            group-hover:translate-y-0\r\n            group-hover:opacity-100\r\n          ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-foreground/70",
						children: t.common.viewDetails
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent rtl:bg-gradient-to-l" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-lg font-bold text-foreground sm:text-xl",
							children: car.brand[currentLang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-sm text-muted-foreground",
							children: car.model[currentLang]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 text-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-black gold-text sm:text-lg",
							children: car.price > 0 ? price(car.price) : currentLang === "ar" ? "تواصل لمعرفة السعر" : "Contact for price"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
							label: String(car.year)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4" }),
							label: mileage(car.mileage)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-4 w-4" }),
							label: t.cars.transmission[car.transmission]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "h-4 w-4" }),
							label: t.cars.fuel[car.fuel]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex gap-2 border-t border-white/10 pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cars/$vehicleId",
						params: { vehicleId: car.id },
						className: "\r\n              inline-flex min-h-11 flex-1\r\n              items-center justify-center\r\n              rounded-md\r\n              bg-foreground\r\n              px-4 py-2.5\r\n              text-xs font-bold\r\n              text-background\r\n              transition-all duration-200\r\n              hover:-translate-y-0.5\r\n              hover:bg-gold\r\n              hover:shadow-[0_12px_30px_rgba(198,161,91,0.18)]\r\n              focus-visible:outline-none\r\n              focus-visible:ring-2\r\n              focus-visible:ring-gold\r\n              focus-visible:ring-offset-2\r\n              focus-visible:ring-offset-background\r\n            ",
						children: t.common.viewDetails
					}), dealership.whatsappEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink(message),
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": `${t.common.whatsapp} — ${name}`,
						className: "\r\n                grid min-h-11 min-w-11\r\n                place-items-center\r\n                rounded-md\r\n                border border-white/10\r\n                bg-background/30\r\n                text-whatsapp\r\n                transition-all duration-200\r\n                hover:-translate-y-0.5\r\n                hover:border-whatsapp/60\r\n                hover:bg-whatsapp/10\r\n                focus-visible:outline-none\r\n                focus-visible:ring-2\r\n                focus-visible:ring-whatsapp\r\n                focus-visible:ring-offset-2\r\n                focus-visible:ring-offset-background\r\n              ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: telHref,
						"aria-label": `${t.common.call} — ${name}`,
						className: "\r\n                grid min-h-11 min-w-11\r\n                place-items-center\r\n                rounded-md\r\n                border border-white/10\r\n                bg-background/30\r\n                text-gold\r\n                transition-all duration-200\r\n                hover:-translate-y-0.5\r\n                hover:border-gold/60\r\n                hover:bg-gold/10\r\n                focus-visible:outline-none\r\n                focus-visible:ring-2\r\n                focus-visible:ring-gold\r\n                focus-visible:ring-offset-2\r\n                focus-visible:ring-offset-background\r\n              ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
					})]
				})
			]
		})]
	});
}
function Spec({ icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-gold",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: label
		})]
	});
}
function FloatingWhatsApp() {
	const { t } = useI18n();
	const enabled = dealership.whatsappEnabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: enabled ? waLink(t.cta.message) : telHref,
		target: enabled ? "_blank" : void 0,
		rel: "noopener",
		"aria-label": enabled ? t.common.whatsapp : t.common.call,
		className: `fixed bottom-6 start-6 z-50 grid h-14 w-14 place-items-center rounded-full text-background shadow-lg shadow-black/40 hover:scale-110 transition-transform ${enabled ? "bg-whatsapp" : "bg-gold"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 rounded-full animate-ping opacity-30 ${enabled ? "bg-whatsapp" : "bg-gold"}` }), enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "relative h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "relative h-6 w-6" })]
	});
}
function Logo({ size = 48, variant = "square" }) {
	const logo = variant === "horizontal" ? showroom.logoHorizontal : showroom.logoSquare;
	const [error, setError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setError(false);
	}, [logo]);
	if (!error && logo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "shrink-0 overflow-hidden",
		style: {
			width: variant === "horizontal" ? size * 3.4 : size,
			height: size
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo,
			alt: "",
			className: "h-full w-full object-contain",
			onError: () => setError(true)
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid shrink-0 place-items-center rounded-lg border border-gold/40 bg-surface",
		style: {
			width: size,
			height: size
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gold-text text-xl font-black",
			children: dealership.logoLetter
		})
	});
}
function Footer() {
	const { t, lang } = useI18n();
	const links = [
		{
			hash: "home",
			label: t.nav.home
		},
		{
			hash: "cars",
			label: t.nav.cars
		},
		{
			hash: "services",
			label: t.nav.services
		},
		{
			hash: "about",
			label: t.nav.about
		},
		{
			hash: "contact",
			label: t.nav.contact
		}
	];
	const socials = [
		{
			href: dealership.social.facebook,
			Icon: Facebook,
			label: "Facebook"
		},
		{
			href: dealership.social.instagram,
			Icon: Instagram,
			label: "Instagram"
		},
		{
			href: dealership.social.twitter,
			Icon: Twitter,
			label: "Twitter"
		},
		{
			href: dealership.social.youtube,
			Icon: Youtube,
			label: "YouTube"
		}
	].filter((social) => social.href && social.href !== "#");
	const footerCta = lang === "ar" ? {
		title: "جاهز لاختيار سيارتك القادمة؟",
		desc: "تواصل معنا اليوم وسنساعدك في العثور على السيارة المناسبة لاحتياجاتك.",
		button: "تواصل معنا"
	} : {
		title: "Ready to find your next vehicle?",
		desc: "Contact us today and let our team help you find the right vehicle for your needs.",
		button: "Contact us"
	};
	const hoursLabel = lang === "ar" ? "ساعات العمل" : "Working Hours";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-white/10 bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -bottom-40 end-0 h-96 w-96 rounded-full bg-gold/5 blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 rounded-2xl border border-white/10 bg-surface/65 px-5 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur sm:px-7 lg:flex lg:items-center lg:justify-between lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.18em] text-gold",
								children: dealershipName(lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-black text-foreground sm:text-3xl",
								children: footerCta.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-sm leading-7 text-muted-foreground",
								children: footerCta.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "contact",
							className: "\r\n              mt-6\r\n              inline-flex min-h-12\r\n              items-center justify-center\r\n              rounded-md\r\n              bg-gold\r\n              px-7 py-3\r\n              text-sm font-bold\r\n              text-background\r\n              transition-all duration-200\r\n              hover:-translate-y-0.5\r\n              hover:bg-gold-soft\r\n              hover:shadow-[0_14px_35px_rgba(198,161,91,0.2)]\r\n              lg:mt-0\r\n            ",
							children: footerCta.button
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-14 w-14 place-items-center rounded-lg border border-gold/40 bg-surface shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
												size: 80,
												variant: "square"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "leading-tight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-bold text-foreground",
												children: dealershipName(lang)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-[10px] uppercase tracking-[0.26em] text-muted-foreground",
												children: dealership.nameEn
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-md text-sm leading-7 text-muted-foreground",
										children: t.footer.desc
									}),
									socials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-2",
										children: socials.map(({ href, Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": label,
											className: "\r\n                      grid h-11 w-11\r\n                      place-items-center\r\n                      rounded-md\r\n                      border border-white/10\r\n                      bg-surface/60\r\n                      text-muted-foreground\r\n                      transition-all duration-200\r\n                      hover:-translate-y-0.5\r\n                      hover:border-gold/50\r\n                      hover:bg-gold/10\r\n                      hover:text-gold\r\n                      focus-visible:outline-none\r\n                      focus-visible:ring-2\r\n                      focus-visible:ring-gold\r\n                      focus-visible:ring-offset-2\r\n                      focus-visible:ring-offset-background\r\n                    ",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										}, label))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-foreground",
									children: t.nav.quickLinks
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-px w-10 bg-gold/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										hash: link.hash,
										className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold/60" }), link.label]
									}) }, link.hash))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-foreground",
									children: t.footer.contact
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-px w-10 bg-gold/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-4 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: telHref,
											dir: "ltr",
											className: "flex items-start gap-3 transition-colors hover:text-gold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dealership.phone })]
										}) }),
										dealership.email.trim() !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `mailto:${dealership.email}`,
											className: "flex items-start gap-3 transition-colors hover:text-gold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "break-all",
												children: dealership.email
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "leading-6",
												children: dealershipAddress(lang)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-medium text-foreground/85",
													children: hoursLabel
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 leading-6",
													children: lang === "ar" ? dealership.hours : dealership.hoursEn
												}),
												dealership.hoursSecondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "leading-6",
													children: lang === "ar" ? dealership.hoursSecondary : dealership.hoursSecondaryEn
												})
											] })]
										})
									]
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 border-t border-white/10 pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" ",
									dealershipName(lang),
									" —",
									" ",
									t.footer.rights
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.footer.disclaimer })
							})]
						})
					})
				]
			})
		]
	});
}
function Header() {
	const { t, lang, toggleLang } = useI18n();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [darkMode, setDarkMode] = (0, import_react.useState)(false);
	const links = [
		{
			hash: "home",
			label: t.nav.home
		},
		{
			hash: "cars",
			label: t.nav.cars
		},
		{
			hash: "services",
			label: t.nav.services
		},
		{
			hash: "about",
			label: t.nav.about
		},
		{
			hash: "contact",
			label: t.nav.contact
		}
	];
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const savedTheme = localStorage.getItem("theme");
		const shouldUseDark = savedTheme === "dark" || !savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches;
		setDarkMode(shouldUseDark);
		document.documentElement.classList.toggle("dark", shouldUseDark);
	}, []);
	const toggleTheme = () => {
		const nextDarkMode = !darkMode;
		setDarkMode(nextDarkMode);
		document.documentElement.classList.toggle("dark", nextDarkMode);
		localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
	};
	const contactMessage = t.vehicle.inquiryMessage(dealershipName(lang));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-background/70 backdrop-blur-sm"}
      `,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-20 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "home",
						className: "flex shrink-0 items-center gap-3",
						"aria-label": dealershipName(lang),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							size: 58,
							variant: "square"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:block leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold text-foreground lg:text-base",
								children: dealershipName(lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[9px] uppercase tracking-[0.24em] text-muted-foreground",
								children: dealership.nameEn
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-8",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: l.hash,
							className: "\r\n                  relative\r\n                  text-sm\r\n                  text-foreground/80\r\n                  transition-colors\r\n                  hover:text-gold\r\n\r\n                  after:absolute\r\n                  after:start-0\r\n                  after:-bottom-1\r\n                  after:h-px\r\n                  after:w-0\r\n                  after:bg-gold\r\n                  after:transition-all\r\n\r\n                  hover:after:w-full\r\n                ",
							children: l.label
						}, l.hash))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleTheme,
								"aria-label": darkMode ? lang === "ar" ? "تفعيل الوضع النهاري" : "Switch to light mode" : lang === "ar" ? "تفعيل الوضع الليلي" : "Switch to dark mode",
								title: darkMode ? lang === "ar" ? "الوضع النهاري" : "Light mode" : lang === "ar" ? "الوضع الليلي" : "Dark mode",
								className: "\r\n                grid h-11 w-11\r\n                place-items-center\r\n                rounded-md\r\n                border border-border\r\n                bg-surface/70\r\n                text-foreground\r\n                transition-all duration-200\r\n\r\n                hover:border-gold/60\r\n                hover:bg-surface\r\n                hover:text-gold\r\n              ",
								children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-[18px] w-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-[18px] w-[18px]" })
							}),
							dealership.bilingual && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: toggleLang,
								"aria-label": t.common.switchLanguage,
								className: "\r\n                  inline-flex h-11\r\n                  items-center gap-1.5\r\n                  rounded-md\r\n                  border border-border\r\n                  bg-surface/70\r\n                  px-3\r\n                  text-xs font-bold\r\n                  text-foreground\r\n                  transition-colors\r\n\r\n                  hover:border-gold/60\r\n                  hover:text-gold\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "h-4 w-4" }), lang === "ar" ? "EN" : "AR"]
							}),
							dealership.whatsappEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(contactMessage),
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": t.common.whatsapp,
								className: "\r\n                    hidden sm:inline-flex\r\n                    h-11\r\n                    items-center justify-center gap-2\r\n                    rounded-md\r\n                    bg-gold\r\n                    px-4\r\n                    text-sm font-semibold\r\n                    text-background\r\n                    transition-all duration-200\r\n\r\n                    hover:bg-gold-soft\r\n                  ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), t.common.whatsapp]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink(contactMessage),
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": t.common.whatsapp,
								className: "\r\n                    grid h-11 w-11\r\n                    place-items-center\r\n                    rounded-md\r\n                    bg-gold\r\n                    text-background\r\n                    transition-colors\r\n\r\n                    hover:bg-gold-soft\r\n                    sm:hidden\r\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref,
								"aria-label": t.common.call,
								className: "\r\n                    hidden sm:inline-flex\r\n                    h-11\r\n                    items-center justify-center gap-2\r\n                    rounded-md\r\n                    bg-gold\r\n                    px-4\r\n                    text-sm font-semibold\r\n                    text-background\r\n                    transition-colors\r\n\r\n                    hover:bg-gold-soft\r\n                  ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), t.common.call]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: telHref,
								"aria-label": t.common.call,
								className: "\r\n                    grid h-11 w-11\r\n                    place-items-center\r\n                    rounded-md\r\n                    bg-gold\r\n                    text-background\r\n                    transition-colors\r\n\r\n                    hover:bg-gold-soft\r\n                    sm:hidden\r\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(!open),
								className: "\r\n                grid h-11 w-11\r\n                place-items-center\r\n                rounded-md\r\n                border border-border\r\n                bg-surface/70\r\n                text-foreground\r\n                transition-colors\r\n\r\n                hover:border-gold/60\r\n                hover:text-gold\r\n\r\n                lg:hidden\r\n              ",
								"aria-label": open ? t.common.closeMenu : t.common.openMenu,
								"aria-expanded": open,
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-4 animate-fade-in lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "\r\n                flex flex-col gap-1\r\n                rounded-lg\r\n                border border-border\r\n                bg-background/95\r\n                p-2\r\n                shadow-xl\r\n                backdrop-blur-xl\r\n              ",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: l.hash,
						onClick: () => setOpen(false),
						className: "\r\n                    rounded-md\r\n                    px-3 py-3\r\n                    text-sm\r\n                    text-foreground/90\r\n                    transition-colors\r\n\r\n                    hover:bg-surface-2\r\n                    hover:text-gold\r\n                  ",
						children: l.label
					}, l.hash))
				})
			})]
		})
	});
}
var inputCls = `
  w-full
  min-h-12
  rounded-lg
  border border-white/10
  bg-background/70
  px-4 py-3
  text-sm text-foreground
  placeholder:text-muted-foreground/50
  outline-none
  transition-all duration-200
  hover:border-white/20
  focus:border-gold/60
  focus:bg-background
  focus:ring-2
  focus:ring-gold/15
`;
var selectCls = `
  w-full
  min-h-12
  rounded-lg
  border border-white/10
  bg-background/70
  px-4 py-3
  text-sm text-foreground
  outline-none
  transition-all duration-200
  hover:border-white/20
  focus:border-gold/60
  focus:bg-background
  focus:ring-2
  focus:ring-gold/15
`;
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-2 block text-xs font-semibold text-foreground/70",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 block text-xs text-destructive",
				children: error
			})
		]
	});
}
function LeadForm({ kind, vehicleName, submitLabel, className = "" }) {
	const { t } = useI18n();
	const fields = t.contact.fields;
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const validate = (values) => {
		const nextErrors = {};
		if (!values.name?.trim()) nextErrors.name = t.common.required;
		if (!values.phone?.trim()) nextErrors.phone = t.common.required;
		else if (values.phone.replace(/\D/g, "").length < 7) nextErrors.phone = t.common.invalidPhone;
		if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = t.common.invalidEmail;
		if (kind === "general" && !values.message?.trim()) nextErrors.message = t.common.required;
		if (kind === "tradeIn" && !values.tradeInCar?.trim()) nextErrors.tradeInCar = t.common.required;
		if (kind === "testDrive" && !values.preferredDate?.trim()) nextErrors.preferredDate = t.common.required;
		return nextErrors;
	};
	const buildMessage = (values) => {
		const subjectMap = {
			general: t.contact.tabs.general,
			finance: t.contact.tabs.finance,
			tradeIn: t.contact.tabs.tradeIn,
			testDrive: t.vehicle.testDrive
		};
		const lines = [subjectMap[kind]];
		if (vehicleName) lines.push(`${fields.car}: ${vehicleName}`);
		lines.push(`${fields.name}: ${values.name}`);
		lines.push(`${fields.phone}: ${values.phone}`);
		if (values.email) lines.push(`${fields.email}: ${values.email}`);
		if (values.car) lines.push(`${fields.car}: ${values.car}`);
		if (values.downPayment) lines.push(`${fields.downPayment}: ${values.downPayment}`);
		if (values.monthlyBudget) lines.push(`${fields.monthlyBudget}: ${values.monthlyBudget}`);
		if (values.tradeInCar) lines.push(`${fields.tradeInCar}: ${values.tradeInCar}`);
		if (values.tradeInMileage) lines.push(`${fields.tradeInMileage}: ${values.tradeInMileage}`);
		if (values.preferredDate) lines.push(`${fields.preferredDate}: ${values.preferredDate}`);
		if (values.message) lines.push(`${fields.message}: ${values.message}`);
		return {
			subject: subjectMap[kind],
			body: lines.join("\n")
		};
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const values = Object.fromEntries(new FormData(form));
		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		const { subject, body } = buildMessage(values);
		window.open(leadHref(subject, body), "_blank", "noopener");
		setSent(true);
		form.reset();
		window.setTimeout(() => {
			setSent(false);
		}, 6e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: `space-y-5 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: fields.name,
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						type: "text",
						autoComplete: "name",
						placeholder: fields.namePlaceholder,
						className: inputCls
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: fields.phone,
					error: errors.phone,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "phone",
						type: "tel",
						autoComplete: "tel",
						inputMode: "tel",
						placeholder: fields.phonePlaceholder,
						className: inputCls
					})
				})]
			}),
			!vehicleName && (kind === "general" || kind === "finance") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: fields.car,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "car",
					type: "text",
					placeholder: fields.carPlaceholder,
					className: inputCls
				})
			}),
			kind === "finance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: fields.downPayment,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "downPayment",
						type: "text",
						inputMode: "numeric",
						placeholder: fields.downPaymentPlaceholder,
						className: inputCls
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: fields.monthlyBudget,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "monthlyBudget",
						type: "text",
						inputMode: "numeric",
						placeholder: fields.monthlyBudgetPlaceholder,
						className: inputCls
					})
				})]
			}),
			kind === "tradeIn" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: fields.tradeInCar,
					error: errors.tradeInCar,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "tradeInCar",
						type: "text",
						placeholder: fields.tradeInCarPlaceholder,
						className: inputCls
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: fields.tradeInMileage,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "tradeInMileage",
						type: "text",
						inputMode: "numeric",
						placeholder: fields.tradeInMileagePlaceholder,
						className: inputCls
					})
				})]
			}),
			kind === "testDrive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: fields.preferredDate,
				error: errors.preferredDate,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "preferredDate",
					type: "date",
					className: inputCls
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: fields.message,
				error: errors.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					rows: kind === "general" ? 5 : 4,
					placeholder: fields.messagePlaceholder,
					className: `${inputCls} resize-y`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "\r\n          group\r\n          inline-flex min-h-12 w-full\r\n          items-center justify-center gap-2\r\n          rounded-lg\r\n          bg-gold\r\n          px-6 py-3\r\n          text-sm font-bold\r\n          text-background\r\n          shadow-[0_14px_35px_rgba(198,161,91,0.16)]\r\n          transition-all duration-200\r\n          hover:-translate-y-0.5\r\n          hover:bg-gold-soft\r\n          hover:shadow-[0_18px_45px_rgba(198,161,91,0.24)]\r\n          focus-visible:outline-none\r\n          focus-visible:ring-2\r\n          focus-visible:ring-gold\r\n          focus-visible:ring-offset-2\r\n          focus-visible:ring-offset-background\r\n        ",
				children: [submitLabel ?? t.common.send, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" })]
			}),
			sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "\r\n            flex items-center justify-center gap-2\r\n            rounded-lg\r\n            border border-gold/25\r\n            bg-gold/10\r\n            px-4 py-3\r\n            text-center text-xs\r\n            text-gold\r\n          ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), dealership.whatsappEnabled ? t.contact.success : t.contact.successEmail]
			})
		]
	});
}
//#endregion
export { Header as a, Footer as i, Field as n, LeadForm as o, FloatingWhatsApp as r, selectCls as s, CarCard as t };
