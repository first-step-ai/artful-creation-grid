import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    title: "Consult",
    body: "We meet in your home for a paid consultation. Brief, budget, brief again, until the project's shape is honest.",
  },
  {
    n: "02",
    title: "Design",
    body: "Plans, joinery, materials and fittings. Drawn, sampled and reviewed together before a single thing is ordered.",
  },
  {
    n: "03",
    title: "Build",
    body: "A single in-house team delivers under a fixed-price contract. One point of contact, weekly updates, no surprises.",
  },
  {
    n: "04",
    title: "Handover",
    body: "We walk the room with you. A two-year defects period and a long relationship after that.",
  },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="process" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <div className="eyebrow">04 / Process</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl text-ivory font-light tracking-[-0.01em]">
              How it works.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end text-ivory-muted leading-relaxed">
            Every renovation we undertake follows the same four stages, protecting
            the work, your time, and the certainty of a fixed price.
          </p>
        </div>

        <ol className="divide-y divide-border/60 border-y border-border/60">
          {steps.map((s) => (
            <li key={s.n} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 group">
              <div className="md:col-span-2 font-serif italic text-ivory-muted text-2xl md:text-3xl font-light">
                {s.n}
              </div>
              <div className="md:col-span-4 font-serif text-3xl md:text-5xl text-ivory font-light tracking-[-0.01em] group-hover:translate-x-2 transition-transform duration-700">
                {s.title}
              </div>
              <p className="md:col-span-5 md:col-start-8 self-center text-ivory-muted leading-relaxed max-w-lg">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
