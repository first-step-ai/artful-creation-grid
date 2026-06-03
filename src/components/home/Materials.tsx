import materials from "@/assets/materials.jpg";
import { useReveal } from "@/hooks/use-reveal";

const palette = [
  { name: "Travertine", note: "Honed Roman, Italy", swatch: "oklch(0.86 0.025 70)" },
  { name: "Brushed Brass", note: "Solid, unlacquered", swatch: "oklch(0.78 0.095 80)" },
  { name: "Stained Oak", note: "Quarter sawn, fumed", swatch: "oklch(0.42 0.055 50)" },
  { name: "Oxblood Plaster", note: "Lime, hand-applied", swatch: "oklch(0.30 0.075 18)" },
  { name: "Linen", note: "Belgian, undyed", swatch: "oklch(0.84 0.020 75)" },
];

export function Materials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="materials" className="border-t border-border/60 bg-oxblood">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative overflow-hidden grain">
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden">
              <img
                src={materials}
                alt="Material palette: travertine, brass, oak, linen on burgundy"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="eyebrow"><span className="text-brass">·</span>&nbsp;&nbsp;Interlude / Material</div>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-ivory font-light tracking-[0.12em] uppercase leading-[1.2]">
              The palette is
              <br />
              <span className="text-ivory-muted">always the room.</span>
            </h2>
            <p className="mt-8 text-sm text-brass leading-relaxed max-w-md">
              We work in a tight, considered library. Stones quarried in Italy, brass
              from a Sydney foundry, oak milled in Tasmania. Materials chosen for how
              they age, not how they photograph.
            </p>

            <ul className="mt-12 divide-y divide-border/60 border-y border-border/60">
              {palette.map((m) => (
                <li key={m.name} className="flex items-center gap-6 py-4 group">
                  <span
                    className="inline-block h-6 w-6 rounded-full ring-1 ring-ivory/15 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: m.swatch }}
                    aria-hidden
                  />
                  <span className="font-sans text-xl md:text-2xl text-ivory font-light flex-1">
                    {m.name}
                  </span>
                  <span className="eyebrow text-right">{m.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
