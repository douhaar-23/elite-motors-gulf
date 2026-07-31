import { MessageCircle, Phone } from "lucide-react";
import { dealership, telHref, waLink } from "@/config/dealership";
import { useI18n } from "@/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  const enabled = dealership.whatsappEnabled;

  return (
    <a
      href={enabled ? waLink(t.cta.message) : telHref}
      target={enabled ? "_blank" : undefined}
      rel="noopener"
      aria-label={enabled ? t.common.whatsapp : t.common.call}
      className={`fixed bottom-6 start-6 z-50 grid h-14 w-14 place-items-center rounded-full text-background shadow-lg shadow-black/40 hover:scale-110 transition-transform ${
        enabled ? "bg-whatsapp" : "bg-gold"
      }`}
    >
      <span
        className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
          enabled ? "bg-whatsapp" : "bg-gold"
        }`}
      />
      {enabled ? <MessageCircle className="relative h-6 w-6" /> : <Phone className="relative h-6 w-6" />}
    </a>
  );
}
