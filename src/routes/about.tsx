import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import teamPhoto from "@/assets/am-team-group.jpg.asset.json";
import bathroom from "@/assets/projects/about-feature.jpg.asset.json";
import jennyPhoto from "@/assets/team/jenny.jpg.asset.json";
import antePhoto from "@/assets/team/ante.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jenny & Ante Matek | AM Bathrooms + Projects Sydney" },
      {
        name: "description",
        content:
          "A boutique studio founded by Jenny and Ante Matek. One team handling design, build and project management from first sketch to final handover.",
      },
      { property: "og:title", content: "About AM Bathrooms + Projects | Sydney Renovation Studio" },
      {
        property: "og:description",
        content:
          "One team. Every detail. Start to finish.",
      },
      { property: "og:url", content: "https://artful-creation-grid.lovable.app/about" },
      { property: "og:image", content: teamPhoto.url },
      { name: "twitter:image", content: teamPhoto.url },
    ],
    links: [{ rel: "canonical", href: "https://artful-creation-grid.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Profiles />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------- */
/*  Hero                                                          */
/* -------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden">
      <img
        src={teamPhoto.url}
        alt="The AM Bathrooms + Projects team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Quiet darkening for legibility, kept light per reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      <div className="relative h-full max-w-[1400px] mx-auto flex items-end pl-4 md:pl-6 lg:pl-8 pr-6 md:pr-12 lg:pr-16 pb-16 md:pb-24">
        <div>
          <p className="eyebrow mb-8 [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]" style={{ color: "var(--ivory)" }}>About the studio</p>
          <h1 className="font-sans font-light text-ivory uppercase tracking-[0.02em] leading-[1.2] text-2xl md:text-3xl lg:text-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
            One team. Every detail.
            <br />
            Start to finish.
          </h1>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Story                                                         */
/* -------------------------------------------------------------- */

function Story() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="reveal py-24 md:py-40 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Image column with floating chip */}
        <div className="relative">
          <div className="relative w-full aspect-[4/5] overflow-hidden border border-ivory/10">
            <img
              src={bathroom.url}
              alt="An AM bathroom renovation"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Content column */}
        <div className="lg:pt-6">
          <p className="eyebrow text-brass mb-8">Who we are</p>

          <h2 className="font-sans font-light text-ivory leading-[1.15] text-2xl md:text-3xl lg:text-4xl mb-10 max-w-[20ch]">
            A boutique studio that does things differently.
          </h2>

          <div className="h-px w-16 bg-brass/60 mb-12" />

          <div className="space-y-8 text-ivory/80 text-sm md:text-base leading-relaxed font-light max-w-[58ch]">
            <p>
              AM Bathrooms + Projects was founded by Jenny and Ante Matek
              because they kept hearing the same story. A renovation that
              should have been exciting had become stressful, drawn out,
              and full of disappointing surprises.
            </p>
            <p>
              So they created a boutique design and build studio where design,
              construction and project management work together from day one.
              Jenny leads the design and client experience. Ante leads the build.
              And around them is a tight team of trades, stylists, and
              coordinators who&rsquo;ve worked together for years.
            </p>
            <p>
              The result is a renovation process where nothing falls
              between the cracks. One team, one standard, from first
              sketch to final handover.
            </p>
          </div>

          <div className="pt-14">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-6 bg-[color:var(--burgundy)] border border-ivory/15 text-ivory px-10 py-5 hover:bg-[color:var(--brass)] hover:text-[#1a1a1a] transition-colors duration-500"
            >
              <span className="text-[11px] tracking-[0.32em] uppercase font-medium">
                Start a conversation
              </span>
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Profiles - Jenny & Ante                                       */
/* -------------------------------------------------------------- */

function Profiles() {
  const ref = useReveal<HTMLElement>();

  const people = [
    {
      name: "Jenny Matek",
      role: "Design + client experience",
      image: jennyPhoto.url,
      heading: "Meet Jenny Matek",
      paragraphs: [
        "Jenny Matek is the award-winning interior designer and creative force behind AM Bathrooms + Projects. With more than 20 years of experience across design, construction and renovation, Jenny brings a rare combination of creative vision, practical thinking and real project knowledge.",
        "What clients value most is that Jenny is not only focused on how a space looks, but how it functions, how it feels to live in, and how it can be delivered well in real life. Her ability to bridge design and construction gives clients clarity early, helps avoid costly missteps, and creates spaces that feel both beautiful and considered.",
      ],
    },
    {
      name: "Ante Matek",
      role: "Build + delivery",
      image: antePhoto.url,
      heading: "Meet Ante Matek",
      paragraphs: [
        "Ante Matek leads the build side of AM Bathrooms + Projects, bringing two decades of hands-on construction and project management experience to every renovation. His skill set sits where craft and coordination meet, running trades, sequencing work tightly, and protecting the quality of the finish from demolition through to handover.",
        "Ante started the studio with Jenny because he kept seeing the same problem on site: a disconnect between the people designing a space and the people building it, which left clients absorbing the cost in time, money and stress. He wanted a model where design decisions and build decisions were made by the same team, in the same room.",
        "What he is most proud of is the way that model now plays out in real homes. One accountable team, clear communication, fewer surprises, and a finished result that holds up to the way families actually live.",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="reveal pb-24 md:pb-40 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="eyebrow text-brass mb-8">Meet Jenny and Ante</p>
        <div className="h-px w-16 bg-brass/60 mb-16" />

        <div className="space-y-24 md:space-y-32">
          {people.map((person, i) => (
            <article
              key={person.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-ivory/10">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="eyebrow text-brass/80 mb-4">{person.role}</p>
                <h3 className="font-sans font-light text-ivory leading-[1.15] text-2xl md:text-3xl mb-8">
                  {person.heading}
                </h3>
                <div className="space-y-6 text-ivory/80 text-sm md:text-base leading-relaxed font-light max-w-[58ch]">
                  {person.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
