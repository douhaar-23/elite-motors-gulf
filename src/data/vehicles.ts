import carMercedes from "@/assets/car-mercedes.jpg";
import carBmw from "@/assets/car-bmw.jpg";
import carLandcruiser from "@/assets/car-landcruiser.jpg";
import carLexus from "@/assets/car-lexus.jpg";
import carSonata from "@/assets/car-sonata.jpg";
import carTerritory from "@/assets/car-territory.jpg";
import heroCar from "@/assets/hero-car.jpg";

export type Bilingual = { ar: string; en: string };

export type VehicleCondition = "new" | "used";
export type VehicleTransmission = "automatic" | "manual";
export type VehicleFuel = "petrol" | "diesel" | "hybrid" | "electric";
export type VehicleBodyType = "sedan" | "suv" | "coupe";

export type Vehicle = {
  id: string;
  brand: Bilingual;
  model: Bilingual;
  bodyType: VehicleBodyType;
  year: number;
  /** Always stored in kilometers; formatters convert to miles when needed. */
  mileage: number;
  /** Stored in the currency configured in `src/config/dealership.ts`. */
  price: number;
  condition: VehicleCondition;
  transmission: VehicleTransmission;
  fuel: VehicleFuel;
  description: Bilingual;
  features: { ar: string[]; en: string[] };
  images: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "mb-c-2024",
    brand: { ar: "مرسيدس-بنز", en: "Mercedes-Benz" },
    model: { ar: "الفئة C", en: "C-Class" },
    bodyType: "sedan",
    year: 2024,
    mileage: 0,
    price: 249000,
    condition: "new",
    transmission: "automatic",
    fuel: "petrol",
    description: {
      ar: "سيدان تنفيذية تجمع بين الفخامة والأداء، بمقصورة عصرية وتقنيات قيادة متقدمة تجعل كل رحلة تجربة مميزة.",
      en: "An executive sedan blending luxury and performance, with a modern cabin and advanced driver technology that elevates every drive.",
    },
    features: {
      ar: ["فتحة سقف بانورامية", "مقاعد جلد مدفأة", "نظام صوتي محيطي", "مثبت سرعة تكيفي", "كاميرا 360 درجة"],
      en: ["Panoramic sunroof", "Heated leather seats", "Surround sound system", "Adaptive cruise control", "360° camera"],
    },
    images: [carMercedes, heroCar],
  },
  {
    id: "bmw-5-2023",
    brand: { ar: "بي إم دبليو", en: "BMW" },
    model: { ar: "الفئة الخامسة", en: "5 Series" },
    bodyType: "sedan",
    year: 2023,
    mileage: 18500,
    price: 229000,
    condition: "used",
    transmission: "automatic",
    fuel: "petrol",
    description: {
      ar: "سيدان رياضية فاخرة بحالة ممتازة، خضعت لفحص فني شامل، وتوفر توازناً مثالياً بين الراحة وديناميكية القيادة.",
      en: "A sporty luxury sedan in excellent condition, fully inspected, offering an ideal balance of comfort and driving dynamics.",
    },
    features: {
      ar: ["نظام ملاحة", "مقاعد رياضية", "إضاءة محيطية", "تحكم مزدوج بالمناخ", "حساسات ركن أمامية وخلفية"],
      en: ["Navigation system", "Sport seats", "Ambient lighting", "Dual-zone climate control", "Front & rear parking sensors"],
    },
    images: [carBmw, heroCar],
  },
  {
    id: "toyota-lc-2024",
    brand: { ar: "تويوتا", en: "Toyota" },
    model: { ar: "لاند كروزر", en: "Land Cruiser" },
    bodyType: "suv",
    year: 2024,
    mileage: 0,
    price: 349000,
    condition: "new",
    transmission: "automatic",
    fuel: "petrol",
    description: {
      ar: "سيارة دفع رباعي أسطورية بقدرات طرق وعرة استثنائية ومساحة داخلية واسعة تناسب العائلة والرحلات الطويلة.",
      en: "A legendary SUV with exceptional off-road capability and a spacious interior built for families and long journeys.",
    },
    features: {
      ar: ["دفع رباعي", "7 مقاعد", "نظام تعليق متكيف", "شاشة معلومات كبيرة", "حزمة أمان متقدمة"],
      en: ["4WD", "7 seats", "Adaptive suspension", "Large infotainment display", "Advanced safety suite"],
    },
    images: [carLandcruiser, heroCar],
  },
  {
    id: "lexus-es-2023",
    brand: { ar: "لكزس", en: "Lexus" },
    model: { ar: "ES 350", en: "ES 350" },
    bodyType: "sedan",
    year: 2023,
    mileage: 22000,
    price: 189000,
    condition: "used",
    transmission: "automatic",
    fuel: "petrol",
    description: {
      ar: "سيدان هادئة وفاخرة بمستوى عزل صوتي ممتاز وتشطيبات داخلية راقية، خيار مثالي للاستخدام اليومي المريح.",
      en: "A quiet, refined sedan with excellent sound insulation and premium interior finishes — ideal for comfortable daily driving.",
    },
    features: {
      ar: ["مقاعد مهواة", "نظام صوتي فاخر", "شاشة لمس", "مرايا كهربائية قابلة للطي", "بصمة تشغيل"],
      en: ["Ventilated seats", "Premium audio", "Touchscreen", "Power folding mirrors", "Push-button start"],
    },
    images: [carLexus, heroCar],
  },
  {
    id: "hyundai-sonata-2024",
    brand: { ar: "هيونداي", en: "Hyundai" },
    model: { ar: "سوناتا", en: "Sonata" },
    bodyType: "sedan",
    year: 2024,
    mileage: 0,
    price: 119000,
    condition: "new",
    transmission: "automatic",
    fuel: "petrol",
    description: {
      ar: "سيدان عصرية باقتصادية ممتازة في استهلاك الوقود وتصميم جريء، تقدم قيمة عالية مقابل السعر.",
      en: "A modern sedan with excellent fuel economy and bold styling, delivering strong value for money.",
    },
    features: {
      ar: ["شاشة لمس", "كاميرا خلفية", "تثبيت سرعة", "مفتاح ذكي", "مقاعد قماش مريحة"],
      en: ["Touchscreen", "Rear camera", "Cruise control", "Smart key", "Comfortable cloth seats"],
    },
    images: [carSonata, heroCar],
  },
  {
    id: "ford-territory-2023",
    brand: { ar: "فورد", en: "Ford" },
    model: { ar: "تيريتوري", en: "Territory" },
    bodyType: "suv",
    year: 2023,
    mileage: 14000,
    price: 109000,
    condition: "used",
    transmission: "automatic",
    fuel: "petrol",
    description: {
      ar: "سيارة عائلية عملية بمساحة تخزين جيدة وتجهيزات مريحة، مناسبة للاستخدام اليومي داخل المدينة.",
      en: "A practical family crossover with generous cargo space and comfortable equipment for everyday city driving.",
    },
    features: {
      ar: ["شاشة لمس", "حساسات ركن", "مقاعد خلفية قابلة للطي", "مثبت سرعة", "تحكم بالمناخ"],
      en: ["Touchscreen", "Parking sensors", "Folding rear seats", "Cruise control", "Climate control"],
    },
    images: [carTerritory, heroCar],
  },
];

export const getVehicle = (id: string) => vehicles.find((v) => v.id === id);

export const similarVehicles = (vehicle: Vehicle, limit = 3) =>
  vehicles
    .filter((v) => v.id !== vehicle.id)
    .sort((a, b) => {
      const score = (v: Vehicle) =>
        (v.bodyType === vehicle.bodyType ? -2 : 0) + Math.abs(v.price - vehicle.price) / 1_000_000;
      return score(a) - score(b);
    })
    .slice(0, limit);

export const vehicleBrands = (lang: "ar" | "en") =>
  Array.from(new Set(vehicles.map((v) => v.brand[lang])));

export const vehicleYears = () =>
  Array.from(new Set(vehicles.map((v) => v.year))).sort((a, b) => b - a);
