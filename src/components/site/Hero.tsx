import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroCar from "@/assets/hero-car.jpg";
import { dealership, telHref, waLink } from "@/config/dealership";
import { useI18n } from "@/i18n";

export function Hero() {
  const { t, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const stats = [
    { n: dealership.stats.carsSold, l: t.hero.stats.carsSold },
    { n: dealership.stats.yearsExperience, l: t.hero.stats.years },
    { n: dealership.stats.brands, l: t.hero.stats.brands },
  ].filter((s) => s.n.trim() !== "");

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt={t.hero.imageAlt}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l ltr:bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-gold mb-6 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] text-foreground animate-fade-in">
            {t.hero.titleLine1} <br />
            <span className="gold-text">{t.hero.titleLine2}</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="cars"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 min-h-11 text-sm font-semibold text-background hover:bg-gold-soft transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              {t.hero.browse}
              <Arrow className="h-4 w-4" />
            </Link>
            {dealership.whatsappEnabled ? (
              <a
                href={waLink(t.cta.message)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 backdrop-blur px-6 py-3 min-h-11 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                {t.common.whatsapp}
              </a>
            ) : (
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/70 backdrop-blur px-6 py-3 min-h-11 text-sm font-semibold text-foreground hover:border-gold/50 hover:text-gold transition-all"
              >
                <Phone className="h-4 w-4" />
                {t.common.call}
              </a>
            )}
          </div>

          {stats.length > 0 && (
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-black gold-text">{s.n}+</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
