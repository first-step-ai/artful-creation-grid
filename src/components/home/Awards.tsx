import featureAsset from "@/assets/arched-house.jpg.asset.json";
import hiaLogo from "@/assets/hia-logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const awards: { top: string; bottom: string }[] = [
  { top: "Winner 2025 HIA", bottom: "New South Wales Kitchen of the Year" },
  { top: "Winner 2024 HIA", bottom: "New South Wales Bathroom of the Year" },
  { top: "National Winner 2024", bottom: "Small Business Management" },
  { top: "New South Wales 2023", bottom: "Small Business Management" },
];

export function Awards() {
  const ref = useReveal<HTMLDivElement>();
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
            <div
              className="w-20 h-20 md:w-24 md:h-24 border border-ivory/30 flex items-center justify-center text-ivory/40 text-[10px] tracking-[0.28em] uppercase mb-3"
              aria-label="Award logo"
            >
              Logo
            </div>

            <div className="text-[11px] tracking-[0.28em] uppercase text-brass mb-5 md:mb-6">
              Multi-Award Winner
            </div>

            <ul className="w-full flex flex-col border-t border-ivory/15">
              {awards.map((a) => (
                <li
                  key={a.bottom + a.top}
                  className="border-b border-ivory/15 py-2.5 md:py-3 font-serif text-sm md:text-base text-ivory font-light tracking-[0.04em] leading-snug"
                >
                  <div>{a.top}</div>
                  <div>{a.bottom}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Featured Image — 60% — matches left column height exactly */}
          <div className="md:basis-[60%] md:ml-auto relative">
            <div className="w-full overflow-hidden bg-burgundy aspect-[4/5] md:aspect-auto md:absolute md:inset-0">
              <img
                src={featureAsset.url}
                alt="Award-winning AM Bathrooms project"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
