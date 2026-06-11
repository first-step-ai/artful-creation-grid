import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import teamPhoto from "@/assets/am-team-group.jpg.asset.json";
import bathroom from "@/assets/projects/annandale-1.jpg.asset.json";
import jennyPhoto from "@/assets/am-team.jpg.asset.json";
import antePhoto from "@/assets/am-team-group-tall.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "A boutique studio founded by Jenny and Ante Matek. One team handling design, build and project management from first sketch to final handover.",
      },
      { property: "og:title", content: "About | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content:
          "One team. Every detail. Start to finish.",
      },
      { property: "og:image", content: teamPhoto.url },
      { name: "twitter:image", content: teamPhoto.url },
    ],
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
              and full of surprises.
            </p>
            <p>
              So they built a studio where the designer, the builder, and
              the project manager all sit in the same room. Jenny leads
              the design and client experience. Ante leads the build. And
              around them is a tight team of trades, stylists, and
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
