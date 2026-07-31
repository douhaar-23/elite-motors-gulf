import { Calendar, Gauge, Settings2, Fuel, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Vehicle } from "@/data/vehicles";
import { dealership, telHref, waLink } from "@/config/dealership";
import { useI18n } from "@/i18n";

export function CarCard({ car }: { car: Vehicle }) {
  const { t, lang, price, mileage } = useI18n();
  const name = `${car.brand[lang]} ${car.model[lang]} ${car.year}`;
  const msg = t.vehicle.inquiryMessage(name);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-black/40">
      <Link
        to="/cars/$vehicleId"
        params={{ vehicleId: car.id }}
        className="relative block aspect-[16/10] overflow-hidden bg-background"
      >
        <img
          src={car.images[0]}
          alt={name}
          width={1024}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 end-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[11px] font-semibold text-gold border border-gold/30">
          {t.cars.condition[car.condition]}
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground truncate">{car.brand[lang]}</h3>
            <p className="text-sm text-muted-foreground truncate">{car.model[lang]}</p>
          </div>
          <div className="text-end shrink-0">
            <div className="text-base font-black gold-text">{price(car.price)}</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <Spec icon={<Calendar className="h-3.5 w-3.5" />} label={String(car.year)} />
          <Spec icon={<Gauge className="h-3.5 w-3.5" />} label={mileage(car.mileage)} />
          <Spec icon={<Settings2 className="h-3.5 w-3.5" />} label={t.cars.transmission[car.transmission]} />
          <Spec icon={<Fuel className="h-3.5 w-3.5" />} label={t.cars.fuel[car.fuel]} />
        </div>

        <div className="mt-5 flex gap-2 pt-4 border-t border-border">
          <Link
            to="/cars/$vehicleId"
            params={{ vehicleId: car.id }}
            className="flex-1 inline-flex items-center justify-center rounded-md bg-foreground/95 px-3 py-2.5 min-h-11 text-xs font-semibold text-background hover:bg-gold transition-colors"
          >
            {t.common.viewDetails}
          </Link>
          {dealership.whatsappEnabled ? (
            <a
              href={waLink(msg)}
              target="_blank"
              rel="noopener"
              aria-label={`${t.common.whatsapp} — ${name}`}
              className="grid place-items-center min-h-11 min-w-11 rounded-md border border-border text-whatsapp hover:border-whatsapp hover:bg-whatsapp/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          ) : (
            <a
              href={telHref}
              aria-label={`${t.common.call} — ${name}`}
              className="grid place-items-center min-h-11 min-w-11 rounded-md border border-border text-gold hover:border-gold hover:bg-gold/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-muted-foreground">
      <span className="text-gold">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}
