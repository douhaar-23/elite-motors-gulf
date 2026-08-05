import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Copy,
  ImageUp,
  Palette,
  RotateCcw,
  Store,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

import { showroom } from "@/config/showroom";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type TabKey =
  | "general"
  | "branding"
  | "cars"
  | "hero"
  | "testimonials"
  | "contact"
  | "export";

type ShowroomForm = {
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
logoSquare: string;
logoHorizontal: string;
logoLetter: string;

  phone: string;
  whatsapp: string;
  email: string;

  addressAr: string;
  addressEn: string;

  instagram: string;
  website: string;

  mapsUrl: string;
  mapsEmbedQuery: string;

  themePrimary: string;
  themePrimarySoft: string;
  themeBackground: string;
  themeSurface: string;
  themeForeground: string;
};

const STORAGE_KEY = "elite-motors-admin-showroom";

const tabs: { key: TabKey; label: string }[] = [
  { key: "general", label: "بيانات المعرض" },
  { key: "branding", label: "الهوية" },
  { key: "cars", label: "السيارات" },
  { key: "hero", label: "Hero" },
  { key: "testimonials", label: "الآراء" },
  { key: "contact", label: "التواصل" },
  { key: "export", label: "التصدير" },
];

const defaultValues: ShowroomForm = {
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
  themeForeground: showroom.theme.foreground,
};

function escapeValue(value: string) {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll("\n", "\\n");
}

