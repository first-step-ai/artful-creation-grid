import { useEffect, useState } from "react";
import featureAsset from "@/assets/arched-house.jpg.asset.json";
import bexleyAsset from "@/assets/bexley-bathroom.jpg.asset.json";
import hotelAsset from "@/assets/hotel-inspired-luxury.jpg.asset.json";
import oakAsset from "@/assets/stained-oak-kitchen.jpg.asset.json";
import hiaLogo from "@/assets/hia-logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const awards: { title: string; description: string; image: string }[] = [
  { title: "Winner 2025 HIA", description: "nsw kitchen of the year", image: oakAsset.url },
  { title: "Winner 2024 HIA", description: "nsw bathroom of the year", image: bexleyAsset.url },
  { title: "National Winner 2024 Australia", description: "small business management award", image: featureAsset.url },
  { title: "NSW Winner 2023", description: "small business management award", image: hotelAsset.url },
];

export function Awards() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % awards.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="awards" className="border-t border-border/60 bg-oxblood">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-12"
      >
        {/* Awards headline — separated, sitting above the content block */}
        <div className="eyebrow mb-8 md:mb-10">Awards</div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 md:items-stretch">
          {/* Left: Logo + Awards list — 35% — centered */}
          <div className="md:basis-[35%] md:pr-[2.5%] flex flex-col items-center text-center">
            {/* Logo placeholder */}
            <img
              src={hiaLogo.url}
              alt="HIA award logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-3"
            />

            <div className="text-[11px] tracking-[0.28em] uppercase text-ivory mb-5 md:mb-6">
              Multi-Award Winner
            </div>

            <ul className="w-full flex flex-col border-t border-ivory/15">
              {awards.map((a, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={a.title}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative border-b border-ivory/15 py-3 md:py-4 cursor-pointer transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-[2px] bg-brass transition-transform duration-500 origin-top ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    <div className="text-[13px] md:text-[14px] tracking-[0.18em] uppercase font-normal text-brass">
                      {a.title}
                    </div>
                    <div className="mt-1 text-[11px] md:text-[12px] tracking-[0.18em] text-ivory font-light">
                      {a.description}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>


          {/* Right: Featured Image — 60% — matches left column height exactly */}
          <div className="md:basis-[60%] md:ml-auto relative">
            <div className="w-full overflow-hidden bg-burgundy aspect-[4/5] md:aspect-auto md:absolute md:inset-0">
              {awards.map((a, i) => (
                <img
                  key={a.title}
                  src={a.image}
                  alt={`${a.title} — ${a.description}`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
