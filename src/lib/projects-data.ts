// Bexley
import bexley1 from "@/assets/projects/bexley-1.jpg.asset.json";
import bexley2 from "@/assets/projects/bexley-2.jpg.asset.json";
import bexley3 from "@/assets/projects/bexley-3.jpg.asset.json";
import bexley4 from "@/assets/projects/bexley-4.jpg.asset.json";
import bexley5 from "@/assets/projects/bexley-5.jpg.asset.json";
import bexley6 from "@/assets/projects/bexley-6.jpg.asset.json";
import bexley7 from "@/assets/projects/bexley-7.jpg.asset.json";
import bexley8 from "@/assets/projects/bexley-8.jpg.asset.json";
// Drummoyne
import drum1 from "@/assets/projects/drummoyne-1.jpg.asset.json";
import drum2 from "@/assets/projects/drummoyne-2.jpg.asset.json";
import drum3 from "@/assets/projects/drummoyne-3.jpg.asset.json";
import drum4 from "@/assets/projects/drummoyne-4.jpg.asset.json";
import drum5 from "@/assets/projects/drummoyne-5.jpg.asset.json";
import drum6 from "@/assets/projects/drummoyne-6.jpg.asset.json";
import drum7 from "@/assets/projects/drummoyne-7.jpg.asset.json";
import drum8 from "@/assets/projects/drummoyne-8.jpg.asset.json";

// Rozelle
import rozelle1 from "@/assets/projects/rozelle-1.jpg.asset.json";
import rozelle2 from "@/assets/projects/rozelle-2.jpg.asset.json";
import rozelle3 from "@/assets/projects/rozelle-3.jpg.asset.json";
import rozelle4 from "@/assets/projects/rozelle-4.jpg.asset.json";
import rozelle5 from "@/assets/projects/rozelle-5.jpg.asset.json";
import rozelle6 from "@/assets/projects/rozelle-6.jpg.asset.json";
import rozelle7 from "@/assets/projects/rozelle-7.jpg.asset.json";
import rozelle8 from "@/assets/projects/rozelle-8.jpg.asset.json";
// Abbotsford
import abbots1 from "@/assets/projects/abbotsford-1.jpg.asset.json";
import abbots2 from "@/assets/projects/abbotsford-2.jpg.asset.json";
import abbots3 from "@/assets/projects/abbotsford-3.jpg.asset.json";
import abbots4 from "@/assets/projects/abbotsford-4.jpg.asset.json";
import abbots5 from "@/assets/projects/abbotsford-5.jpg.asset.json";
import abbots6 from "@/assets/projects/abbotsford-6.jpg.asset.json";
import abbots7 from "@/assets/projects/abbotsford-7.jpg.asset.json";
import abbots8 from "@/assets/projects/abbotsford-8.jpg.asset.json";
// Pyrmont
import pyrmont1 from "@/assets/projects/pyrmont-1.jpg.asset.json";
import pyrmont2 from "@/assets/projects/pyrmont-2.jpg.asset.json";
import pyrmont3 from "@/assets/projects/pyrmont-3.jpg.asset.json";
import pyrmont4 from "@/assets/projects/pyrmont-4.jpg.asset.json";
import pyrmont5 from "@/assets/projects/pyrmont-5.jpg.asset.json";
import pyrmont6 from "@/assets/projects/pyrmont-6.jpg.asset.json";
import pyrmont7 from "@/assets/projects/pyrmont-7.jpg.asset.json";
import pyrmont8 from "@/assets/projects/pyrmont-8.jpg.asset.json";
// Annandale
import annan1 from "@/assets/projects/annandale-1.jpg.asset.json";
import annan2 from "@/assets/projects/annandale-2.jpg.asset.json";
import annan3 from "@/assets/projects/annandale-3.jpg.asset.json";
import annan4 from "@/assets/projects/annandale-4.jpg.asset.json";
import annan5 from "@/assets/projects/annandale-5.jpg.asset.json";
import annan6 from "@/assets/projects/annandale-6.jpg.asset.json";
import annan7 from "@/assets/projects/annandale-7.jpg.asset.json";
import annan8 from "@/assets/projects/annandale-8.jpg.asset.json";
// Camperdown
import camp1 from "@/assets/projects/camperdown-1.jpg.asset.json";
import camp2 from "@/assets/projects/camperdown-2.jpg.asset.json";
import camp3 from "@/assets/projects/camperdown-3.jpg.asset.json";
import camp4 from "@/assets/projects/camperdown-4.jpg.asset.json";
import camp5 from "@/assets/projects/camperdown-5.jpg.asset.json";
import camp6 from "@/assets/projects/camperdown-6.jpg.asset.json";
import camp7 from "@/assets/projects/camperdown-7.jpg.asset.json";
import camp8 from "@/assets/projects/camperdown-8.jpg.asset.json";

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
  whatWeDid?: string;
  testimonial?: string;
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
  { suburb: "Rozelle", title: "Refined Family Living", category: "Full Interior", image: rozelle1.url, badge: "Award" },
  { suburb: "Abbotsford", title: "Hotel-Inspired Luxury", category: "Full Interior", image: abbots1.url },
  { suburb: "Pyrmont", title: "Elevated City Living", category: "Full Interior", image: pyrmont1.url },
  { suburb: "Annandale", title: "Smart Family Living", category: "Bathroom", image: annan1.url, badge: "Finalist" },
  { suburb: "Camperdown", title: "Inner-city Charm", category: "Full Interior", image: camp1.url },
  { suburb: "Bexley", title: "Bold Utility", category: "Bathroom", image: bexley1.url },
  { suburb: "Drummoyne", title: "Modern Luxury Living", category: "Bathroom", image: drum1.url },
];

