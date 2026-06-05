import featureAsset from "@/assets/arched-house.jpg.asset.json";
import hiaLogo from "@/assets/hia-logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const awards: { title: string; description: string }[] = [
  { title: "Winner 2025 HIA", description: "NSW Kitchen of the Year" },
  { title: "Winner 2024 HIA", description: "NSW Bathroom of the Year" },
  { title: "National Winner 2024 Australia", description: "Small Business Management Award" },
  { title: "NSW Winner 2023", description: "Small Business Management Award" },
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
            <img
              src={hiaLogo.url}
              alt="HIA award logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-3"
            />

            <div className="text-[11px] tracking-[0.28em] uppercase text-brass mb-5 md:mb-6">
              Multi-Award Winner
            </div>

            <ul className="w-full flex flex-col border-t border-ivory/15">
              {awards.map((a) => (
                <li
                  key={a.title}
                  className="border-b border-ivory/15 py-3 md:py-4"
                >
                  <div className="text-[13px] md:text-[14px] tracking-[0.18em] uppercase text-ivory font-normal">
                    {a.title}
                  </div>
                  <div className="mt-1 text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-ivory/50 font-light">
                    {a.description}
                  </div>
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
