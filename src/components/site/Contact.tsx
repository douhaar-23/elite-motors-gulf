import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { dealership, waLink } from "@/config/dealership";

const inputCls =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `الاسم: ${fd.get("name")}%0Aالهاتف: ${fd.get("phone")}%0Aالسيارة المطلوبة: ${fd.get("car")}%0Aالرسالة: ${fd.get("message")}`;
    window.open(waLink(decodeURIComponent(msg)), "_blank");
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface/40 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="نحن هنا لخدمتك"
          desc="فريقنا جاهز للإجابة على استفساراتك ومساعدتك في اختيار سيارتك."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <InfoRow icon={Phone} label="الهاتف" value={dealership.phone} href={`tel:${dealership.phone.replace(/\s/g,"")}`} />
            <InfoRow icon={MessageCircle} label="واتساب" value={dealership.phone} href={waLink("مرحباً")} />
            <InfoRow icon={Mail} label="البريد الإلكتروني" value={dealership.email} href={`mailto:${dealership.email}`} />
            <InfoRow icon={MapPin} label="العنوان" value={dealership.address} />
            <InfoRow icon={Clock} label="ساعات العمل" value={`${dealership.hours} • ${dealership.hoursFriday}`} />

            <div className="aspect-video rounded-xl overflow-hidden border border-border bg-surface">
              <iframe
                title="خريطة الموقع"
                src="https://www.google.com/maps?q=Riyadh&output=embed"
                className="w-full h-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-xl border border-border bg-background p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="الاسم"><input required name="name" type="text" placeholder="اسمك الكامل" className={inputCls} /></Field>
              <Field label="رقم الجوال"><input required name="phone" type="tel" placeholder="05XXXXXXXX" className={inputCls} /></Field>
            </div>
            <Field label="السيارة المطلوبة">
              <input name="car" type="text" placeholder="مثال: مرسيدس C-Class 2024" className={inputCls} />
            </Field>
            <Field label="رسالتك">
              <textarea required name="message" rows={5} placeholder="اكتب استفسارك هنا..." className={inputCls} />
            </Field>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
            >
              إرسال الرسالة
            </button>
            {sent && (
              <p className="text-center text-xs text-gold">تم فتح واتساب لإرسال رسالتك.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
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
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{content}</a> : content;
}
