import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  { title: "Travertine Ensuite", suburb: "Mosman", year: "2025", image: p1, span: "tall" as const },
  { title: "Stained Oak Kitchen", suburb: "Paddington", year: "2025", image: p2, span: "wide" as const },
  { title: "Fluted Powder Room", suburb: "Vaucluse", year: "2024", image: p3, span: "tall" as const },
];

export function Work() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="work" className="border-t border-border/60 bg-burgundy/40">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="eyebrow">03 — Selected Work</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl text-ivory font-light tracking-[-0.01em]">
              Recent projects.
            </h2>
          </div>
          <a href="#enquire" className="hidden sm:inline-flex items-center gap-3 text-ivory text-[11px] tracking-[0.28em] uppercase border-b border-ivory/60 pb-1 hover:gap-5 transition-all">
            All work
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <ProjectTile project={projects[0]} className="md:col-span-5 md:row-span-2 md:mt-0" />
          <ProjectTile project={projects[1]} className="md:col-span-7 md:mt-24" />
          <ProjectTile project={projects[2]} className="md:col-span-5 md:col-start-8 md:mt-8" />
        </div>
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  className,
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const aspect = project.span === "wide" ? "aspect-[16/10]" : "aspect-[4/5]";
  return (
    <figure className={["group", className].filter(Boolean).join(" ")}>
      <div className={`relative overflow-hidden bg-oxblood ${aspect}`}>
        <img
          src={project.image}
          alt={`${project.title}, ${project.suburb}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
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
