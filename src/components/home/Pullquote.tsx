import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useReveal } from "@/hooks/use-reveal";
import { getGoogleReviews, type GoogleReview } from "@/lib/google-reviews.functions";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px] text-brass" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < Math.round(rating) ? "opacity-100" : "opacity-25"}>
          ✦
        </span>
      ))}
    </div>
  );
}

// Asymmetric grid slot definitions — desktop only; mobile collapses to a stack
const SLOTS = [
  "md:col-span-7 md:row-span-2", // hero quote (big)
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-5 md:col-start-8",
  "md:col-span-6",
] as const;

function ReviewCard({
  review,
  index,
  featured,
}: {
  review: GoogleReview;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`${SLOTS[index] ?? ""} group relative flex flex-col justify-between border border-ivory/10 bg-burgundy/20 p-8 md:p-10 transition-colors duration-500 hover:bg-burgundy/40`}
    >
      <div>
        <div className="flex items-center justify-between">
          <Stars rating={review.rating} />
          <span className="eyebrow text-ivory-muted/70 text-[10px]">{review.relativeTime}</span>
        </div>
        <blockquote
          className={`mt-6 font-serif text-ivory font-light leading-[1.25] tracking-[-0.01em] ${
            featured ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
          }`}
        >
          <span className="text-brass font-serif italic mr-1">“</span>
          {review.text}
          <span className="text-brass font-serif italic ml-1">”</span>
        </blockquote>
      </div>
      <footer className="mt-8 flex items-center gap-3 border-t border-ivory/10 pt-5">
        {review.authorPhoto ? (
          <img
            src={review.authorPhoto}
            alt={review.author}
            className="h-9 w-9 rounded-full object-cover ring-1 ring-brass/40"
            loading="lazy"
          />
        ) : (
          <div className="h-9 w-9 rounded-full bg-brass/20 flex items-center justify-center text-brass font-serif">
            {review.author.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-ivory text-sm">{review.author}</span>
          <span className="eyebrow text-ivory-muted/70 text-[10px]">Google review</span>
        </div>
      </footer>
    </article>
  );
}

export function Pullquote() {
  const ref = useReveal<HTMLDivElement>();
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data, isLoading } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60, // 1h
  });

  const reviews = data?.reviews ?? [];
  const hasReviews = reviews.length > 0;

  return (
    <section className="border-t border-border/60 bg-oxblood">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32"
      >
        {/* Header rail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <div className="eyebrow">
              <span className="text-brass">✦</span>&nbsp;&nbsp;In their words
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl text-ivory font-light leading-[1.05] tracking-[-0.015em]">
              What our clients <em className="not-italic text-ivory-muted">say.</em>
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            {data?.rating != null && (
              <div className="inline-flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl text-brass">{data.rating.toFixed(1)}</span>
                  <Stars rating={data.rating} />
                </div>
                <span className="eyebrow text-ivory-muted">
                  {data.totalRatings ?? 0} Google reviews
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Asymmetric grid */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {SLOTS.map((slot, i) => (
              <div
                key={i}
                className={`${slot} h-64 border border-ivory/5 bg-burgundy/10 animate-pulse`}
              />
            ))}
          </div>
        )}

        {!isLoading && hasReviews && (
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:gap-8 md:auto-rows-fr">
            {reviews.slice(0, 5).map((review, i) => (
              <ReviewCard key={i} review={review} index={i} featured={i === 0} />
            ))}
          </div>
        )}

        {!isLoading && !hasReviews && (
          <div className="border border-ivory/10 bg-burgundy/20 p-10 text-center">
            <p className="text-ivory-muted">
              {data?.error ?? "No reviews available yet."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
