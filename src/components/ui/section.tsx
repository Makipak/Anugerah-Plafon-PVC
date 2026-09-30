type Tone = "background" | "surface" | "panel";

const tones: Record<Tone, string> = {
  background: "bg-background",
  surface: "bg-surface",
  panel: "bg-panel",
};

export function Section({
  tone = "background",
  id,
  labelledBy,
  children,
  className = "",
}: {
  tone?: Tone;
  id?: string;
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 md:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  label,
  children,
  intro,
}: {
  id: string;
  label?: string;
  children: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {label ? <p className="text-label mb-3 text-accent">{label}</p> : null}
      <h2 id={id} className="text-heading">
        {children}
      </h2>
      {intro ? <p className="mt-4 text-ink-muted">{intro}</p> : null}
    </div>
  );
}
