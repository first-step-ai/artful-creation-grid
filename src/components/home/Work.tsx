import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import rozelle2 from "@/assets/projects/rozelle-2.jpg.asset.json";
import rozelle3 from "@/assets/projects/rozelle-3.jpg.asset.json";
import rozelle5 from "@/assets/projects/rozelle-5.jpg.asset.json";
import rozelle7 from "@/assets/projects/rozelle-7.jpg.asset.json";
import rozelleMultispace from "@/assets/projects/rozelle-multispace.jpg.asset.json";
import bexleyV21 from "@/assets/projects/bexley-v2-1.jpg.asset.json";
import drummoyne1 from "@/assets/projects/drummoyne-new2/drum2-1.jpg.asset.json";
import drumN20 from "@/assets/projects/drummoyne-new/drum-20.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";
import { Link } from "@tanstack/react-router";

const driftStrip: { label: string; image: string; orientation: "portrait" | "landscape" }[] = [
  { label: "Curved mosaic feature wall", image: rozelle1.url, orientation: "portrait" },
  { label: "Arched mirrors & skylit ensuite", image: rozelle2.url, orientation: "portrait" },
  { label: "Fluted vanity & brass tapware", image: rozelle3.url, orientation: "landscape" },
  { label: "Fluted glass cabinetry & marble island", image: rozelle5.url, orientation: "landscape" },
  { label: "Verde Tempest fireplace", image: rozelle7.url, orientation: "portrait" },
];


const projects = [
  { suburb: "Drummoyne", title: "Soft Luxe Main Bathroom", category: "BATHROOM", image: drummoyne1.url, slug: "drummoyne-soft-luxe-main-bathroom" },
  { suburb: "Drummoyne", title: "Award-Finalist Kitchen", category: "KITCHEN", image: drumN20.url, slug: "drummoyne-award-winning-kitchen-and-bath" },
  { suburb: "Bexley", title: "Bold Utility", category: "BATHROOM", image: bexleyV21.url, slug: "bexley-bold-utility" },
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

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 mb-10 md:mb-14">
          <div>
            <div className="font-sans text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-medium text-ivory mb-1.5">
              Featured Home
            </div>
            <div className="eyebrow">
              <span>Award Winning</span>
              <span className="mx-2 opacity-50">|</span>
              <span>Refined Family Living</span>
            </div>
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

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mb-10 md:mb-14">
          <div className="eyebrow">Featured Work</div>
          <Link to="/projects" className="inline-flex items-center gap-3 text-ivory text-[11px] tracking-[0.28em] uppercase border-b border-ivory/60 pb-1 hover:gap-5 transition-all whitespace-nowrap">
            View full portfolio
          </Link>
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
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      preload="intent"
      className="block group lift"
    >
      <figure>
        <div className="relative overflow-hidden aspect-[4/5] bg-oxblood">
          <img
            src={project.image}
            alt={`${project.title}, ${project.suburb}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
        <figcaption className="mt-5 flex items-baseline justify-between gap-6">
          <div className="min-w-0">
            <div className="font-sans text-sm md:text-base text-brass font-light tracking-[0.1em] uppercase">
              <span>{project.suburb}</span>
              <span className="mx-2 opacity-50">|</span>
              <span>{project.title}</span>
            </div>
            <div className="mt-2 font-sans text-[11px] tracking-[0.28em] font-medium text-ivory">{project.category}</div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}
