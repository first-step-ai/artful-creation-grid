import heroImg from "@/assets/hero.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative isolate min-h-[92vh] md:min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Travertine bathroom interior with brass tapware and a freestanding bath"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--oxblood) 55%, transparent) 0%, color-mix(in oklab, var(--oxblood) 35%, transparent) 45%, color-mix(in oklab, var(--oxblood) 85%, transparent) 100%)",
        }}
      />

      <div
        ref={ref}
        className="reveal relative z-10 mx-auto flex min-h-[92vh] md:min-h-screen max-w-[1600px] flex-col justify-between px-6 md:px-10 pt-32 md:pt-40 pb-12"
      >
        <div className="max-w-4xl">
          <h1 className="font-serif font-light text-ivory text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[-0.01em]">
            Bathrooms, kitchens and interiors. Designed and built in Sydney.
          </h1>
          <p className="mt-8 max-w-xl text-ivory-muted text-base md:text-lg leading-relaxed">
            Sydney homeowners have trusted us with their most-used rooms for over 25 years. We design it, we build it, we stand behind it.
          </p>
        </div>

      </div>
    </section>
  );
}

function HeroStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="eyebrow"><span className="text-brass">·</span>&nbsp;&nbsp;{k}</div>
      <div className="mt-3 font-serif text-xl md:text-2xl text-ivory font-light">{v}</div>
    </div>
  );
}
