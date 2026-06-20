import { useEffect, useRef, useState } from "react";
import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import enmore31 from "@/assets/projects/enmore/enmore-31-v2.jpg.asset.json";
import enmore7 from "@/assets/projects/enmore/enmore-5.jpg.asset.json";
import national2024 from "@/assets/2024-national-winner.jpg.asset.json";
import teamGroup from "@/assets/2022-small-business-award.png.asset.json";
import sb2022a from "@/assets/awards/hia-2023-podium.jpg.asset.json";
import sb2022b from "@/assets/awards/hia-2023-stage.jpg.asset.json";
import hia2025 from "@/assets/projects/rozelle-kitchen-award.jpg.asset.json";
import hiaLogo from "@/assets/hia-logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

type AwardItem = { title: string; description: string; image: string; images?: string[]; fit?: "cover" | "contain" };
const awards: AwardItem[] = [
  { title: "WINNER 2025 HIA", description: "NSW Kitchen of the Year", image: hia2025.url },
  { title: "WINNER 2024 HIA", description: "NSW Bathroom of the Year", image: enmore31.url, images: [enmore31.url, enmore7.url] },
  { title: "NATIONAL WINNER 2024 AUSTRALIA", description: "Small Business Management Award", image: national2024.url },
  { title: "NSW WINNER 2022", description: "Small Business Management Award", image: sb2022a.url, images: [sb2022a.url, sb2022b.url] },
  { title: "NSW WINNER 2022", description: "Small Business Management Award", image: sb2022a.url, images: [sb2022a.url, sb2022b.url] },
];

export function Awards() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const hoverIntent = useRef<number | null>(null);

  const selectAward = (index: number) => {
    setActive((current) => {
      if (current === index) return current;
      setPrevious(current);
      return index;
    });
  };

  const queueAward = (index: number) => {
    if (hoverIntent.current) window.clearTimeout(hoverIntent.current);
    hoverIntent.current = window.setTimeout(() => selectAward(index), 90);
  };

  useEffect(() => {
    awards.forEach((award) => {
      const image = new Image();
      image.src = award.image;
      image.decode?.().catch(() => undefined);
    });
  }, []);

  useEffect(() => {
    if (isHovering) return undefined;

    const id = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % awards.length;
        setPrevious(current);
        return next;
      });
    }, 4200);

    return () => window.clearInterval(id);
  }, [isHovering]);

  useEffect(() => {
    return () => {
      if (hoverIntent.current) window.clearTimeout(hoverIntent.current);
    };
  }, []);

  return (
    <section id="awards" className="border-t border-border/60 bg-oxblood">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-12"
      >
        {/* Awards headline - separated, sitting above the content block */}
        <h2 className="eyebrow mb-8 md:mb-10">Awards</h2>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 md:items-stretch">
          {/* Left: Logo + Awards list - 35% - centered (rendered second on mobile so featured image appears first) */}
          <div className="order-2 md:order-1 md:basis-[35%] md:pr-[2.5%] flex flex-col items-center text-center">
            {/* Logo placeholder */}
            <img
              src={hiaLogo.url}
              alt="HIA award logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-3"
            />

            <div className="text-[11px] tracking-[0.28em] uppercase text-ivory mb-5 md:mb-6">
              AWARD WINNING YEAR AFTER YEAR
            </div>

            <ul
              className="w-full flex flex-col border-t border-ivory/15"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {awards.map((a, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={a.title}
                    onMouseEnter={() => queueAward(i)}
                    onFocus={() => queueAward(i)}
                    onClick={() => selectAward(i)}
                    tabIndex={0}
                    className="relative border-b border-ivory/15 py-3 md:py-4 cursor-pointer transition-opacity duration-300 ease-out opacity-100 hover:opacity-80"
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


          {/* Right: Featured Image - 60% - matches left column height exactly */}
          <div
            className="order-1 md:order-2 md:basis-[60%] md:ml-auto relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="w-full overflow-hidden bg-burgundy aspect-[4/5] md:aspect-auto md:absolute md:inset-0">
              {awards.map((a, i) => (
                <div
                  key={a.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
                  style={{ willChange: "opacity" }}
                >
                  {a.images && a.images.length > 1 ? (
                    <div className="grid grid-cols-2 gap-3 md:gap-4 h-full w-full">
                      {a.images.slice(0, 2).map((src, j) => (
                        <img
                          key={j}
                          src={src}
                          alt={`${a.title}, ${a.description}`}
                          loading="eager"
                          className="h-full w-full object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={a.image}
                      alt={`${a.title}, ${a.description}`}
                      loading="eager"
                      className={`h-full w-full ${a.fit === "contain" ? "object-contain p-4 md:p-6" : "object-cover"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
