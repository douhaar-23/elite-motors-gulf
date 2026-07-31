import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { dealership, dealershipAddress, dealershipName, telHref } from "@/config/dealership";
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
    { href: dealership.social.facebook, Icon: Facebook, label: "Facebook" },
    { href: dealership.social.instagram, Icon: Instagram, label: "Instagram" },
    { href: dealership.social.twitter, Icon: Twitter, label: "Twitter" },
    { href: dealership.social.youtube, Icon: Youtube, label: "YouTube" },
  ].filter((s) => s.href && s.href !== "#");

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 bg-surface">
                <span className="gold-text font-black text-lg">{dealership.logoLetter}</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-foreground">{dealershipName(lang)}</div>
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {dealership.nameEn}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">{t.footer.desc}</p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-md border border-border text-muted-foreground hover:border-gold/50 hover:text-gold transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">{t.nav.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.hash}>
                  <Link
                    to="/"
                    hash={l.hash}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={telHref} className="hover:text-gold transition-colors" dir="ltr">
                  {dealership.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${dealership.email}`} className="hover:text-gold transition-colors">
                  {dealership.email}
                </a>
              </li>
              <li>{dealershipAddress(lang)}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 space-y-2 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {dealershipName(lang)} — {t.footer.rights}
          </p>
          <p className="text-[11px] text-muted-foreground/70">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
