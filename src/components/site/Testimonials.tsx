import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    name: "أحمد الشمري",
    role: "عميل من الرياض",
    text: "تجربة رائعة من البداية إلى النهاية. فريق محترف وشفافية كاملة في التعامل. حصلت على سيارتي الجديدة بسعر ممتاز وخدمة استثنائية.",
  },
  {
    name: "خالد العتيبي",
    role: "عميل من جدة",
    text: "أفضل معرض تعاملت معه. السيارة كانت مطابقة تماماً لما تم عرضه، والفحص الفني قبل البيع أعطاني ثقة كبيرة في الشراء.",
  },
  {
    name: "سعود القحطاني",
    role: "عميل من الدمام",
    text: "خدمة ما بعد البيع لديهم مميزة جداً. تابعوا معي بعد الشراء وقدموا المساعدة عند الحاجة. أنصح بهم بشدة لكل من يبحث عن سيارة موثوقة.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="آراء عملائنا"
          title="ماذا يقول عملاؤنا"
          desc="كلمات من عملاء اختاروا إليت موتورز شريكاً في رحلة اقتناء سياراتهم."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-border bg-background p-6 hover:border-gold/40 transition-colors"
            >
              <Quote className="h-8 w-8 text-gold/40 mb-4" />
              <p className="text-sm text-foreground/90 leading-loose">
                {t.text}
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
