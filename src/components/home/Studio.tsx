import studioImg from "@/assets/studio.jpg";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: "27", label: "Years building" },
  { value: "400+", label: "Homes delivered" },
  { value: "12", label: "Craftspeople" },
  { value: "1998", label: "Founded — Sydney" },
];

export function Studio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="studio" className="border-t border-border/60 bg-oxblood">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: image */}
          <div className="md:col-span-6 relative overflow-hidden grain">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={studioImg}
                alt="Inside the AM Bathrooms studio — drawings, samples, quiet light"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between text-ivory-muted">
              <span className="eyebrow">Plate 01</span>
              <span className="eyebrow">Studio, Alexandria NSW</span>
            </div>
          </div>

          {/* Right: copy */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="eyebrow"><span className="text-brass">·</span>&nbsp;&nbsp;The Studio</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory font-light tracking-[-0.01em] leading-[1.05]">
              A small studio,
              <br />
              <em className="not-italic text-ivory-muted">deliberately so.</em>
            </h2>
            <p className="mt-8 text-ivory-muted leading-relaxed max-w-md">
              Founded in Sydney in 1998 by Anthony Mavris, AM is a design + build
              practice of twelve — designers, joiners, stone masons and site foremen
              working under one roof. We take on a measured number of projects each
              year so every home receives the attention of the person who drew it.
            </p>
            <p className="mt-5 text-ivory-muted leading-relaxed max-w-md">
              No franchises. No subcontracted design. One studio, one team, one
              fixed price — held from the first drawing to the final handover.
            </p>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-y-8 gap-x-8 border-t border-border/60 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="mt-2 font-serif text-3xl md:text-4xl text-ivory font-light tracking-[-0.01em]">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#enquire"
              className="mt-12 inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-ivory border-b border-ivory/60 pb-1 hover:border-ivory transition-colors"
            >
              Visit the studio
              <span className="text-brass" aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
