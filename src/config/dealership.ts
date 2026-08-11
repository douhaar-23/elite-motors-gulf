/**
 * SINGLE SOURCE OF TRUTH for dealership-specific data.
 * To reuse this template for another dealership, edit ONLY this file
 * and `src/data/vehicles.ts`.
 */

import { showroom } from "./showroom";

import type {
  Country,
  Language,
  Currency,
  DistanceUnit,
} from "./types";

export type DealershipConfig = {
  country: Country;
  currency: Currency;
  distanceUnit: DistanceUnit;

  /** Language shown on first visit. */
  defaultLanguage: Language;

  bilingual: boolean;

  name: string;
  nameEn: string;

  tagline: string;
  taglineEn: string;

  logoLetter: string;

  phone: string;

  /** Digits only — used for wa.me links. */
  whatsapp: string;

  whatsappEnabled: boolean;
  smsEnabled: boolean;

  email: string;

  address: string;
  addressEn: string;

  hours: string;
  hoursEn: string;

  hoursSecondary: string;
  hoursSecondaryEn: string;

  mapsUrl: string;
  mapsEmbedQuery: string;

  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };

  stats: {
    yearsExperience: string;
    carsSold: string;
    happyCustomers: string;
    brands: string;
  };

  testimonialsAreSamples: boolean;
};

/* =========================================================
   DEALERSHIP CONFIG
========================================================= */

export const dealership: DealershipConfig = {
 country: "QA",

currency: "QAR",

distanceUnit: "km",

defaultLanguage: "ar",

bilingual: true,

  name: showroom.nameAr,
  nameEn: showroom.nameEn,

  tagline: showroom.taglineAr,
  taglineEn: showroom.taglineEn,

  logoLetter: showroom.logoLetter,

  phone: showroom.phone,
  whatsapp: showroom.whatsapp,

  whatsappEnabled: true,
smsEnabled: false,
  email: showroom.email,

  address: showroom.addressAr,
  addressEn: showroom.addressEn,

  /* =========================
     Qatar Working Hours
  ========================= */

  hours: "السبت - الخميس: 9:00 صباحاً - 10:00 مساءً",
  hoursEn: "Sat – Thu: 9:00 AM – 10:00 PM",

  hoursSecondary: "الجمعة: 4:00 مساءً - 10:00 مساءً",
  hoursSecondaryEn: "Friday: 4:00 PM – 10:00 PM",

  mapsUrl: showroom.mapsUrl,
  mapsEmbedQuery: showroom.mapsEmbedQuery,

  social: {
    instagram: showroom.instagram,
    facebook: "",
    twitter: "",
    youtube: "",
  },

  /*
   * نخلي الإحصائيات فارغة مؤقتاً
   * حتى لا ننشر أرقام غير مؤكدة للمعرض.
   */
  stats: {
    yearsExperience: "",
    carsSold: "",
    happyCustomers: "",
    brands: "",
  },

  testimonialsAreSamples: true,
};

/* =========================================================
   COUNTRY HELPERS
========================================================= */

export const isSaudi = false;
export const isQatar = true;
export const isUSA = false;

/* =========================================================
   DEALERSHIP HELPERS
========================================================= */

export const dealershipName = (lang: Language) =>
  lang === "ar"
    ? dealership.name
    : dealership.nameEn;

export const dealershipAddress = (lang: Language) =>
  lang === "ar"
    ? dealership.address
    : dealership.addressEn;

export const dealershipHours = (lang: Language) =>
  lang === "ar"
    ? dealership.hours
    : dealership.hoursEn;

export const dealershipHoursSecondary = (lang: Language) =>
  lang === "ar"
    ? dealership.hoursSecondary
    : dealership.hoursSecondaryEn;

/* =========================================================
   CONTACT LINKS
========================================================= */

export const telHref =
  `tel:${dealership.phone.replace(/[^\d+]/g, "")}`;

export const smsHref = (body?: string) =>
  `sms:${dealership.phone.replace(/[^\d+]/g, "")}${
    body
      ? `?&body=${encodeURIComponent(body)}`
      : ""
  }`;

export const mailHref = (
  subject?: string,
  body?: string,
) => {
  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  const qs = params.toString();

  return `mailto:${dealership.email}${
    qs ? `?${qs}` : ""
  }`;
};

export const waLink = (message: string) =>
  `https://wa.me/${dealership.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;

export const leadHref = (
  subject: string,
  message: string,
) =>
  dealership.whatsappEnabled
    ? waLink(message)
    : mailHref(subject, message);

/* =========================================================
   FORMATTERS
========================================================= */

const localeFor = (lang: Language) => {
  if (dealership.country === "QA") {
    return lang === "ar"
      ? "ar-QA"
      : "en-QA";
  }

  if (dealership.country === "SA") {
    return lang === "ar"
      ? "ar-SA"
      : "en-SA";
  }

  return "en-US";
};

/**
 * Formats a price using the dealership currency.
 */
export function formatPrice(
  value: number,
  lang: Language = dealership.defaultLanguage,
) {
  return new Intl.NumberFormat(
    localeFor(lang),
    {
      style: "currency",
      currency: dealership.currency,
      maximumFractionDigits: 0,
    },
  ).format(value);
}

/**
 * Formats a plain number.
 */
export function formatNumber(
  value: number,
  lang: Language = dealership.defaultLanguage,
) {
  return new Intl.NumberFormat(
    localeFor(lang),
  ).format(value);
}

export const kmToMiles = (km: number) =>
  Math.round(km * 0.621371);

/**
 * Mileage is stored in km.
 * Converted to miles only for US dealerships.
 */
export function formatMileage(
  km: number,
  lang: Language = dealership.defaultLanguage,
) {
  const isMiles =
    dealership.distanceUnit === "mi";

  const value = isMiles
    ? kmToMiles(km)
    : km;

  const unit = isMiles
    ? lang === "ar"
      ? "ميل"
      : "mi"
    : lang === "ar"
      ? "كم"
      : "km";

  return `${formatNumber(value, lang)} ${unit}`;
}