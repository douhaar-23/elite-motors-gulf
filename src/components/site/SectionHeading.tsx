export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <div className="text-xs tracking-[0.3em] gold-text uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-black text-foreground">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>
      )}
      <div className={`hairline mt-6 ${center ? "mx-auto w-24" : "w-24"}`} />
    </div>
  );
}
