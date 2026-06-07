import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import teamPhoto from "@/assets/am-team-group.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "AM Bathrooms + Projects — a Sydney studio handling design, build and project management in-house, from first sketch to final handover.",
      },
      { property: "og:title", content: "About | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content:
          "A Sydney studio handling design, build and project management in-house.",
      },
    ],
  }),
  component: AboutPage,
});

/* ------------------------------------------------------------------ */
/*  Shared building blocks                                            */
/* ------------------------------------------------------------------ */

const eyebrowCls =
  "font-mono uppercase text-[0.65rem] tracking-[0.2em] text-brass";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className={`reveal reveal-stagger py-16 md:py-32 px-6 md:px-10 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <StudioStory />
        <TheCraft />
        <PullQuote />
        <ByTheNumbers />
        <Suppliers />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Hero                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex flex-col justify-end">
      {/* HERO: slow-pan of a finished AM master bathroom, natural side light,
          stone vanity in foreground, brass tapware catching highlight */}
      <div className="absolute inset-0 bg-[color:var(--burgundy)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#2f342f_0%,#3d4239_55%,#2a2e2a_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-background/30" />
      </div>

      <div className="relative z-10 px-6 md:px-10 pb-20 md:pb-28 max-w-[1200px] w-full mx-auto">
        <p className={`${eyebrowCls} mb-10`}>
          EST. 2013 · SYDNEY
        </p>
        <h1 className="font-serif italic font-light text-ivory leading-[0.95] tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] max-w-4xl">
          A small studio for rooms
          <br />
          that take their time.
        </h1>
        <p className="mt-8 max-w-[58ch] text-ivory/70 text-base md:text-lg font-light leading-relaxed">
          Design, build and project management under one roof — handled by
          the same team from first sketch to the day you walk in.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Studio story                                                    */
/* ------------------------------------------------------------------ */

function StudioStory() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-24 items-start">
        <div>
          <p className={`${eyebrowCls} mb-8`}>The studio</p>
          <h2 className="font-serif italic font-light text-ivory leading-[1.05] text-3xl md:text-5xl mb-10 max-w-[16ch]">
            Founded by Jenny and Ante Matek in 2013.
          </h2>
          <div className="space-y-6 max-w-[58ch] text-ivory/75 text-base md:text-lg font-light leading-relaxed">
            <p>
              Jenny leads design and the client side of every project. Ante
              leads the build and runs the site. They started the studio
              after a decade of seeing the designer, the builder and the
              project manager work from three different rooms.
            </p>
            <p>
              Around them is a tight crew of trades, stylists and
              coordinators who have worked together for years. One team,
              one standard, one number to call.
            </p>
          </div>
        </div>

        {/* PORTRAIT: editorial half-length of Jenny + Ante on a current
            site, late-afternoon light, soft sage and charcoal palette */}
        <div className="lg:pt-12">
          <div className="relative aspect-[4/5] w-full border border-ivory/15 bg-[color:var(--burgundy)] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#3a3f3a_0%,#2c302c_100%)]" />
            <span className="absolute bottom-4 left-4 font-mono text-[0.6rem] tracking-[0.2em] text-ivory/40 uppercase">
              Portrait — on site
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. The craft                                                       */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    n: "01",
    title: "Design",
    body: "Drawings, joinery details and material boards developed in-house, refined against your space.",
  },
  {
    n: "02",
    title: "Materials",
    body: "Stone, tile and tapware selected with you and ordered direct — no markup hidden behind a catalogue.",
  },
  {
    n: "03",
    title: "Build",
    body: "Site run by Ante with our own trades. One foreman from demo through final silicone bead.",
  },
  {
    n: "04",
    title: "Aftercare",
    body: "Twelve-month check-in, a maintenance brief, and the same people on the phone if something needs attention.",
  },
];

function TheCraft() {
  return (
    <Section>
      <p className={`${eyebrowCls} mb-8`}>The craft</p>
      <h2 className="font-serif italic font-light text-ivory leading-[1.05] text-3xl md:text-5xl mb-16 max-w-[20ch]">
        Four stages, one team across every one of them.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-ivory/15">
        {pillars.map((p, i) => (
          <div
            key={p.n}
            className={`py-10 lg:py-12 lg:px-8 ${
              i > 0 ? "lg:border-l border-ivory/15" : ""
            } ${i > 0 ? "sm:border-t-0 border-t border-ivory/15 sm:border-t" : ""}`}
          >
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-brass mb-6">
              {p.n}
            </p>
            <h3 className="font-serif italic font-light text-ivory text-2xl md:text-3xl mb-4">
              {p.title}
            </h3>
            <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed max-w-[36ch]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Pull quote                                                      */
/* ------------------------------------------------------------------ */

function PullQuote() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="reveal py-32 md:py-56 px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="font-serif italic font-light text-ivory leading-[1.1] text-3xl md:text-5xl lg:text-[3.5rem]">
          We finish the rooms we draw, so the drawing has to
          survive the build.
        </p>
        <p className={`${eyebrowCls} mt-12`}>
          Ante Matek · Director, build
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. By the numbers                                                  */
/* ------------------------------------------------------------------ */

const stats = [
  { n: "13", label: "Years in trade" },
  { n: "140", label: "Projects delivered" },
  { n: "22", label: "Sydney suppliers" },
  { n: "100%", label: "In-house build" },
];

function ByTheNumbers() {
  return (
    <Section>
      <p className={`${eyebrowCls} mb-12`}>By the numbers</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-ivory/15">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-10 md:py-14 lg:px-8 ${
              i > 0 ? "lg:border-l border-ivory/15" : ""
            }`}
          >
            <p className="font-serif italic font-light text-ivory text-5xl md:text-6xl lg:text-7xl leading-none mb-5">
              {s.n}
            </p>
            <p className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ivory/55">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Suppliers                                                       */
