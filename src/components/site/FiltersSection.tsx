import { Search } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const selectCls =
  "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40";

export function FiltersSection() {
  return (
    <section className="py-16 sm:py-24 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ابحث بذكاء"
          title="ابحث عن سيارتك المثالية"
          desc="فلاتر متقدمة تساعدك في العثور على السيارة التي تناسب احتياجاتك وميزانيتك."
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-2xl border border-border bg-surface p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <Field label="الماركة">
              <select className={selectCls}>
                <option>الكل</option>
                <option>مرسيدس-بنز</option>
                <option>بي إم دبليو</option>
                <option>تويوتا</option>
                <option>لكزس</option>
                <option>هيونداي</option>
                <option>فورد</option>
              </select>
            </Field>
            <Field label="الموديل">
              <select className={selectCls}>
                <option>الكل</option>
                <option>سيدان</option>
                <option>SUV</option>
                <option>كوبيه</option>
              </select>
            </Field>
            <Field label="سنة الصنع">
              <select className={selectCls}>
                <option>الكل</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </Field>
            <Field label="نطاق السعر">
              <select className={selectCls}>
                <option>الكل</option>
                <option>أقل من 100,000</option>
                <option>100,000 - 200,000</option>
                <option>200,000 - 300,000</option>
                <option>أكثر من 300,000</option>
              </select>
            </Field>
            <Field label="الحالة">
              <select className={selectCls}>
                <option>الكل</option>
                <option>جديد</option>
                <option>مستعمل</option>
              </select>
            </Field>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 text-sm font-semibold text-background hover:bg-gold-soft transition-colors"
            >
              <Search className="h-4 w-4" />
              بحث
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
