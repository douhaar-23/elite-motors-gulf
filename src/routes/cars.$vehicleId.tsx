import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  MessageCircle,
  Settings2,
} from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { CarCard } from "@/components/site/CarCard";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { LeadForm } from "@/components/site/LeadForm";
import {
  dealership,
  dealershipName,
  waLink,
} from "@/config/dealership";
import {
  getVehicle,
  similarVehicles,
} from "@/data/vehicles";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/cars/$vehicleId")({
  loader: ({ params }) => {
    const vehicle = getVehicle(params.vehicleId);

    if (!vehicle) {
      throw notFound();
    }

    return {
      id: vehicle.id,
      title: `${vehicle.brand.en} ${vehicle.model.en} ${vehicle.year}`,
    };
  },

  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} — ${dealership.nameEn}`
      : "Vehicle";

    const description = `${title} — available now at ${dealership.nameEn}.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
    };
  },

  component: VehiclePage,
});

function VehiclePage() {
  const { id } = Route.useLoaderData();
  const { t, lang, price, mileage } = useI18n();
const currentLang = lang as "ar" | "en";
  const vehicle = getVehicle(id)!;
  const [active, setActive] = useState(0);

  const name = `${vehicle.brand[currentLang]} ${vehicle.model[currentLang]} ${vehicle.year}`;
  const Back = lang === "ar" ? ArrowRight : ArrowLeft;
  const Prev = lang === "ar" ? ChevronRight : ChevronLeft;
  const Next = lang === "ar" ? ChevronLeft : ChevronRight;

  const specs = [
    {
      icon: Calendar,
      label: t.cars.specs.year,
      value: String(vehicle.year),
    },
    {
      icon: Gauge,
      label: t.cars.specs.mileage,
      value: mileage(vehicle.mileage),
    },
    {
      icon: Settings2,
      label: t.cars.specs.transmission,
      value: t.cars.transmission[vehicle.transmission],
    },
    {
      icon: Fuel,
      label: t.cars.specs.fuel,
      value: t.cars.fuel[vehicle.fuel],
    },
    {
      icon: BadgeCheck,
      label: t.cars.specs.condition,
      value: t.cars.condition[vehicle.condition],
    },
  ];

  const showPrevious = () => {
    setActive((current) =>
      current === 0 ? vehicle.images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActive((current) =>
      current === vehicle.images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pb-20 pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            hash="cars"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-muted-foreground
              transition-colors
              hover:text-gold
            "
          >
            <Back className="h-4 w-4" />
            {t.common.backToCars}
          </Link>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-surface
                  shadow-[0_24px_80px_rgba(0,0,0,0.28)]
                "
              >
                <img
                  src={vehicle.images[active]}
                  alt={name}
                  width={1200}
                  height={750}
                  className="
                    aspect-[16/10] w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.015]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-background/45
                    via-transparent
                    to-transparent
                  "
                />

                {vehicle.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Previous image"
                      className="
                        absolute start-4 top-1/2
                        grid h-11 w-11 -translate-y-1/2 place-items-center
                        rounded-full
                        border border-white/15
                        bg-background/55
                        text-foreground
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        hover:border-gold/60
                        hover:text-gold
                        group-hover:opacity-100
                      "
                    >
                      <Prev className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next image"
                      className="
                        absolute end-4 top-1/2
                        grid h-11 w-11 -translate-y-1/2 place-items-center
                        rounded-full
                        border border-white/15
                        bg-background/55
                        text-foreground
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        hover:border-gold/60
                        hover:text-gold
                        group-hover:opacity-100
                      "
                    >
                      <Next className="h-5 w-5" />
                    </button>
                  </>
                )}

                <div
                  className="
                    absolute bottom-4 end-4
                    rounded-full
                    border border-white/10
                    bg-background/60
                    px-3 py-1.5
                    text-xs text-foreground/75
                    backdrop-blur-md
                  "
                >
                  {active + 1} / {vehicle.images.length}
                </div>
              </div>

              {vehicle.images.length > 1 && (
                <div
                  className="mt-4 flex gap-3 overflow-x-auto pb-2"
                  aria-label={t.vehicle.gallery}
                >
                  {vehicle.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`${t.vehicle.gallery} ${index + 1}`}
                      className={`
                        relative
                        h-20 w-28 shrink-0
                        overflow-hidden
                        rounded-lg
                        border
                        transition-all duration-200
                        ${
                          index === active
                            ? "border-gold shadow-[0_0_0_1px_rgba(198,161,91,0.35)]"
                            : "border-white/10 opacity-65 hover:border-gold/50 hover:opacity-100"
                        }
                      `}
                    >
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-gold">
                      {vehicle.model[currentLang]}
                    </p>

                    <h1 className="mt-2 text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
                      {vehicle.model[currentLang]} {vehicle.year}
                    </h1>
                  </div>

                  <div className="text-2xl font-black gold-text sm:text-3xl">
  {vehicle.price > 0
    ? price(vehicle.price)
    : currentLang === "ar"
      ? "تواصل لمعرفة السعر"
      : "Contact for price"}
</div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="
                        rounded-xl
                        border border-white/10
                        bg-surface
                        p-4
                        transition-colors
                        hover:border-gold/30
                      "
                    >
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <spec.icon className="h-4 w-4 text-gold" />
                        {spec.label}
                      </div>

                      <div className="mt-2 text-sm font-bold text-foreground sm:text-base">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                <section className="mt-10 border-t border-white/10 pt-8">
                  <h2 className="text-2xl font-black text-foreground">
                    {t.vehicle.overview}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                    {vehicle.description[currentLang]}
                  </p>
                </section>

                <section className="mt-9">
                  <h2 className="text-2xl font-black text-foreground">
                    {t.vehicle.features}
                  </h2>

                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {vehicle.features[currentLang].map((feature) => (
                      <li
                        key={feature}
                        className="
                          flex items-center gap-3
                          rounded-lg
                          border border-white/8
                          bg-surface/55
                          px-4 py-3
                          text-sm text-foreground/75
                        "
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                          <BadgeCheck className="h-4 w-4" />
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="space-y-4 lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-surface
                    p-5
                    shadow-[0_24px_70px_rgba(0,0,0,0.22)]
                    sm:p-6
                  "
                >
                  <div className="mb-5 border-b border-white/10 pb-5">
                    <p className="text-sm text-muted-foreground">
                      {vehicle.brand[currentLang]}
                    </p>

                    <p className="mt-1 text-xl font-black text-foreground">
                      {vehicle.model[currentLang]} {vehicle.year}
                    </p>

                    <p className="mt-3 text-2xl font-black gold-text">
  {vehicle.price > 0
    ? price(vehicle.price)
    : currentLang === "ar"
      ? "تواصل لمعرفة السعر"
      : "Contact for price"}
</p>
                  </div>

                  {dealership.whatsappEnabled && (
                    <a
                      href={waLink(t.vehicle.inquiryMessage(name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex min-h-12 w-full items-center justify-center gap-2
                        rounded-md
                        bg-whatsapp
                        px-6 py-3
                        text-sm font-bold
                        text-background
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:opacity-90
                        hover:shadow-[0_14px_35px_rgba(37,211,102,0.18)]
                      "
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t.vehicle.inquire}
                    </a>
                  )}

                  <div className="mt-6">
                    <h2 className="text-lg font-bold text-foreground">
                      {t.vehicle.testDrive}
                    </h2>

                    <p className="mt-1 text-xs leading-6 text-muted-foreground">
                      {t.vehicle.testDriveDesc}
                    </p>

                    <div className="mt-5">
                      <LeadForm
                        kind="testDrive"
                        vehicleName={name}
                        submitLabel={t.vehicle.testDrive}
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-muted-foreground">
                  {t.footer.disclaimer} — {dealershipName(lang)}
                </p>
              </div>
            </aside>
          </div>

          <section className="mt-24 border-t border-white/10 pt-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-black text-foreground sm:text-3xl">
                {t.vehicle.similar}
              </h2>

              <Link
                to="/"
                hash="cars"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
              >
                {t.common.backToCars}
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {similarVehicles(vehicle).map((similarVehicle) => (
                <CarCard
                  key={similarVehicle.id}
                  car={similarVehicle}
                />
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