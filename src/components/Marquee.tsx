export function Marquee() {
  const items = ["React", "TypeScript", "Node.js", "MongoDB", "Next.js", "Flutter", "DevOps", "Tailwind", "Available for hire"];
  return (
    <div className="relative overflow-hidden py-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground/15">
            {t}
            <span className="text-[var(--teal-deep)]/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
