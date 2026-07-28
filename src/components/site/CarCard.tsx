import { Calendar, Gauge, Settings2, Fuel, MessageCircle } from "lucide-react";
import { type Car, formatPrice, waLink } from "@/config/dealership";

export function CarCard({ car }: { car: Car }) {
  const msg = `مرحباً، أرغب بالاستفسار عن ${car.brand} ${car.model} ${car.year}.`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-black/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model} ${car.year}`}
          width={1024}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[11px] font-semibold text-gold border border-gold/30">
          {car.condition}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground truncate">
              {car.brand}
            </h3>
            <p className="text-sm text-muted-foreground truncate">{car.model}</p>
          </div>
          <div className="text-left shrink-0">
            <div className="text-lg font-black gold-text">
              {formatPrice(car.price)}
            </div>
            <div className="text-[10px] text-muted-foreground">ريال سعودي</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <Spec icon={<Calendar className="h-3.5 w-3.5" />} label={String(car.year)} />
          <Spec icon={<Gauge className="h-3.5 w-3.5" />} label={car.mileage} />
          <Spec icon={<Settings2 className="h-3.5 w-3.5" />} label={car.transmission} />
          <Spec icon={<Fuel className="h-3.5 w-3.5" />} label={car.fuel} />
        </div>

        <div className="mt-5 flex gap-2 pt-4 border-t border-border">
          <button className="flex-1 rounded-md bg-foreground/95 px-3 py-2 text-xs font-semibold text-background hover:bg-gold transition-colors">
            عرض التفاصيل
          </button>
          <a
            href={waLink(msg)}
            target="_blank"
            rel="noopener"
            aria-label="واتساب"
            className="grid place-items-center rounded-md border border-border px-3 py-2 text-whatsapp hover:border-whatsapp hover:bg-whatsapp/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
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
