import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import team from "@/assets/am-team.jpg.asset.json";
import bathroom from "@/assets/projects/annandale-1.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "A boutique Sydney studio founded by Jenny and Ante Matek — one team handling design, build and project management from first sketch to final handover.",
      },
      { property: "og:title", content: "About | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content:
          "One team. Every detail. Start to finish. A boutique Sydney studio that does renovations differently.",
      },
      { property: "og:image", content: team.url },
      { name: "twitter:image", content: team.url },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Story />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[620px] overflow-hidden">
      <img
        src={team.url}
        alt="Jenny, Ante and the AM studio team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d1a]/85 via-[#1a1d1a]/30 to-transparent" />

      <div className="relative h-full flex items-end">
        <div className="w-full px-6 md:px-16 pb-16 md:pb-24">
          <span className="eyebrow block mb-8 text-ivory/80">
            About the studio
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-light italic text-ivory max-w-5xl">
            One team. Every detail.
            <br />
            <span className="not-italic">Start to finish.</span>
          </h1>
        </div>
      </div>

      {/* Team chip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10 z-10">
        <div className="flex items-center gap-4 bg-background/85 backdrop-blur-md border border-ivory/15 rounded-full pl-2 pr-6 py-2 shadow-2xl">
          <div className="flex -space-x-2">
            <span className="w-9 h-9 rounded-full bg-[color:var(--burgundy-soft)] text-[#1a1a1a] text-[11px] font-medium tracking-widest flex items-center justify-center border-2 border-background">
              JM
            </span>
            <span className="w-9 h-9 rounded-full bg-ivory text-[#1a1a1a] text-[11px] font-medium tracking-widest flex items-center justify-center border-2 border-background">
              AM
            </span>
            <span className="w-9 h-9 rounded-full bg-[color:var(--burgundy)] text-ivory text-[11px] font-medium flex items-center justify-center border-2 border-background">
              +8
            </span>
          </div>
          <span className="eyebrow text-ivory/80">Our dedicated team</span>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <div className="relative min-h-[60vh] lg:min-h-full overflow-hidden">
        <img
          src={bathroom.url}
          alt="An AM bathroom renovation"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-xl">
          <span className="eyebrow block mb-6">Who we are</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] font-light italic text-ivory mb-4">
            A boutique studio that does things differently.
          </h2>
          <div className="h-px w-16 bg-brass/60 mb-10" />

          <div className="space-y-6 text-ivory/80 text-base md:text-lg leading-relaxed font-light">
            <p>
              AM Bathrooms + Projects was founded by Jenny and Ante Matek
              because they kept hearing the same story: a renovation that
              should have been exciting had become stressful, drawn out, and
              full of surprises.
            </p>
            <p>
              So they built a studio where the designer, the builder, and the
              project manager all sit in the same room. Jenny leads the design
              and client experience. Ante leads the build. And around them is
              a tight team of trades, stylists, and coordinators who&rsquo;ve
              worked together for years.
            </p>
            <p>
              The result is a renovation process where nothing falls between
              the cracks. One team, one standard, from first sketch to final
              handover.
            </p>
          </div>

          <div className="pt-10">
            <Link
              to="/"
              hash="enquire"
              className="group inline-flex items-center gap-4 bg-ivory text-[#1a1a1a] px-8 py-4 hover:bg-brass transition-colors duration-500"
            >
              <span className="text-[10px] tracking-[0.5em] uppercase font-medium">
                Start a conversation
              </span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
