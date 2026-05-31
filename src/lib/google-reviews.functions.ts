import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  author: string;
  authorPhoto: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
};

export type GoogleReviewsPayload = {
  rating: number | null;
  totalRatings: number | null;
  reviews: GoogleReview[];
  error: string | null;
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsPayload> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return {
        rating: null,
        totalRatings: null,
        reviews: [],
        error: "Google Places API key or Place ID not configured.",
      };
    }

    try {
      const res = await fetch(
        `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
        {
          method: "GET",
          headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          },
        },
      );

      if (!res.ok) {
        const body = await res.text();
        console.error("Google Places error", res.status, body);
        return {
          rating: null,
          totalRatings: null,
          reviews: [],
          error: `Google Places API returned ${res.status}`,
        };
      }

      const data = (await res.json()) as {
        rating?: number;
        userRatingCount?: number;
        reviews?: Array<{
          rating?: number;
          text?: { text?: string };
          originalText?: { text?: string };
          relativePublishTimeDescription?: string;
          publishTime?: string;
          authorAttribution?: { displayName?: string; photoUri?: string };
        }>;
      };

      const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => ({
        author: r.authorAttribution?.displayName ?? "Anonymous",
        authorPhoto: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? 0,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? "",
      }));

      return {
        rating: data.rating ?? null,
        totalRatings: data.userRatingCount ?? null,
        reviews,
        error: null,
      };
    } catch (err) {
      console.error("Google Places fetch failed", err);
      return {
        rating: null,
        totalRatings: null,
        reviews: [],
        error: "Failed to fetch Google reviews.",
      };
    }
  },
);
