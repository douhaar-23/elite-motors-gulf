import { MessageCircle } from "lucide-react";
import { waLink } from "@/config/dealership";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("مرحباً، أرغب بالاستفسار.")}
      target="_blank"
      rel="noopener"
      aria-label="تواصل واتساب"
      className="fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-background shadow-lg shadow-black/40 hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
