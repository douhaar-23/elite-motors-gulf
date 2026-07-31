import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, MessageSquare } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { LeadForm, type LeadFormKind } from "./LeadForm";
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

const tabs: { key: Exclude<LeadFormKind, "testDrive">; }[] = [
  { key: "general" },
  { key: "finance" },
  { key: "tradeIn" },
];

export function Contact() {
  const { t, lang } = useI18n();
  const [tab, setTab] = useState<Exclude<LeadFormKind, "testDrive">>("general");

  const hours = [dealershipHours(lang), dealershipHoursSecondary(lang)]
    .filter((h) => h.trim() !== "")
    .join(" • ");

  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface/40 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} desc={t.contact.desc} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <InfoRow icon={Phone} label={t.contact.phone} value={dealership.phone} href={telHref} />
            {dealership.whatsappEnabled && (
              <InfoRow
                icon={MessageCircle}
                label={t.common.whatsapp}
                value={dealership.phone}
                href={waLink(t.cta.message)}
              />
            )}
            {dealership.smsEnabled && !dealership.whatsappEnabled && (
              <InfoRow
                icon={MessageSquare}
                label={t.common.sms}
                value={dealership.phone}
                href={smsHref(t.cta.message)}
              />
            )}
            <InfoRow icon={Mail} label={t.common.email} value={dealership.email} href={mailHref()} />
            <InfoRow icon={MapPin} label={t.contact.address} value={dealershipAddress(lang)} href={dealership.mapsUrl} />
            {hours && <InfoRow icon={Clock} label={t.contact.hours} value={hours} />}

            <div className="aspect-video rounded-xl overflow-hidden border border-border bg-surface">
              <iframe
                title={t.contact.mapTitle}
                src={`https://www.google.com/maps?q=${encodeURIComponent(dealership.mapsEmbedQuery)}&output=embed`}
                className="w-full h-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3 rounded-xl border border-border bg-background p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap gap-2">
              {tabs.map(({ key }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  aria-pressed={tab === key}
                  className={`rounded-md px-4 h-11 text-xs font-semibold transition-colors ${
                    tab === key
                      ? "bg-gold text-background"
                      : "border border-border text-foreground hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {t.contact.tabs[key]}
                </button>
              ))}
            </div>

            <LeadForm key={tab} kind={tab} submitLabel={t.contact.submit[tab]} />
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
    <div className="flex items-start gap-4 rounded-xl border border-border bg-background p-4 hover:border-gold/40 transition-colors">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-surface text-gold">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium text-foreground break-words">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="block">
      {content}
    </a>
  ) : (
    content
  );
}
