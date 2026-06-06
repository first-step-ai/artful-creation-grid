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

export type ProjectDetail = {
  slug: string;
  suburb: string;
  title: string;
  category: string;
  hero: string;
  heroCaption: string;
  badge?: string;
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

export const projectDetails: Record<string, ProjectDetail> = {
  "rozelle-refined-family-living": {
    slug: "rozelle-refined-family-living",
    suburb: "Rozelle",
    title: "Refined Family Living",
    category: "Full Interior",
    badge: "2025 HIA Renovated Kitchen of the Year · Winner",
    hero: p3,
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

// Fallback generator for projects that don't have full detail yet
export function getProjectDetail(slug: string): ProjectDetail {
  return (
    projectDetails[slug] ?? {
      slug,
      suburb: "Project",
      title: "Coming soon",
      category: "Full Interior",
      hero: bexleyAsset.url,
      heroCaption: "Project details coming soon.",
      scope: "Full project details will be published shortly.",
      awards: [],
      rightHeading: "About the project",
      rightIntro: "More information coming soon.",
      designFeatures: [],
      whatWasntWorking: [],
      gallery: [materials, serviceInteriors, serviceBathrooms],
    }
  );
}

export function slugify(suburb: string, title: string) {
  return `${suburb}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
