import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { dealership } from "@/config/dealership";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#cars", label: "السيارات" },
  { href: "#services", label: "خدماتنا" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-md border border-gold/40 bg-surface">
                <span className="gold-text font-black text-lg">E</span>
              </div>
              <div>
                <div className="font-bold text-foreground">{dealership.name}</div>
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {dealership.nameEn}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              وجهتك الموثوقة للسيارات الفاخرة في المملكة العربية السعودية. خبرة،
              جودة، وخدمة استثنائية.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                >
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground">روابط سريعة</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground">تواصل</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{dealership.phone}</li>
              <li>{dealership.email}</li>
              <li className="leading-relaxed">{dealership.address}</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-10" />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {dealership.name}. جميع الحقوق محفوظة.</div>
          <div>صُنع بعناية في المملكة العربية السعودية</div>
        </div>
      </div>
    </footer>
  );
}
