import type { Dictionary } from "./ar";

export const en: Dictionary = {
  dir: "ltr",
  langName: "English",

  nav: {
    home: "Home",
    cars: "Inventory",
    services: "Services",
    about: "About",
    contact: "Contact",
    quickLinks: "Quick Links",
  },

  common: {
    whatsapp: "WhatsApp",
    call: "Call Us",
    sms: "Text Us",
    email: "Email",
    viewDetails: "View Details",
    backToCars: "Back to inventory",
    send: "Send",
    all: "All",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "العربية",
    sampleContent: "Sample content",
    required: "This field is required",
    invalidEmail: "Please enter a valid email",
    invalidPhone: "Please enter a valid phone number",
    riyal: "QAR",
    contactUs: "Contact us",
  },

  hero: {
    badge: "ALQALAA CAR SHOWROOM",

    titleLine1: "Your next car",
    titleLine2: "starts here",

    desc:
      "Explore a diverse selection of vehicles available at ALQALAA CAR SHOWROOM in Qatar, and contact us directly for pricing, specifications, and availability.",

    browse: "Browse inventory",
    contact: "Contact us",

    imageAlt: "ALQALAA CAR SHOWROOM",

    stats: {
      carsSold: "Cars delivered",
      years: "Years in business",
      customers: "Happy customers",
      brands: "Brands offered",
    },
  },

  cars: {
    eyebrow: "Our vehicles",

    title: "Explore available vehicles",

    desc:
      "Browse the vehicles currently available at ALQALAA CAR SHOWROOM and find the option that suits you.",

    noResults:
      "No vehicles match your search. Try adjusting the filters.",

    resultsCount: "vehicles available",

    condition: {
      new: "New",
      used: "Pre-owned",
    },

    transmission: {
      automatic: "Automatic",
      manual: "Manual",
    },

    fuel: {
      petrol: "Gasoline",
      diesel: "Diesel",
      hybrid: "Hybrid",
      electric: "Electric",
    },

    bodyType: {
      sedan: "Sedan",
      suv: "SUV",
      coupe: "Coupe",
    },

    specs: {
      year: "Year",
      mileage: "Mileage",
      transmission: "Transmission",
      fuel: "Fuel type",
      condition: "Condition",
      price: "Price",
    },
  },

  filters: {
    eyebrow: "Easy search",

    title: "Find your vehicle",

    desc:
      "Use the filters below to quickly find a vehicle that matches your needs and budget.",

    brand: "Make",
    model: "Body type",
    year: "Year",
    price: "Price range",
    condition: "Condition",

    search: "Search",
    reset: "Reset",

    priceRanges: {
      under100: "Under 100,000",
      r100to200: "100,000 - 200,000",
      r200to300: "200,000 - 300,000",
      over300: "Over 300,000",
    },
  },

  whyUs: {
    eyebrow: "Why Al Qalaa",

    title: "More options, easier search",

    desc:
      "We make it easier to explore available vehicles and review their key details before contacting the showroom.",

    items: [
      {
        title: "Diverse vehicle selection",
        desc:
          "Explore multiple vehicle options and brands to suit different needs.",
      },
      {
        title: "Clear vehicle information",
        desc:
          "Review the key details and specifications of each listed vehicle.",
      },
      {
        title: "Simple and fast search",
        desc:
          "Use filters to quickly find vehicles that match your preferences.",
      },
      {
        title: "Direct contact",
        desc:
          "Contact the showroom directly through WhatsApp for pricing and availability.",
      },
    ],
  },

  services: {
    eyebrow: "Our services",

    title: "Services that make your search easier",

    desc:
      "We make it easier to browse vehicles, ask questions, and contact the showroom about current availability.",

    items: [
      {
        title: "Vehicle sales",
        desc:
          "Browse available vehicles and choose the option that fits your needs.",
      },
      {
        title: "Vehicle inquiries",
        desc:
          "Contact us to ask about pricing, specifications, and availability.",
      },
      {
        title: "Help choosing a vehicle",
        desc:
          "Get in touch with us if you need help finding a suitable option.",
      },
      {
        title: "Direct WhatsApp contact",
        desc:
          "Reach the showroom directly through WhatsApp for fast inquiries.",
      },
    ],
  },

  about: {
    eyebrow: "About us",

    titlePrefix: "Al Qalaa",
    titleSuffix: "Car Showroom",

    titleFallback: "ALQALAA CAR SHOWROOM",

    yearsWord: "years",

    p1:
      "ALQALAA CAR SHOWROOM is a car showroom in Qatar offering a variety of vehicles for customers to explore.",

    p2:
      "We aim to make the vehicle search process easier by presenting the key details and specifications of each available vehicle clearly.",

    p3:
      "Browse the available vehicles and contact us directly for pricing, specifications, and availability.",

    imageAlt: "ALQALAA CAR SHOWROOM",

    badgeLabel: "Multiple options",
  },

  testimonials: {
    eyebrow: "Customer feedback",
    title: "What our customers say",

    desc:
      "Verified customer reviews can be added here.",

    sampleNotice:
      "This section is reserved for verified customer reviews.",

    items: [],
  },

  cta: {
    titlePrefix: "Looking for",
    titleHighlight: "your next car?",

    desc:
      "Contact us directly and we'll help you check the available vehicles that match your needs.",

    message:
      "Hello, I'd like to ask about the vehicles currently available at ALQALAA CAR SHOWROOM.",
  },

  contact: {
    eyebrow: "Contact",

    title: "We're here to help",

    desc:
      "Contact ALQALAA CAR SHOWROOM for vehicle inquiries, pricing, and availability.",

    phone: "Phone",
    address: "Address",
    hours: "Opening hours",
    mapTitle: "Showroom location",

    tabs: {
      general: "General inquiry",
      finance: "Financing request",
      tradeIn: "Trade-in appraisal",
    },

    fields: {
      name: "Name",
      namePlaceholder: "Your full name",

      phone: "Phone number",
      phonePlaceholder: "Your phone number",

      email: "Email",
      emailPlaceholder: "you@example.com",

      car: "Vehicle of interest",
      carPlaceholder: "e.g. Toyota Land Cruiser 2025",

      message: "Your message",
      messagePlaceholder: "Write your question here...",

      downPayment: "Down payment",
      downPaymentPlaceholder: "Enter down payment amount",

      monthlyBudget: "Monthly budget",
      monthlyBudgetPlaceholder: "Enter your monthly budget",

      tradeInCar: "Your current vehicle",
      tradeInCarPlaceholder: "Make, model and year",

      tradeInMileage: "Current mileage",
      tradeInMileagePlaceholder: "Enter current mileage",

      preferredDate: "Preferred date",
    },

    submit: {
      general: "Send inquiry",
      finance: "Submit financing request",
      tradeIn: "Request appraisal",
    },

    success:
      "Your request has been received. You'll be redirected to complete the contact.",

    successEmail:
      "Your email app has been opened to send the request.",
  },

  vehicle: {
    detailsTitle: "Vehicle details",
    overview: "Vehicle overview",
    features: "Key features",
    similar: "Similar vehicles",

    inquire: "Inquire on WhatsApp",

    testDrive: "Request a test drive",

    testDriveDesc:
      "Send your request and we'll contact you regarding test-drive availability.",

    inquiryMessage: (car: string) =>
      `Hello, I'd like more information about the ${car} at ALQALAA CAR SHOWROOM.`,

    testDriveMessage: (car: string) =>
      `Hello, I'd like to ask about test-drive availability for the ${car}.`,

    notFound: "Vehicle not available",

    notFoundDesc:
      "This vehicle may have been sold or the link may have changed.",

    gallery: "Photo gallery",
  },

  footer: {
    desc:
      "ALQALAA CAR SHOWROOM in Qatar. Browse available vehicles and contact us directly for pricing, specifications, and availability.",

    contact: "Contact",

    rights: "All rights reserved.",

    disclaimer:
      "Prices, specifications, and availability may change. Please contact the showroom for confirmation.",
  },

  seo: {
    homeTitle: (name: string) =>
      `${name} | Car Showroom in Qatar`,

    homeDesc:
      "Browse vehicles available at ALQALAA CAR SHOWROOM in Qatar and contact the showroom directly for pricing, specifications, and availability.",
  },
};