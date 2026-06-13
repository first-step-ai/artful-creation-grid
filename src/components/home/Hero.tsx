import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] md:min-h-screen overflow-hidden">
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
            "linear-gradient(180deg, color-mix(in oklab, var(--oxblood) 45%, transparent) 0%, color-mix(in oklab, var(--oxblood) 42%, transparent) 45%, color-mix(in oklab, var(--oxblood) 88%, transparent) 100%), linear-gradient(90deg, color-mix(in oklab, var(--oxblood) 72%, transparent) 0%, transparent 58%)",
        }}
      />

      <div
        className="absolute inset-0 z-10 mx-auto flex max-w-[1600px] flex-col justify-end md:justify-between px-6 md:px-10 pt-32 md:pt-[20.8rem] pb-20 md:pb-12"
      >
        <div className="max-w-4xl">
          <h1 className="font-serif font-light text-ivory leading-[1.15] text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
            Thoughtfully designed spaces. Beautifully executed.
          </h1>
          <p className="mt-5 md:mt-6 max-w-xl text-ivory/90 text-[13px] md:text-base font-light leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
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
