import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FeaturedCars } from "@/components/site/FeaturedCars";
import { FiltersSection } from "@/components/site/FiltersSection";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "إليت موتورز | معرض السيارات الفاخرة في السعودية" },
      {
        name: "description",
        content:
          "إليت موتورز - وجهتك الأولى للسيارات الفاخرة الجديدة والمستعملة في المملكة العربية السعودية. تشكيلة مختارة، فحص شامل، وخيارات تمويل مرنة.",
      },
      { property: "og:title", content: "إليت موتورز | السيارات الفاخرة" },
      {
        property: "og:description",
        content:
          "مجموعة مختارة من أفخم السيارات الجديدة والمستعملة بأسعار تنافسية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeaturedCars />
        <FiltersSection />
        <WhyUs />
        <Services />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
