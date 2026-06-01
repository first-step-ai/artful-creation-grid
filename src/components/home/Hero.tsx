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
          <h1 className="font-sans font-light text-ivory text-[2rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em]">
            Thoughtfully Designed Spaces. Beautifully Executed.
          </h1>
          <p className="mt-8 max-w-xl text-ivory-muted text-base md:text-lg leading-relaxed">
            Award-winning design and renovation specialists creating homes that feel effortless to live in. We Design Homes Around The Way You Live
          </p>
        </div>

      </div>
    </section>
  );
}
