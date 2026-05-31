import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getGoogleReviews, type GoogleReview } from "@/lib/google-reviews.functions";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px] text-brass text-xs" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < Math.round(rating) ? "opacity-100" : "opacity-20"}>
          ✦
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="shrink-0 w-[320px] md:w-[380px] mx-3 md:mx-4 border border-ivory/10 bg-burgundy/30 backdrop-blur-sm p-6 md:p-7 transition-all duration-500 hover:border-brass/40 hover:bg-burgundy/50 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <span className="eyebrow text-ivory-muted/60 text-[10px]">{review.relativeTime}</span>
      </div>
      <p className="mt-5 font-serif text-ivory font-light leading-[1.4] text-base md:text-lg line-clamp-5">
        <span className="text-brass mr-1">“</span>
        {review.text}
        <span className="text-brass ml-1">”</span>
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-ivory/10 pt-4">
        {review.authorPhoto ? (
          <img
            src={review.authorPhoto}
            alt={review.author}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-brass/40"
            loading="lazy"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-brass/20 flex items-center justify-center text-brass text-sm font-serif">
            {review.author.charAt(0)}
          </div>
        )}
        <span className="text-ivory text-sm">{review.author}</span>
      </footer>
    </article>
  );
}

function Marquee({ reviews, reverse = false, speed = 60 }: { reviews: GoogleReview[]; reverse?: boolean; speed?: number }) {
  if (reviews.length === 0) return null;
  // Duplicate the list for a seamless loop
  const loop = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Pullquote() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data, isLoading } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 60,
  });

  const reviews = data?.reviews ?? [];
  const hasReviews = reviews.length > 0;
  const rowA = reviews;
  const rowB = reviews.length > 2 ? [...reviews].reverse() : reviews;

  return (
    <section className="border-t border-border/60 bg-oxblood overflow-hidden">
      <div className="py-24 md:py-32">
        {/* Header */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-14 md:mb-20 text-center">
          <div className="eyebrow inline-flex items-center justify-center">
            <span className="text-brass">✦</span>&nbsp;&nbsp;In their words
          </div>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl text-ivory font-light leading-[1.05] tracking-[-0.015em]">
            What our clients <em className="not-italic text-ivory-muted">say.</em>
          </h2>
          {data?.rating != null && (
            <div className="mt-6 inline-flex items-center gap-3">
              <span className="font-serif text-2xl text-brass">{data.rating.toFixed(1)}</span>
              <Stars rating={data.rating} />
              <span className="eyebrow text-ivory-muted/70 text-[11px]">
                · {data.totalRatings ?? 0} Google reviews
              </span>
            </div>
          )}
        </div>

        {/* Marquees */}
        {isLoading && (
          <div className="flex gap-6 px-6 opacity-40">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-56 w-[340px] shrink-0 border border-ivory/5 bg-burgundy/10 animate-pulse" />
            ))}
          </div>
        )}

        {!isLoading && hasReviews && (
          <div className="flex flex-col gap-5 md:gap-6">
            <Marquee reviews={rowA} speed={70} />
            <Marquee reviews={rowB} reverse speed={90} />
          </div>
        )}

        {!isLoading && !hasReviews && (
          <div className="mx-auto max-w-xl border border-ivory/10 bg-burgundy/20 p-10 text-center">
            <p className="text-ivory-muted">{data?.error ?? "No reviews available yet."}</p>
          </div>
        )}
      </div>
    </section>
  );
}
