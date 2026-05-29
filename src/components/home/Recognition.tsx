export function Recognition() {
  const items = [
    "HIA Awards Finalist",
    "Houzz Recommended",
    "Master Builders NSW",
    "Est. Sydney 1998",
  ];
  return (
    <section id="studio" className="border-t border-border/60 bg-burgundy/30">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-14">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
          {items.map((label, i) => (
            <span key={label} className="flex items-center gap-12 text-ivory-muted">
              <span className="text-[11px] tracking-[0.32em] uppercase">{label}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block h-px w-12 bg-border" aria-hidden />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