function AdminPage() {
  const [form, setForm] = useState<ShowroomForm>(defaultValues);
  const [tab, setTab] = useState<TabKey>("general");
  const [copied, setCopied] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string>("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as Partial<ShowroomForm>;

      setForm((current) => ({
        ...current,
        ...parsed,
      }));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  const generatedCode = useMemo(
    () => `/**
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
`,
    [form],
  );

  const updateField = (field: keyof ShowroomForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      window.alert("اختاري ملف صورة صالح.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setLogoPreview(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.alert("تعذر نسخ الكود. انسخيه يدويًا.");
    }
  };

  const resetForm = () => {
    setForm(defaultValues);
    setLogoPreview("");
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-sm font-bold text-gold">أداة تجهيز الديمو</p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            تخصيص موقع معرض السيارات
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            عدلي بيانات المعرض والهوية البصرية، ثم انسخي الكود الناتج
            والصقيه داخل
            <span dir="ltr" className="mx-1 text-gold">
              src/config/showroom.ts
            </span>
          </p>
        </header>

        <nav className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`shrink-0 rounded-lg px-5 py-3 text-sm font-bold transition-all ${
                tab === key
                  ? "bg-gold text-background"
                  : "border border-white/10 bg-surface text-foreground hover:border-gold/50 hover:text-gold"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {tab === "general" && (
          <GeneralTab
            form={form}
            updateField={updateField}
            resetForm={resetForm}
          />
        )}

        {tab === "branding" && (
          <BrandingTab
            form={form}
            updateField={updateField}
            logoPreview={logoPreview}
            handleLogoUpload={handleLogoUpload}
            resetLogoPreview={() => setLogoPreview("")}
          />
        )}

        {tab === "export" && (
          <ExportTab
            generatedCode={generatedCode}
            copied={copied}
            copyCode={copyCode}
          />
        )}

        {tab === "cars" && (
          <ComingSoonTab
            title="إدارة السيارات"
            description="الخطوة القادمة ستكون إضافة وتعديل وحذف السيارات وتوليد كود vehicles.ts."
          />
        )}

        {tab === "hero" && (
          <ComingSoonTab
            title="إعدادات الصفحة الرئيسية"
            description="سنضيف تعديل عنوان الهيرو، الوصف، الصورة الرئيسية والأرقام التسويقية."
          />
        )}

        {tab === "testimonials" && (
          <ComingSoonTab
            title="آراء العملاء"
            description="سنضيف إدارة آراء العملاء وإخفاء أو إظهار هذا القسم."
          />
        )}

        {tab === "contact" && (
          <ComingSoonTab
            title="إعدادات التواصل"
            description="سنضيف ساعات العمل وروابط التواصل ونموذج الطلبات."
          />
        )}
      </div>
    </main>
  );
}

function GeneralTab({
  form,
  updateField,
  resetForm,
}: {
  form: ShowroomForm;
  updateField: (field: keyof ShowroomForm, value: string) => void;
  resetForm: () => void;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-7">
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold">
          <Store className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-xl font-black">بيانات المعرض</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            المعلومات الأساسية التي تظهر في الموقع.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="اسم المعرض بالعربي">
          <input
            value={form.nameAr}
            onChange={(event) =>
              updateField("nameAr", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="اسم المعرض بالإنجليزي">
          <input
            dir="ltr"
            value={form.nameEn}
            onChange={(event) =>
              updateField("nameEn", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="الوصف القصير بالعربي">
          <input
            value={form.taglineAr}
            onChange={(event) =>
              updateField("taglineAr", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="الوصف القصير بالإنجليزي">
          <input
            dir="ltr"
            value={form.taglineEn}
            onChange={(event) =>
              updateField("taglineEn", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="رقم الهاتف">
          <input
            dir="ltr"
            value={form.phone}
            onChange={(event) =>
              updateField("phone", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="رقم واتساب بدون +">
          <input
            dir="ltr"
            value={form.whatsapp}
            onChange={(event) =>
              updateField("whatsapp", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="البريد الإلكتروني">
          <input
            dir="ltr"
            type="email"
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="إنستغرام">
          <input
            dir="ltr"
            value={form.instagram}
            onChange={(event) =>
              updateField("instagram", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="العنوان بالعربي">
          <input
            value={form.addressAr}
            onChange={(event) =>
              updateField("addressAr", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="العنوان بالإنجليزي">
          <input
            dir="ltr"
            value={form.addressEn}
            onChange={(event) =>
              updateField("addressEn", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="الموقع الإلكتروني">
          <input
            dir="ltr"
            value={form.website}
            onChange={(event) =>
              updateField("website", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <Field label="رابط خرائط Google">
          <input
            dir="ltr"
            value={form.mapsUrl}
            onChange={(event) =>
              updateField("mapsUrl", event.target.value)
            }
            className={inputClass}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="عبارة البحث داخل الخريطة">
            <input
              value={form.mapsEmbedQuery}
              onChange={(event) =>
                updateField("mapsEmbedQuery", event.target.value)
              }
              placeholder="اسم المعرض، الرياض"
              className={inputClass}
            />
          </Field>
        </div>
      </div>

      <button
        type="button"
        onClick={resetForm}
        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold"
      >
        <RotateCcw className="h-4 w-4" />
        إعادة القيم الأصلية
      </button>
    </section>
  );
}

function BrandingTab({
  form,
  updateField,
  logoPreview,
  handleLogoUpload,
  resetLogoPreview,
}: {
  form: ShowroomForm;
  updateField: (field: keyof ShowroomForm, value: string) => void;
  logoPreview: string;
  handleLogoUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  resetLogoPreview: () => void;
}) {
  const displayedLogo = logoPreview || form.logoSquare;

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
      <section className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-7">
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold/10 text-gold">
            <Palette className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-black">الهوية البصرية</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              عدلي الشعار وألوان الموقع بما يناسب المعرض.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-3 text-xs font-bold text-foreground/70">
              رفع شعار للمعاينة
            </p>

            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-background/50 px-5 py-6 text-sm font-bold text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold">
              <ImageUp className="h-5 w-5" />
              اختيار صورة الشعار

              <input
                type="file"
                accept="image/png,image/jpeg,image/webp,image/svg+xml"
                onChange={handleLogoUpload}
                className="hidden"
              />
            </label>

            <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
              رفع الصورة هنا للمعاينة فقط. ضعي ملف الشعار النهائي داخل
              مجلد public باسم logo.png.
            </p>

            {logoPreview && (
              <button
                type="button"
                onClick={resetLogoPreview}
                className="mt-3 text-xs font-bold text-gold hover:underline"
              >
                إزالة صورة المعاينة
              </button>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="مسار الشعار المربع">
  <input
    dir="ltr"
    value={form.logoSquare}
    onChange={(e) => updateField("logoSquare", e.target.value)}
    placeholder="/logo-square.png"
    className={inputClass}
  />
</Field>

<Field label="مسار الشعار الأفقي">
  <input
    dir="ltr"
    value={form.logoHorizontal}
    onChange={(e) => updateField("logoHorizontal", e.target.value)}
    placeholder="/logo-horizontal.png"
    className={inputClass}
  />
</Field>

            <Field label="حرف الشعار الاحتياطي">
              <input
                value={form.logoLetter}
                maxLength={2}
                onChange={(event) =>
                  updateField("logoLetter", event.target.value)
                }
                className={inputClass}
              />
            </Field>

            <ColorField
              label="اللون الأساسي"
              value={form.themePrimary}
              onChange={(value) =>
                updateField("themePrimary", value)
              }
            />

            <ColorField
              label="اللون الأساسي الفاتح"
              value={form.themePrimarySoft}
              onChange={(value) =>
                updateField("themePrimarySoft", value)
              }
            />

            <ColorField
              label="لون الخلفية"
              value={form.themeBackground}
              onChange={(value) =>
                updateField("themeBackground", value)
              }
            />

            <ColorField
              label="لون البطاقات"
              value={form.themeSurface}
              onChange={(value) =>
                updateField("themeSurface", value)
              }
            />

            <div className="sm:col-span-2">
              <ColorField
                label="لون النص"
                value={form.themeForeground}
                onChange={(value) =>
                  updateField("themeForeground", value)
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="xl:sticky xl:top-6 xl:self-start">
        <LivePreview
          form={form}
          displayedLogo={displayedLogo}
        />
      </section>
    </div>
  );
}

function LivePreview({
  form,
  displayedLogo,
}: {
  form: ShowroomForm;
  displayedLogo: string;
}) {
  const previewStyle = {
    backgroundColor: form.themeBackground,
    color: form.themeForeground,
  };

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
      style={previewStyle}
    >
      <div
        className="flex items-center justify-between gap-4 border-b px-5 py-4"
        style={{
          borderColor: `${form.themePrimary}33`,
          backgroundColor: form.themeSurface,
        }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <LogoPreview
            src={displayedLogo}
            fallback={form.logoLetter}
            primaryColor={form.themePrimary}
            backgroundColor={form.themeBackground}
          />

          <div className="min-w-0">
            <div className="truncate text-sm font-black">
              {form.nameAr || "اسم المعرض"}
            </div>

            <div className="truncate text-[10px] uppercase tracking-[0.2em] opacity-55">
              {form.nameEn || "SHOWROOM"}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rounded-lg px-4 py-2.5 text-xs font-black"
          style={{
            backgroundColor: form.themePrimary,
            color: form.themeBackground,
          }}
        >
          واتساب
        </button>
      </div>

      <div className="p-6 sm:p-8">
        <div
          className="inline-flex rounded-full border px-3 py-1 text-[11px] font-bold"
          style={{
            color: form.themePrimary,
            borderColor: `${form.themePrimary}55`,
            backgroundColor: `${form.themePrimary}12`,
          }}
        >
          سيارات مختارة بعناية
        </div>

        <h3 className="mt-5 text-3xl font-black leading-tight">
          سيارتك القادمة
          <span
            className="mt-1 block"
            style={{ color: form.themePrimary }}
          >
            تبدأ من هنا
          </span>
        </h3>

        <p className="mt-4 text-sm leading-7 opacity-65">
          {form.taglineAr || "الوصف القصير للمعرض يظهر هنا."}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-lg px-5 py-3 text-sm font-black"
            style={{
              backgroundColor: form.themePrimary,
              color: form.themeBackground,
            }}
          >
            تصفح السيارات
          </button>

          <button
            type="button"
            className="rounded-lg border px-5 py-3 text-sm font-black"
            style={{
              color: form.themeForeground,
              borderColor: `${form.themeForeground}25`,
              backgroundColor: form.themeSurface,
            }}
          >
            تواصل معنا
          </button>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-xl border"
          style={{
            backgroundColor: form.themeSurface,
            borderColor: `${form.themeForeground}18`,
          }}
        >
          <div
            className="flex aspect-[16/8] items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${form.themeSurface}, ${form.themeBackground})`,
            }}
          >
            <div className="text-center">
              <div
                className="mx-auto h-14 w-24 rounded-full blur-xl"
                style={{ backgroundColor: `${form.themePrimary}45` }}
              />

              <p className="-mt-8 text-sm font-bold opacity-45">
                صورة السيارة الرئيسية
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-black">مرسيدس الفئة C</h4>
                <p className="mt-1 text-xs opacity-55">موديل 2024</p>
              </div>

              <div
                className="text-sm font-black"
                style={{ color: form.themePrimary }}
              >
                249,000 ر.س
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-lg py-3 text-sm font-black"
              style={{
                backgroundColor: form.themeForeground,
                color: form.themeBackground,
              }}
            >
              عرض التفاصيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoPreview({
  src,
  fallback,
  primaryColor,
  backgroundColor,
}: {
  src: string;
  fallback: string;
  primaryColor: string;
  backgroundColor: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [src]);

  if (src && !imageFailed) {
    return (
      <div
        className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border"
        style={{
          borderColor: `${primaryColor}66`,
          backgroundColor,
        }}
      >
        <img
          src={src}
          alt="معاينة الشعار"
          onError={() => setImageFailed(true)}
          className="h-full w-full object-contain p-1"
        />
      </div>
    );
  }

  return (
    <div
      className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border text-lg font-black"
      style={{
        color: primaryColor,
        borderColor: `${primaryColor}66`,
        backgroundColor,
      }}
    >
      {fallback || "E"}
    </div>
  );
}

function ExportTab({
  generatedCode,
  copied,
  copyCode,
}: {
  generatedCode: string;
  copied: boolean;
  copyCode: () => Promise<void>;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-black">تصدير إعدادات المعرض</h2>

          <p className="mt-1 text-xs text-muted-foreground">
            انسخي الكود والصقيه مكان محتوى showroom.ts.
          </p>
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-background transition-colors hover:bg-gold-soft"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}

          {copied ? "تم النسخ" : "نسخ الكود"}
        </button>
      </div>

      <pre
        dir="ltr"
        className="max-h-[720px] overflow-auto p-5 text-left text-xs leading-6 text-foreground/80"
      >
        <code>{generatedCode}</code>
      </pre>
    </section>
  );
}

function ComingSoonTab({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="rounded-2xl border border-dashed border-white/15 bg-surface p-10 text-center">
      <h2 className="text-2xl font-black">{title}</h2>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-foreground/70">
        {label}
      </span>

      {children}
    </label>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <div className="flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-background/70 px-3">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-8 w-10 shrink-0 cursor-pointer rounded border-0 bg-transparent p-0"
        />

        <input
          dir="ltr"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none"
        />

        <span
          className="h-5 w-5 shrink-0 rounded-full border border-white/15"
          style={{ backgroundColor: value }}
        />
      </div>
    </Field>
  );
}

const inputClass =
  "min-h-12 w-full rounded-lg border border-white/10 bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/45 hover:border-white/20 focus:border-gold/60 focus:ring-2 focus:ring-gold/15";