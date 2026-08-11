/* =========================================================
   VEHICLES DATA
   معرض القلعة للسيارات - قطر
========================================================= */

export type Bilingual = {
  ar: string;
  en: string;
};

export type VehicleCondition = "new" | "used";

export type VehicleTransmission =
  | "automatic"
  | "manual";

export type VehicleFuel =
  | "petrol"
  | "diesel"
  | "hybrid"
  | "electric";

export type VehicleBodyType =
  | "sedan"
  | "suv"
  | "coupe"
  | "pickup";


/* =========================================================
   VEHICLE TYPE
========================================================= */

export type Vehicle = {
  id: string;

  brand: Bilingual;

  model: Bilingual;

  bodyType: VehicleBodyType;

  year: number;

  /**
   * Always stored in kilometers.
   * Formatters convert to miles when needed.
   */
  mileage: number;

  /**
   * Stored in the currency configured
   * in src/config/dealership.ts
   *
   * For Al Qalaa Car Showroom = QAR
   *
   * Use 0 when price is not publicly listed.
   */
  price: number;

  condition: VehicleCondition;

  transmission: VehicleTransmission;

  fuel: VehicleFuel;

  description: Bilingual;

  features: {
    ar: string[];
    en: string[];
  };

  images: string[];
};


/* =========================================================
   VEHICLES
========================================================= */

