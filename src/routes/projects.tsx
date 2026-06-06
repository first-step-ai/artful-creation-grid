import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, slugify, type ProjectSummary } from "@/lib/projects-data";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

const filters = [
  "All",
  "Bathroom",
  "Kitchen",
  "Laundry",
  "Living Room",
  "Ensuite",
  "Multi-Space",
  "Full Interior",
  "Award Winning",
  "Award Finalist",
] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "Bathrooms, kitchens, laundries and full interiors crafted across Sydney by AM Bathrooms + Projects.",
      },
      { property: "og:title", content: "Projects | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content: "Real homes, real people, real results — the AM portfolio.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://artful-creation-grid.lovable.app/projects" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = projects.filter((p) => {
    if (active === "All") return true;
    if (active === "Award Winning") return p.badge === "Award";
    if (active === "Award Finalist") return p.badge === "Finalist";
    return p.category === active;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-40 md:pt-48 pb-16">
          <div className="eyebrow mb-6">Portfolio</div>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-ivory">
            The work.
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base md:text-lg text-ivory/80 leading-relaxed">
            Every project here is a real home. Real people, real results. Click
            through to see the full story.
          </p>

          {/* Filters */}
          <div className="mt-14 flex flex-wrap gap-3">
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-5 py-2.5 text-[11px] tracking-[0.28em] uppercase font-medium border transition-colors ${
                    isActive
                      ? "bg-ivory text-oxblood border-ivory"
                      : "bg-transparent text-ivory border-ivory/30 hover:border-ivory/70"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="mt-10 hairline" />
        </section>

        <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-14 md:gap-y-20">
            {visible.map((p) => (
              <Tile key={`${p.suburb}-${p.title}`} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Tile({ project }: { project: Project }) {
  const slug = slugify(project.suburb, project.title);
  return (
    <Link to="/projects/$slug" params={{ slug }} className="block group lift">
      <figure>
        <div className="relative overflow-hidden aspect-[4/5] bg-oxblood">
          <img
            src={project.image}
            alt={`${project.title}, ${project.suburb}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          {project.badge && (
            <span className="absolute top-5 right-5 bg-ivory text-oxblood px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase font-medium">
              {project.badge}
            </span>
          )}
        </div>
        <figcaption className="mt-5">
          <div className="font-serif text-2xl md:text-3xl font-light text-ivory leading-tight">
            <span>{project.suburb}</span>
            <span className="mx-3 opacity-50">|</span>
            <span>{project.title}</span>
          </div>
          <div className="mt-3 font-sans text-[11px] tracking-[0.28em] uppercase font-medium text-ivory-muted">
            {project.category}
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}
