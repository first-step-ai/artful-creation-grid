import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getGoogleReviews } from "@/lib/google-reviews.functions";

export function Pullquote() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data, isLoading } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60,
  });

  const reviews = data?.reviews ?? [];
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (reviews.length < 2 || isPaused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(id);
  }, [reviews.length, isPaused]);

  const current = reviews[active];

  return (
    <section
      className="relative border-t border-border/60 bg-oxblood overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* subtle brass orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brass) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 py-28 md:py-40">
        {/* Eyebrow */}
        <div className="text-center">
          <div className="eyebrow inline-flex items-center justify-center text-ivory-muted">
            <span className="text-brass">✦</span>&nbsp;&nbsp;In their words
          </div>
        </div>

        {/* Quote stage */}
        <div className="relative mt-14 md:mt-20 min-h-[280px] md:min-h-[320px] flex items-center justify-center">
          {isLoading && (
            <div className="h-8 w-48 bg-ivory/5 animate-pulse rounded" />
          )}

          {!isLoading && current && (
            <figure key={active} className="text-center animate-fade-in">
              <span aria-hidden className="block font-serif text-brass/40 text-7xl md:text-8xl leading-none mb-4">
                “
              </span>
              <blockquote className="font-serif font-light text-ivory text-2xl md:text-[2.5rem] leading-[1.25] tracking-[-0.01em] max-w-4xl mx-auto">
                {current.text}
              </blockquote>
              <figcaption className="mt-12 flex flex-col items-center gap-2">
                <div className="h-px w-10 bg-brass/50" />
                <span className="font-serif italic text-ivory text-lg mt-3">{current.author}</span>
                <span className="eyebrow text-ivory-muted/60 text-[10px]">
                  {current.relativeTime} · Google review
                </span>
              </figcaption>
            </figure>
          )}

          {!isLoading && !current && (
            <p className="text-ivory-muted text-center">
              {data?.error ?? "No reviews available yet."}
            </p>
          )}
        </div>

        {/* Progress bars / indicators */}
        {reviews.length > 1 && (
          <div className="mt-16 md:mt-20 flex items-center justify-center gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show review ${i + 1}`}
                className="group relative h-px w-12 bg-ivory/15 overflow-hidden hover:bg-ivory/30 transition-colors"
              >
                <span
                  className={`absolute inset-y-0 left-0 bg-brass transition-all ${
                    i === active
                      ? isPaused
                        ? "w-full"
                        : "w-full [transition:width_7s_linear]"
                      : i < active
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {/* Aggregate footer */}
        {data?.rating != null && (
          <div className="mt-10 flex items-center justify-center gap-2 eyebrow text-ivory-muted/60 text-[11px]">
            <span className="text-brass">{data.rating.toFixed(1)}</span>
            <span>·</span>
            <span>{data.totalRatings ?? 0} Google reviews</span>
          </div>
        )}
      </div>
    </section>
  );
}
