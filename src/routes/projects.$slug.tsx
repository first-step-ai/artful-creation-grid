import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { getProjectDetail, getMoreProjects, slugify } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = getProjectDetail(params.slug);
    return {
      meta: [
        { title: `${p.suburb} | ${p.title} — AM Bathrooms + Projects` },
        { name: "description", content: p.heroCaption },
        { property: "og:title", content: `${p.suburb} | ${p.title}` },
        { property: "og:description", content: p.heroCaption },
        { property: "og:image", content: p.hero },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const p = getProjectDetail(slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
          <img
            src={p.hero}
            alt={`${p.title}, ${p.suburb}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Stronger gradient for legibility — dark at bottom where text sits */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 h-full flex flex-col justify-end pb-16 md:pb-24">
            <div className="eyebrow text-ivory/90 mb-4 drop-shadow-md">
              {p.category} · {p.suburb}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] max-w-5xl drop-shadow-lg">
              {p.suburb} <span className="opacity-50">|</span> {p.title}
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base md:text-lg text-ivory leading-relaxed drop-shadow-md">
              {p.heroCaption}
            </p>
            {(p.awards[0] || p.badge) && (
              <div className="mt-8 inline-flex self-start items-center border border-ivory/40 bg-ivory/10 backdrop-blur-xl px-5 py-3 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-ivory font-medium shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-inset ring-ivory/10">
                {(p.awards[0] ?? p.badge)?.toUpperCase()}
              </div>
            )}
          </div>
        </section>

        {/* THREE-COLUMN BODY */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,2fr)_1fr] gap-10 lg:gap-12">
            {/* LEFT COLUMN — sticky scroll */}
            <aside className="lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-2 space-y-10">
              <Block label="Scope">
                <p className="font-sans text-[13px] leading-relaxed text-ivory/85">
                  {p.scope}
                </p>
              </Block>

              {p.awards.length > 0 && (
                <Block label="Awards">
                  <ul className="space-y-2">
                    {p.awards.map((a) => (
                      <li
                        key={a}
                        className="font-sans text-[13px] leading-relaxed text-ivory/85"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              {p.whatWasntWorking.length > 0 && (
                <ExpandableBlock label="What wasn't working" items={p.whatWasntWorking} />
              )}
            </aside>

            {/* CENTER — image stack */}
            <GalleryStack images={p.gallery} title={p.title} />


            {/* RIGHT COLUMN — sticky scroll */}
            <aside className="lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pl-2 space-y-10">
              <div>
                <h2 className="eyebrow text-ivory">
                  {p.rightHeading}
                </h2>
                <p className="mt-6 font-sans text-[13px] leading-relaxed text-ivory/85">
                  {p.rightIntro}
                </p>
              </div>

              {p.whatWeDid && (
                <ExpandableBlock label="What we did" items={[p.whatWeDid]} />
              )}

              {p.designFeatures.length > 0 && (
                <ExpandableBlock
                  label="Design features"
                  items={p.designFeatures}
                  numbered
                />
              )}

              {p.testimonial && (
                <ExpandableBlock label="Testimonial" items={[p.testimonial]} />
              )}
            </aside>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        {p.beforeImage && p.afterImage && (
          <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 border-t border-ivory/10">
            <h2 className="font-serif text-4xl md:text-6xl font-light text-ivory mb-12">
              Before &amp; After
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <BeforeAfter src={p.beforeImage} label="Before" />
              <BeforeAfter src={p.afterImage} label="After" />
            </div>
          </section>
        )}

        {/* MORE PROJECTS */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 border-t border-ivory/10">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-4xl md:text-6xl font-light text-ivory">
              More projects
            </h2>
            <Link
              to="/projects"
              className="font-sans text-[11px] tracking-[0.28em] uppercase text-ivory hover:text-brass inline-flex items-center gap-2"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-14">
            {getMoreProjects(p.slug, 3).map((m) => {
              const mSlug = slugify(m.suburb, m.title);
              return (
                <Link
                  key={mSlug}
                  to="/projects/$slug"
                  params={{ slug: mSlug }}
                  className="block group"
                >
                  <div className="relative overflow-hidden aspect-[4/5] bg-oxblood">
                    <img
                      src={m.image}
                      alt={`${m.title}, ${m.suburb}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 font-serif text-2xl font-light text-ivory leading-tight">
                    <span>{m.suburb}</span>
                    <span className="mx-3 opacity-50">|</span>
                    <span>{m.title}</span>
                  </div>
                  <div className="mt-2 font-sans text-[11px] tracking-[0.28em] uppercase text-ivory-muted">
                    {m.category}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-4 text-ivory-muted">{label}</div>
      {children}
    </div>
  );
}

function ExpandableBlock({
  label,
  items,
  numbered = false,
}: {
  label: string;
  items: string[];
  numbered?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory/15 pt-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={open}
      >
        <span className="eyebrow text-ivory">{label}</span>
        <span className="text-ivory/70 group-hover:text-ivory transition-colors">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden space-y-4">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 font-sans text-[13px] leading-relaxed text-ivory/85"
            >
              <span className="font-sans text-[11px] tracking-[0.28em] text-ivory-muted pt-1 shrink-0 w-6">
                {numbered ? String(i + 1).padStart(2, "0") : ""}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BeforeAfter({ src, label }: { src: string; label: string }) {
  return (
    <figure>
      <div className="overflow-hidden bg-burgundy aspect-[4/3]">
        <img src={src} alt={label} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <figcaption className="mt-5 font-sans text-[11px] tracking-[0.28em] uppercase text-ivory-muted">
        {label}
      </figcaption>
    </figure>
  );
}

type Orient = "portrait" | "landscape" | "unknown";

function GalleryStack({ images, title }: { images: string[]; title: string }) {
  const [orients, setOrients] = useState<Orient[]>(() => images.map(() => "unknown"));

  useEffect(() => {
    let cancelled = false;
    images.forEach((src, i) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        setOrients((prev) => {
          const next = [...prev];
          next[i] = img.naturalHeight > img.naturalWidth ? "portrait" : "landscape";
          return next;
        });
      };
      img.src = src;
    });
    return () => {
      cancelled = true;
    };
  }, [images]);

  // Group consecutive portraits into pairs; landscapes/unknowns stand alone.
  const rows: { type: "single" | "pair"; items: { src: string; index: number }[] }[] = [];
  let i = 0;
  while (i < images.length) {
    if (orients[i] === "portrait" && orients[i + 1] === "portrait") {
      rows.push({
        type: "pair",
        items: [
          { src: images[i], index: i },
          { src: images[i + 1], index: i + 1 },
        ],
      });
      i += 2;
    } else {
      rows.push({ type: "single", items: [{ src: images[i], index: i }] });
      i += 1;
    }
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {rows.map((row, ri) =>
        row.type === "pair" ? (
          <div key={ri} className="grid grid-cols-2 gap-3 md:gap-4 aspect-[3/2]">
            {row.items.map((it) => (
              <figure key={it.index} className="overflow-hidden bg-burgundy h-full">
                <img
                  src={it.src}
                  alt={`${title} — image ${it.index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </figure>
            ))}
          </div>
        ) : (
          <figure key={ri} className="overflow-hidden bg-burgundy">
            <img
              src={row.items[0].src}
              alt={`${title} — image ${row.items[0].index + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </figure>
        )
      )}
    </div>
  );
}
