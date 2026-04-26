// Reusable header banner used across inner pages
export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-white">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-orange-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 animate-fade-up">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
