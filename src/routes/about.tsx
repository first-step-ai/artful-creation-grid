import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import team from "@/assets/am-team.jpg.asset.json";

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
        <Intro />
        <Story />
      </main>
      <Footer />
    </div>
  );
}

function Intro() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="px-6 md:px-16 pt-32 md:pt-40 pb-20 md:pb-28">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start"
      >
        <div className="md:col-span-5">
          <span className="eyebrow block mb-10">About the studio</span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-light italic text-ivory">
            One team.
            <br />
            Every detail.
            <br />
            <span className="not-italic">Start to finish.</span>
          </h1>
        </div>

        <div className="md:col-span-7 relative">
          <div className="aspect-[4/5] w-full bg-[color:var(--burgundy)] relative overflow-hidden">
            <img
              src={team.url}
              alt="Jenny and Ante Matek with the AM studio team"
              loading="lazy"
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l border-b border-brass/40 pointer-events-none" />
          </div>
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2 font-serif italic text-ivory text-lg">
              <span>JM</span>
              <span className="text-brass">·</span>
              <span>AM</span>
              <span className="text-brass">·</span>
              <span className="text-ivory/70">+8</span>
            </div>
            <span className="eyebrow">Our dedicated team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="px-6 md:px-16 py-24 md:py-32 border-t border-ivory/10">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24"
      >
        <div className="md:col-span-4">
          <span className="eyebrow block mb-6">Who we are</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-light italic text-ivory">
            A boutique studio that does things differently.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-ivory/80 text-base md:text-lg leading-relaxed font-light">
          <p>
            AM Bathrooms + Projects was founded by Jenny and Ante Matek because
            they kept hearing the same story: a renovation that should have been
            exciting had become stressful, drawn out, and full of surprises.
          </p>
          <p>
            So they built a studio where the designer, the builder, and the
            project manager all sit in the same room. Jenny leads the design and
            client experience. Ante leads the build. And around them is a tight
            team of trades, stylists, and coordinators who&rsquo;ve worked
            together for years.
          </p>
          <p>
            The result is a renovation process where nothing falls between the
            cracks. One team, one standard, from first sketch to final handover.
          </p>

          <div className="pt-10">
            <Link
              to="/"
              hash="enquire"
              className="group inline-flex items-center gap-4 py-5 px-10 border border-ivory/20 hover:border-brass transition-colors duration-700"
            >
              <span className="text-ivory text-[10px] tracking-[0.5em] uppercase font-medium">
                Start a conversation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
