import { useState } from "react";
import archedAsset from "@/assets/arched-house.jpg.asset.json";
import kitchenAsset from "@/assets/stained-oak-kitchen.jpg.asset.json";
import bexleyAsset from "@/assets/bexley-bathroom.jpg.asset.json";
import hotelAsset from "@/assets/hotel-inspired-luxury.jpg.asset.json";

const awards: {
  year: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
}[] = [
  {
    year: "2025 HIA",
    title: "Kitchen of the Year",
    subtitle: "New South Wales Winner",
    image: kitchenAsset.url,
    caption: "The curated spatial balance of the Paddington Residence.",
  },
  {
    year: "2024 HIA",
    title: "Bathroom of the Year",
    subtitle: "New South Wales Winner",
    image: bexleyAsset.url,
    caption: "Considered materiality and quiet luxury, Bexley project.",
  },
  {
    year: "2024 National",
    title: "Small Business Management",
    subtitle: "National Winner Recognition",
    image: archedAsset.url,
    caption: "Architectural rigour brought to a heritage Sydney home.",
  },
  {
    year: "2023 HIA",
    title: "Small Business Management",
    subtitle: "New South Wales Winner",
    image: hotelAsset.url,
    caption: "Hotel-inspired calm, tailored to a private residence.",
  },
];

export function Awards() {
  const [active, setActive] = useState(0);

  return (
    <section id="awards" className="border-t border-border/60 bg-oxblood">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: awards list */}
          <div className="lg:col-span-5 flex flex-col">
            <header className="mb-6 md:mb-8">
              <p className="eyebrow mb-2 opacity-70">Recognition</p>
              <h2 className="font-serif italic font-light text-3xl md:text-4xl leading-tight text-ivory">
                Selected Excellence
              </h2>
            </header>

            <ul className="flex flex-col">
              {awards.map((a, i) => {
                const isActive = active === i;
                return (
                  <li key={a.title + a.year}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={[
                        "group w-full text-left py-3 md:py-4 border-t border-ivory/15",
                        i === awards.length - 1 ? "border-b" : "",
                        "transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-40 hover:opacity-100",
                      ].join(" ")}
                    >
                      <div className="mb-1">
                        <span className="text-[10px] tracking-[0.28em] uppercase text-ivory/80 font-sans">
                          {a.year}
                        </span>
                      </div>
                      <h3
                        className={[
                          "font-serif font-light text-xl md:text-2xl text-ivory leading-snug",
                          "transition-all duration-500 ease-out",
                          isActive ? "translate-x-2" : "group-hover:translate-x-1",
                        ].join(" ")}
                      >
                        {a.title}
                      </h3>
                      <p
                        className={[
                          "font-serif italic text-xs md:text-sm text-ivory/60",
                          "transition-all duration-500 ease-out",
                          isActive ? "translate-x-2" : "",
                        ].join(" ")}
                      >
                        {a.subtitle}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: editorial image */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] max-h-[78vh] overflow-hidden bg-burgundy mx-auto">

              {awards.map((a, i) => {
                const isActive = active === i;
                return (
                  <img
                    key={a.image}
                    src={a.image}
                    alt={`${a.year} — ${a.title}`}
                    loading="lazy"
                    className={[
                      "absolute inset-0 h-full w-full object-cover",
                      "transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                      isActive
                        ? "opacity-100 scale-100 group-hover:scale-105"
                        : "opacity-0 scale-[1.04]",
                    ].join(" ")}
                  />
                );
              })}
              <div className="absolute inset-0 bg-gradient-to-t from-oxblood/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating caption card */}
            <div
              className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 p-8 md:p-10 border border-ivory/15 backdrop-blur-sm hidden md:block max-w-[280px]"
              style={{ backgroundColor: "rgba(56, 61, 56, 0.72)" }}
            >
              <p className="text-[10px] tracking-[0.28em] uppercase text-ivory/60 mb-3 font-sans">
                Project {String(active + 1).padStart(2, "0")}
              </p>
              <p
                key={awards[active].caption}
                className="font-serif text-lg leading-snug text-ivory animate-fade-in"
              >
                {awards[active].caption}
              </p>
            </div>

            {/* Progress dashes */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              {awards.map((_, i) => (
                <span
                  key={i}
                  className={[
                    "h-px transition-all duration-500 ease-out",
                    active === i ? "w-10 bg-brass opacity-100" : "w-10 bg-ivory opacity-20",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
