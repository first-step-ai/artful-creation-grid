import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import rozelle2 from "@/assets/projects/rozelle-2.jpg.asset.json";
import rozelle3 from "@/assets/projects/rozelle-3.jpg.asset.json";
import rozelle5 from "@/assets/projects/rozelle-5.jpg.asset.json";
import rozelle7 from "@/assets/projects/rozelle-7.jpg.asset.json";
import bexley1 from "@/assets/projects/bexley-1.jpg.asset.json";
import drum1 from "@/assets/projects/drummoyne-1.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const driftStrip: { label: string; image: string; orientation: "portrait" | "landscape" }[] = [
  { label: "Heritage panelled walls", image: rozelle1.url, orientation: "portrait" },
  { label: "Curved oak vanity nook", image: rozelle2.url, orientation: "portrait" },
  { label: "Verde Tempest fireplace", image: rozelle3.url, orientation: "landscape" },
  { label: "Fluted glass cabinetry", image: rozelle5.url, orientation: "landscape" },
  { label: "Backlit bar nook", image: rozelle7.url, orientation: "portrait" },
];


const projects = [
  { suburb: "Bexley", title: "Bold Utility", category: "Bathroom", image: bexley1.url },
  { suburb: "Drummoyne", title: "Modern Luxury Living", category: "Bathroom", image: drum1.url },
  { suburb: "Rozelle", title: "Award-Winning Family Living", category: "Full interior", image: rozelle3.url },
];

const suburbs = [
  "Mosman", "Paddington", "Vaucluse", "Bellevue Hill", "Woollahra",
  "Bondi", "Double Bay", "Rose Bay", "Bronte", "Darlinghurst",
  "Surry Hills", "Balmain", "Hunters Hill", "Cremorne", "Neutral Bay",
];

export function Work() {
  const ref = useReveal<HTMLDivElement>();
  const featRef = useReveal<HTMLDivElement>();
  const tilesRef = useReveal<HTMLDivElement>();
  return (
    <section id="work" className="bg-oxblood">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-16 pb-12">

        <div className="flex items-center justify-between gap-8 mb-10 md:mb-14">
          <div className="eyebrow">
            <span>Award Winning</span>
            <span className="mx-2 opacity-50">|</span>
            <span>Refined Family Living</span>
          </div>
          <div className="eyebrow">
            Rozelle
          </div>
        </div>


        {/* DriftStrip: 9-image continuous marquee */}
        <div ref={featRef} className="reveal relative mb-10 md:mb-14 -mx-6 md:-mx-10 overflow-hidden">
          <div className="marquee marquee-slow">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {driftStrip.map((item) => (
                  <figure
                    key={`${dup}-${item.label}`}
                    className="shrink-0 px-3 md:px-4"
                  >
                    <div
                      className="overflow-hidden bg-oxblood h-[46vh] md:h-[62vh] max-h-[620px]"
                      style={{
                        aspectRatio: item.orientation === "landscape" ? "16 / 10" : "3 / 4",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.label}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="eyebrow mt-4 md:mt-5">
                      {item.label.toUpperCase()}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-8 mb-10 md:mb-14">
          <div className="eyebrow">Featured Work</div>
          <a href="#enquire" className="inline-flex items-center gap-3 text-ivory text-[11px] tracking-[0.28em] uppercase border-b border-ivory/60 pb-1 hover:gap-5 transition-all">
            View full portfolio
          </a>
        </div>

        {/* 3-up evenly distributed, no voids */}
        <div ref={tilesRef} className="reveal reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectTile key={i} project={p} />
          ))}
        </div>
      </div>

    </section>
  );
}

function ProjectTile({ project }: { project: (typeof projects)[number] }) {
  return (
    <figure className="group lift">
      <div className="relative overflow-hidden aspect-[4/5] bg-oxblood">
        <img
          src={project.image}
          alt={`${project.title}, ${project.suburb}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-6">
        <div>
          <div className="font-sans text-sm md:text-base text-brass font-light tracking-[0.1em] uppercase whitespace-nowrap">
            <span>{project.suburb}</span>
            <span className="mx-2 opacity-50">|</span>
            <span>{project.title}</span>
          </div>
          <div className="mt-2 font-sans text-[11px] tracking-[0.28em] font-medium text-ivory">{project.category}</div>
        </div>
      </figcaption>
    </figure>
  );
}
