import { useReveal } from "@/hooks/use-reveal";
import discovery from "@/assets/projects/pyrmont-discovery.jpg.asset.json";
import design from "@/assets/projects/abbotsford-3.jpg.asset.json";
import build from "@/assets/projects/rozelle-3.jpg.asset.json";
import handover from "@/assets/projects/camperdown-1.jpg.asset.json";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "WE COME TO YOUR HOME, WALK THE SPACE, AND LISTEN TO HOW YOU LIVE BEFORE A SINGLE LINE IS DRAWN.",
    image: discovery.url,
  },
  {
    n: "02",
    title: "Concept + Design",
    body: "LAYOUTS, MATERIALS AND A TRANSPARENT QUOTE. EVERYTHING RESOLVED BEFORE THE FIRST TRADE ARRIVES.",
    image: design.url,
  },
  {
    n: "03",
    title: "Build",
    body: "ONE TEAM ACCOUNTABLE FROM DEMOLITION TO FINAL DETAIL. OUR TRADES, OUR SCHEDULE, OUR SUPERVISION.",
    image: build.url,
  },
  {
    n: "04",
    title: "Handover",
    body: "FINAL WALKTHROUGH, CLEAN SITE, AND THE KEYS BACK TO YOU. WE STAY REACHABLE IN THE MONTHS AFTER.",
    image: handover.url,
  },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="eyebrow mb-12 md:mb-16">Process</div>

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
                <h3 className="font-sans text-sm md:text-base text-brass font-light tracking-[0.1em] uppercase whitespace-nowrap">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-[11px] tracking-[0.15em] text-ivory">
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
