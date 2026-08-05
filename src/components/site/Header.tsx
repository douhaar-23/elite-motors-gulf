import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Phone, Languages } from "lucide-react";
import { dealership, dealershipName, telHref, waLink } from "@/config/dealership";
import { useI18n } from "@/i18n";
import Logo from "./BrandLogo";

export function Header() {
  const { t, lang, toggleLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { hash: "home", label: t.nav.home },
    { hash: "cars", label: t.nav.cars },
    { hash: "services", label: t.nav.services },
    { hash: "about", label: t.nav.about },
    { hash: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contactMessage = t.vehicle.inquiryMessage(dealershipName(lang));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-2">
          <Link to="/" hash="home" className="flex items-center gap-2 shrink-0">
            <Logo size={56} variant="square" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-foreground">{dealershipName(lang)}</div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {dealership.nameEn}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className="text-sm text-foreground/80 hover:text-gold transition-colors relative after:absolute after:start-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {dealership.bilingual && (
              <button
                onClick={toggleLang}
                aria-label={t.common.switchLanguage}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/70 px-3 h-11 text-xs font-bold text-foreground hover:border-gold/60 hover:text-gold transition-colors"
              >
                <Languages className="h-4 w-4" />
                {lang === "ar" ? "EN" : "AR"}
              </button>
            )}

            {dealership.whatsappEnabled ? (
              <>
                <a
                  href={waLink(contactMessage)}
                  target="_blank"
                  rel="noopener"
                  aria-label={t.common.whatsapp}
                  className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gold px-4 h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.common.whatsapp}
                </a>
                <a
                  href={waLink(contactMessage)}
                  target="_blank"
                  rel="noopener"
                  aria-label={t.common.whatsapp}
                  className="sm:hidden grid place-items-center h-11 w-11 rounded-md bg-gold text-background hover:bg-gold-soft transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </>
            ) : (
              <>
                <a
                  href={telHref}
                  aria-label={t.common.call}
                  className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gold px-4 h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {t.common.call}
                </a>
                <a
                  href={telHref}
                  aria-label={t.common.call}
                  className="sm:hidden grid place-items-center h-11 w-11 rounded-md bg-gold text-background hover:bg-gold-soft transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </>
            )}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden grid place-items-center h-11 w-11 rounded-md border border-border text-foreground"
              aria-label={open ? t.common.closeMenu : t.common.openMenu}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-1 rounded-lg border border-border bg-surface p-2">
              {links.map((l) => (
                <Link
                  key={l.hash}
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm text-foreground/90 hover:bg-surface-2 hover:text-gold transition-colors"
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
