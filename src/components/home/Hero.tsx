import heroImg from "@/assets/hero.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative isolate min-h-[92vh] md:min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Travertine bathroom interior with brass tapware and a freestanding bath"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--oxblood) 55%, transparent) 0%, color-mix(in oklab, var(--oxblood) 35%, transparent) 45%, color-mix(in oklab, var(--oxblood) 85%, transparent) 100%)",
        }}
      />

      <div
        ref={ref}
        className="reveal relative z-10 mx-auto flex min-h-[92vh] md:min-h-screen max-w-[1600px] flex-col justify-between px-6 md:px-10 pt-32 md:pt-40 pb-12"
      >
        <div className="max-w-4xl">
          <div className="eyebrow mb-8">Est. 1998 — Sydney</div>
          <h1 className="font-serif font-light text-ivory text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[-0.01em]">
            Considered interiors,
            <br />
            <em className="not-italic text-ivory-muted">built across Sydney.</em>
          </h1>
          <p className="mt-8 max-w-xl text-ivory-muted text-base md:text-lg leading-relaxed">
            Bathrooms, kitchens, laundries and interiors — designed and built with care,
            collaboration and a deep respect for material.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <a
            href="#work"
            className="group inline-flex items-center gap-4 self-start text-ivory"
          >
            <span className="text-[11px] tracking-[0.28em] uppercase">View selected work</span>
            <span className="h-px w-12 bg-ivory transition-all duration-500 group-hover:w-24" />
          </a>
          <div className="hidden md:flex items-center gap-3 text-ivory-muted text-[11px] tracking-[0.28em] uppercase">
            <span className="h-px w-8 bg-ivory-muted/60" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
