import { useReveal } from "@/hooks/use-reveal";
import discovery from "@/assets/projects/discovery-leichhardt.jpg.asset.json";
import design from "@/assets/projects/design-manly.jpg.asset.json";
import build from "@/assets/projects/build-kitchen.jpg.asset.json";
import handover from "@/assets/projects/handover-dining.jpg.asset.json";

const steps = [
  {
    title: "Discovery",
    body: "We come to your home, walk the space, and listen to how you live before a single line is drawn.",
    image: discovery.url,
  },
  {
    title: "Design",
    body: "Layouts, materials and a transparent quote. Everything resolved before the first trade arrives.",
    image: design.url,
  },
  {
    title: "Build",
    body: "One team accountable from demolition to final detail. Our trades, our schedule, our supervision.",
    image: build.url,
  },
  {
    title: "Handover",
    body: "Final walkthrough, clean site, and the keys back to you. We stay reachable in the months after.",
    image: handover.url,
  },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <h2 className="eyebrow mb-12 md:mb-16">Process</h2>

        <div ref={gridRef} className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s) => (
            <article key={s.title} className="group">
              <div className="relative aspect-square overflow-hidden bg-burgundy">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${s.title === "Build" ? "scale-[1.15]" : ""}`}
                />
              </div>
              <div className="mt-5">
                <h3 className="font-sans text-sm md:text-base text-brass font-light tracking-[0.05em] uppercase">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-xs md:text-sm text-ivory/80 leading-relaxed">
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
