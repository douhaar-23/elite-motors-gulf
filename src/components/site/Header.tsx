import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Languages,
  Sun,
  Moon,
} from "lucide-react";

import {
  dealership,
  dealershipName,
  telHref,
  waLink,
} from "@/config/dealership";

import { useI18n } from "@/i18n";
import Logo from "./BrandLogo";

export function Header() {
  const { t, lang, toggleLang } = useI18n();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { hash: "home", label: t.nav.home },
    { hash: "cars", label: t.nav.cars },
    { hash: "services", label: t.nav.services },
    { hash: "about", label: t.nav.about },
    { hash: "contact", label: t.nav.contact },
  ];

  /* =========================
     Scroll
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     Theme
  ========================= */

  useEffect(() => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
  setDarkMode(false);
}, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    document.documentElement.classList.toggle(
      "dark",
      nextDarkMode,
    );

    localStorage.setItem(
      "theme",
      nextDarkMode ? "dark" : "light",
    );
  };

  const contactMessage =
    t.vehicle.inquiryMessage(dealershipName(lang));

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/70 backdrop-blur-sm"
        }
      `}
    ><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="flex h-20 items-center justify-between gap-4">

    {/* =========================
        Logo
    ========================= */}

    <div className="flex shrink-0 items-center gap-3">
      <Logo size={58} variant="square" />

      <div className="hidden sm:block leading-tight">
        <Link
          to="/"
          hash="home"
          aria-label={dealershipName(lang)}
          className="block"
        >
          <div className="text-sm font-bold text-foreground lg:text-base">
            {dealershipName(lang)}
          </div>

          <div className="mt-1 text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
            {dealership.nameEn}
          </div>
        </Link>

        <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span>أحمد جمال</span>

          <span className="text-gold">•</span>

          <a
            href={telHref}
            dir="ltr"
            className="transition-colors hover:text-gold"
          >
            +966 57 477 7773
          </a>
        </div>
      </div>
    </div>

    {/* =========================
        Desktop Navigation
    ========================= */}

          {/* =========================
              Desktop Navigation
          ========================= */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className="
                  relative
                  text-sm
                  text-foreground/80
                  transition-colors
                  hover:text-gold

                  after:absolute
                  after:start-0
                  after:-bottom-1
                  after:h-px
                  after:w-0
                  after:bg-gold
                  after:transition-all

                  hover:after:w-full
                "
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* =========================
              Actions
          ========================= */}

          <div className="flex items-center gap-2">

            {/* Theme Button */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? lang === "ar"
                    ? "تفعيل الوضع النهاري"
                    : "Switch to light mode"
                  : lang === "ar"
                    ? "تفعيل الوضع الليلي"
                    : "Switch to dark mode"
              }
              title={
                darkMode
                  ? lang === "ar"
                    ? "الوضع النهاري"
                    : "Light mode"
                  : lang === "ar"
                    ? "الوضع الليلي"
                    : "Dark mode"
              }
              className="
                grid h-11 w-11
                place-items-center
                rounded-md
                border border-border
                bg-surface/70
                text-foreground
                transition-all duration-200

                hover:border-gold/60
                hover:bg-surface
                hover:text-gold
              "
            >
              {darkMode ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </button>

            {/* Language */}

            {dealership.bilingual && (
              <button
                type="button"
                onClick={toggleLang}
                aria-label={t.common.switchLanguage}
                className="
                  inline-flex h-11
                  items-center gap-1.5
                  rounded-md
                  border border-border
                  bg-surface/70
                  px-3
                  text-xs font-bold
                  text-foreground
                  transition-colors

                  hover:border-gold/60
                  hover:text-gold
                "
              >
                <Languages className="h-4 w-4" />

                {lang === "ar" ? "EN" : "AR"}
              </button>
            )}

            {/* WhatsApp / Phone */}

            {dealership.whatsappEnabled ? (
              <>
                <a
                  href={waLink(contactMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.whatsapp}
                  className="
                    hidden sm:inline-flex
                    h-11
                    items-center justify-center gap-2
                    rounded-md
                    bg-gold
                    px-4
                    text-sm font-semibold
                    text-background
                    transition-all duration-200

                    hover:bg-gold-soft
                  "
                >
                  <MessageCircle className="h-4 w-4" />

                  {t.common.whatsapp}
                </a>

                <a
                  href={waLink(contactMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.common.whatsapp}
                  className="
                    grid h-11 w-11
                    place-items-center
                    rounded-md
                    bg-gold
                    text-background
                    transition-colors

                    hover:bg-gold-soft
                    sm:hidden
                  "
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </>
            ) : (
              <>
                <a
                  href={telHref}
                  aria-label={t.common.call}
                  className="
                    hidden sm:inline-flex
                    h-11
                    items-center justify-center gap-2
                    rounded-md
                    bg-gold
                    px-4
                    text-sm font-semibold
                    text-background
                    transition-colors

                    hover:bg-gold-soft
                  "
                >
                  <Phone className="h-4 w-4" />

                  {t.common.call}
                </a>

                <a
                  href={telHref}
                  aria-label={t.common.call}
                  className="
                    grid h-11 w-11
                    place-items-center
                    rounded-md
                    bg-gold
                    text-background
                    transition-colors

                    hover:bg-gold-soft
                    sm:hidden
                  "
                >
                  <Phone className="h-5 w-5" />
                </a>
              </>
            )}

            {/* Mobile Menu */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="
                grid h-11 w-11
                place-items-center
                rounded-md
                border border-border
                bg-surface/70
                text-foreground
                transition-colors

                hover:border-gold/60
                hover:text-gold

                lg:hidden
              "
              aria-label={
                open
                  ? t.common.closeMenu
                  : t.common.openMenu
              }
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* =========================
            Mobile Navigation
        ========================= */}

        {open && (
          <div className="pb-4 animate-fade-in lg:hidden">
            <nav
              className="
                flex flex-col gap-1
                rounded-lg
                border border-border
                bg-background/95
                p-2
                shadow-xl
                backdrop-blur-xl
              "
            >
              <div className="mb-2 rounded-lg border border-border bg-surface/70 p-3">
  <div className="text-sm font-bold text-foreground">
    أحمد جمال
  </div>

  <a
    href={telHref}
    dir="ltr"
    className="mt-1 block text-xs text-muted-foreground transition-colors hover:text-gold"
  >
    +966 57 477 7773
  </a>
</div>
              {links.map((l) => (
                <Link
                  key={l.hash}
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-md
                    px-3 py-3
                    text-sm
                    text-foreground/90
                    transition-colors

                    hover:bg-surface-2
                    hover:text-gold
                  "
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}