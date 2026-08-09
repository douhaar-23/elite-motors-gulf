import { r as __toESM } from "../_runtime.mjs";
import { t as showroom } from "./showroom-CPcwG06j.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { O as Copy, P as Check, c as Store, h as Palette, p as RotateCcw, w as ImageUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CTbnIE_L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "elite-motors-admin-showroom";
var tabs = [
	{
		key: "general",
		label: "بيانات المعرض"
	},
	{
		key: "branding",
		label: "الهوية"
	},
	{
		key: "cars",
		label: "السيارات"
	},
	{
		key: "hero",
		label: "Hero"
	},
	{
		key: "testimonials",
		label: "الآراء"
	},
	{
		key: "contact",
		label: "التواصل"
	},
	{
		key: "export",
		label: "التصدير"
	}
];
var defaultValues = {
	nameAr: showroom.nameAr,
	nameEn: showroom.nameEn,
	taglineAr: showroom.taglineAr,
	taglineEn: showroom.taglineEn,
	logoSquare: showroom.logoSquare,
	logoHorizontal: showroom.logoHorizontal,
	logoLetter: showroom.logoLetter,
	phone: showroom.phone,
	whatsapp: showroom.whatsapp,
	email: showroom.email,
	addressAr: showroom.addressAr,
	addressEn: showroom.addressEn,
	instagram: showroom.instagram,
	website: showroom.website,
	mapsUrl: showroom.mapsUrl,
	mapsEmbedQuery: showroom.mapsEmbedQuery,
	themePrimary: showroom.theme.primary,
	themePrimarySoft: showroom.theme.primarySoft,
	themeBackground: showroom.theme.background,
	themeSurface: showroom.theme.surface,
	themeForeground: showroom.theme.foreground
};
function escapeValue(value) {
	return value.replaceAll("\\", "\\\\").replaceAll("\"", "\\\"").replaceAll("\n", "\\n");
}
function AdminPage() {
	const [form, setForm] = (0, import_react.useState)(defaultValues);
	const [tab, setTab] = (0, import_react.useState)("general");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [logoPreview, setLogoPreview] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (!saved) return;
		try {
			const parsed = JSON.parse(saved);
			setForm((current) => ({
				...current,
				...parsed
			}));
		} catch {
			window.localStorage.removeItem(STORAGE_KEY);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
	}, [form]);
	const generatedCode = (0, import_react.useMemo)(() => `/**
 * بيانات المعرض القابلة للتخصيص.
 * عدلي هذا الملف فقط عند تجهيز نسخة لمعرض جديد.
 */

export const showroom = {
  nameAr: "${escapeValue(form.nameAr)}",
  nameEn: "${escapeValue(form.nameEn)}",

  taglineAr: "${escapeValue(form.taglineAr)}",
  taglineEn: "${escapeValue(form.taglineEn)}",
logoSquare: "${escapeValue(form.logoSquare)}",
logoHorizontal: "${escapeValue(form.logoHorizontal)}",
  
  logoLetter: "${escapeValue(form.logoLetter)}",

  phone: "${escapeValue(form.phone)}",
  whatsapp: "${escapeValue(form.whatsapp)}",
  email: "${escapeValue(form.email)}",

  addressAr: "${escapeValue(form.addressAr)}",
  addressEn: "${escapeValue(form.addressEn)}",

  instagram: "${escapeValue(form.instagram)}",
  website: "${escapeValue(form.website)}",

  mapsUrl: "${escapeValue(form.mapsUrl)}",
  mapsEmbedQuery: "${escapeValue(form.mapsEmbedQuery)}",

  theme: {
    primary: "${escapeValue(form.themePrimary)}",
    primarySoft: "${escapeValue(form.themePrimarySoft)}",
    background: "${escapeValue(form.themeBackground)}",
    surface: "${escapeValue(form.themeSurface)}",
    foreground: "${escapeValue(form.themeForeground)}",
  },
};
`, [form]);
	const updateField = (field, value) => {
		setForm((current) => ({
			...current,
			[field]: value
		}));
	};
	const handleLogoUpload = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			window.alert("اختاري ملف صورة صالح.");
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") setLogoPreview(reader.result);
		};
		reader.readAsDataURL(file);
	};
	const copyCode = async () => {
		try {
			await navigator.clipboard.writeText(generatedCode);
			setCopied(true);
			window.setTimeout(() => {
				setCopied(false);
			}, 2e3);
		} catch {
			window.alert("تعذر نسخ الكود. انسخيه يدويًا.");
		}
	};
	const resetForm = () => {
		setForm(defaultValues);
		setLogoPreview("");
		window.localStorage.removeItem(STORAGE_KEY);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		dir: "rtl",
		className: "min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-gold",
							children: "أداة تجهيز الديمو"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl font-black sm:text-4xl",
							children: "تخصيص موقع معرض السيارات"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 max-w-3xl text-sm leading-7 text-muted-foreground",
							children: ["عدلي بيانات المعرض والهوية البصرية، ثم انسخي الكود الناتج والصقيه داخل", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								dir: "ltr",
								className: "mx-1 text-gold",
								children: "src/config/showroom.ts"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mb-8 flex gap-2 overflow-x-auto pb-2",
					children: tabs.map(({ key, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(key),
						className: `shrink-0 rounded-lg px-5 py-3 text-sm font-bold transition-all ${tab === key ? "bg-gold text-background" : "border border-white/10 bg-surface text-foreground hover:border-gold/50 hover:text-gold"}`,
						children: label
					}, key))
				}),
				tab === "general" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeneralTab, {
					form,
					updateField,
					resetForm
				}),
				tab === "branding" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandingTab, {
					form,
					updateField,
					logoPreview,
					handleLogoUpload,
					resetLogoPreview: () => setLogoPreview("")
				}),
				tab === "export" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportTab, {
					generatedCode,
					copied,
					copyCode
				}),
				tab === "cars" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonTab, {
					title: "إدارة السيارات",
					description: "الخطوة القادمة ستكون إضافة وتعديل وحذف السيارات وتوليد كود vehicles.ts."
				}),
				tab === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonTab, {
					title: "إعدادات الصفحة الرئيسية",
					description: "سنضيف تعديل عنوان الهيرو، الوصف، الصورة الرئيسية والأرقام التسويقية."
				}),
				tab === "testimonials" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonTab, {
					title: "آراء العملاء",
					description: "سنضيف إدارة آراء العملاء وإخفاء أو إظهار هذا القسم."
				}),
				tab === "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonTab, {
					title: "إعدادات التواصل",
					description: "سنضيف ساعات العمل وروابط التواصل ونموذج الطلبات."
				})
			]
		})
	});
}
function GeneralTab({ form, updateField, resetForm }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-white/10 bg-surface p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-7 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black",
					children: "بيانات المعرض"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "المعلومات الأساسية التي تظهر في الموقع."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "اسم المعرض بالعربي",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.nameAr,
							onChange: (event) => updateField("nameAr", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "اسم المعرض بالإنجليزي",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.nameEn,
							onChange: (event) => updateField("nameEn", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "الوصف القصير بالعربي",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.taglineAr,
							onChange: (event) => updateField("taglineAr", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "الوصف القصير بالإنجليزي",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.taglineEn,
							onChange: (event) => updateField("taglineEn", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "رقم الهاتف",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.phone,
							onChange: (event) => updateField("phone", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "رقم واتساب بدون +",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.whatsapp,
							onChange: (event) => updateField("whatsapp", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "البريد الإلكتروني",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							type: "email",
							value: form.email,
							onChange: (event) => updateField("email", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "إنستغرام",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.instagram,
							onChange: (event) => updateField("instagram", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "العنوان بالعربي",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.addressAr,
							onChange: (event) => updateField("addressAr", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "العنوان بالإنجليزي",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.addressEn,
							onChange: (event) => updateField("addressEn", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "الموقع الإلكتروني",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.website,
							onChange: (event) => updateField("website", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "رابط خرائط Google",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							dir: "ltr",
							value: form.mapsUrl,
							onChange: (event) => updateField("mapsUrl", event.target.value),
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "عبارة البحث داخل الخريطة",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.mapsEmbedQuery,
								onChange: (event) => updateField("mapsEmbedQuery", event.target.value),
								placeholder: "اسم المعرض، الرياض",
								className: inputClass
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: resetForm,
				className: "mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "إعادة القيم الأصلية"]
			})
		]
	});
}
function BrandingTab({ form, updateField, logoPreview, handleLogoUpload, resetLogoPreview }) {
	const displayedLogo = logoPreview || form.logoSquare;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-8 xl:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl border border-white/10 bg-surface p-5 sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-7 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-black",
					children: "الهوية البصرية"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "عدلي الشعار وألوان الموقع بما يناسب المعرض."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold text-foreground/70",
						children: "رفع شعار للمعاينة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-background/50 px-5 py-6 text-sm font-bold text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-5 w-5" }),
							"اختيار صورة الشعار",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/png,image/jpeg,image/webp,image/svg+xml",
								onChange: handleLogoUpload,
								className: "hidden"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] leading-5 text-muted-foreground",
						children: "رفع الصورة هنا للمعاينة فقط. ضعي ملف الشعار النهائي داخل مجلد public باسم logo.png."
					}),
					logoPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: resetLogoPreview,
						className: "mt-3 text-xs font-bold text-gold hover:underline",
						children: "إزالة صورة المعاينة"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "مسار الشعار المربع",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								dir: "ltr",
								value: form.logoSquare,
								onChange: (e) => updateField("logoSquare", e.target.value),
								placeholder: "/logo-square.png",
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "مسار الشعار الأفقي",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								dir: "ltr",
								value: form.logoHorizontal,
								onChange: (e) => updateField("logoHorizontal", e.target.value),
								placeholder: "/logo-horizontal.png",
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "حرف الشعار الاحتياطي",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.logoLetter,
								maxLength: 2,
								onChange: (event) => updateField("logoLetter", event.target.value),
								className: inputClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
							label: "اللون الأساسي",
							value: form.themePrimary,
							onChange: (value) => updateField("themePrimary", value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
							label: "اللون الأساسي الفاتح",
							value: form.themePrimarySoft,
							onChange: (value) => updateField("themePrimarySoft", value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
							label: "لون الخلفية",
							value: form.themeBackground,
							onChange: (value) => updateField("themeBackground", value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
							label: "لون البطاقات",
							value: form.themeSurface,
							onChange: (value) => updateField("themeSurface", value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorField, {
								label: "لون النص",
								value: form.themeForeground,
								onChange: (value) => updateField("themeForeground", value)
							})
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "xl:sticky xl:top-6 xl:self-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivePreview, {
				form,
				displayedLogo
			})
		})]
	});
}
function LivePreview({ form, displayedLogo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-white/10 shadow-2xl",
		style: {
			backgroundColor: form.themeBackground,
			color: form.themeForeground
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4 border-b px-5 py-4",
			style: {
				borderColor: `${form.themePrimary}33`,
				backgroundColor: form.themeSurface
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoPreview, {
					src: displayedLogo,
					fallback: form.logoLetter,
					primaryColor: form.themePrimary,
					backgroundColor: form.themeBackground
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-sm font-black",
						children: form.nameAr || "اسم المعرض"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[10px] uppercase tracking-[0.2em] opacity-55",
						children: form.nameEn || "SHOWROOM"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "rounded-lg px-4 py-2.5 text-xs font-black",
				style: {
					backgroundColor: form.themePrimary,
					color: form.themeBackground
				},
				children: "واتساب"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex rounded-full border px-3 py-1 text-[11px] font-bold",
					style: {
						color: form.themePrimary,
						borderColor: `${form.themePrimary}55`,
						backgroundColor: `${form.themePrimary}12`
					},
					children: "سيارات مختارة بعناية"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-5 text-3xl font-black leading-tight",
					children: ["سيارتك القادمة", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						style: { color: form.themePrimary },
						children: "تبدأ من هنا"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-7 opacity-65",
					children: form.taglineAr || "الوصف القصير للمعرض يظهر هنا."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-lg px-5 py-3 text-sm font-black",
						style: {
							backgroundColor: form.themePrimary,
							color: form.themeBackground
						},
						children: "تصفح السيارات"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-lg border px-5 py-3 text-sm font-black",
						style: {
							color: form.themeForeground,
							borderColor: `${form.themeForeground}25`,
							backgroundColor: form.themeSurface
						},
						children: "تواصل معنا"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 overflow-hidden rounded-xl border",
					style: {
						backgroundColor: form.themeSurface,
						borderColor: `${form.themeForeground}18`
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex aspect-[16/8] items-center justify-center",
						style: { background: `linear-gradient(135deg, ${form.themeSurface}, ${form.themeBackground})` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-14 w-24 rounded-full blur-xl",
								style: { backgroundColor: `${form.themePrimary}45` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "-mt-8 text-sm font-bold opacity-45",
								children: "صورة السيارة الرئيسية"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-black",
								children: "مرسيدس الفئة C"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs opacity-55",
								children: "موديل 2024"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-black",
								style: { color: form.themePrimary },
								children: "249,000 ر.س"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-5 w-full rounded-lg py-3 text-sm font-black",
							style: {
								backgroundColor: form.themeForeground,
								color: form.themeBackground
							},
							children: "عرض التفاصيل"
						})]
					})]
				})
			]
		})]
	});
}
function LogoPreview({ src, fallback, primaryColor, backgroundColor }) {
	const [imageFailed, setImageFailed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setImageFailed(false);
	}, [src]);
	if (src && !imageFailed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border",
		style: {
			borderColor: `${primaryColor}66`,
			backgroundColor
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "معاينة الشعار",
			onError: () => setImageFailed(true),
			className: "h-full w-full object-contain p-1"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg border text-lg font-black",
		style: {
			color: primaryColor,
			borderColor: `${primaryColor}66`,
			backgroundColor
		},
		children: fallback || "E"
	});
}
function ExportTab({ generatedCode, copied, copyCode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-2xl border border-white/10 bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-black",
				children: "تصدير إعدادات المعرض"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "انسخي الكود والصقيه مكان محتوى showroom.ts."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: copyCode,
				className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-gold-soft",
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), copied ? "تم النسخ" : "نسخ الكود"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			dir: "ltr",
			className: "max-h-[720px] overflow-auto p-5 text-left text-xs leading-6 text-foreground/80",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: generatedCode })
		})]
	});
}
function ComingSoonTab({ title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-dashed border-white/15 bg-surface p-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-black",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground",
			children: description
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-bold text-foreground/70",
			children: label
		}), children]
	});
}
function ColorField({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-background/70 px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "color",
					value,
					onChange: (event) => onChange(event.target.value),
					className: "h-8 w-10 shrink-0 cursor-pointer rounded border-0 bg-transparent p-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					dir: "ltr",
					type: "text",
					value,
					onChange: (event) => onChange(event.target.value),
					className: "min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-5 w-5 shrink-0 rounded-full border border-white/15",
					style: { backgroundColor: value }
				})
			]
		})
	});
}
var inputClass = "min-h-12 w-full rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/45 hover:border-white/20 focus:border-gold/60 focus:ring-2 focus:ring-gold/15";
//#endregion
export { AdminPage as component };
