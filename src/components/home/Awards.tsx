import { useEffect, useRef, useState } from "react";
import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import annan1 from "@/assets/projects/2024-hia-bathroom.jpg.asset.json";
import national2024 from "@/assets/2024-national-winner.jpg.asset.json";
import teamGroup from "@/assets/am-team-group.jpg.asset.json";
import hia2025 from "@/assets/projects/rozelle-kitchen-award.jpg.asset.json";
import hiaLogo from "@/assets/hia-logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const awards: { title: string; description: string; image: string; fit?: "cover" | "contain" }[] = [
  { title: "WINNER 2025 HIA", description: "NSW Kitchen of the Year", image: hia2025.url },
  { title: "WINNER 2024 HIA", description: "NSW Bathroom of the Year", image: annan1.url },
  { title: "NATIONAL WINNER 2024 AUSTRALIA", description: "Small Business Management Award", image: national2024.url },
  { title: "NSW WINNER 2022", description: "Small Business Management Award", image: teamGroup.url, fit: "contain" },
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
              Year after Year
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
                    className={`relative border-b border-ivory/15 py-3 md:py-4 cursor-pointer transition-all duration-500 ease-out ${
                      isActive ? "opacity-100" : "opacity-45 hover:opacity-75"
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
          <div
            className="md:basis-[60%] md:ml-auto relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="w-full overflow-hidden bg-burgundy aspect-[4/5] md:aspect-auto md:absolute md:inset-0">
              {awards.map((a, i) => (
                <img
                  key={a.title}
                  src={a.image}
                  alt={`${a.title} — ${a.description}`}
                  loading="eager"
                  className={`absolute inset-0 h-full w-full ${a.fit === "contain" ? "object-contain p-4 md:p-6" : "object-cover"} transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
                  style={{ willChange: "opacity" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
