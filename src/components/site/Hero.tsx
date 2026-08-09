import {
  ArrowLeft,
  ArrowRight,
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

  return (
    <section
      id="home"
      className="
        relative isolate
        min-h-[760px]
        overflow-hidden
        bg-background
        scroll-mt-20
      "
    >
      {/* Background image */}
      <img
        src={heroCar}
        alt={t.hero.imageAlt}
        className="
          absolute inset-0 -z-30
          h-full w-full
          object-cover
          object-center
        "
      />

      {/* =====================================================
          LIGHT MODE OVERLAYS
          ===================================================== */}

      {/* 
        نخلي جهة النص فاتحة حتى يكون النص واضح،
        لكن بدون تغطية السيارة كلها بطبقة بيضاء.
      */}
      {/* =====================================================
    LIGHT / DARK MODE OVERLAYS
    ===================================================== */}

{/* Main horizontal overlay */}
<div
  aria-hidden="true"
  className="
    absolute inset-0 -z-20
    bg-gradient-to-l
    ltr:bg-gradient-to-r

    from-[#faf8f2]/95
    from-0%
    via-[#faf8f2]/72
    via-24%
    to-transparent
    to-58%

    dark:from-background/90
    dark:via-background/55
    dark:to-background/5
  "
/>

{/* Bottom fade */}
<div
  aria-hidden="true"
  className="
    absolute inset-0 -z-20
    bg-gradient-to-t

    from-[#faf8f2]/10
    from-0%
    via-transparent
    via-20%
    to-transparent

    dark:from-background/90
    dark:via-background/5
    dark:to-background/35
  "
/>

{/* Tiny contrast adjustment — dark mode only */}
<div
  aria-hidden="true"
  className="
    absolute inset-0 -z-20
    bg-transparent
    dark:bg-black/10
  "
/>

      {/* Soft gold glow */}
      <div
        aria-hidden="true"
        className="
          absolute -bottom-32 start-[15%] -z-10
          h-[26rem] w-[26rem]
          rounded-full
          bg-gold/[0.04]
          blur-[110px]

          dark:bg-gold/10

          sm:h-[34rem]
          sm:w-[34rem]
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

      {/* Content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[760px]
          w-full
          max-w-7xl
          items-center
          px-4
          pb-16
          pt-24

          sm:px-6
          sm:pb-20
          sm:pt-28

          lg:px-8
        "
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="
              animate-fade-in
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full

              border
              border-gold/35

              bg-white/55
              dark:bg-background/35

              px-4
              py-2

              text-xs
              font-medium
              text-gold

              shadow-[0_12px_40px_rgba(0,0,0,0.08)]
              dark:shadow-[0_12px_40px_rgba(0,0,0,0.18)]

              backdrop-blur-xl

              sm:text-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-gold/40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-gold
                "
              />
            </span>

            {t.hero.badge}
          </div>

          {/* Heading */}
          <h1
            className="
              animate-fade-in
              max-w-3xl

              text-4xl
              font-black
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
              mt-6
              max-w-2xl

              text-base
              leading-8
              text-foreground/90

              sm:text-lg
              lg:text-xl
            "
          >
            {t.hero.desc}
          </p>

          {/* Actions */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:flex-wrap
            "
          >
            {/* Browse cars */}
            <Link
              to="/"
              hash="cars"
              className="
                group

                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2

                rounded-md
                bg-gold

                px-7
                py-3

                text-sm
                font-bold
                text-white
                dark:text-background

                shadow-[0_14px_40px_rgba(198,161,91,0.18)]

                transition-all
                duration-200

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

              <Arrow
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200

                  group-hover:translate-x-1
                  rtl:group-hover:-translate-x-1
                "
              />
            </Link>

            {/* WhatsApp / Phone */}
            {dealership.whatsappEnabled ? (
              <a
                href={waLink(t.cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  border
                  border-black/10
                  dark:border-white/15

                  bg-white/65
                  dark:bg-background/35

                  px-7
                  py-3

                  text-sm
                  font-semibold
                  text-foreground

                  shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                  dark:shadow-[0_12px_40px_rgba(0,0,0,0.16)]

                  backdrop-blur-xl

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-gold/50
                  hover:bg-white/85
                  dark:hover:bg-background/55
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
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  border
                  border-black/10
                  dark:border-white/15

                  bg-white/65
                  dark:bg-background/35

                  px-7
                  py-3

                  text-sm
                  font-semibold
                  text-foreground

                  shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                  dark:shadow-[0_12px_40px_rgba(0,0,0,0.16)]

                  backdrop-blur-xl

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-gold/50
                  hover:bg-white/85
                  dark:hover:bg-background/55
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-7
          start-1/2

          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2

          text-[10px]
          uppercase
          tracking-[0.28em]
          text-foreground/40

          lg:flex
        "
      >
        <span>
          {lang === "ar" ? "اكتشف" : "Explore"}
        </span>

        <span
          className="
            relative
            h-10
            w-px
            overflow-hidden
            bg-black/10
            dark:bg-white/15
          "
        >
          <span
            className="
              absolute
              inset-x-0
              top-0
              h-4
              animate-bounce
              bg-gold/80
            "
          />
        </span>
      </div>
    </section>
  );
}