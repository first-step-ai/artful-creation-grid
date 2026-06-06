import p3 from "@/assets/project-3.jpg";
import projectFeature from "@/assets/project-feature.jpg";
import materials from "@/assets/materials.jpg";
import serviceBathrooms from "@/assets/service-bathrooms.jpg";
import serviceKitchens from "@/assets/service-kitchens.jpg";
import serviceLaundries from "@/assets/service-laundries.jpg";
import serviceInteriors from "@/assets/service-interiors.jpg";
import archedAsset from "@/assets/arched-house.jpg.asset.json";
import oakAsset from "@/assets/stained-oak-kitchen.jpg.asset.json";
import bexleyAsset from "@/assets/bexley-bathroom.jpg.asset.json";
import hotelAsset from "@/assets/hotel-inspired-luxury.jpg.asset.json";

export type ProjectSummary = {
  suburb: string;
  title: string;
  category: string;
  image: string;
  badge?: "Award" | "Finalist" | null;
};

export type ProjectDetail = ProjectSummary & {
  slug: string;
  hero: string;
  heroCaption: string;
  scope: string;
  awards: string[];
  rightHeading: string;
  rightIntro: string;
  designFeatures: string[];
  whatWasntWorking: string[];
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
};

export function slugify(suburb: string, title: string) {
  return `${suburb}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// All projects shown on /projects (single source of truth)
export const projects: ProjectSummary[] = [
  { suburb: "Rozelle", title: "Refined Family Living", category: "Full Interior", image: p3, badge: "Award" },
  { suburb: "Abbotsford", title: "Hotel-Inspired Luxury", category: "Full Interior", image: hotelAsset.url },
  { suburb: "Pyrmont", title: "Elevated City Living", category: "Full Interior", image: oakAsset.url },
  { suburb: "Annandale", title: "Smart Family Living", category: "Bathroom", image: archedAsset.url, badge: "Finalist" },
  { suburb: "Camperdown", title: "Inner-city Charm", category: "Full Interior", image: serviceBathrooms },
  { suburb: "Bexley", title: "Bold Utility", category: "Bathroom", image: bexleyAsset.url },
  { suburb: "Drummoyne", title: "Modern Luxury Living", category: "Bathroom", image: projectFeature },
  { suburb: "Putney", title: "Reimagined Heritage Living", category: "Full Interior", image: serviceInteriors },
  { suburb: "Mosman", title: "Considered Kitchen", category: "Kitchen", image: serviceKitchens },
  { suburb: "Paddington", title: "Quiet Laundry", category: "Laundry", image: serviceLaundries },
  { suburb: "Bondi", title: "Soft Ensuite", category: "Ensuite", image: materials },
];

// Rich detail overrides (keyed by slug). Anything missing falls back to a sensible default.
const detailOverrides: Record<string, Partial<ProjectDetail>> = {
  "rozelle-refined-family-living": {
    badge: "Award",
    heroCaption:
      "Award-winning Inner West renovation blending heritage charm with modern family life.",
    scope:
      "Full design + build across kitchen, laundry and ensuite within a traditional Rozelle terrace footprint.",
    awards: [
      "2025 HIA Renovated Kitchen of the Year · Winner",
      "2025 HIA Kitchen Design of the Year · Finalist",
      "2025 HIA Renovated Bathroom of the Year · Finalist",
      "2025 HIA Bathroom Design of the Year · Finalist",
    ],
    rightHeading: "Award-Winning Family Living",
    rightIntro:
      "A Rozelle terrace kitchen, laundry, and ensuite, completely reconsidered. The brief was clear: a home that worked better for a family, delivered within a realistic budget. The result went on to win the 2025 HIA Renovated Kitchen of the Year.",
    designFeatures: [
      "Full floorplan reconfiguration across kitchen, laundry, and ensuite",
      "Sculptural curved island anchoring the kitchen and living area",
      "Bespoke joinery with extensive concealed storage throughout",
      "Verde Tempest stone splashbacks and fireplace cladding",
      "Fluted glass cabinetry referencing the home's heritage character",
      "Dedicated laundry room improving flow and function",
    ],
    whatWasntWorking: [
      "Already through the architectural process, builder quotes had doubled the original budget",
      "Kitchen felt closed off and underutilised",
      "European laundry took up space the home needed",
      "Shared ensuite lacked the calm and privacy of a proper retreat",
      "Needed a team who could deliver on a realistic budget",
    ],
    gallery: [oakAsset.url, archedAsset.url, hotelAsset.url, projectFeature],
    beforeImage: serviceLaundries,
    afterImage: serviceKitchens,
  },
};

function buildDetail(s: ProjectSummary): ProjectDetail {
  const slug = slugify(s.suburb, s.title);
  const o = detailOverrides[slug] ?? {};
  return {
    ...s,
    slug,
    hero: o.hero ?? s.image,
    heroCaption:
      o.heroCaption ??
      `A considered ${s.category.toLowerCase()} renovation in ${s.suburb} — crafted for how this family really lives.`,
    scope:
      o.scope ??
      `Full design + build across the ${s.category.toLowerCase()}, delivered end-to-end by the AM team.`,
    awards: o.awards ?? (s.badge === "Award"
      ? ["HIA Award Winner"]
      : s.badge === "Finalist"
      ? ["HIA Award Finalist"]
      : []),
    rightHeading: o.rightHeading ?? `${s.suburb} ${s.title}`,
    rightIntro:
      o.rightIntro ??
      `A ${s.category.toLowerCase()} renovation in ${s.suburb}, designed and built by AM Bathrooms + Projects. Heritage details, modern function, and finishes chosen to age beautifully.`,
    designFeatures: o.designFeatures ?? [
      "Bespoke joinery tailored to the footprint",
      "Considered stone and tile pairings",
      "Concealed storage throughout",
      "Warm, layered lighting plan",
      "Soft, durable finishes built for family life",
    ],
    whatWasntWorking: o.whatWasntWorking ?? [
      "Tight footprint that wasn't being used well",
      "Dated finishes pulling the rest of the home down",
      "Poor flow between the renovated space and the home",
      "Storage that never quite worked",
    ],
    gallery: o.gallery ?? [s.image, materials, serviceInteriors],
    beforeImage: o.beforeImage,
    afterImage: o.afterImage,
    badge: o.badge ?? s.badge ?? null,
  };
}

export const projectDetails: Record<string, ProjectDetail> = Object.fromEntries(
  projects.map((p) => {
    const d = buildDetail(p);
    return [d.slug, d];
  }),
);

export function getProjectDetail(slug: string): ProjectDetail {
  return (
    projectDetails[slug] ?? {
      ...buildDetail({
        suburb: "Project",
        title: "Coming soon",
        category: "Full Interior",
        image: bexleyAsset.url,
      }),
      slug,
    }
  );
}

export function getMoreProjects(currentSlug: string, count = 3): ProjectSummary[] {
  return projects.filter((p) => slugify(p.suburb, p.title) !== currentSlug).slice(0, count);
}
