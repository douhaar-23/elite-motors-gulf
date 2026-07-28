import carMercedes from "@/assets/car-mercedes.jpg";
import carBmw from "@/assets/car-bmw.jpg";
import carLandcruiser from "@/assets/car-landcruiser.jpg";
import carLexus from "@/assets/car-lexus.jpg";
import carSonata from "@/assets/car-sonata.jpg";
import carTerritory from "@/assets/car-territory.jpg";

export const dealership = {
  name: "إليت موتورز",
  nameEn: "Elite Motors",
  tagline: "وجهتك للسيارات الفاخرة في المملكة",
  phone: "+966 55 000 0000",
  phoneDisplay: "0550000000",
  whatsapp: "966550000000",
  email: "info@elitemotors.sa",
  address: "طريق الملك فهد، حي العليا، الرياض، المملكة العربية السعودية",
  hours: "السبت - الخميس: 9:00 صباحاً - 10:00 مساءً",
  hoursFriday: "الجمعة: 4:00 - 10:00 مساءً",
  mapsUrl: "https://maps.google.com/?q=Riyadh",
};

export const waLink = (message: string) =>
  `https://wa.me/${dealership.whatsapp}?text=${encodeURIComponent(message)}`;

export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: string;
  transmission: string;
  fuel: string;
  price: number;
  image: string;
  condition: "جديد" | "مستعمل";
};

export const cars: Car[] = [
  {
    id: "mb-c-2024",
    brand: "مرسيدس-بنز",
    model: "C-Class",
    year: 2024,
    mileage: "0 كم",
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    price: 249000,
    image: carMercedes,
    condition: "جديد",
  },
  {
    id: "bmw-5-2023",
    brand: "بي إم دبليو",
    model: "الفئة الخامسة",
    year: 2023,
    mileage: "18,500 كم",
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    price: 229000,
    image: carBmw,
    condition: "مستعمل",
  },
  {
    id: "toyota-lc-2024",
    brand: "تويوتا",
    model: "لاند كروزر",
    year: 2024,
    mileage: "0 كم",
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    price: 349000,
    image: carLandcruiser,
    condition: "جديد",
  },
  {
    id: "lexus-es-2023",
    brand: "لكزس",
    model: "ES 350",
    year: 2023,
    mileage: "22,000 كم",
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    price: 189000,
    image: carLexus,
    condition: "مستعمل",
  },
  {
    id: "hyundai-sonata-2024",
    brand: "هيونداي",
    model: "سوناتا",
    year: 2024,
    mileage: "0 كم",
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    price: 119000,
    image: carSonata,
    condition: "جديد",
  },
  {
    id: "ford-territory-2023",
    brand: "فورد",
    model: "تيريتوري",
    year: 2023,
    mileage: "14,000 كم",
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    price: 109000,
    image: carTerritory,
    condition: "مستعمل",
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("ar-SA").format(n);
