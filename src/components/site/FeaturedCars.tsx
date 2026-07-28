import { cars } from "@/config/dealership";
import { CarCard } from "./CarCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedCars() {
  return (
    <section id="cars" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="سياراتنا المميزة"
          title="مجموعة مختارة بعناية"
          desc="تصفح أحدث السيارات الجديدة والمستعملة من أفخم الماركات العالمية."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((c) => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
