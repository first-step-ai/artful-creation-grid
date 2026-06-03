import featureAsset from "@/assets/arched-house.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const awards = [
  "Winner 2025 HIA New South Wales Kitchen of the Year",
  "Winner 2024 HIA New South Wales Bathroom of the Year",
  "National Winner 2024 Small Business Management",
  "New South Wales 2023 Small Business Management",
];

export function Awards() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="awards" className="border-t border-border/60 bg-oxblood">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-12 md:min-h-[50vh] flex items-center"
      >
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Left: Awards column — 35% */}
          <div className="md:basis-[35%] md:pr-[2.5%] flex flex-col">
            <div className="eyebrow mb-5 md:mb-6">Awards</div>

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

            <ul className="flex flex-col border-t border-ivory/15">
              {awards.map((a) => (
                <li
                  key={a}
                  className="border-b border-ivory/15 py-2.5 md:py-3 font-serif text-sm md:text-base text-ivory font-light tracking-[0.04em] leading-snug"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Featured Image — 60% */}
          <div className="md:basis-[60%] md:ml-auto">
            <div className="w-full h-full md:max-h-[42vh] aspect-[4/5] md:aspect-auto overflow-hidden bg-burgundy">
              <img
                src={featureAsset.url}
                alt="Award-winning AM Bathrooms project"
                loading="lazy"
                className="h-full w-full object-cover md:min-h-[42vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
