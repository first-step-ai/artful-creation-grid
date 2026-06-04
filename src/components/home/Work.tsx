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

const driftStrip: { label: string; image: string; orientation: "portrait" | "landscape" }[] = [
  { label: "Arch", image: feature, orientation: "portrait" },
  { label: "Oak", image: p2, orientation: "landscape" },
  { label: "Stone", image: hotelAsset.url, orientation: "portrait" },
  { label: "Edge", image: p1, orientation: "landscape" },
  { label: "Shadow", image: p3, orientation: "portrait" },
  { label: "Linen", image: serviceBathrooms, orientation: "landscape" },
  { label: "Marble", image: serviceInteriors, orientation: "portrait" },
  { label: "Grain", image: materials, orientation: "landscape" },
  { label: "Quiet", image: projectFeature, orientation: "portrait" },
];


const projects = [
  { suburb: "Bexley", title: "Bold Utility", category: "Bathroom", image: p1 },
  { suburb: "Drummoyne", title: "Modern Luxury Living", category: "Bathroom", image: p2 },
  { suburb: "Rozelle", title: "Award-Winning Family Living", category: "Full Interior", image: p3 },
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
          <div className="marquee marquee-slow">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {driftStrip.map((item) => (
                  <figure
                    key={`${dup}-${item.label}`}
                    className="shrink-0 px-3 md:px-4"
                  >
                    <div
                      className="overflow-hidden bg-oxblood h-[38vh] md:h-[52vh] max-h-[520px]"
                      style={{
                        aspectRatio: item.orientation === "landscape" ? "4 / 3" : "3 / 4",
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
          <div className="font-sans text-base md:text-lg text-ivory font-light tracking-[0.12em] uppercase">
            <span>{project.suburb}</span>
            <span className="mx-2 opacity-50">|</span>
            <span>{project.title}</span>
          </div>
          <div className="eyebrow mt-2">{project.category}</div>
        </div>
      </figcaption>
    </figure>
  );
}
