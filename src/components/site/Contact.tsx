import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
} from "lucide-react";

import { LeadForm, type LeadFormKind } from "./LeadForm";
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

const tabs: { key: Exclude<LeadFormKind, "testDrive"> }[] = [
  { key: "general" },
  { key: "finance" },
  { key: "tradeIn" },
];

export function Contact() {
  const { t, lang } = useI18n();

  const [tab, setTab] =
    useState<Exclude<LeadFormKind, "testDrive">>("general");

  const hours = [
    dealershipHours(lang),
    dealershipHoursSecondary(lang),
  ]
    .filter((value) => value.trim() !== "")
    .join(" • ");

  return (
    <section
      id="contact"
      className="
        relative
        scroll-mt-20
        overflow-hidden
        border-t border-white/10
        bg-surface/35
        py-20
        sm:py-28
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute -start-48 top-28
          h-96 w-96
          rounded-full
          bg-gold/5
          blur-[130px]
        "
      />

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

            <InfoRow
              icon={Mail}
              label={t.common.email}
              value={dealership.email}
              href={mailHref()}
            />

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
            <div
              className="
                mb-7
                grid grid-cols-1 gap-2
                rounded-xl
                border border-white/10
                bg-surface/50
                p-2
                sm:grid-cols-3
              "
            >
              {tabs.map(({ key }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  aria-pressed={tab === key}
                  className={`
                    min-h-11
                    rounded-lg
                    px-4 py-2.5
                    text-xs font-bold
                    transition-all duration-200
                    ${
                      tab === key
                        ? "bg-gold text-background shadow-[0_10px_30px_rgba(198,161,91,0.18)]"
                        : "text-foreground/75 hover:bg-background/50 hover:text-gold"
                    }
                  `}
                >
                  {t.contact.tabs[key]}
                </button>
              ))}
            </div>

            <LeadForm
              key={tab}
              kind={tab}
              submitLabel={t.contact.submit[tab]}
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
        group
        flex items-start gap-4
        rounded-xl
        border border-white/10
        bg-background/70
        p-4
        shadow-[0_12px_35px_rgba(0,0,0,0.1)]
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-gold/35
        hover:bg-background
      "
    >
      <div
        className="
          grid h-11 w-11 shrink-0 place-items-center
          rounded-lg
          border border-gold/20
          bg-gold/10
          text-gold
          transition-transform duration-200
          group-hover:scale-105
        "
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">
          {label}
        </div>

        <div className="mt-1.5 break-words text-sm font-semibold leading-6 text-foreground">
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