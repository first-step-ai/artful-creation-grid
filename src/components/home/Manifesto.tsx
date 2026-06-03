import { useReveal } from "@/hooks/use-reveal";

export function Manifesto() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border/60">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-12 gap-10 px-6 md:px-10 py-24 md:py-40"
      >
        <div className="md:col-span-4">
          <div className="eyebrow">Studio</div>
          <p className="mt-6 font-serif text-2xl md:text-3xl text-ivory font-light tracking-[0.12em] uppercase leading-[1.3]">
            A practice rooted in patience.
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-sm text-brass leading-relaxed max-w-xl">
            For over twenty-five years we have shaped the everyday rooms of Sydney homes.
            Spaces measured not in square metres but in mornings, evenings, in the soft
            arrival of light. Every project begins as a conversation and ends as a place that
            feels, quietly, inevitable.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-border/60 pt-8">
            <Stat number="25+" label="Years practising" />
            <Stat number="400+" label="Rooms delivered" />
            <Stat number="HIA" label="Awards finalist" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-sans text-4xl md:text-5xl text-ivory font-light">{number}</div>
      <div className="eyebrow mt-2">{label}</div>
    </div>
  );
}
