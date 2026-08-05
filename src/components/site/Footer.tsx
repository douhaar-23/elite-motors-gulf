import {
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import Logo from "./BrandLogo";
import {
  dealership,
  dealershipAddress,
  dealershipName,
  telHref,
} from "@/config/dealership";
import { useI18n } from "@/i18n";

export function Footer() {
  const { t, lang } = useI18n();

  const links = [
    { hash: "home", label: t.nav.home },
    { hash: "cars", label: t.nav.cars },
    { hash: "services", label: t.nav.services },
    { hash: "about", label: t.nav.about },
    { hash: "contact", label: t.nav.contact },
  ];

  const socials = [
    {
      href: dealership.social.facebook,
      Icon: Facebook,
      label: "Facebook",
    },
    {
      href: dealership.social.instagram,
      Icon: Instagram,
      label: "Instagram",
    },
    {
      href: dealership.social.twitter,
      Icon: Twitter,
      label: "Twitter",
    },
    {
      href: dealership.social.youtube,
      Icon: Youtube,
      label: "YouTube",
    },
  ].filter((social) => social.href && social.href !== "#");

  const footerCta =
    lang === "ar"
      ? {
          title: "جاهز لاختيار سيارتك القادمة؟",
          desc: "تواصل معنا اليوم وسنساعدك في العثور على السيارة المناسبة لاحتياجاتك وميزانيتك.",
          button: "تواصل معنا",
        }
      : {
          title: "Ready to find your next vehicle?",
          desc: "Contact us today and let our team help you find the right vehicle for your needs and budget.",
          button: "Contact us",
        };

  const legal =
    lang === "ar"
      ? {
          privacy: "سياسة الخصوصية",
          terms: "شروط الاستخدام",
          hours: "ساعات العمل",
        }
      : {
          privacy: "Privacy Policy",
          terms: "Terms of Use",
          hours: "Working Hours",
        };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 end-0 h-96 w-96 rounded-full bg-gold/5 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-surface/65 px-5 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur sm:px-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              {lang === "ar" ? "إليت موتورز" : dealership.nameEn}
            </p>

            <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
              {footerCta.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              {footerCta.desc}
            </p>
          </div>

          <Link
            to="/"
            hash="contact"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-7 py-3 text-sm font-bold text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_14px_35px_rgba(198,161,91,0.2)] lg:mt-0"
          >
            {footerCta.button}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-lg border border-gold/40 bg-surface shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                <span className="gold-text text-2xl font-black">
                  <Logo size={80} variant="square" />
                </span>
              </div>

              <div className="leading-tight">
                <div className="text-lg font-bold text-foreground">
                  {dealershipName(lang)}
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                  {dealership.nameEn}
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              {t.footer.desc}
            </p>

            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-surface/60 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/10 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-foreground">
              {t.nav.quickLinks}
            </h3>

            <div className="mt-3 h-px w-10 bg-gold/50" />

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    to="/"
                    hash={link.hash}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-foreground">
              {t.footer.contact}
            </h3>

            <div className="mt-3 h-px w-10 bg-gold/50" />

            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href={telHref}
                  dir="ltr"
                  className="flex items-start gap-3 transition-colors hover:text-gold"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold">
                    <Phone className="h-4 w-4" />
                  </span>

                  <span>{dealership.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${dealership.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-gold"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold">
                    <Mail className="h-4 w-4" />
                  </span>

                  <span className="break-all">{dealership.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold">
                  <MapPin className="h-4 w-4" />
                </span>

                <span className="leading-6">{dealershipAddress(lang)}</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 bg-surface/60 text-gold">
                  <Clock3 className="h-4 w-4" />
                </span>

                <div>
                  <p className="font-medium text-foreground/85">
                    {legal.hours}
                  </p>

                  <p className="mt-1 leading-6">
                    {lang === "ar" ? dealership.hours : dealership.hoursEn}
                  </p>

                  {dealership.hoursSecondary && (
                    <p className="leading-6">
                      {lang === "ar"
                        ? dealership.hoursSecondary
                        : dealership.hoursSecondaryEn}
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:text-start">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {dealershipName(lang)} —{" "}
              {t.footer.rights}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground/70 lg:justify-end">
              <a href="#" className="transition-colors hover:text-gold">
                {legal.privacy}
              </a>

              <a href="#" className="transition-colors hover:text-gold">
                {legal.terms}
              </a>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <span>{t.footer.disclaimer}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}