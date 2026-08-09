import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FeaturedCars } from "@/components/site/FeaturedCars";
import { FiltersSection } from "@/components/site/FiltersSection";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";

import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,head: () => ({
  meta: [
    {
      title: "معرض وارد التميز للسيارات | الرياض",
    },
    {
      name: "description",
      content:
        "معرض وارد التميز للسيارات في الرياض. تشكيلة من السيارات الجديدة بمواصفات سعودية وخليجية مع خيارات متعددة وخدمة تواصل مباشرة.",
    },
    {
      property: "og:title",
      content: "معرض وارد التميز للسيارات",
    },
    {
      property: "og:description",
      content:
        "استعرض سيارات معرض وارد التميز وتواصل مباشرة للاستفسار عن الأسعار والتوفر.",
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
}),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeaturedCars />
        <FiltersSection />
        <WhyUs />
        <Services />
        <About />
        
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
