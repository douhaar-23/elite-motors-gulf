import { useState, type ReactNode } from "react";
import { CheckCircle2, Send } from "lucide-react";

import {
  dealership,
  leadHref,
} from "@/config/dealership";
import { useI18n } from "@/i18n";

export const inputCls = `
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

export const selectCls = `
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
      <span className="mb-2 block text-xs font-semibold text-foreground/70">
        {label}
      </span>

      {children}

      {error && (
        <span className="mt-1.5 block text-xs text-destructive">
          {error}
        </span>
      )}
    </label>
  );
}

export type LeadFormKind =
  | "general"
  | "finance"
  | "tradeIn"
  | "testDrive";

type Values = Record<string, string>;

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
  const fields = t.contact.fields;

  const [errors, setErrors] = useState<Values>({});
  const [sent, setSent] = useState(false);

  const validate = (values: Values) => {
    const nextErrors: Values = {};

    if (!values.name?.trim()) {
      nextErrors.name = t.common.required;
    }

    if (!values.phone?.trim()) {
      nextErrors.phone = t.common.required;
    } else if (
      values.phone.replace(/\D/g, "").length < 7
    ) {
      nextErrors.phone = t.common.invalidPhone;
    }

    if (
      values.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = t.common.invalidEmail;
    }

    if (
      kind === "general" &&
      !values.message?.trim()
    ) {
      nextErrors.message = t.common.required;
    }

    if (
      kind === "tradeIn" &&
      !values.tradeInCar?.trim()
    ) {
      nextErrors.tradeInCar = t.common.required;
    }

    if (
      kind === "testDrive" &&
      !values.preferredDate?.trim()
    ) {
      nextErrors.preferredDate = t.common.required;
    }

    return nextErrors;
  };

  const buildMessage = (values: Values) => {
    const subjectMap: Record<LeadFormKind, string> = {
      general: t.contact.tabs.general,
      finance: t.contact.tabs.finance,
      tradeIn: t.contact.tabs.tradeIn,
      testDrive: t.vehicle.testDrive,
    };

    const lines: string[] = [
      subjectMap[kind],
    ];

    if (vehicleName) {
      lines.push(`${fields.car}: ${vehicleName}`);
    }

    lines.push(`${fields.name}: ${values.name}`);
    lines.push(`${fields.phone}: ${values.phone}`);

    if (values.email) {
      lines.push(`${fields.email}: ${values.email}`);
    }

    if (values.car) {
      lines.push(`${fields.car}: ${values.car}`);
    }

    if (values.downPayment) {
      lines.push(
        `${fields.downPayment}: ${values.downPayment}`,
      );
    }

    if (values.monthlyBudget) {
      lines.push(
        `${fields.monthlyBudget}: ${values.monthlyBudget}`,
      );
    }

    if (values.tradeInCar) {
      lines.push(
        `${fields.tradeInCar}: ${values.tradeInCar}`,
      );
    }

    if (values.tradeInMileage) {
      lines.push(
        `${fields.tradeInMileage}: ${values.tradeInMileage}`,
      );
    }

    if (values.preferredDate) {
      lines.push(
        `${fields.preferredDate}: ${values.preferredDate}`,
      );
    }

    if (values.message) {
      lines.push(
        `${fields.message}: ${values.message}`,
      );
    }

    return {
      subject: subjectMap[kind],
      body: lines.join("\n"),
    };
  };

  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const values = Object.fromEntries(
      new FormData(form),
    ) as Values;

    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const { subject, body } = buildMessage(values);

    window.open(
      leadHref(subject, body),
      "_blank",
      "noopener",
    );

    setSent(true);
    form.reset();

    window.setTimeout(() => {
      setSent(false);
    }, 6000);
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`space-y-5 ${className}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={fields.name}
          error={errors.name}
        >
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder={fields.namePlaceholder}
            className={inputCls}
          />
        </Field>

        <Field
          label={fields.phone}
          error={errors.phone}
        >
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={fields.phonePlaceholder}
            className={inputCls}
          />
        </Field>
      </div>

      {(kind === "finance" ||
        kind === "general") && (
        <Field
          label={fields.email}
          error={errors.email}
        >
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={fields.emailPlaceholder}
            className={inputCls}
          />
        </Field>
      )}

      {!vehicleName &&
        (kind === "general" ||
          kind === "finance") && (
          <Field label={fields.car}>
            <input
              name="car"
              type="text"
              placeholder={fields.carPlaceholder}
              className={inputCls}
            />
          </Field>
        )}

      {kind === "finance" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={fields.downPayment}>
            <input
              name="downPayment"
              type="text"
              inputMode="numeric"
              placeholder={
                fields.downPaymentPlaceholder
              }
              className={inputCls}
            />
          </Field>

          <Field label={fields.monthlyBudget}>
            <input
              name="monthlyBudget"
              type="text"
              inputMode="numeric"
              placeholder={
                fields.monthlyBudgetPlaceholder
              }
              className={inputCls}
            />
          </Field>
        </div>
      )}

      {kind === "tradeIn" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={fields.tradeInCar}
            error={errors.tradeInCar}
          >
            <input
              name="tradeInCar"
              type="text"
              placeholder={
                fields.tradeInCarPlaceholder
              }
              className={inputCls}
            />
          </Field>

          <Field label={fields.tradeInMileage}>
            <input
              name="tradeInMileage"
              type="text"
              inputMode="numeric"
              placeholder={
                fields.tradeInMileagePlaceholder
              }
              className={inputCls}
            />
          </Field>
        </div>
      )}

      {kind === "testDrive" && (
        <Field
          label={fields.preferredDate}
          error={errors.preferredDate}
        >
          <input
            name="preferredDate"
            type="date"
            className={inputCls}
          />
        </Field>
      )}

      <Field
        label={fields.message}
        error={errors.message}
      >
        <textarea
          name="message"
          rows={kind === "general" ? 5 : 4}
          placeholder={fields.messagePlaceholder}
          className={`${inputCls} resize-y`}
        />
      </Field>

      <button
        type="submit"
        className="
          group
          inline-flex min-h-12 w-full
          items-center justify-center gap-2
          rounded-lg
          bg-gold
          px-6 py-3
          text-sm font-bold
          text-background
          shadow-[0_14px_35px_rgba(198,161,91,0.16)]
          transition-all duration-200
          hover:-translate-y-0.5
          hover:bg-gold-soft
          hover:shadow-[0_18px_45px_rgba(198,161,91,0.24)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-gold
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
        "
      >
        {submitLabel ?? t.common.send}

        <Send className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
      </button>

      {sent && (
        <div
          role="status"
          className="
            flex items-center justify-center gap-2
            rounded-lg
            border border-gold/25
            bg-gold/10
            px-4 py-3
            text-center text-xs
            text-gold
          "
        >
          <CheckCircle2 className="h-4 w-4" />

          {dealership.whatsappEnabled
            ? t.contact.success
            : t.contact.successEmail}
        </div>
      )}
    </form>
  );
}