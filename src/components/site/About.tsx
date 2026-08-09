import heroCar from "@/assets/hero-car.jpg";
import { useI18n } from "@/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="
        scroll-mt-20
        border-y border-border
        bg-surface/35
        py-16
        sm:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-bold text-gold">
              {t.about.eyebrow}
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-foreground sm:text-4xl">
              {t.about.titleFallback}
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-8 text-muted-foreground sm:text-base">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="mt-8 h-px w-20 bg-gold/50" />
          </div>

          {/* Image */}
          <div className="order-1 relative lg:order-2">
            <div
              className="
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-2xl
                border border-border
                bg-surface
                shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              <img
                src={heroCar}
                alt={t.about.imageAlt}
                width={1200}
                height={900}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  dark:from-black/35
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-5
                -end-3
                hidden
                rounded-xl
                border border-gold/35
                bg-background/90
                px-5
                py-4
                shadow-xl
                backdrop-blur-xl
                sm:block
                lg:-end-5
              "
            >
              <div className="text-sm font-bold text-gold">
                {t.about.badgeLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}