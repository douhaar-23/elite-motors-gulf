import bmwImage from "../assets/car-bmw.jpg";
import landcruiserImage from "../assets/car-landcruiser.jpg";
import lexusImage from "../assets/car-lexus.jpg";
import mercedesImage from "../assets/car-mercedes.jpg";
import sonataImage from "../assets/car-sonata.jpg";
import territoryImage from "../assets/car-territory.jpg";

export type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuel: string;
  condition: "new" | "used";
  image: string;
};

export const cars: Car[] = [
  {
    id: 1,
    brand: "مرسيدس-بنز",
    model: "C-Class",
    year: 2024,
    price: 249000,
    mileage: 0,
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    condition: "new",
    image: mercedesImage,
  },
  {
    id: 2,
    brand: "بي إم دبليو",
    model: "الفئة الخامسة",
    year: 2023,
    price: 229000,
    mileage: 18000,
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    condition: "used",
    image: bmwImage,
  },
  {
    id: 3,
    brand: "تويوتا",
    model: "لاند كروزر",
    year: 2024,
    price: 349000,
    mileage: 0,
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    condition: "new",
    image: landcruiserImage,
  },
  {
    id: 4,
    brand: "لكزس",
    model: "ES 350",
    year: 2023,
    price: 189000,
    mileage: 22000,
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    condition: "used",
    image: lexusImage,
  },
  {
    id: 5,
    brand: "هيونداي",
    model: "سوناتا",
    year: 2024,
    price: 119000,
    mileage: 0,
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    condition: "new",
    image: sonataImage,
  },
  {
    id: 6,
    brand: "فورد",
    model: "تيريتوري",
    year: 2023,
    price: 109000,
    mileage: 14000,
    transmission: "أوتوماتيك",
    fuel: "بنزين",
    condition: "used",
    image: territoryImage,
  },
];