/* ------------------------------------------------------------------ */

const suppliers = [
  "Artedomus",
  "Signorino",
  "Astra Walker",
  "Brodware",
  "Sussex Taps",
  "Rogerseller",
  "Reece",
  "CDK Stone",
  "Academy Tiles",
  "Eco Outdoor",
  "Mafi Timber",
  "Apaiser",
];

function Suppliers() {
  return (
    <Section>
      <p className={`${eyebrowCls} mb-10`}>Trusted partners</p>
      <p className="font-serif italic font-light text-ivory leading-[1.25] text-2xl md:text-4xl lg:text-5xl max-w-[1100px]">
        {suppliers.map((name, i) => (
          <span key={name}>
            {name}
            {i < suppliers.length - 1 && (
              <span className="text-brass mx-3 md:mx-5">·</span>
            )}
          </span>
        ))}
      </p>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Closing CTA                                                     */
/* ------------------------------------------------------------------ */

function ClosingCTA() {
  return (
    <Section className="border-t border-ivory/15">
      <div className="max-w-[1200px] mx-auto flex flex-col items-start gap-10 md:gap-12">
        <p className={eyebrowCls}>Next step</p>
        <p className="font-serif italic font-light text-ivory leading-[1.1] text-3xl md:text-5xl max-w-[20ch]">
          If you have a project in mind, we&rsquo;d love to talk.
        </p>
        <Link
          to="/"
          hash="enquire"
          className="group inline-flex items-center gap-6 border border-ivory/30 hover:border-brass px-8 py-4 transition-colors duration-500"
        >
          <span className="font-mono uppercase text-[0.65rem] tracking-[0.2em] text-ivory">
            Start a conversation
          </span>
          <span
            aria-hidden
            className="block h-px w-8 bg-brass transition-all duration-500 group-hover:w-14"
          />
        </Link>
      </div>
    </Section>
  );
}
