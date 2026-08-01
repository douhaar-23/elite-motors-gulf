import {
  Calendar,
  Fuel,
  Gauge,
  MessageCircle,
  Phone,
  Settings2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { dealership, telHref, waLink } from "@/config/dealership";
import type { Vehicle } from "@/data/vehicles";
import { useI18n } from "@/i18n";

export function CarCard({ car }: { car: Vehicle }) {
  const { t, lang, price, mileage } = useI18n();

  const name = `${car.brand[lang]} ${car.model[lang]} ${car.year}`;
  const message = t.vehicle.inquiryMessage(name);

  return (
    <article
      className="
        group
        relative
        flex h-full flex-col
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-surface
        shadow-[0_18px_50px_rgba(0,0,0,0.18)]
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-gold/40
        hover:shadow-[0_26px_70px_rgba(0,0,0,0.34)]
      "
    >
      <Link
        to="/cars/$vehicleId"
        params={{ vehicleId: car.id }}
        aria-label={`${t.common.viewDetails} — ${name}`}
        className="relative block aspect-[16/10] overflow-hidden bg-background"
      >
        <img
          src={car.images[0]}
          alt={name}
          width={1024}
          height={640}
          loading="lazy"
          className="
            h-full w-full
            object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-[1.06]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-t
            from-background/80
            via-transparent
            to-transparent
            opacity-70
          "
        />

        <div
          className="
            absolute end-3 top-3
            rounded-full
            border border-gold/30
            bg-background/75
            px-3 py-1.5
            text-[11px] font-semibold
            text-gold
            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
            backdrop-blur-md
          "
        >
          {t.cars.condition[car.condition]}
        </div>

        <div
          className="
            absolute inset-x-4 bottom-4
            flex items-end justify-between gap-3
            opacity-0
            translate-y-2
            transition-all duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <span className="text-xs font-medium text-foreground/70">
            {t.common.viewDetails}
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent rtl:bg-gradient-to-l" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-foreground sm:text-xl">
              {car.brand[lang]}
            </h3>

            <p className="mt-1 truncate text-sm text-muted-foreground">
              {car.model[lang]}
            </p>
          </div>

          <div className="shrink-0 text-end">
            <div className="text-base font-black gold-text sm:text-lg">
              {price(car.price)}
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
          <Spec
            icon={<Calendar className="h-4 w-4" />}
            label={String(car.year)}
          />

          <Spec
            icon={<Gauge className="h-4 w-4" />}
            label={mileage(car.mileage)}
          />

          <Spec
            icon={<Settings2 className="h-4 w-4" />}
            label={t.cars.transmission[car.transmission]}
          />

          <Spec
            icon={<Fuel className="h-4 w-4" />}
            label={t.cars.fuel[car.fuel]}
          />
        </div>

        <div className="mt-auto flex gap-2 border-t border-white/10 pt-5">
          <Link
            to="/cars/$vehicleId"
            params={{ vehicleId: car.id }}
            className="
              inline-flex min-h-11 flex-1 items-center justify-center
              rounded-md
              bg-foreground
              px-4 py-2.5
              text-xs font-bold
              text-background
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-gold
              hover:shadow-[0_12px_30px_rgba(198,161,91,0.18)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-gold
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background
            "
          >
            {t.common.viewDetails}
          </Link>

          {dealership.whatsappEnabled ? (
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.common.whatsapp} — ${name}`}
              className="
                grid min-h-11 min-w-11 place-items-center
                rounded-md
                border border-white/10
                bg-background/30
                text-whatsapp
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-whatsapp/60
                hover:bg-whatsapp/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-whatsapp
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          ) : (
            <a
              href={telHref}
              aria-label={`${t.common.call} — ${name}`}
              className="
                grid min-h-11 min-w-11 place-items-center
                rounded-md
                border border-white/10
                bg-background/30
                text-gold
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-gold/60
                hover:bg-gold/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              <Phone className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Spec({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 text-muted-foreground">
      <span className="shrink-0 text-gold">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}