export const vehicles: Vehicle[] = [

  /* =======================================================
     01 — Toyota Land Cruiser GXR V8
     CarSemsar Ad: 204450
     ======================================================= */
{
  id: "toyota-land-cruiser-gxr-twin-turbo-2022-204143",

  brand: {
    ar: "تويوتا",
    en: "Toyota",
  },

  model: {
    ar: "لاند كروزر GXR توين تيربو",
    en: "Land Cruiser GXR Twin Turbo",
  },

  bodyType: "suv",

  year: 2022,

  mileage: 93000,

  // السعر غير معلن — اتصل بالبائع
  price: 0,

  condition: "used",

  transmission: "automatic",

  fuel: "petrol",

  description: {
    ar:
      "تويوتا لاند كروزر GXR توين تيربو موديل 2022 مستعملة، بمحرك V6 سعة 4.0 لتر حسب بيانات الإعلان، دفع رباعي وناقل حركة تبترونيك، ممشى 93,000 كم، باللون الأسود مع داخلية بيج وتتسع لـ7 ركاب.",

    en:
      "Used 2022 Toyota Land Cruiser GXR Twin Turbo with a V6 4.0L engine according to the listing, four-wheel drive, Tiptronic transmission, 93,000 km mileage, black exterior, beige interior, and seating for 7 passengers.",
  },

  features: {
    ar: [
      "محرك V6 سعة 4.0 لتر",
      "دفع رباعي",
      "ناقل حركة تبترونيك",
      "ممشى 93,000 كم",
      "لون خارجي أسود",
      "داخلية بيج",
      "مقاعد مخمل",
      "7 ركاب",
      "4 أبواب",
      "جنوط ألمنيوم 20 إنش",
      "نوافذ أوتوماتيكية",
      "كاميرا خلفية",
      "بلوتوث",
      "مثبت سرعة",
      "دخول بدون مفتاح",
      "تشغيل بدون مفتاح",
      "حساسات خلفية",
      "وسائد هوائية للسائق",
      "وسائد هوائية للركاب",
      "كلّاب جر خلفي",
      "نظام مانع الانزلاق",
    ],

    en: [
      "V6 4.0L engine",
      "Four-wheel drive",
      "Tiptronic transmission",
      "93,000 km mileage",
      "Black exterior",
      "Beige interior",
      "Velvet seats",
      "7 seats",
      "4 doors",
      "20-inch alloy wheels",
      "Power windows",
      "Rear camera",
      "Bluetooth",
      "Cruise control",
      "Keyless entry",
      "Keyless start",
      "Rear parking sensors",
      "Driver airbags",
      "Passenger airbags",
      "Rear tow hook",
      "Traction control",
    ],
  },

  images: [
    "/cars/toyota-land-cruiser-gxr-2022/1.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/2.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/3.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/4.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/5.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/6.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/7.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/8.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/9.jpg",
    "/cars/toyota-land-cruiser-gxr-2022/10.jpg",
  ],
},
     {
  id: "gwm-tank-500-2027-204314",

  brand: {
    ar: "جي دبليو ام",
    en: "GWM",
  },

  model: {
    ar: "تانك 500",
    en: "Tank 500",
  },

  bodyType: "suv",

  year: 2027,

  mileage: 0,

  // السعر غير معلن — اتصل بالبائع
  price: 0,

  condition: "new",

  transmission: "automatic",

  fuel: "petrol",

  description: {
    ar:
      "جي دبليو ام تانك 500 موديل 2027 جديدة، بمحرك V6 سعة 3.0 لتر، دفع رباعي مستمر وناقل حركة تبترونيك، باللون الأسود مع داخلية أبيض غامق، وتتسع لـ5 ركاب.",

    en:
      "2027 GWM Tank 500, brand new, powered by a 3.0L V6 petrol engine with full-time four-wheel drive and Tiptronic transmission, finished in black with a dark white interior and seating for 5 passengers.",
  },

  features: {
    ar: [
      "محرك V6 سعة 3.0 لتر",
      "دفع رباعي مستمر",
      "ناقل حركة تبترونيك",
      "عداد 0 كم",
      "لون خارجي أسود",
      "داخلية أبيض غامق",
      "مقاعد جلد",
      "5 ركاب",
      "4 أبواب",
      "جنوط ألمنيوم 20 إنش",
      "نوافذ أوتوماتيكية",
      "كاميرا خلفية",
      "بلوتوث",
      "مثبت سرعة",
      "دخول بدون مفتاح",
      "تشغيل بدون مفتاح",
      "نظام ملاحة",
      "حساسات خلفية",
      "فتحة سقف",
      "مصابيح زنون",
      "وسائد هوائية للسائق",
      "وسائد هوائية للركاب",
      "نظام مانع الانزلاق",
    ],

    en: [
      "3.0L V6 engine",
      "Full-time four-wheel drive",
      "Tiptronic transmission",
      "0 km mileage",
      "Black exterior",
      "Dark white interior",
      "Leather seats",
      "5 seats",
      "4 doors",
      "20-inch alloy wheels",
      "Power windows",
      "Rear camera",
      "Bluetooth",
      "Cruise control",
      "Keyless entry",
      "Keyless start",
      "Navigation system",
      "Rear parking sensors",
      "Sunroof",
      "Xenon headlights",
      "Driver airbags",
      "Passenger airbags",
      "Traction control",
    ],
  },

  images: [
    "/cars/gwm-tank-500-2027/1.jpg",
    "/cars/gwm-tank-500-2027/2.jpg",
    "/cars/gwm-tank-500-2027/3.jpg",
    "/cars/gwm-tank-500-2027/4.jpg",
    "/cars/gwm-tank-500-2027/5.jpg",
    "/cars/gwm-tank-500-2027/6.jpg",
    "/cars/gwm-tank-500-2027/7.jpg",
    "/cars/gwm-tank-500-2027/8.jpg",
    "/cars/gwm-tank-500-2027/9.jpg",
    "/cars/gwm-tank-500-2027/10.jpg",
  ],
},
  {
    id: "toyota-land-cruiser-gxr-v8-204450",

    brand: {
      ar: "تويوتا",
      en: "Toyota",
    },

    model: {
      ar: "لاند كروزر GXR V8",
      en: "Land Cruiser GXR V8",
    },

    bodyType: "suv",

    // سنة الصنع غير مذكورة في الإعلان
    year: 0,

    mileage: 86000,

    // السعر غير معلن — اتصل بالبائع
    price: 0,

    condition: "used",

    transmission: "automatic",

    fuel: "petrol",

    description: {
      ar:
        "تويوتا لاند كروزر GXR V8 مستعملة، بمحرك 4.7 لتر V8 ودفع رباعي، ممشى 86,000 كم، لون خارجي أبيض وداخلية بيج، وتتسع لـ7 ركاب.",

      en:
        "Used Toyota Land Cruiser GXR V8 with a 4.7L V8 engine, four-wheel drive, 86,000 km mileage, white exterior, beige interior, and seating for 7 passengers.",
    },

    features: {
      ar: [
        "محرك V8 سعة 4.7 لتر",
        "دفع رباعي",
        "ناقل حركة تبترونيك",
        "ممشى 86,000 كم",
        "لون خارجي أبيض",
        "داخلية بيج",
        "مقاعد مخمل",
        "7 ركاب",
        "4 أبواب",
        "جنوط ألمنيوم 20 إنش",
        "نوافذ أوتوماتيكية",
        "كاميرا خلفية",
        "بلوتوث",
        "مثبت سرعة",
        "دخول بدون مفتاح",
        "تشغيل بدون مفتاح",
        "نظام ملاحة",
        "حساسات خلفية",
        "فتحة سقف",
        "مصابيح زنون",
        "وسائد هوائية للسائق",
        "وسائد هوائية للركاب",
        "نظام مانع الانزلاق",
        "كلّاب جر خلفي",
      ],

      en: [
        "4.7L V8 engine",
        "Four-wheel drive",
        "Tiptronic transmission",
        "86,000 km mileage",
        "White exterior",
        "Beige interior",
        "Velvet seats",
        "7 seats",
        "4 doors",
        "20-inch alloy wheels",
        "Power windows",
        "Rear camera",
        "Bluetooth",
        "Cruise control",
        "Keyless entry",
        "Keyless start",
        "Navigation system",
        "Rear parking sensors",
        "Sunroof",
        "Xenon headlights",
        "Driver airbags",
        "Passenger airbags",
        "Traction control",
        "Rear tow hook",
      ],
    },

    /* =====================================================
       VEHICLE IMAGES

       الصور توضع داخل:

       public/
       └── cars/
           └── toyota-land-cruiser-gxr-v8/
               ├── 1.webp
               ├── 2.webp
               ├── 3.webp
               ├── 4.webp
               └── 5.webp
    ===================================================== */

    images: [
      "/cars/toyota-land-cruiser-gxr-v8/1.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/2.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/3.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/4.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/5.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/6.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/7.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/8.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/9.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/10.jpg",
      "/cars/toyota-land-cruiser-gxr-v8/11.jpg",
    ],
  },
];



/* =========================================================
   GET VEHICLE BY ID
========================================================= */

export const getVehicle = (id: string) =>
  vehicles.find((vehicle) => vehicle.id === id);


/* =========================================================
   SIMILAR VEHICLES
========================================================= */

export const similarVehicles = (
  vehicle: Vehicle,
  limit = 3,
) =>
  vehicles
    .filter((v) => v.id !== vehicle.id)
    .sort((a, b) => {
      const score = (v: Vehicle) =>
        (v.bodyType === vehicle.bodyType ? -2 : 0) +
        Math.abs(v.price - vehicle.price) / 1_000_000;

      return score(a) - score(b);
    })
    .slice(0, limit);


/* =========================================================
   VEHICLE BRANDS
========================================================= */

export const vehicleBrands = (
  lang: "ar" | "en",
) =>
  Array.from(
    new Set(
      vehicles.map(
        (vehicle) => vehicle.brand[lang],
      ),
    ),
  );


/* =========================================================
   VEHICLE YEARS
========================================================= */

export const vehicleYears = () =>
  Array.from(
    new Set(
      vehicles
        .map((vehicle) => vehicle.year)
        .filter((year) => year > 0),
    ),
  ).sort((a, b) => b - a);