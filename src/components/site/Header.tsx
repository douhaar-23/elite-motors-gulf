import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { dealership, waLink } from "@/config/dealership";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#cars", label: "السيارات" },
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 bg-surface">
              <span className="gold-text font-black text-lg">E</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-foreground">
                {dealership.name}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {dealership.nameEn}
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 hover:text-gold transition-colors relative after:absolute after:right-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink("مرحباً، أرغب بالاستفسار عن سياراتكم.")}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              واتساب
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-md border border-border text-foreground"
              aria-label="القائمة"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-1 rounded-lg border border-border bg-surface p-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm text-foreground/90 hover:bg-surface-2 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
