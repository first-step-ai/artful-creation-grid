import p3 from "@/assets/project-3.jpg";
import featureAsset from "@/assets/arched-house.jpg.asset.json";
import kitchenAsset from "@/assets/stained-oak-kitchen.jpg.asset.json";
import bexleyAsset from "@/assets/bexley-bathroom.jpg.asset.json";
const feature = featureAsset.url;
const p2 = kitchenAsset.url;
const p1 = bexleyAsset.url;
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  { n: "01", title: "Bold Utility", suburb: "Bexley", year: "", image: p1 },
  { n: "02", title: "Award-Finalist Kitchen and Bath", suburb: "Drummoyne", year: "", image: p2 },
  { n: "03", title: "Functional Luxury for a Family of Four", suburb: "Rozelle", year: "", image: p3 },
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
    <section id="work" className="border-t border-border/60 bg-burgundy/40">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-16 pb-12">

        <div className="flex items-center justify-between gap-8 mb-10 md:mb-14">
          <div className="eyebrow"><span className="text-brass">·</span>&nbsp;&nbsp;01 / Featured Work</div>
          <a href="#enquire" className="inline-flex items-center gap-3 text-ivory text-[11px] tracking-[0.28em] uppercase border-b border-ivory/60 pb-1 hover:gap-5 transition-all">
            View full portfolio
          </a>
        </div>


        {/* Featured project: full bleed */}
        <div ref={featRef} className="reveal group relative overflow-hidden mb-20 md:mb-28">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-oxblood">
            <img
              src={feature}
              alt="Featured project: Refined Family Living in Rozelle"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oxblood/95 via-oxblood/30 to-transparent" />
          </div>
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between gap-8">
            <div>
              <div className="mt-3 font-serif italic text-ivory text-3xl md:text-5xl font-light">
                Refined Family Living
              </div>
              <div className="eyebrow mt-2">Rozelle</div>
            </div>
          </div>
        </div>

        {/* 3-up evenly distributed, no voids */}
        <div ref={tilesRef} className="reveal reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <ProjectTile key={p.n} project={p} />
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
          <div className="font-serif text-xl md:text-2xl text-ivory font-light italic">
            {project.title}
          </div>
          <div className="eyebrow mt-2">{project.suburb}</div>
        </div>
        <div className="eyebrow">{project.year}</div>
      </figcaption>
    </figure>
  );
}
