import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import rozelleKitchen from "@/assets/projects/rozelle-new-9.jpg.asset.json";
import annan1 from "@/assets/projects/annandale-new/annan-02.jpg.asset.json";
import annan2 from "@/assets/projects/annandale-2022-award.jpg.asset.json";
import drum1 from "@/assets/projects/drummoyne-1.jpg.asset.json";
import drumFinalist from "@/assets/projects/drummoyne-new/drum-20.jpg.asset.json";
import drumMainBath from "@/assets/projects/drummoyne-new2/drum2-1.jpg.asset.json";
import enmoreHero from "@/assets/projects/enmore/enmore-31.jpg.asset.json";
import lindHero from "@/assets/projects/lindfield/lindfield-10.jpg.asset.json";
import birchHero from "@/assets/projects/birchgrove/birch-08.jpg.asset.json";
import castleHero from "@/assets/projects/castle-cove/castle-296L.jpg.asset.json";
import castleCoveRefresh from "@/assets/awards/castle-cove-refresh.jpg.asset.json";
import rhfHero from "@/assets/projects/rozelle-facelift/rhf-05L.jpg.asset.json";
import national2024 from "@/assets/2024-national-winner.jpg.asset.json";
import nsw2022 from "@/assets/2022-nsw-winner.jpg.asset.json";
import hiaLogo from "@/assets/hia-logo.png.asset.json";
import laneCove2023 from "@/assets/projects/lane-cove-2023.jpg.asset.json";

type AwardEntry = { kind: "Winner" | "Finalist"; label: string };
type ProjectAward = {
  id: string;
  suburb: string;
  title: string;
  image?: string;
  fit?: "cover" | "contain";
  awards: AwardEntry[];
  href?: string;
};
type YearGroup = { year: string; intro: string; blurb: string; projects: ProjectAward[] };