// Rich detail overrides (keyed by slug). Anything missing falls back to a sensible default.
const detailOverrides: Record<string, Partial<ProjectDetail>> = {
  "rozelle-refined-family-living": {
    badge: "Award",
    heroCaption: "Award-winning Inner West renovation blending heritage charm with modern family life.",
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
    whatWasntWorking: [
      "Already through the architectural process, builder quotes had doubled the original budget",
      "Kitchen felt closed off and underutilised",
      "European laundry took up space the home needed",
      "Shared ensuite lacked the calm and privacy of a proper retreat",
      "Needed a team who could deliver vision and numbers, not just one or the other",
    ],
    whatWeDid:
      "We reworked the layouts from the ground up with budget and buildability at the centre of every decision. The kitchen was opened up and reoriented around a sculptural island. The laundry was relocated to its own room, freeing up space for joinery and flow. Upstairs, the ensuite became a Jack-and-Jill retreat with a curved feature wall, retained skylight, and layered materials that bring in warmth and light.",
    designFeatures: [
      "Full floorplan reconfiguration across kitchen, laundry, and ensuite",
      "Sculptural curved island anchoring the kitchen and living area",
      "Bespoke joinery with extensive concealed storage throughout",
      "Verde Tempest stone splashbacks and fireplace cladding",
      "Fluted glass cabinetry referencing the home's heritage character",
      "Dedicated laundry room improving flow and function",
      "Jack-and-Jill ensuite layout with private shower and WC zoning",
      "Curved mosaic feature wall behind freestanding bath",
      "Skylight retained and amplified through reflective finishes",
      "Warm brass fixtures paired with soft tonal finishes",
    ],
    testimonial:
      "Jenny listened carefully to my design aesthetic and consistently provided great suggestions which have turned out beautifully. When you engage Jenny and Ante, you are selecting a team that truely care.",
    gallery: [rozelle2.url, rozelle3.url, rozelle4.url, rozelle5.url, rozelle6.url, rozelle7.url, rozelle8.url],
  },

  "abbotsford-hotel-inspired-luxury": {
    heroCaption: "Award Winning",
    scope:
      "Ensuite, walk-in robe, main bathroom and bespoke study storage — reimagined as one cohesive master suite.",
    awards: [],
    rightHeading: "Hotel-Inspired Luxury",
    rightIntro:
      "An Abbotsford home renovated to deliver what a previous renovation couldn't. The ensuite, walk-in robe, and main bathroom were each reimagined with a hotel-inspired approach — balancing sophistication with storage, function, and a material palette that feels calm and considered throughout.",
    whatWasntWorking: [
      "A previous renovation had left the clients disappointed",
      "Bathrooms lacked warmth and visual depth",
      "Storage was impractical throughout",
      "Ensuite and walk-in robe felt disconnected from the elevated atmosphere they wanted",
      "Home didn't feel refined, cohesive, or effortlessly liveable",
    ],
    whatWeDid:
      "We redesigned the ensuite and walk-in robe as a single, considered master suite. Dark stone finishes and smoked glass shower screens introduced depth and a sense of occasion. Custom joinery resolved the storage throughout. The main bathroom was updated to sit cohesively with the new spaces, and bespoke study storage completed the interior.",
    designFeatures: [
      "Hotel-inspired ensuite with dark stone finishes and smoked glass shower screens",
      "Marble-clad feature walls and custom marble vanity countertops",
      "Bespoke walk-in robe joinery tailored for organisation and daily use",
      "Integrated laundry bin concealed within cabinetry",
      "Custom makeup area integrated into the master suite",
      "Tall vanity cupboard with practical eye-level storage",
      "Layered lighting enhancing warmth and spatial quality",
      "Cohesive material palette connecting all renovated spaces",
    ],
    testimonial:
      "We recently had AM complete our renovation and could not be any happier. From the design stage to handover, everything went as smooth as possible. Highly recommend the whole team!!",
    gallery: [abbots2.url, abbots3.url, abbots4.url, abbots5.url, abbots6.url, abbots7.url, abbots8.url],
  },

  "pyrmont-elevated-city-living": {
    heroCaption: "Award Winning",
    scope:
      "Full apartment rezoning with bespoke joinery, dedicated bar, integrated study, and harbour-oriented living.",
    awards: [],
    rightHeading: "Elevated City Living",
    rightIntro:
      "A Pyrmont apartment transformed for a downsizing lifestyle. Every space was considered for its purpose: entertaining, resting, working, and living well. The result is a home that feels calm and expansive, with harbour views at the centre and no detail left unconsidered.",
    whatWasntWorking: [
      "Living areas weren't oriented around the harbour outlook",
      "Storage was scattered rather than resolved",
      "No dedicated study space",
      "No proper bar for entertaining",
      "Apartment wasn't earning its place for a downsizing lifestyle",
    ],
    whatWeDid:
      "We rezoned the apartment with purpose, reorienting the living areas to make the most of the harbour views. Bespoke joinery resolved storage throughout, a discreet study was integrated without compromising flow, and a dedicated bar added the kind of considered indulgence a home like this called for.",
    designFeatures: [
      "Living areas reoriented to capture harbour views",
      "Precise spatial zoning across the full apartment",
      "Bespoke joinery with integrated storage throughout",
      "Dedicated entertaining bar",
      "Discreet study integrated into the floorplan",
      "Layered storage resolving everyday function",
      "Considered finishes connecting each space cohesively",
    ],
    gallery: [pyrmont2.url, pyrmont3.url, pyrmont4.url, pyrmont5.url, pyrmont6.url, pyrmont7.url, pyrmont8.url],
  },

  "annandale-smart-family-living": {
    badge: "Finalist",
    heroCaption: "Award Winning",
    scope:
      "Reworked bathroom within an existing terrace footprint — separate bath and shower, retained skylight, bespoke detailing.",
    awards: ["HIA Award Finalist"],
    rightHeading: "Smart Family Living",
    rightIntro:
      "An Annandale terrace bathroom that wasn't working for a family. Dark, tight, and short on storage — the brief was to make it genuinely functional without losing character. The result is a light-filled space with a separate bath and shower, generous storage, and bespoke detailing throughout.",
    whatWasntWorking: [
      "Original bathroom was dark and worked against the household",
      "Tight footprint limited what the space could hold",
      "No room for both a bath and a shower",
      "Storage was inadequate for a family",
      "Layout hadn't been thought through for daily use",
    ],
    whatWeDid:
      "A new layout was developed to fit both a separate bath and shower within the existing footprint. The existing skylight was retained, keeping the room light without structural changes. Bespoke curves, integrated lighting, and considered finishes were brought in to give the space character without compromising practicality.",
    designFeatures: [
      "New layout fitting separate bath and shower within a tight footprint",
      "Skylight retained to maintain natural light",
      "Bespoke curved detailing softening the room",
      "Generous integrated storage throughout",
      "Layered ambient and task lighting",
      "Custom finishes balancing character with everyday function",
      "Considered material selection throughout",
    ],
    testimonial:
      "We couldn't be more thrilled with our experience working with AM Renovations, and especially with Jenny, who made our vision a reality from the very first moment we connected. Right from the start, we knew that Jenny just *got it*.",
    gallery: [annan2.url, annan3.url, annan4.url, annan5.url, annan6.url, annan7.url, annan8.url],
  },

  "camperdown-inner-city-charm": {
    heroCaption: "Award Winning",
    scope:
      "Kitchen, bathroom, and living spaces reconsidered within a fixed apartment footprint.",
    awards: [],
    rightHeading: "Inner-city Charm",
    rightIntro:
      "A Camperdown apartment renovation where the footprint was fixed and the challenge was making every centimetre count. Kitchen, bathroom, and living spaces were each reconsidered, creating a home that feels cohesive, calm, and genuinely well-designed for the way the client lives.",
    whatWasntWorking: [
      "No ability to expand the footprint — every spatial decision had to be deliberate",
      "Existing layout wasn't making the most of what was there",
      "Storage was limited",
      "Connections between spaces felt unresolved",
      "Aesthetic didn't reflect the client's taste",
    ],
    whatWeDid:
      "Working within the fixed footprint, we rethought each space from the floor plan outward. Bespoke kitchen joinery integrated storage without visual clutter. Custom bathroom joinery made compact spaces feel considered rather than constrained. Soft curves, layered lighting, and a warm tonal palette brought the apartment together as a cohesive whole.",
    designFeatures: [
      "Bespoke kitchen joinery with integrated storage",
      "Streamlined cabinetry throughout for a clean architectural finish",
      "Custom bathroom joinery designed for compact living",
      "Soft curves and sculptural detailing improving flow",
      "Layered ambient and feature lighting",
      "Warm tonal material palette connecting each space",
      "Carefully resolved storage reducing visual clutter throughout",
    ],
    gallery: [camp2.url, camp3.url, camp4.url, camp5.url, camp6.url, camp7.url, camp8.url],
  },

  "bexley-bold-utility": {
    heroCaption: "Award Winning",
    scope:
      "Bathroom and laundry redesigned within the existing footprint — sculptural, layered, and tailored to the clients.",
    awards: [],
    rightHeading: "Bold Utility",
    rightIntro:
      "A Bexley bathroom and laundry brought back to life with personality and purpose. Working within the existing footprint, the brief was to create spaces that felt genuinely elevated — functional for daily use, layered with warmth and texture, and tailored to the clients' tastes rather than off-the-shelf.",
    whatWasntWorking: [
      "Bathroom layout was awkward and restrictive",
      "Storage was limited",
      "Space lacked warmth and finish",
      "Circulation felt tight and the atmosphere was flat",
      "Laundry was disconnected and purely functional",
    ],
    whatWeDid:
      "We redesigned the bathroom around a more generous wet zone, improving both circulation and the sense of space. Sculptural forms, feature tiling, and warm brass accents introduced depth and character. Custom cabinetry resolved storage throughout. The laundry was brought into the renovation with concealed storage and bespoke joinery.",
    designFeatures: [
      "Reconfigured bathroom layout with generous wet-zone design",
      "Feature tiling introducing depth and personality",
      "Warm brass fixtures throughout",
      "Sculptural detailing softening the compact footprint",
      "Custom cabinetry with integrated storage solutions",
      "Built-in shower seating for comfort and practicality",
      "Layered ambient and feature lighting",
      "Concealed laundry storage with bespoke joinery",
      "Refined tonal finishes balancing boldness with longevity",
    ],
    testimonial:
      "We had a difficult bathroom layout and AM came up with something that far exceeded our expectations. They were patiently attentive to our tastes and came up with options that made decisions easy, this resulted in a design that felt like our own.",
    gallery: [bexley2.url, bexley3.url, bexley4.url, bexley5.url, bexley6.url, bexley7.url, bexley8.url],
  },

  "drummoyne-modern-luxury-living": {
    heroCaption: "Award Winning",
    scope:
      "Two bathrooms in a Drummoyne apartment, each reimagined from the ground up within a fixed footprint.",
    awards: [],
    rightHeading: "Modern Luxury Living",
    rightIntro:
      "Two bathrooms in a Drummoyne apartment, each reimagined from the ground up. Within a fixed apartment footprint, the goal was to improve functionality, increase storage, and introduce warmth and softness — creating bathrooms that feel calm, light-filled, and properly suited to everyday living.",
    whatWasntWorking: [
      "Both bathrooms felt dated and narrow",
      "Limited storage throughout",
      "Layouts weren't working for the clients' daily routine",
      "Apartment footprint ruled out structural change",
      "Finishes felt cold and uninspiring",
    ],
    whatWeDid:
      "Both the ensuite and main bathroom were redesigned to maximise function within the fixed footprint. Bespoke cabinetry and integrated storage transformed what felt constrained into spaces that feel streamlined and calm. Warm blush feature tiles, sculptural shower detailing, and refined brass fixtures introduced softness and depth. Subtle heating elements added comfort.",
    designFeatures: [
      "Full redesign of both ensuite and main bathroom",
      "Bespoke cabinetry maximising integrated storage throughout",
      "Warm blush feature tiles introducing softness and warmth",
      "Sculptural shower detailing creating architectural interest",
      "Refined brass fixtures throughout",
      "Layered ambient and task lighting",
      "Subtle underfloor heating for comfort and livability",
      "Streamlined vanity designs improving circulation",
      "Light-filled layouts despite compact proportions",
    ],
    gallery: [drum2.url, drum3.url, drum4.url, drum5.url, drum6.url, drum7.url, drum8.url],
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
      `A ${s.category.toLowerCase()} renovation in ${s.suburb}, designed and built by AM Bathrooms + Projects.`,
    designFeatures: o.designFeatures ?? [
      "Bespoke joinery tailored to the footprint",
      "Considered stone and tile pairings",
      "Concealed storage throughout",
      "Warm, layered lighting plan",
    ],
    whatWasntWorking: o.whatWasntWorking ?? [
      "Tight footprint that wasn't being used well",
      "Dated finishes pulling the rest of the home down",
      "Poor flow between the renovated space and the home",
      "Storage that never quite worked",
    ],
    whatWeDid: o.whatWeDid,
    testimonial: o.testimonial,
    gallery: o.gallery ?? [s.image],
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
        image: rozelle1.url,
      }),
      slug,
    }
  );
}

export function getMoreProjects(currentSlug: string, count = 3): ProjectSummary[] {
  return projects.filter((p) => slugify(p.suburb, p.title) !== currentSlug).slice(0, count);
}
