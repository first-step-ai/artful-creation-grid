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
          "AM is a Sydney studio dedicated to the craft of the private sanctuary — bathrooms and interiors designed and built with precision and restraint.",
      },
      { property: "og:title", content: "About | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content:
          "A Sydney studio dedicated to precision, materiality and quiet, enduring interiors.",
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
        <Studio />
      </main>
      <Footer />
    </div>
  );
}

function Studio() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-16 py-32 md:py-40">
      <div
        ref={ref}
        className="reveal max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start"
      >
        {/* Left column — statement + figures */}
        <div className="md:col-span-5 flex flex-col justify-between gap-24">
          <div>
            <span className="eyebrow block mb-10">The Studio</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light italic mb-10 text-ivory">
              Artistry in
              <br />
              <span className="not-italic">the Everyday.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-sm font-light text-ivory/80">
              Founded in Sydney, AM is a studio dedicated to the craft of the
              private sanctuary. A bathroom is more than a utility — it is a
              daily ritual of restoration.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="flex gap-16 border-t border-brass/30 pt-8">
              <div>
                <div className="font-serif text-ivory text-3xl font-light mb-1">
                  12
                </div>
                <div className="eyebrow">Years of craft</div>
              </div>
              <div>
                <div className="font-serif text-ivory text-3xl font-light mb-1">
                  140+
                </div>
                <div className="eyebrow">Spaces refined</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — portrait + values */}
        <div className="md:col-span-7 relative">
          <div className="aspect-[4/5] w-full bg-[color:var(--burgundy)] relative overflow-hidden">
            <img
              src={team.url}
              alt="AM studio team portrait"
              loading="lazy"
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l border-b border-brass/40 pointer-events-none" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-brass" />
                <span className="eyebrow text-ivory">Our values</span>
              </div>
              <ul className="font-serif text-ivory/80 space-y-2">
                <li className="text-xl italic">Uncompromising precision</li>
                <li className="text-xl italic">Honest materiality</li>
                <li className="text-xl italic">Sydney sensibility</li>
              </ul>
            </div>

            <div className="flex sm:justify-end">
              <Link
                to="/"
                hash="enquire"
                className="group relative inline-block py-5 px-10 border border-ivory/20 hover:border-brass transition-colors duration-700"
              >
                <span className="relative z-10 text-ivory text-[10px] tracking-[0.5em] uppercase font-medium">
                  Enquire
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