const years: YearGroup[] = [
  {
    year: "2025",
    intro: "HIA NSW Housing, Kitchen & Bathroom Awards",
    blurb:
      "HIA NSW recognition for projects across Rozelle, Annandale including a Renovated Kitchen of the Year win and multiple finalist placements for kitchen and bathroom design.",
    projects: [
      {
        id: "rozelle-2025",
        suburb: "Rozelle",
        title: "Refined Family Living",
        image: rozelleKitchen.url,
        href: "/projects/rozelle-refined-family-living",
        awards: [
          { kind: "Winner", label: "HIA NSW Renovated Kitchen of the Year" },
          { kind: "Finalist", label: "HIA NSW Kitchen Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Bathroom of the Year" },
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
        ],
      },
      {
        id: "annandale-2025",
        suburb: "Annandale",
        title: "Smart Family Living",
        image: annan1.url,
        href: "/projects/annandale-smart-family-living",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Bathroom of the Year" },
        ],
      },
    ],
  },
  {
    year: "2024",
    intro: "HIA NSW Housing Awards · National Business Awards",
    blurb:
      "AM Bathrooms + Projects received national recognition with the Australian Small Business Management Award, alongside HIA NSW Renovated Bathroom of the Year, with further finalist placements across kitchen and bathroom projects in Enmore, Lindfield and Drummoyne.",
    projects: [
      {
        id: "enmore-2024",
        suburb: "Enmore",
        title: "Award-Winning Family Bathroom",
        image: enmoreHero.url,
        href: "/projects/enmore-award-winning-family-bathroom",
        awards: [
          { kind: "Winner", label: "HIA NSW Renovated Bathroom of the Year" },
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
        ],
      },
      {
        id: "linfield-2024",
        suburb: "Lindfield",
        title: "Award-Finalist Bathroom",
        image: lindHero.url,
        href: "/projects/lindfield-refined-family-bathrooms",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Bathroom of the Year" },
        ],

      },
      {
        id: "drummoyne-2024",
        suburb: "Drummoyne",
        title: "Award-Finalist Kitchen and Bath",
        image: drumFinalist.url,
        href: "/projects/drummoyne-award-winning-kitchen-and-bath",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Bathroom of the Year" },
          { kind: "Finalist", label: "HIA NSW Kitchen Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Kitchen of the Year" },
        ],
      },
      {
        id: "national-2024",
        suburb: "AM Bathrooms + Projects",
        title: "National Recognition",
        image: national2024.url,
        fit: "contain",
        awards: [
          { kind: "Winner", label: "National Small Business Management Award" },
        ],
      },
    ],
  },
  {
    year: "2023",
    intro: "HIA NSW Kitchen & Bathroom Awards · NSW Business Awards",
    blurb:
      "HIA NSW finalist recognition for kitchen and bathroom projects across Drummoyne, Rozelle and Lane Cove, with AM Bathrooms + Projects receiving repeat acknowledgement for considered design. Awarded NSW Small Business Management Award.",
    projects: [
      {
        id: "nsw-2023",
        suburb: "AM Bathrooms + Projects",
        title: "State Recognition",
        image: nsw2022.url,
        fit: "contain",
        awards: [
          { kind: "Winner", label: "NSW Small Business Management Award" },
        ],
      },
      {
        id: "drummoyne-2023",
        suburb: "Drummoyne",
        title: "Award-Winning Kitchen and Bath",
        image: drumFinalist.url,
        href: "/projects/drummoyne-award-winning-kitchen-and-bath",
        awards: [
          { kind: "Winner", label: "HIA NSW Kitchen Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Kitchen of the Year" },
        ],
      },
      {
        id: "rozelle-2023",
        suburb: "Rozelle",
        title: "Home Facelift",
        image: rhfHero.url,
        href: "/projects/rozelle-bathrooms-facelift",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
        ],
      },
      {
        id: "lane-cove-2023",
        suburb: "Lane Cove",
        title: "Bathroom Design Finalist",
        image: laneCove2023.url,
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
        ],
      },
    ],
  },

  {
    year: "2022",
    intro: "HIA NSW Awards · NSW Business Awards",
    blurb:
      "AM Bathrooms + Projects won the NSW Small Business Management Award this year, with HIA NSW finalist placements for bathroom projects across Drummoyne and Annandale.",
    projects: [
      {
        id: "drummoyne-2022",
        suburb: "Drummoyne",
        title: "Award-Winning Kitchen and Bath",
        image: drumFinalist.url,
        href: "/projects/drummoyne-award-winning-kitchen-and-bath",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
          { kind: "Finalist", label: "HIA NSW New Bathroom over $25,000" },
        ],
      },

      {
        id: "annandale-2022",
        suburb: "Annandale",
        title: "Bathroom Finalist",
        image: annan2.url,
        awards: [
          { kind: "Finalist", label: "HIA NSW New Bathroom of the Year" },
        ],
      },
      {
        id: "nsw-2022",
        suburb: "AM Bathrooms + Projects",
        title: "State Recognition",
        image: nsw2022.url,
        fit: "contain",
        awards: [
          { kind: "Winner", label: "NSW Small Business Management Award" },
        ],
      },
    ],
  },
  {
    year: "2021",
    intro: "HIA-CSR NSW Housing and Kitchen & Bathroom Awards",
    blurb:
      "HIA-CSR NSW finalist recognition across three categories for a single Castle Cove home, spanning bathroom design, medium ensuite and powder room.",
    projects: [
      {
        id: "castle-cove-2021",
        suburb: "Castle Cove",
        title: "Full Family Home Refresh",
        image: castleCoveRefresh.url,
        href: "/projects/castle-cove-full-family-home-refresh",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom Design" },
          { kind: "Finalist", label: "HIA NSW Bathroom of the Year · Medium (6–10sqm Ensuite)" },
          { kind: "Finalist", label: "HIA NSW Bathroom of the Year · Small (Powder Room)" },
        ],
      },
    ],
  },
  {
    year: "2020",
    intro: "HIA NSW Housing Awards",
    blurb:
      "HIA NSW Bathroom of the Year finalist recognition for a Birchgrove renovation.",
    projects: [
      {
        id: "birchgrove-2020",
        suburb: "Birchgrove",
        title: "Modern Hamptons Bathrooms",
        image: birchHero.url,
        href: "/projects/birchgrove-modern-hamptons-bathrooms",
        awards: [
          { kind: "Finalist", label: "HIA NSW Bathroom of the Year" },
        ],
      },
    ],
  },
];

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "HIA Award-Winning Sydney Renovations | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "A timeline of recognition. HIA NSW winners and finalists alongside national business awards earned year after year.",
      },
      { property: "og:title", content: "HIA Award-Winning Sydney Renovations" },
      {
        property: "og:description",
        content: "A timeline of recognition. Projects and the awards they earned.",
      },
      { property: "og:url", content: "https://artful-creation-grid.lovable.app/awards" },
      { property: "og:image", content: rozelle1.url },
      { name: "twitter:image", content: rozelle1.url },
    ],
    links: [{ rel: "canonical", href: "https://artful-creation-grid.lovable.app/awards" }],
  }),
  component: AwardsPage,
});

