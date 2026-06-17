import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects, slugify, getProjectDetail, type ProjectSummary } from "@/lib/projects-data";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import portfolioHero from "@/assets/projects/drummoyne-new/drum-20.jpg.asset.json";

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

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Sydney Bathroom & Interior Portfolio | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "Bathrooms, kitchens, laundries and full interiors crafted across Sydney by AM Bathrooms + Projects.",
      },
      { property: "og:title", content: "Sydney Bathroom & Interior Portfolio" },
      {
        property: "og:description",
        content: "Real homes, real people, real results, the AM portfolio.",
      },
      { property: "og:url", content: "https://artful-creation-grid.lovable.app/projects" },
      { property: "og:image", content: portfolioHero.url },
      { name: "twitter:image", content: portfolioHero.url },
    ],
    links: [
      { rel: "canonical", href: "https://artful-creation-grid.lovable.app/projects" },
    ],
  }),
  component: ProjectsPage,
});

const PAGE_SIZE = 12;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [page, setPage] = useState(1);

  const filtered = projects.filter((p) => {
    if (active === "All") return true;
    if (active === "Award Winning" || active === "Award Finalist") {
      const awards = getProjectDetail(slugify(p.suburb, p.title)).awards ?? [];
      const isWinner = p.badge === "Award" || awards.some((a) => /winner/i.test(a));
      const isFinalist = p.badge === "Finalist" || awards.some((a) => /finalist/i.test(a));
      return active === "Award Winning" ? isWinner : isFinalist;
    }
    const tags = p.tags ?? [p.category];
    return tags.includes(active);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleFilter = (f: (typeof filters)[number]) => {
    setActive(f);
    setPage(1);
  };

  const goToPage = (n: number) => {
    setPage(n);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-48 pb-12 md:pb-16">
          <div className="eyebrow mb-6">Portfolio</div>
          <h1 className="font-sans font-light text-ivory uppercase tracking-[0.06em] leading-[1.2] text-3xl md:text-4xl lg:text-5xl">
            Homes We Are Proud Of.
          </h1>
          <p className="mt-8 font-sans text-base md:text-lg text-ivory/80 leading-relaxed whitespace-nowrap">
            Every project in our Sydney bathroom and interior portfolio is a real home.
            <br />
            Real people, real results.
            <br />
            Click through to see the full story.
          </p>



          <div className="mt-14 flex flex-wrap gap-3">
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
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

          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-16 md:mt-20 flex items-center justify-center gap-2 flex-wrap"
            >
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-[11px] tracking-[0.28em] uppercase font-medium border border-ivory/30 text-ivory hover:border-ivory/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                const isActive = n === currentPage;
                return (
                  <button
                    key={n}
                    onClick={() => goToPage(n)}
                    aria-current={isActive ? "page" : undefined}
                    className={`min-w-[40px] px-3 py-2 text-[11px] tracking-[0.28em] uppercase font-medium border transition-colors ${
                      isActive
                        ? "bg-ivory text-oxblood border-ivory"
                        : "bg-transparent text-ivory border-ivory/30 hover:border-ivory/70"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-[11px] tracking-[0.28em] uppercase font-medium border border-ivory/30 text-ivory hover:border-ivory/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Tile({ project }: { project: ProjectSummary }) {
  const slug = slugify(project.suburb, project.title);
  const awards = getProjectDetail(slug).awards ?? [];
  const isWinner = project.badge === "Award" || awards.some((a) => /winner/i.test(a));
  const isFinalist = project.badge === "Finalist" || awards.some((a) => /finalist/i.test(a));
  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      preload="intent"
      className="block group lift relative z-10 cursor-pointer"
    >
      <figure>
        <div className="relative overflow-hidden aspect-[4/5] bg-oxblood">
          <img
            src={project.image}
            alt={`${project.title}, ${project.suburb}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          {(isWinner || isFinalist) && (
            <span className="absolute top-5 right-5 bg-ivory text-oxblood px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase font-medium">
              {isWinner ? "Award Winning" : "Finalist"}
            </span>
          )}
        </div>
        <figcaption className="mt-5">
          <div className="font-sans text-sm md:text-base text-brass font-light tracking-[0.1em] uppercase break-words">
            <span>{project.suburb}</span>
            <span className="mx-2 opacity-50">|</span>
            <span>{project.title}</span>
          </div>
          <div className="mt-2 font-sans text-[11px] tracking-[0.28em] font-medium uppercase text-ivory">
            {project.category}
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}