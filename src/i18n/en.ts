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
    riyal: "SAR",
    contactUs: "Contact us",
  },

  hero: {
  badge: "Warid Al Tamayoz Motors",
  titleLine1: "Your next car",
  titleLine2: "starts here",
  desc: "Explore a diverse selection of new vehicles with recent model years and Saudi or GCC specifications, and contact us directly for pricing and availability.",
  browse: "Browse inventory",
  contact: "Contact us",
  imageAlt: "Warid Al Tamayoz Motors",
  stats: {
    carsSold: "Cars delivered",
    years: "Years in business",
    customers: "Happy customers",
    brands: "Brands offered",
  },
},

  cars: {
    eyebrow: "Featured inventory",
    title: "A diverse selection of vehicles",
desc: "Browse our latest new vehicles from leading automotive brands.",
    noResults: "No vehicles match your search. Try adjusting the filters.",
    resultsCount: "vehicles available",
    condition: { new: "New", used: "Pre-owned" },
    transmission: { automatic: "Automatic", manual: "Manual" },
    fuel: { petrol: "Gasoline", diesel: "Diesel", hybrid: "Hybrid", electric: "Electric" },
    bodyType: { sedan: "Sedan", suv: "SUV", coupe: "Coupe" },
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
    eyebrow: "Smart search",
    title: "Find your perfect vehicle",
    desc: "Use the filters below to find the vehicle that fits your needs and budget.",
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
  eyebrow: "Why Warid Al Tamayoz",
  title: "More choice, easier buying",
  desc: "We offer a diverse selection of new vehicles across different brands and specifications to help you find the right option.",
  items: [
    {
      title: "Wide vehicle selection",
      desc: "Multiple brands and vehicle categories to suit different needs.",
    },
    {
      title: "Brand-new vehicles",
      desc: "A selection of new vehicles with recent model years and zero mileage.",
    },
    {
      title: "Saudi & GCC specifications",
      desc: "Options with Saudi and GCC specifications depending on availability.",
    },
    {
      title: "Direct and fast contact",
      desc: "Contact us directly for vehicle details, pricing, and availability.",
    },
  ],
},

  services: {
  eyebrow: "Our services",
  title: "Services designed for your convenience",
  desc: "A smoother buying experience from choosing your vehicle to receiving it wherever you are in Saudi Arabia.",
  items: [
    {
      title: "Shipping across Saudi Arabia",
      desc: "Vehicle shipping is available to different regions of the Kingdom with special rates and discounts.",
    },
    {
      title: "Fast processing and delivery",
      desc: "We aim to complete the procedures and deliver your vehicle as quickly as possible.",
    },
    {
      title: "Competitive pricing",
      desc: "A diverse selection of vehicles offered at competitive prices across the Saudi market.",
    },
    {
      title: "Post-purchase benefits",
      desc: "Vehicle purchases include a SUN GARD service voucher covering thermal insulation, washing, waxing, and interior protection.",
    },
  ],
},

  about: {
  eyebrow: "About us",
  titlePrefix: "Warid Al Tamayoz",
  titleSuffix: "Motors",
  titleFallback: "Warid Al Tamayoz Motors",
  yearsWord: "years",
  p1: "Warid Al Tamayoz Motors is a Riyadh-based car dealership offering a diverse selection of new vehicles across different models and categories.",
  p2: "We provide multiple Saudi and GCC specification options to help customers find a vehicle that suits their needs.",
  p3: "Browse the available vehicles and contact us directly for pricing, specifications, and availability.",
  imageAlt: "Warid Al Tamayoz Motors showroom",
  badgeLabel: "Wide selection",
},

  testimonials: {
    eyebrow: "Customer feedback",
    title: "What our customers say",
    desc: "Example testimonials shown for demonstration — replace them with real reviews.",
    sampleNotice: "These testimonials are sample content for demonstration only and should be replaced with verified reviews before launch.",
    items: [
      { name: "Ahmed Al-Shammari", role: "Customer — Riyadh", text: "A smooth experience from start to finish, with a helpful and transparent team." },
      { name: "Khalid Al-Otaibi", role: "Customer — Jeddah", text: "The car matched the description exactly, and the pre-sale inspection gave me confidence." },
      { name: "Saud Al-Qahtani", role: "Customer — Dammam", text: "Excellent follow-up after the purchase and quick help when I needed it. Recommended." },
    ],
  },

  cta: {
    titlePrefix: "Not sure which",
    titleHighlight: "car to pick?",
    desc: "Get in touch and we'll help you find the vehicle that fits your needs and budget.",
    message: "Hello, I'd like help choosing a car.",
  },

  contact: {
    eyebrow: "Contact",
    title: "We're here to help",
    desc: "Our team is ready to answer your questions and help you choose your next vehicle.",
    phone: "Phone",
    address: "Address",
    hours: "Opening hours",
    mapTitle: "Location map",
    tabs: { general: "General inquiry", finance: "Financing request", tradeIn: "Trade-in appraisal" },
    fields: {
      name: "Name",
      namePlaceholder: "Your full name",
      phone: "Phone number",
      phonePlaceholder: "(555) 000-0000",
      email: "Email",
      emailPlaceholder: "you@example.com",
      car: "Vehicle of interest",
      carPlaceholder: "e.g. Mercedes-Benz C-Class 2024",
      message: "Your message",
      messagePlaceholder: "Write your question here...",
      downPayment: "Down payment",
      downPaymentPlaceholder: "e.g. 5,000",
      monthlyBudget: "Monthly budget",
      monthlyBudgetPlaceholder: "e.g. 600",
      tradeInCar: "Your current vehicle",
      tradeInCarPlaceholder: "Make, model and year",
      tradeInMileage: "Current mileage",
      tradeInMileagePlaceholder: "e.g. 60,000",
      preferredDate: "Preferred date",
    },
    submit: { general: "Send message", finance: "Submit financing request", tradeIn: "Request appraisal" },
    success: "Thanks! We're opening your messaging app to complete the request.",
    successEmail: "Your email app has been opened to send the request.",
  },

  vehicle: {
    detailsTitle: "Vehicle details",
    overview: "Vehicle overview",
    features: "Key features",
    similar: "Similar vehicles",
    inquire: "Inquire now",
    testDrive: "Book a test drive",
    testDriveDesc: "Fill in the form and we'll contact you to confirm the appointment.",
    inquiryMessage: (car: string) => `Hello, I'd like more information about the ${car}.`,
    testDriveMessage: (car: string) => `Hello, I'd like to book a test drive for the ${car}.`,
    notFound: "Vehicle not available",
    notFoundDesc: "This vehicle may have been sold or the link has changed.",
    gallery: "Photo gallery",
  },

  footer: {
    desc: "Your trusted destination for premium vehicles. Quality and service you can count on.",
    contact: "Contact",
    rights: "All rights reserved.",
    disclaimer: "Photos and specifications are for illustration and may differ from the actual vehicle.",
  },

 seo: {
  homeTitle: (name: string) => `${name} | Car Dealership in Riyadh`,
  homeDesc: "Browse new vehicles with Saudi and GCC specifications and contact Warid Al Tamayoz Motors directly for pricing and availability.",
},
};