function ProjectCard({ project }: { project: ProjectAward }) {
  const hasImage = Boolean(project.image);
  const content = (
    <div className="relative h-full w-full">
      {hasImage ? (
        <img
          src={project.image}
          alt={`${project.suburb} ${project.title}`}
          draggable={false}
          className={`absolute inset-0 h-full w-full ${
            project.fit === "contain" ? "object-contain p-6 bg-burgundy" : "object-cover"
          }`}
        />
      ) : (
        <div className="absolute inset-0 bg-burgundy flex flex-col items-center justify-center px-8 text-center">
          <div className="font-sans italic text-ivory/30 text-[120px] leading-none">
            {project.suburb.charAt(0)}
          </div>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ivory/50">
            Private Residence
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 pt-20 px-6 pb-6 md:px-7 md:pb-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[11px] tracking-[0.28em] uppercase text-ivory/85">
            {project.suburb}
          </div>
          {project.href && (
            <span className="text-[10px] tracking-[0.24em] uppercase text-brass/90 group-hover:text-brass transition-colors">
              View Project →
            </span>
          )}
        </div>
        <div className="font-sans text-2xl md:text-[28px] leading-tight text-ivory mb-4">
          {project.title}
        </div>
        <ul className="space-y-2">
          {project.awards.map((a, i) => (
            <li key={i} className="flex items-center gap-3 text-ivory/90">
              <span
                className={`shrink-0 inline-flex items-center justify-center w-[78px] text-[9px] tracking-[0.22em] uppercase px-2 py-[4px] border ${
                  a.kind === "Winner"
                    ? "bg-ivory text-oxblood border-ivory"
                    : "border-ivory/40 text-ivory/80"
                }`}
              >
                {a.kind}
              </span>
              <span className="text-[12px] md:text-[13px] leading-snug">{a.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <Link
        to={project.href}
        className="group block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
        aria-label={`View ${project.suburb} ${project.title} project`}
      >
        {content}
      </Link>
    );
  }
  return content;
}

function AutoCarousel({ projects }: { projects: ProjectAward[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const count = projects.length;

  useEffect(() => {
    if (paused || pinned || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 1800);
    return () => clearInterval(id);
  }, [paused, pinned, count]);

  return (
    <div
      className="w-full flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative w-full max-w-[560px]"
        style={{ aspectRatio: "560 / 720" }}
      >
        {projects.map((p, i) => (
          <div
            key={p.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] bg-burgundy transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            {projects.map((p, i) => {
              const active = i === index;
              const heldHere = active && pinned;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    setPinned((prev) => (active ? !prev : true));
                  }}
                  aria-label={
                    heldHere
                      ? `Resume rotation (currently holding ${p.suburb} ${p.title})`
                      : `Hold on ${p.suburb} ${p.title}`
                  }
                  aria-pressed={heldHere}
                  title={heldHere ? "Click to resume" : `Click to hold · ${p.suburb}`}
                  className={`group cursor-pointer flex items-center gap-1.5 rounded-full border px-2.5 py-1 transition-all duration-300 ${
                    active
                      ? heldHere
                        ? "border-brass bg-brass/15 text-brass"
                        : "border-ivory/70 bg-ivory/10 text-ivory"
                      : "border-ivory/25 text-ivory/55 hover:border-ivory/60 hover:text-ivory/90 hover:bg-ivory/5"
                  }`}
                >
                  <span
                    className={`block h-[2px] transition-all duration-500 ${
                      active ? "w-8 bg-current" : "w-4 bg-current/70"
                    }`}
                  />
                  {active && (
                    <span aria-hidden="true" className="text-[9px] leading-none">
                      {heldHere ? "▍▍" : "▶"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function YearSection({ group }: { group: YearGroup }) {
  const ref = useReveal<HTMLDivElement>();

  const winners = group.projects
    .flatMap((p) => p.awards)
    .filter((a) => a.kind === "Winner");

  return (
    <section
      ref={ref}
      className="reveal border-t border-ivory/10 py-10 md:py-14"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5 flex flex-col items-center text-center">
          <img src={hiaLogo.url} alt="HIA" className="h-20 md:h-24 w-auto mb-5 opacity-90" />
          <div className="eyebrow mb-4">Recognition</div>
          <div className="font-sans text-[64px] md:text-[110px] leading-none text-ivory">
            {group.year}
          </div>
          <div className="mt-6 h-px w-16 bg-brass mx-auto" />
          <p className="mt-6 text-ivory/70 text-[14px] md:text-[15px] max-w-sm mx-auto">
            {group.intro}
          </p>

          {winners.length > 0 && (
            <div className="mt-5 flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
              {winners.map((w, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3 w-full"
                >
                  <span className="shrink-0 inline-flex items-center justify-center w-[78px] text-[11px] tracking-[0.22em] uppercase px-2 py-[4px] border bg-ivory text-oxblood border-ivory">
                    {w.kind}
                  </span>
                  <span className="text-center text-[11px] leading-snug text-ivory/90">
                    {w.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p className="mt-5 text-ivory/55 text-[13px] md:text-[14px] leading-relaxed max-w-sm mx-auto">
            {group.blurb}
          </p>
        </div>

        <div className="md:col-span-7 flex justify-center">
          <AutoCarousel projects={group.projects} />
        </div>
      </div>
    </section>
  );
}

function AwardsPage() {
  const headerRef = useReveal<HTMLDivElement>();
  return (
    <div className="min-h-screen flex flex-col bg-oxblood">
      <Nav />
      <main className="flex-1">
        <header ref={headerRef} className="reveal relative isolate overflow-hidden">
          <img
            src={rozelle1.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover ken-burns opacity-70"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--oxblood) 55%, transparent) 0%, color-mix(in oklab, var(--oxblood) 65%, transparent) 50%, var(--oxblood) 100%), linear-gradient(90deg, color-mix(in oklab, var(--oxblood) 65%, transparent) 0%, transparent 75%)",
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-24 md:pt-28 pb-16 md:pb-20">
            <div className="max-w-3xl">
              <div className="eyebrow mb-6">Industry Awards</div>
              <h1 className="font-sans font-light text-ivory uppercase tracking-[0.06em] leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
                A timeline of recognition.
              </h1>
              <p className="mt-6 max-w-xl text-ivory/90 text-sm md:text-base font-light leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
                Year by year, the projects and the people behind them recognised by
                the industry.
              </p>
            </div>
          </div>
        </header>

        {years.map((g) => (
          <YearSection key={g.year} group={g} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
