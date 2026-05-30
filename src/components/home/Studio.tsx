import studioImg from "@/assets/studio.jpg";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: "27", label: ["Years", "Building"] },
  { value: "400+", label: ["Homes", "Delivered"] },
  { value: "12", label: ["Master", "Craftspeople"] },
  { value: "1998", label: ["Founded", "Sydney"] },
];

export function Studio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="studio" className="border-t border-border/60 bg-oxblood">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: studio image with brass frame detail */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] w-full overflow-hidden shadow-2xl">
                <img
                  src={studioImg}
                  alt="Inside the AM Bathrooms studio — drawings, samples, quiet light"
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover"
                  style={{ filter: "grayscale(0.2) contrast(1.1)" }}
                />
              </div>
              <div className="mt-8 flex justify-between items-baseline border-t border-ivory/10 pt-4">
                <span className="text-brass text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Plate 01
                </span>
                <div className="text-right text-[10px] tracking-[0.1em] uppercase text-ivory/40 leading-relaxed">
                  <p>Studio Internal</p>
                  <p>Alexandria, Sydney</p>
                </div>
              </div>
            </div>
            {/* Brass frame corner */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-brass/20 hidden lg:block"
              aria-hidden
            />
          </div>

          {/* Right: narrative + stats */}
          <div className="lg:col-span-7 flex flex-col">
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-8 bg-brass" />
                <span className="text-brass text-[11px] tracking-[0.4em] font-medium uppercase">
                  The Studio
                </span>
              </div>

              <h2 className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.01em]">
                A small studio,
                <br />
                <span className="italic text-ivory/90">deliberately so.</span>
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
              <div className="space-y-6">
                <p className="text-ivory/80 text-[15px] leading-relaxed font-light">
                  Founded in Sydney in 1998 by Anthony Mavris, AM is a design + build
                  practice of twelve — designers, joiners, stone masons and site foremen
                  working under one roof.
                </p>
                <a
                  href="#enquire"
                  className="group inline-flex items-center gap-4 text-brass text-[11px] uppercase tracking-[0.3em] font-semibold mt-4"
                >
                  <span>Visit the studio</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="square" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <p className="text-ivory/60 text-[14px] leading-relaxed font-light">
                We take on a measured number of projects each year so every home receives
                the attention of the person who drew it. No franchises. No subcontracted
                design. One studio, one team, one fixed price.
              </p>
            </div>

            {/* Modular metric grid */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 border-t border-ivory/10 pt-16">
              {stats.map((s) => (
                <div key={s.value} className="flex flex-col">
                  <dd className="font-serif text-ivory text-4xl font-light mb-2 tracking-[-0.01em]">
                    {s.value}
                  </dd>
                  <dt className="text-ivory/40 text-[9px] tracking-[0.2em] uppercase leading-relaxed">
                    {s.label[0]}
                    <br />
                    {s.label[1]}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
