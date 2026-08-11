import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import {
  useEffect,
  type CSSProperties,
  type ReactNode,
} from "react";

import { showroom } from "@/config/showroom";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/i18n";
import { InventoryProvider } from "@/components/site/inventory-context";


/* =========================================================
   NOT FOUND
========================================================= */

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="w-full max-w-lg text-center">
        <div className="gold-text text-7xl font-black">
          404
        </div>

        <h1 className="mt-5 text-3xl font-black">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            mt-7
            inline-flex
            min-h-11
            items-center
            justify-center
            rounded-md
            bg-gold
            px-6
            py-3
            text-sm
            font-bold
            text-background
            transition-all
            duration-200
            hover:bg-gold-soft
          "
        >
          Go home
        </Link>
      </div>
    </div>
  );
}


/* =========================================================
   ERROR PAGE
========================================================= */

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-black">
          This page didn't load
        </h1>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Something went wrong on our end. You can try refreshing
          or head back home.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-gold
              px-5
              py-2.5
              text-sm
              font-bold
              text-background
              transition-colors
              hover:bg-gold-soft
            "
          >
            Try again
          </button>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              border
              border-border
              bg-surface
              px-5
              py-2.5
              text-sm
              font-medium
              text-foreground
              transition-colors
              hover:border-gold/50
              hover:text-gold
            "
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   ROOT ROUTE
========================================================= */

export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "معرض القلعه للسيارات | ALQALAA CAR SHOWROOM",
        },

        {
          name: "description",
          content:
            "معرض القلعه للسيارات في قطر. تصفح السيارات المتوفرة وتواصل مباشرة للاستفسار عن الأسعار والمواصفات والتوفر.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

    


/* =========================================================
   ROOT SHELL
========================================================= */

function RootShell({
  children,
}: {
  children: ReactNode;
}) {
  /*
   * مهم:
   *
   * showroom يتحكم فقط بلون الهوية الرئيسي.
   *
   * background / foreground / surface / card...
   * يتم التحكم بها من styles.css
   *
   * :root  = Light Mode
   * .dark  = Dark Mode
   */

  const themeStyle = {
    "--gold": showroom.theme.primary,
    "--gold-soft": showroom.theme.primarySoft,
    "--ring": showroom.theme.primary,
  } as CSSProperties &
    Record<`--${string}`, string>;

  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>

      <body style={themeStyle}>
        {children}

        <Scripts />
      </body>
    </html>
  );
}


/* =========================================================
   ROOT COMPONENT
========================================================= */

function RootComponent() {
  const { queryClient } =
    Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <InventoryProvider>
          <Outlet />
        </InventoryProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}