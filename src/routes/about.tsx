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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
    <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0 z-0">
        <img
          src={team.url}
          alt="Jenny, Ante and the AM studio team"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] brightness-[0.75] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
      </div>

      {/* Floating chip top-left */}
      <div className="absolute top-28 md:top-32 left-6 md:left-16 z-20">
        <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full border border-ivory/15 bg-background/40 backdrop-blur-xl">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brass opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-ivory/90">
            JM · AM · +8 — Our dedicated team
          </span>
        </div>
      </div>

      {/* Headline lockup bottom-left */}
      <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-7xl">
        <span className="eyebrow block mb-8 text-ivory/70">
          About the studio
        </span>
        <h1
          className="font-serif italic font-light leading-[0.88] tracking-tight text-ivory text-6xl md:text-8xl lg:text-[8.5rem]"
        >
          One team.
          <br />
          Every detail.
          <br />
          <span className="text-ivory/45">Start to finish.</span>
        </h1>
      </div>
    </section>
  );
}

function Story() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className="reveal relative py-28 md:py-44 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Image column */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={bathroom.url}
              alt="An AM bathroom renovation"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
            />
            <div className="absolute inset-0 border border-ivory/5 pointer-events-none" />
          </div>
          <p className="mt-6 eyebrow text-ivory/50">
            Detail 01 — Annandale
          </p>
        </div>

        {/* Content column */}
        <div className="lg:col-span-7 lg:pt-16">
          <span className="eyebrow block mb-10 text-brass">Who we are</span>

          <h2 className="font-serif italic font-light leading-[1.05] text-ivory text-4xl md:text-5xl lg:text-6xl mb-14 max-w-xl">
            A boutique studio that does things differently.
          </h2>

          <div className="space-y-8 max-w-lg text-ivory/75 text-base md:text-lg leading-relaxed font-light">
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

          <div className="mt-16">
            <Link
              to="/"
              hash="enquire"
              className="group inline-flex items-center gap-8 py-4 border-b border-ivory/20 hover:border-brass transition-colors duration-700"
            >
              <span className="text-[11px] tracking-[0.32em] uppercase font-medium text-ivory">
                Start a conversation
              </span>
              <span
                aria-hidden
                className="block h-px w-12 bg-brass transition-all duration-700 ease-out group-hover:w-20"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
