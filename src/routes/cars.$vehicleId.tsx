import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Gauge, Settings2, Fuel, BadgeCheck, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { CarCard } from "@/components/site/CarCard";
import { LeadForm } from "@/components/site/LeadForm";
import { getVehicle, similarVehicles } from "@/data/vehicles";
import { dealership, dealershipName, waLink } from "@/config/dealership";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/cars/$vehicleId")({
  loader: ({ params }) => {
    const vehicle = getVehicle(params.vehicleId);
    if (!vehicle) throw notFound();
    return { id: vehicle.id, title: `${vehicle.brand.en} ${vehicle.model.en} ${vehicle.year}` };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — ${dealership.nameEn}` : "Vehicle";
    return {
      meta: [
        { title },
        { name: "description", content: `${title} — available now at ${dealership.nameEn}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `${title} — available now at ${dealership.nameEn}.` },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: VehiclePage,
});

function VehiclePage() {
  const { id } = Route.useLoaderData();
  const { t, lang, price, mileage } = useI18n();
  const vehicle = getVehicle(id)!;
  const [active, setActive] = useState(0);

  const name = `${vehicle.brand[lang]} ${vehicle.model[lang]} ${vehicle.year}`;
  const Back = lang === "ar" ? ArrowRight : ArrowLeft;

  const specs = [
    { icon: Calendar, label: t.cars.specs.year, value: String(vehicle.year) },
    { icon: Gauge, label: t.cars.specs.mileage, value: mileage(vehicle.mileage) },
    { icon: Settings2, label: t.cars.specs.transmission, value: t.cars.transmission[vehicle.transmission] },
    { icon: Fuel, label: t.cars.specs.fuel, value: t.cars.fuel[vehicle.fuel] },
    { icon: BadgeCheck, label: t.cars.specs.condition, value: t.cars.condition[vehicle.condition] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            hash="cars"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <Back className="h-4 w-4" />
            {t.common.backToCars}
          </Link>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src={vehicle.images[active]}
                  alt={name}
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              {vehicle.images.length > 1 && (
                <div className="mt-3 flex gap-3" aria-label={t.vehicle.gallery}>
                  {vehicle.images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`${t.vehicle.gallery} ${i + 1}`}
                      className={`h-20 w-28 overflow-hidden rounded-lg border transition-colors ${
                        i === active ? "border-gold" : "border-border hover:border-gold/50"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              <h1 className="mt-8 text-3xl sm:text-4xl font-black text-foreground">{name}</h1>
              <div className="mt-2 text-2xl font-black gold-text">{price(vehicle.price)}</div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {specs.map((s) => (
                  <div key={s.label} className="rounded-lg border border-border bg-surface p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <s.icon className="h-3.5 w-3.5 text-gold" />
                      {s.label}
                    </div>
                    <div className="mt-1.5 text-sm font-bold text-foreground">{s.value}</div>
                  </div>
                ))}
              </div>

              <h2 className="mt-10 text-xl font-bold text-foreground">{t.vehicle.overview}</h2>
              <p className="mt-3 text-muted-foreground leading-loose">{vehicle.description[lang]}</p>

              <h2 className="mt-8 text-xl font-bold text-foreground">{t.vehicle.features}</h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {vehicle.features[lang].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-2 space-y-4">
              {dealership.whatsappEnabled && (
                <a
                  href={waLink(t.vehicle.inquiryMessage(name))}
                  target="_blank"
                  rel="noopener"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3 min-h-11 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.vehicle.inquire}
                </a>
              )}
              <div className="rounded-xl border border-border bg-surface p-6">
                <h2 className="text-lg font-bold text-foreground">{t.vehicle.testDrive}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{t.vehicle.testDriveDesc}</p>
                <div className="mt-5">
                  <LeadForm kind="testDrive" vehicleName={name} submitLabel={t.vehicle.testDrive} />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {t.footer.disclaimer} — {dealershipName(lang)}
              </p>
            </aside>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-black text-foreground">{t.vehicle.similar}</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarVehicles(vehicle).map((v) => (
                <CarCard key={v.id} car={v} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
