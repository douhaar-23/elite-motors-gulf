import { useState, type ReactNode } from "react";
import { dealership, leadHref } from "@/config/dealership";
import { useI18n } from "@/i18n";

export const inputCls =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40";

export const selectCls =
  "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40";

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-start">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export type LeadFormKind = "general" | "finance" | "tradeIn" | "testDrive";

type Values = Record<string, string>;

/**
 * Shared, frontend-only lead form. Validates required fields, shows a success
 * message and hands the message off to WhatsApp (or email when WhatsApp is
 * disabled in the dealership config).
 */
export function LeadForm({
  kind,
  vehicleName,
  submitLabel,
  className = "",
}: {
  kind: LeadFormKind;
  vehicleName?: string;
  submitLabel?: string;
  className?: string;
}) {
  const { t } = useI18n();
  const f = t.contact.fields;
  const [errors, setErrors] = useState<Values>({});
  const [sent, setSent] = useState(false);

  const validate = (v: Values) => {
    const e: Values = {};
    if (!v.name?.trim()) e.name = t.common.required;
    if (!v.phone?.trim()) e.phone = t.common.required;
    else if (v.phone.replace(/\D/g, "").length < 7) e.phone = t.common.invalidPhone;
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = t.common.invalidEmail;
    if (kind === "general" && !v.message?.trim()) e.message = t.common.required;
    if (kind === "tradeIn" && !v.tradeInCar?.trim()) e.tradeInCar = t.common.required;
    if (kind === "testDrive" && !v.preferredDate?.trim()) e.preferredDate = t.common.required;
    return e;
  };

  const buildMessage = (v: Values) => {
    const lines: string[] = [];
    const subjectMap: Record<LeadFormKind, string> = {
      general: t.contact.tabs.general,
      finance: t.contact.tabs.finance,
      tradeIn: t.contact.tabs.tradeIn,
      testDrive: t.vehicle.testDrive,
    };
    lines.push(`${subjectMap[kind]}`);
    if (vehicleName) lines.push(`${f.car}: ${vehicleName}`);
    lines.push(`${f.name}: ${v.name}`);
    lines.push(`${f.phone}: ${v.phone}`);
    if (v.email) lines.push(`${f.email}: ${v.email}`);
    if (v.car) lines.push(`${f.car}: ${v.car}`);
    if (v.downPayment) lines.push(`${f.downPayment}: ${v.downPayment}`);
    if (v.monthlyBudget) lines.push(`${f.monthlyBudget}: ${v.monthlyBudget}`);
    if (v.tradeInCar) lines.push(`${f.tradeInCar}: ${v.tradeInCar}`);
    if (v.tradeInMileage) lines.push(`${f.tradeInMileage}: ${v.tradeInMileage}`);
    if (v.preferredDate) lines.push(`${f.preferredDate}: ${v.preferredDate}`);
    if (v.message) lines.push(`${f.message}: ${v.message}`);
    return { subject: subjectMap[kind], body: lines.join("\n") };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Values;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const { subject, body } = buildMessage(values);
    window.open(leadHref(subject, body), "_blank", "noopener");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <form onSubmit={onSubmit} noValidate className={`space-y-4 ${className}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={f.name} error={errors.name}>
          <input name="name" type="text" placeholder={f.namePlaceholder} className={inputCls} />
        </Field>
        <Field label={f.phone} error={errors.phone}>
          <input name="phone" type="tel" placeholder={f.phonePlaceholder} className={inputCls} />
        </Field>
      </div>

      {(kind === "finance" || kind === "general") && (
        <Field label={f.email} error={errors.email}>
          <input name="email" type="email" placeholder={f.emailPlaceholder} className={inputCls} />
        </Field>
      )}

      {!vehicleName && (kind === "general" || kind === "finance") && (
        <Field label={f.car}>
          <input name="car" type="text" placeholder={f.carPlaceholder} className={inputCls} />
        </Field>
      )}

      {kind === "finance" && (
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label={f.downPayment}>
            <input name="downPayment" type="text" placeholder={f.downPaymentPlaceholder} className={inputCls} />
          </Field>
          <Field label={f.monthlyBudget}>
            <input name="monthlyBudget" type="text" placeholder={f.monthlyBudgetPlaceholder} className={inputCls} />
          </Field>
        </div>
      )}

      {kind === "tradeIn" && (
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label={f.tradeInCar} error={errors.tradeInCar}>
            <input name="tradeInCar" type="text" placeholder={f.tradeInCarPlaceholder} className={inputCls} />
          </Field>
          <Field label={f.tradeInMileage}>
            <input name="tradeInMileage" type="text" placeholder={f.tradeInMileagePlaceholder} className={inputCls} />
          </Field>
        </div>
      )}

      {kind === "testDrive" && (
        <Field label={f.preferredDate} error={errors.preferredDate}>
          <input name="preferredDate" type="date" className={inputCls} />
        </Field>
      )}

      <Field label={f.message} error={errors.message}>
        <textarea
          name="message"
          rows={kind === "general" ? 5 : 3}
          placeholder={f.messagePlaceholder}
          className={inputCls}
        />
      </Field>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 min-h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
      >
        {submitLabel ?? t.common.send}
      </button>

      {sent && (
        <p role="status" className="text-center text-xs text-gold">
          {dealership.whatsappEnabled ? t.contact.success : t.contact.successEmail}
        </p>
      )}
    </form>
  );
}
