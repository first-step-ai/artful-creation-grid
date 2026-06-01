import { useReveal } from "@/hooks/use-reveal";
import discovery from "@/assets/studio.jpg";
import design from "@/assets/service-kitchens.jpg";
import build from "@/assets/materials.jpg";
import handover from "@/assets/service-bathrooms.jpg";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We come to your home, walk the space, and listen to how you live before a single line is drawn.",
    image: discovery,
  },
  {
    n: "02",
    title: "Concept + Design",
    body: "Layouts, materials and a transparent quote. Everything resolved before the first trade arrives.",
    image: design,
  },
  {
    n: "03",
    title: "Build",
    body: "One team accountable from demolition to final detail. Our trades, our schedule, our supervision.",
    image: build,
  },
  {
    n: "04",
    title: "Handover",
    body: "Final walkthrough, clean site, and the keys back to you. We stay reachable in the months after.",
    image: handover,
  },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="eyebrow">03 / Process</div>
            <h2 className="mt-6 font-sans text-4xl md:text-5xl text-ivory font-light tracking-[-0.01em]">
              How it works.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-ivory-muted leading-relaxed">
            Every renovation we undertake follows the same four stages, protecting
            the work, your time, and the certainty of a fixed price.
          </p>
        </div>

        <div ref={gridRef} className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s) => (
            <article key={s.n} className="group">
              <div className="relative aspect-square overflow-hidden bg-burgundy">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 eyebrow text-ivory/80 text-[10px]">
                  {s.n}
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-sans text-xl md:text-2xl text-ivory font-light tracking-[-0.005em]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ivory-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
