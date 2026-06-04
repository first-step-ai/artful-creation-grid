import { useEffect, useRef, useState } from "react";
import archedAsset from "@/assets/arched-house.jpg.asset.json";
import kitchenAsset from "@/assets/stained-oak-kitchen.jpg.asset.json";
import bexleyAsset from "@/assets/bexley-bathroom.jpg.asset.json";
import hotelAsset from "@/assets/hotel-inspired-luxury.jpg.asset.json";

const awards: { top: string; bottom: string; image: string }[] = [
  { top: "Winner 2025 HIA", bottom: "New South Wales Kitchen of the Year", image: kitchenAsset.url },
  { top: "Winner 2024 HIA", bottom: "New South Wales Bathroom of the Year", image: bexleyAsset.url },
  { top: "National Winner 2024", bottom: "Small Business Management", image: archedAsset.url },
  { top: "New South Wales 2023", bottom: "Small Business Management", image: hotelAsset.url },
];

export function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        let bestIdx = -1;
        let bestRatio = -1;
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            bestIdx = Number((e.target as HTMLElement).dataset.idx);
          }
        });
        if (bestIdx >= 0) setActive(bestIdx);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="awards" className="border-t border-border/60 bg-oxblood">
      <div
        ref={containerRef}
        className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-12"
      >
        <div className="eyebrow mb-8 md:mb-10">Awards</div>

        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 md:items-start">
          {/* Left: Logo + scrolling awards list */}
          <div className="md:basis-[40%] md:pr-[4%] flex flex-col items-center text-center">
            <div
              className="w-20 h-20 md:w-24 md:h-24 border border-ivory/30 flex items-center justify-center text-ivory/40 text-[10px] tracking-[0.28em] uppercase mb-3"
              aria-label="Award logo"
            >
              Logo
            </div>

            <div className="text-[11px] tracking-[0.28em] uppercase text-brass mb-8 md:mb-10">
              Multi-Award Winner
            </div>

            <ul className="w-full flex flex-col border-t border-ivory/15">
              {awards.map((a, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={a.bottom + a.top}
                    data-idx={i}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    className={[
                      "relative border-b border-ivory/15 py-6 md:py-8 font-serif tracking-[0.04em] leading-snug",
                      "transition-all duration-700 ease-out",
                      isActive
                        ? "text-ivory text-base md:text-lg opacity-100 translate-x-0"
                        : "text-ivory/35 text-sm md:text-base opacity-60 -translate-x-1",
                    ].join(" ")}
                  >
                    <div>
                      <div>{a.top}</div>
                      <div>{a.bottom}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>


          {/* Right: Sticky 3D image stack */}
          <div className="md:basis-[60%] md:ml-auto md:sticky md:top-24 self-start">
            <div
              className="relative w-full aspect-[4/5] bg-burgundy overflow-hidden"
              style={{ perspective: "1400px" }}
            >
              {awards.map((a, i) => {
                const offset = i - active;
                const isActive = offset === 0;
                const isPrev = offset < 0;
                // 3D transform: active flat & front; others tilted and pushed back
                const translateY = isActive ? 0 : isPrev ? -8 : 8;
                const rotateX = isActive ? 0 : isPrev ? 12 : -12;
                const translateZ = isActive ? 0 : -180;
                const opacity = isActive ? 1 : 0;
                return (
                  <div
                    key={a.image}
                    className="absolute inset-0 will-change-transform"
                    style={{
                      transform: `translate3d(0, ${translateY}%, ${translateZ}px) rotateX(${rotateX}deg)`,
                      opacity,
                      transition:
                        "transform 1100ms cubic-bezier(0.22,0.61,0.36,1), opacity 700ms ease-out",
                      transformStyle: "preserve-3d",
                      transformOrigin: isPrev ? "top center" : "bottom center",
                      zIndex: isActive ? 10 : 1,
                      boxShadow: isActive
                        ? "0 30px 80px -20px rgba(0,0,0,0.55)"
                        : "0 10px 30px -10px rgba(0,0,0,0.4)",
                    }}
                  >
                    <img
                      src={a.image}
                      alt={`${a.top} — ${a.bottom}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    {/* Subtle gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-oxblood/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}

              {/* Index indicator */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-ivory/80">
                <span className="font-serif text-base text-ivory">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="opacity-60">/ {String(awards.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
