import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Above-the-fold: trigger the reveal immediately so text is always visible.
    const id = requestAnimationFrame(() => ref.current?.classList.add("reveal-in"));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <section id="top" className="relative isolate min-h-[92vh] md:min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Travertine bathroom interior with brass tapware and a freestanding bath"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover ken-burns"
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
        className="reveal reveal-blur reveal-stagger relative z-10 mx-auto flex min-h-[92vh] md:min-h-screen max-w-[1600px] flex-col justify-between px-6 md:px-10 pt-[15.6rem] md:pt-[20.8rem] pb-12"
      >
        <div className="max-w-4xl">
          <h1 className="font-sans font-light text-white text-[2rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em]">
            Thoughtfully Designed Spaces. Beautifully Executed.
          </h1>
          <p className="mt-6 max-w-xl text-white/75 text-sm md:text-base font-light leading-relaxed">
            Award-winning design and renovation specialists creating homes that feel effortless to live in.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3 text-white/70 text-[10px] tracking-[0.32em] uppercase float-cue">
          <span className="h-px w-10 bg-white/40" />
          Scroll
        </div>
      </div>
    </section>
  );
}
