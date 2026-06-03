import p3 from "@/assets/project-3.jpg";
import featureAsset from "@/assets/arched-house.jpg.asset.json";
import kitchenAsset from "@/assets/stained-oak-kitchen.jpg.asset.json";
import bexleyAsset from "@/assets/bexley-bathroom.jpg.asset.json";
import hotelAsset from "@/assets/hotel-inspired-luxury.jpg.asset.json";
import materials from "@/assets/materials.jpg";
import projectFeature from "@/assets/project-feature.jpg";
import serviceBathrooms from "@/assets/service-bathrooms.jpg";
import serviceInteriors from "@/assets/service-interiors.jpg";
const feature = featureAsset.url;
const p2 = kitchenAsset.url;
const p1 = bexleyAsset.url;
import { useReveal } from "@/hooks/use-reveal";

const driftStrip = [
  { n: "01", label: "Arch", image: feature },
  { n: "02", label: "Oak", image: p2 },
  { n: "03", label: "Stone", image: hotelAsset.url },
  { n: "04", label: "Edge", image: p1 },
  { n: "05", label: "Shadow", image: p3 },
  { n: "06", label: "Linen", image: serviceBathrooms },
  { n: "07", label: "Marble", image: serviceInteriors },
  { n: "08", label: "Grain", image: materials },
  { n: "09", label: "Quiet", image: projectFeature },
];


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
    <section id="work" className="border-t border-border/60 bg-oxblood">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-16 pb-12">

        <div className="flex items-center justify-between gap-8 mb-10 md:mb-14">
          <div className="eyebrow">Featured Work</div>
          <a href="#enquire" className="inline-flex items-center gap-3 text-ivory text-[11px] tracking-[0.28em] uppercase border-b border-ivory/60 pb-1 hover:gap-5 transition-all">
            View full portfolio
          </a>
        </div>


        {/* DriftStrip: 9-image continuous marquee */}
        <div ref={featRef} className="reveal relative mb-20 md:mb-28 -mx-6 md:-mx-10 overflow-hidden">
          <div className="marquee">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {driftStrip.map((item) => (
                  <figure
                    key={`${dup}-${item.n}`}
                    className="shrink-0 w-[70vw] sm:w-[46vw] md:w-[34vw] lg:w-[26vw] px-3 md:px-4"
                  >
                    <div className="overflow-hidden bg-oxblood aspect-[3/4]">
                      <img
                        src={item.image}
                        alt={`${item.n} — ${item.label}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="eyebrow mt-4 md:mt-5">
                      {item.n} · {item.label.toUpperCase()}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
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
          <div className="font-serif text-xl md:text-2xl text-ivory font-light tracking-[0.12em] uppercase">
            {project.title}
          </div>
          <div className="eyebrow mt-2">{project.suburb}</div>
        </div>
        <div className="eyebrow">{project.year}</div>
      </figcaption>
    </figure>
  );
}
