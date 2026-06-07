import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { CardStack, type StackCard } from "@/components/ui/card-stack";
import { useReveal } from "@/hooks/use-reveal";
import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import annan1 from "@/assets/projects/annandale-1.jpg.asset.json";
import national2024 from "@/assets/2024-national-winner.jpg.asset.json";
import nsw2022 from "@/assets/2022-nsw-winner.jpg.asset.json";

type AwardEntry = { kind: "Winner" | "Finalist"; label: string };
type ProjectAward = {
  id: string;
  suburb: string;
  title: string;
  image: string;
  fit?: "cover" | "contain";
  awards: AwardEntry[];
  href?: string;
};
type YearGroup = { year: string; intro: string; projects: ProjectAward[] };

const years: YearGroup[] = [
  {
    year: "2025",
    intro: "HIA NSW Housing Awards",
    projects: [
      {
        id: "rozelle-2025",
        suburb: "Rozelle",
        title: "Award-Winning Family Living",
        image: rozelle1.url,
        href: "/projects/rozelle-refined-family-living",
        awards: [
          { kind: "Winner", label: "HIA NSW Renovated Kitchen of the Year" },
          { kind: "Finalist", label: "HIA NSW Kitchen Design of the Year" },
          { kind: "Finalist", label: "HIA NSW Renovated Bathroom of the Year" },
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
        ],
      },
    ],
  },
  {
    year: "2024",
    intro: "HIA NSW Housing Awards · National Business Awards",
    projects: [
      {
        id: "annandale-2024",
        suburb: "Annandale",
        title: "Smart Family Living",
        image: annan1.url,
        href: "/projects/annandale-smart-family-living",
        awards: [
          { kind: "Winner", label: "HIA NSW Bathroom of the Year" },
          { kind: "Finalist", label: "HIA NSW Bathroom Design of the Year" },
        ],
      },
      {
        id: "national-2024",
        suburb: "AM Studio",
        title: "National Recognition",
        image: national2024.url,
        fit: "contain",
        awards: [
          { kind: "Winner", label: "National Small Business Management Award · Australia" },
        ],
      },
    ],
  },
  {
    year: "2022",
    intro: "HIA NSW Business Awards",
    projects: [
      {
        id: "nsw-2022",
        suburb: "AM Studio",
        title: "State Recognition",
        image: nsw2022.url,
        fit: "contain",
        awards: [
          { kind: "Winner", label: "NSW Small Business Management Award" },
        ],
      },
    ],
  },
];

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "A timeline of recognition. HIA NSW winners and finalists alongside national business awards earned year after year.",
      },
      { property: "og:title", content: "Awards | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content: "A timeline of recognition — projects and the awards they earned.",
      },
      { property: "og:image", content: rozelle1.url },
      { name: "twitter:image", content: rozelle1.url },
    ],
  }),
  component: AwardsPage,
});

function ProjectCard({ project }: { project: ProjectAward }) {
  return (
    <div className="relative h-full w-full">
      <img
        src={project.image}
        alt={`${project.suburb} — ${project.title}`}
        draggable={false}
        className={`absolute inset-0 h-full w-full ${
          project.fit === "contain" ? "object-contain p-6 bg-burgundy" : "object-cover"
        }`}
      />
      {/* Bottom gradient + info */}
      <div className="absolute inset-x-0 bottom-0 pt-20 px-6 pb-6 md:px-7 md:pb-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent">
        <div className="text-[11px] tracking-[0.28em] uppercase text-ivory/85 mb-2">
          {project.suburb}
        </div>
        <div className="font-serif text-2xl md:text-[28px] leading-tight text-ivory mb-4">
          {project.title}
        </div>
        <ul className="space-y-2">
          {project.awards.map((a, i) => (
            <li key={i} className="flex items-start gap-3 text-ivory/90">
              <span
                className={`shrink-0 mt-[3px] text-[9px] tracking-[0.22em] uppercase px-2 py-[2px] border ${
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
}

function YearSection({ group }: { group: YearGroup }) {
  const ref = useReveal<HTMLDivElement>();
  const cards: StackCard[] = group.projects.map((p) => ({
    id: p.id,
    content: p.href ? (
      <Link to={p.href} className="block h-full w-full">
        <ProjectCard project={p} />
      </Link>
    ) : (
      <ProjectCard project={p} />
    ),
  }));

  return (
    <section
      ref={ref}
      className="reveal border-t border-ivory/10 py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5">
          <div className="eyebrow mb-4">Recognition</div>
          <div className="font-serif text-[64px] md:text-[110px] leading-none text-ivory">
            {group.year}
          </div>
          <div className="mt-6 h-px w-16 bg-brass" />
          <p className="mt-6 text-ivory/70 text-[14px] md:text-[15px] max-w-sm">
            {group.intro}
          </p>
          {group.projects.length > 1 && (
            <p className="mt-3 text-ivory/45 text-[11px] tracking-[0.22em] uppercase">
              Drag or tap to shuffle · {group.projects.length} cards
            </p>
          )}
        </div>

        <div className="md:col-span-7 flex justify-center">
          <CardStack
            cards={cards}
            cardDimensions={{ width: 440, height: 560 }}
            className="max-w-full"
          />
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
        <header
          ref={headerRef}
          className="reveal mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow mb-6">Awards · Year Timeline</div>
              <h1 className="font-serif text-[32px] md:text-[56px] leading-[1.05] text-ivory max-w-3xl">
                A timeline of recognition.
              </h1>
              <p className="mt-5 md:mt-6 text-ivory/70 max-w-xl text-[14px] md:text-[15px]">
                Year by year, the projects and the people behind them recognised by
                the industry. Drag the cards to shuffle through each year's awards.
              </p>
            </div>
            <div className="md:col-span-5 grid grid-cols-3 gap-6 md:gap-8 md:border-l md:border-ivory/15 md:pl-10">
              {[
                { n: "10+", l: "Awards & Finalist Nods" },
                { n: "3", l: "HIA NSW Wins" },
                { n: "28", l: "Years in Sydney" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-[40px] md:text-[56px] leading-none text-ivory">
                    {s.n}
                  </div>
                  <div className="mt-3 text-ivory/55 text-[10px] tracking-[0.22em] uppercase leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 md:mt-20 h-px w-full bg-ivory/10" />
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-ivory/55 text-[10px] tracking-[0.28em] uppercase">
            <span>HIA NSW Housing Awards</span>
            <span className="text-ivory/20">·</span>
            <span>National Small Business Awards</span>
            <span className="text-ivory/20">·</span>
            <span>Master Builders Member</span>
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
