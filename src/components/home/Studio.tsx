import { useReveal } from "@/hooks/use-reveal";

export function Studio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="studio" className="border-t border-border/60 bg-oxblood">
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl px-8 md:px-24 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-y-16"
      >
        {/* Left: eyebrow + tagline */}
        <div className="md:col-span-6 flex flex-col justify-start">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/60 mb-12 block">
            01 — Studio
          </span>
          <h2 className="font-serif font-light text-5xl md:text-7xl leading-[1.1] text-ivory max-w-md tracking-[-0.01em]">
            A practice rooted in{" "}
            <span className="italic text-brass">patience</span>.
          </h2>
        </div>

        {/* Right: body */}
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end border-l border-brass/20 pl-8 md:pl-16">
          <p className="font-serif text-xl md:text-2xl leading-relaxed font-light text-ivory">
            For over twenty-five years we have shaped the everyday rooms of
            Sydney homes — spaces measured not in square metres but in
            mornings, evenings, in the soft arrival of light. Every project
            begins as a conversation and ends as a place that feels, quietly,
            inevitable.
          </p>
        </div>

        {/* Stats row — asymmetrical vertical rhythm */}
        <div className="md:col-span-12 mt-12 md:mt-32 border-t border-brass/30 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-serif text-4xl mb-2 text-brass italic font-light">
                25+
              </div>
              <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-ivory/50">
                Years Practising
              </div>
            </div>

            <div className="md:mt-8">
              <div className="font-serif text-4xl mb-2 text-brass italic font-light">
                400+
              </div>
              <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-ivory/50">
                Rooms Delivered
              </div>
            </div>

            <div className="md:mt-16 md:text-right">
              <div className="font-serif text-4xl mb-2 text-brass font-light">
                HIA
              </div>
              <div className="font-sans text-[9px] tracking-[0.25em] uppercase text-ivory/50">
                Awards Finalist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
