import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getGoogleReviews } from "@/lib/google-reviews.functions";

const ROTATE_MS = 8000;

function excerpt(text: string, max: number): string {
  // Collapse line breaks / whitespace into a single space so paragraphs
  // don't break the layout.
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  // Prefer a sentence boundary, otherwise fall back to the last word.
  const sentenceEnd = Math.max(
    slice.lastIndexOf(". "),
    slice.lastIndexOf("! "),
    slice.lastIndexOf("? "),
  );
  if (sentenceEnd > max * 0.6) return clean.slice(0, sentenceEnd + 1);
  const wordEnd = slice.lastIndexOf(" ");
  return clean.slice(0, wordEnd > 0 ? wordEnd : max).trimEnd() + "…";
}

export function Pullquote() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data, isLoading } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60,
  });

  const allReviews = data?.reviews ?? [];
  // Trim each review to a calm, readable excerpt (≈ 280 chars, cut at a
  // sentence or word boundary so it never ends mid-word).
  const reviews = allReviews
    .filter((r) => r.text && r.text.trim().length > 0)
    .map((r) => ({ ...r, text: excerpt(r.text, 280) }));
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reviews.length < 2 || paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % reviews.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [reviews.length, paused]);

  const current = reviews[active];
  const total = reviews.length;
  const pad = (n: number) => String(n).padStart(2, "0");

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + total) % total);

  return (
    <section
      className="relative border-t border-border/60 bg-oxblood"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* LEFT / meta column */}
          <aside className="md:col-span-4 flex flex-col justify-between gap-12">
            <div>
              <div className="eyebrow text-ivory-muted">
                <span className="text-brass">✦</span>&nbsp;&nbsp;Testimonials
              </div>
              <h2 className="mt-6 font-sans text-3xl md:text-[2.75rem] text-ivory font-light leading-[1.1] tracking-[-0.015em]">
                Voices of the<br />
                <em className="not-italic text-ivory-muted">people we build for.</em>
              </h2>
            </div>

            {data?.rating != null && (
              <div className="flex items-end gap-4 border-t border-ivory/10 pt-6">
                <span className="font-sans text-5xl text-ivory leading-none">
                  {data.rating.toFixed(1)}
                </span>
                <div className="flex flex-col gap-1 pb-1">
                  <div className="flex gap-[2px] text-brass text-sm" aria-hidden>
                    {"✦✦✦✦✦"}
                  </div>
                  <span className="eyebrow text-ivory-muted/70 text-[10px]">
                    {data.totalRatings ?? 0} Google reviews
                  </span>
                </div>
              </div>
            )}
          </aside>

          {/* RIGHT / quote stage */}
          <div className="md:col-span-8 relative flex flex-col">
            {/* faint hairline */}
            <div aria-hidden className="hidden md:block absolute left-0 top-2 bottom-0 w-px bg-ivory/10" />

            <div className="md:pl-12 relative min-h-[260px] md:min-h-[300px]">
              {isLoading && <div className="h-6 w-64 bg-ivory/5 animate-pulse rounded" />}

              {!isLoading && current && (
                <figure key={active} className="animate-fade-in">
                  <span aria-hidden className="block font-sans text-brass/60 text-6xl leading-none mb-4">
                    “
                  </span>
                  <blockquote className="font-sans font-light text-ivory text-xl md:text-[1.75rem] leading-[1.4] tracking-[-0.005em]">
                    {current.text}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    {current.authorPhoto ? (
                      <img
                        src={current.authorPhoto}
                        alt={current.author}
                        className="h-10 w-10 rounded-full object-cover ring-1 ring-brass/40"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-brass/15 flex items-center justify-center text-brass font-sans">
                        {current.author.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-sans italic text-ivory text-base">
                        {current.author}
                      </span>
                      <span className="eyebrow text-ivory-muted/60 text-[10px]">
                        Google review
                      </span>
                    </div>
                  </figcaption>
                </figure>
              )}

              {!isLoading && !current && (
                <p className="text-ivory-muted">
                  {data?.error ?? "No reviews available yet."}
                </p>
              )}
            </div>

            {/* Controls row */}
            {total > 1 && (
              <div className="md:pl-12 mt-12 flex items-center justify-between border-t border-ivory/10 pt-6">
                <span className="font-sans text-ivory-muted/80 text-sm tabular-nums tracking-wider">
                  <span className="text-ivory">{pad(active + 1)}</span>
                  <span className="mx-2 text-ivory-muted/40">/</span>
                  <span>{pad(total)}</span>
                </span>

                <div className="flex items-center gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Review ${i + 1}`}
                      className="group relative h-px w-8 bg-ivory/15 overflow-hidden hover:bg-ivory/30 transition-colors"
                    >
                      <span
                        className={`absolute inset-y-0 left-0 bg-brass transition-all ${
                          i === active
                            ? paused
                              ? "w-full"
                              : "w-full [transition:width_8s_linear]"
                            : "w-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous review"
                    className="h-9 w-9 flex items-center justify-center text-ivory-muted hover:text-brass transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next review"
                    className="h-9 w-9 flex items-center justify-center text-ivory-muted hover:text-brass transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
