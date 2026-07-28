import { MessageCircle, Phone } from "lucide-react";
import { dealership, waLink } from "@/config/dealership";

export function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface p-10 sm:p-16 text-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,var(--gold)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
              محتار في اختيار <span className="gold-text">سيارتك؟</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              تواصل معنا وسنساعدك في العثور على السيارة المناسبة لاحتياجاتك
              وميزانيتك.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink("مرحباً، أحتاج مساعدة في اختيار سيارة.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                تواصل عبر واتساب
              </a>
              <a
                href={`tel:${dealership.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/60 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
