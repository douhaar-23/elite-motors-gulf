import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroCar from "@/assets/hero-car.jpg";
import {
  dealership,
  telHref,
  waLink,
} from "@/config/dealership";
import { useI18n } from "@/i18n";

export function Hero() {
  const { t, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const stats = [
    {
      n: dealership.stats.carsSold,
      l: t.hero.stats.carsSold,
    },
    {
      n: dealership.stats.yearsExperience,
      l: t.hero.stats.years,
    },
    {
      n: dealership.stats.brands,
      l: t.hero.stats.brands,
    },
  ].filter((stat) => stat.n.trim() !== "");

  const trustPoints =
    lang === "ar"
      ? ["أسعار واضحة", "فحص فني", "ضمان موضّح"]
      : ["Clear pricing", "Inspected vehicles", "Warranty disclosed"];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-30">
        <img
          src={heroCar}
          alt={t.hero.imageAlt}
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Main readable overlay */}
      <div
  className="
    absolute inset-0 -z-20
    bg-gradient-to-l
    ltr:bg-gradient-to-r
    from-background/90
    via-background/55
    to-background/5
  "
/>

      {/* Vertical depth overlay */}
      <div
  className="
    absolute inset-0 -z-20
    bg-gradient-to-t
    from-background/90
    via-background/5
    to-background/35
  "
/>

      {/* Soft warm glow */}
      <div
        aria-hidden="true"
        className="
          absolute -bottom-32 start-[15%] -z-10
          h-[26rem] w-[26rem]
          rounded-full
          bg-gold/10
          blur-[110px]
          sm:h-[34rem] sm:w-[34rem]
        "
      />

      {/* Fine top line */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 -z-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold/30
          to-transparent
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="
              animate-fade-in
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-gold/30
              bg-background/35
              px-4 py-2
              text-xs font-medium text-gold
              shadow-[0_12px_40px_rgba(0,0,0,0.18)]
              backdrop-blur-xl
              sm:text-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>

            {t.hero.badge}
          </div>

          {/* Heading */}
          <h1
            className="
              animate-fade-in
              max-w-3xl
              text-4xl font-black
              leading-[1.08]
              tracking-[-0.035em]
              text-foreground
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {t.hero.titleLine1}

            <span className="mt-1 block gold-text">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6 max-w-2xl
              text-base
              leading-8
              text-foreground/70
              sm:text-lg
              lg:text-xl
            "
          >
            {t.hero.desc}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/"
              hash="cars"
              className="
                group
                inline-flex min-h-12 items-center justify-center gap-2
                rounded-md
                bg-gold
                px-7 py-3
                text-sm font-bold
                text-background
                shadow-[0_14px_40px_rgba(198,161,91,0.18)]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-gold-soft
                hover:shadow-[0_18px_50px_rgba(198,161,91,0.28)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              {t.hero.browse}

              <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>

            {dealership.whatsappEnabled ? (
              <a
                href={waLink(t.cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex min-h-12 items-center justify-center gap-2
                  rounded-md
                  border border-white/15
                  bg-background/35
                  px-7 py-3
                  text-sm font-semibold
                  text-foreground
                  shadow-[0_12px_40px_rgba(0,0,0,0.16)]
                  backdrop-blur-xl
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-gold/50
                  hover:bg-background/55
                  hover:text-gold
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
              >
                <MessageCircle className="h-4 w-4" />
                {t.common.whatsapp}
              </a>
            ) : (
              <a
                href={telHref}
                className="
                  inline-flex min-h-12 items-center justify-center gap-2
                  rounded-md
                  border border-white/15
                  bg-background/35
                  px-7 py-3
                  text-sm font-semibold
                  text-foreground
                  shadow-[0_12px_40px_rgba(0,0,0,0.16)]
                  backdrop-blur-xl
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-gold/50
                  hover:bg-background/55
                  hover:text-gold
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
              >
                <Phone className="h-4 w-4" />
                {t.common.call}
              </a>
            )}
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-xs font-medium text-foreground/70 sm:text-sm"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold">
                  <Check className="h-3 w-3" />
                </span>

                {point}
              </div>
            ))}
          </div>

          {/* Stats */}
          {stats.length > 0 && (
            <div
              className="
                mt-10
grid max-w-lg grid-cols-3
divide-x divide-white/10
rtl:divide-x-reverse
rounded-lg
border border-white/10
bg-background/20
px-2 py-4
shadow-[0_12px_40px_rgba(0,0,0,0.18)]
backdrop-blur-lg
sm:px-4
              "
            >
              {stats.map((stat) => (
                <div
                  key={stat.l}
                  className="px-2 py-1 text-center sm:px-4"
                >
                  <div className="text-3xl font-black gold-text sm:text-4xl">
                    {stat.n}+
                  </div>

                  <div className="mt-2 text-xs leading-5 text-foreground/60 sm:text-sm">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-7 start-1/2 hidden -translate-x-1/2
          flex-col items-center gap-2
          text-[10px] uppercase tracking-[0.28em]
          text-foreground/35
          lg:flex
        "
      >
        <span>{lang === "ar" ? "اكتشف" : "Explore"}</span>

        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-4 animate-bounce bg-gold/80" />
        </span>
      </div>
    </section>
  );
}