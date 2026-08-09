import { createFileRoute, notFound } from "@tanstack/react-router";
import type { CSSProperties } from "react";

import { demos } from "@/data/demos";
import {
  DemoProvider,
  useDemo,
  type DemoData,
} from "@/context/DemoContext";

export const Route = createFileRoute("/demo/$slug")({
  loader: ({ params }) => {
    const demo = demos[params.slug as keyof typeof demos];

    if (!demo) {
      throw notFound();
    }

    return demo as DemoData;
  },

  component: DemoRoute,
});

function DemoRoute() {
  const demo = Route.useLoaderData();

  return (
    <DemoProvider value={demo}>
      <DemoPage />
    </DemoProvider>
  );
}

function DemoPage() {
  const demo = useDemo();

  /*
   * نخلي الـ Demo يتحكم فقط بألوان الهوية.
   * الخلفية والنصوص والسطوح يتم التحكم بها
   * من styles.css حسب Light / Dark Mode.
   */
  const themeStyle = {
    "--gold": demo.theme.primary,
    "--gold-soft": demo.theme.primarySoft,
    "--ring": demo.theme.primary,
  } as CSSProperties & Record<`--${string}`, string>;

  const isUS = demo.country === "US";

  return (
    <main
      dir={isUS ? "ltr" : "rtl"}
      lang={isUS ? "en" : "ar"}
      style={themeStyle}
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16 sm:px-6">
        <div
          className="
            w-full
            rounded-2xl
            border border-border
            bg-surface
            p-6
            text-center
            shadow-[0_24px_70px_rgba(0,0,0,0.12)]
            transition-colors duration-300
            sm:p-10
          "
        >
          <img
            src={demo.logoHorizontal || demo.logoSquare}
            alt={isUS ? demo.nameEn : demo.nameAr}
            className="mx-auto mb-6 h-20 max-w-72 object-contain"
          />

          <h1 className="text-4xl font-black text-foreground">
            {isUS ? demo.nameEn : demo.nameAr}
          </h1>

          <p className="mt-3 text-muted-foreground">
            {demo.phone}
          </p>

          <a
            href={
              isUS
                ? `tel:${demo.phone}`
                : `https://wa.me/${demo.whatsapp}`
            }
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gold
              px-6 py-3
              font-bold
              text-background
              transition-all duration-200
              hover:bg-gold-soft
            "
          >
            {isUS ? "Call Us" : "تواصل عبر واتساب"}
          </a>
        </div>
      </div>
    </main>
  );
}