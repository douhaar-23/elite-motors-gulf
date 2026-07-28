import { SectionHeading } from "./SectionHeading";
import heroCar from "@/assets/hero-car.jpg";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs tracking-[0.3em] gold-text uppercase mb-3">
              من نحن
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              خبرة تمتد لأكثر من <span className="gold-text">15 عاماً</span> في
              عالم السيارات
            </h2>
            <div className="hairline mt-6 w-24" />
            <div className="mt-6 space-y-4 text-muted-foreground leading-loose">
              <p>
                تأسست إليت موتورز لتكون الوجهة الأولى لمحبي السيارات الفاخرة في
                المملكة العربية السعودية. نجمع بين الخبرة العريقة والاحترافية
                لنقدم تجربة استثنائية في اقتناء السيارات.
              </p>
              <p>
                نؤمن بأن اختيار السيارة ليس مجرد صفقة، بل قرار يعكس أسلوب حياتك.
                لذلك نضع بين يديك مجموعة مختارة بعناية من السيارات الجديدة
                والمستعملة، جميعها تخضع لفحص شامل ومعايير جودة عالية.
              </p>
              <p>
                فريقنا من الخبراء والمستشارين المعتمدين مستعد لمرافقتك في كل
                خطوة، من اختيار السيارة المناسبة وحتى ما بعد التسليم.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "+15", l: "سنة خبرة" },
                { n: "+500", l: "عميل سعيد" },
                { n: "+50", l: "علامة تجارية" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border bg-surface p-4 text-center">
                  <div className="text-2xl font-black gold-text">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <img
                src={heroCar}
                alt="معرض إليت موتورز"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-xl border border-gold/40 bg-surface p-5 shadow-xl">
              <div className="gold-text text-3xl font-black">A+</div>
              <div className="text-xs text-muted-foreground mt-1">
                تقييم الجودة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
