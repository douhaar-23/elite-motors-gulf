import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
} from "lucide-react";

import { LeadForm } from "./LeadForm";
import { SectionHeading } from "./SectionHeading";
import {
  dealership,
  dealershipAddress,
  dealershipHours,
  dealershipHoursSecondary,
  mailHref,
  smsHref,
  telHref,
  waLink,
} from "@/config/dealership";
import { useI18n } from "@/i18n";

export function Contact() {
  const { t, lang } = useI18n();

  const hours = [
    dealershipHours(lang),
    dealershipHoursSecondary(lang),
  ]
    .filter((value) => value.trim() !== "")
    .join(" • ");

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 py-16 sm:py-24 scroll-mt-20"
    >
      {/* Top line */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold/30
          to-transparent
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          desc={t.contact.desc}
        />

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact information */}
          <div className="space-y-4 lg:col-span-2">
            <InfoRow
              icon={Phone}
              label={t.contact.phone}
              value={dealership.phone}
              href={telHref}
            />

            {dealership.whatsappEnabled && (
              <InfoRow
                icon={MessageCircle}
                label={t.common.whatsapp}
                value={dealership.phone}
                href={waLink(t.cta.message)}
              />
            )}

            {dealership.smsEnabled &&
              !dealership.whatsappEnabled && (
                <InfoRow
                  icon={MessageSquare}
                  label={t.common.sms}
                  value={dealership.phone}
                  href={smsHref(t.cta.message)}
                />
              )}

            {/* يظهر البريد فقط إذا كان موجودًا */}
            {dealership.email.trim() !== "" && (
              <InfoRow
                icon={Mail}
                label={t.common.email}
                value={dealership.email}
                href={mailHref()}
              />
            )}

            <InfoRow
              icon={MapPin}
              label={t.contact.address}
              value={dealershipAddress(lang)}
              href={dealership.mapsUrl}
            />

            {hours && (
              <InfoRow
                icon={Clock}
                label={t.contact.hours}
                value={hours}
              />
            )}

            {/* Map */}
            <div
              className="
                aspect-video
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-surface
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              <iframe
                title={t.contact.mapTitle}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  dealership.mapsEmbedQuery,
                )}&output=embed`}
                className="h-full w-full grayscale transition duration-500 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* General inquiry form */}
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-background/85
              p-5
              shadow-[0_24px_80px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              sm:p-8
              lg:col-span-3
            "
          >
            <div className="mb-6">
              <h3 className="text-xl font-black text-foreground">
                {lang === "ar"
                  ? "استفسر عن سيارة"
                  : "Ask about a vehicle"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {lang === "ar"
                  ? "أرسل استفسارك وسنتواصل معك بخصوص السيارة والسعر والتوفر."
                  : "Send your inquiry and we'll get back to you about the vehicle, price, and availability."}
              </p>
            </div>

            <LeadForm
              kind="general"
              submitLabel={t.contact.submit.general}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      className="
        flex items-start gap-4
        rounded-xl
        border border-white/10
        bg-surface/55
        p-4
        transition-colors
        hover:border-gold/30
      "
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">
          {label}
        </div>

       <div
  dir={href?.startsWith("tel:") ? "ltr" : undefined}
  className={`mt-1.5 break-words text-sm font-semibold leading-6 text-foreground ${
    href?.startsWith("tel:") ? "text-right" : ""
  }`}
>
  {value}
</div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="block"
    >
      {content}
    </a>
  );
}