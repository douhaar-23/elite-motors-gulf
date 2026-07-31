/**
 * SINGLE SOURCE OF TRUTH for dealership-specific data.
 * To reuse this template for another dealership, edit ONLY this file
 * and `src/data/vehicles.ts`.
 */

export type Country = "SA" | "US";
export type Language = "ar" | "en";
export type Currency = "SAR" | "USD";
export type DistanceUnit = "km" | "mi";

export type DealershipConfig = {
  /** "SA" enables Arabic + RTL + SAR + km. "US" is English-only + USD + miles. */
  country: Country;
  currency: Currency;
  distanceUnit: DistanceUnit;
  /** Language shown on first visit (before localStorage preference). */
  defaultLanguage: Language;
  /** Set false for US dealerships to hide the AR/EN switcher. */
  bilingual: boolean;

  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  logoLetter: string;

  phone: string;
  /** Digits only, international format, no "+" — used for wa.me links. */
  whatsapp: string;
  /** Set false for US dealerships that prefer SMS/call over WhatsApp. */
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

  social: { facebook: string; instagram: string; twitter: string; youtube: string };

  /**
   * Editable marketing figures. Leave any value as an empty string to hide
   * that stat entirely — do NOT publish numbers you cannot verify.
   */
  stats: {
    yearsExperience: string;
    carsSold: string;
    happyCustomers: string;
    brands: string;
  };

  /** Show the "sample content" notice above testimonials until real ones exist. */
  testimonialsAreSamples: boolean;
};

export const dealership: DealershipConfig = {
  country: "SA",
  currency: "SAR",
  distanceUnit: "km",
  defaultLanguage: "ar",
  bilingual: true,

  name: "إليت موتورز",
  nameEn: "Elite Motors",
  tagline: "وجهتك للسيارات الفاخرة في المملكة",
  taglineEn: "Your destination for premium cars",
  logoLetter: "E",

  phone: "+966 55 000 0000",
  whatsapp: "966550000000",
  whatsappEnabled: true,
  smsEnabled: true,
  email: "info@elitemotors.sa",

  address: "طريق الملك فهد، حي العليا، الرياض، المملكة العربية السعودية",
  addressEn: "King Fahd Road, Al Olaya, Riyadh, Saudi Arabia",
  hours: "السبت - الخميس: 9:00 صباحاً - 10:00 مساءً",
  hoursEn: "Sat – Thu: 9:00 AM – 10:00 PM",
  hoursSecondary: "الجمعة: 4:00 - 10:00 مساءً",
  hoursSecondaryEn: "Friday: 4:00 PM – 10:00 PM",
  mapsUrl: "https://maps.google.com/?q=Riyadh",
  mapsEmbedQuery: "Riyadh",

  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },

  stats: {
    yearsExperience: "10",
    carsSold: "300",
    happyCustomers: "300",
    brands: "20",
  },

  testimonialsAreSamples: true,
};

/* ------------------------------------------------------------------ */
/* Derived helpers                                                     */
/* ------------------------------------------------------------------ */

export const isSaudi = dealership.country === "SA";
export const isUSA = dealership.country === "US";

export const dealershipName = (lang: Language) =>
  lang === "ar" ? dealership.name : dealership.nameEn;

export const dealershipAddress = (lang: Language) =>
  lang === "ar" ? dealership.address : dealership.addressEn;

export const dealershipHours = (lang: Language) =>
  lang === "ar" ? dealership.hours : dealership.hoursEn;

export const dealershipHoursSecondary = (lang: Language) =>
  lang === "ar" ? dealership.hoursSecondary : dealership.hoursSecondaryEn;

export const telHref = `tel:${dealership.phone.replace(/[^\d+]/g, "")}`;
export const smsHref = (body?: string) =>
  `sms:${dealership.phone.replace(/[^\d+]/g, "")}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;
export const mailHref = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${dealership.email}${qs ? `?${qs}` : ""}`;
};

export const waLink = (message: string) =>
  `https://wa.me/${dealership.whatsapp}?text=${encodeURIComponent(message)}`;

/**
 * Best available contact channel for a lead, based on config.
 * Falls back to email when WhatsApp is disabled (typical for US dealers).
 */
export const leadHref = (subject: string, message: string) =>
  dealership.whatsappEnabled ? waLink(message) : mailHref(subject, message);

/* ------------------------------------------------------------------ */
/* Formatters                                                          */
/* ------------------------------------------------------------------ */

const localeFor = (lang: Language) => (lang === "ar" ? "ar-SA" : "en-US");

/** Formats a price in the configured currency (SAR or USD). */
export function formatPrice(value: number, lang: Language = dealership.defaultLanguage) {
  return new Intl.NumberFormat(localeFor(lang), {
    style: "currency",
    currency: dealership.currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/** Formats a plain number using the active locale digits. */
export function formatNumber(value: number, lang: Language = dealership.defaultLanguage) {
  return new Intl.NumberFormat(localeFor(lang)).format(value);
}

export const kmToMiles = (km: number) => Math.round(km * 0.621371);

/** Mileage is always stored in km; converted to miles when configured. */
export function formatMileage(km: number, lang: Language = dealership.defaultLanguage) {
  const isMiles = dealership.distanceUnit === "mi";
  const value = isMiles ? kmToMiles(km) : km;
  const unit = isMiles ? (lang === "ar" ? "ميل" : "mi") : lang === "ar" ? "كم" : "km";
  return `${formatNumber(value, lang)} ${unit}`;
}
