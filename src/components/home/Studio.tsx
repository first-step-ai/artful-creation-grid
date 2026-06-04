import { useReveal } from "@/hooks/use-reveal";

export function Studio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="studio" className="border-t border-border/60 bg-oxblood">
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl w-full border-l border-brass/20 pl-8 md:pl-12 py-24 md:py-32"
      >
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left: eyebrow + tagline */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="text-brass text-[10px] tracking-[0.4em] font-semibold uppercase font-sans">
                Studio
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl text-ivory font-light tracking-[0.12em] uppercase leading-[1.2]">
              Built in-house.
              <br />
              Every time.
            </h2>
          </div>

          {/* Right: body */}
          <div className="lg:col-span-7">
            <p className="text-sm text-brass leading-relaxed max-w-xl">
              For over 25 years we've been designing and building bathrooms,
              kitchens, laundries and interiors across Sydney. We don't
              outsource. Every project is handled by our own team, from the
              first conversation to the final fixture.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
