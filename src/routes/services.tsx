import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Process } from "@/components/home/Process";
import { useReveal } from "@/hooks/use-reveal";
import bathroom from "@/assets/services/service-bath.jpg.asset.json";
import laundry from "@/assets/services/service-laundry.jpg.asset.json";
import kitchen from "@/assets/services/service-kitchen.jpg.asset.json";
import multiSpace from "@/assets/projects/rozelle-multispace.jpg.asset.json";
import fullInterior from "@/assets/projects/drummoyne-fullhome.jpg.asset.json";
import showroom from "@/assets/services/showroom.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Sydney Renovation Services | Bathrooms, Kitchens & Interiors" },
      {
        name: "description",
        content:
          "Award-winning design, project management and construction under one team. Bathrooms, kitchens, laundries, multi-space and full home renovations across Sydney.",
      },
      { property: "og:title", content: "Sydney Renovation Services | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content:
          "One integrated team for design, project management and construction. Bathrooms, kitchens, laundries and full home renovations in Sydney.",
      },
      { property: "og:url", content: "https://artful-creation-grid.lovable.app/services" },
      { property: "og:image", content: bathroom.url },
      { name: "twitter:image", content: bathroom.url },
    ],
    links: [{ rel: "canonical", href: "https://artful-creation-grid.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sydney Renovation Services",
          itemListElement: [
            { "@type": "Service", name: "Bathroom Renovations", areaServed: "Sydney", provider: { "@type": "LocalBusiness", name: "AM Bathrooms + Projects" } },
            { "@type": "Service", name: "Laundry Renovations", areaServed: "Sydney", provider: { "@type": "LocalBusiness", name: "AM Bathrooms + Projects" } },
            { "@type": "Service", name: "Kitchen Renovations", areaServed: "Sydney", provider: { "@type": "LocalBusiness", name: "AM Bathrooms + Projects" } },
            { "@type": "Service", name: "Multi-Space Renovations", areaServed: "Sydney", provider: { "@type": "LocalBusiness", name: "AM Bathrooms + Projects" } },
            { "@type": "Service", name: "Full Home Renovations", areaServed: "Sydney", provider: { "@type": "LocalBusiness", name: "AM Bathrooms + Projects" } },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

type ServiceDetail = {
  heading: string;
  intro: string[];
  pointsTitle: string;
  points: string[];
  outro?: string;
};

const services: {
  title: string;
  body: string;
  image: string;
  detail: ServiceDetail;
}[] = [
  {
    title: "Bathrooms",
    body: "Considered, calm bathrooms replanned, replumbed and rebuilt to look beautiful for decades, not seasons.",
    image: bathroom.url,
    detail: {
      heading: "Bathroom Renovations Sydney",
      intro: [
        "We don't just renovate bathrooms, we design spaces that elevate everyday living.",
        "Our difference lies in award-winning design expertise, detailed project management and exceptional craftsmanship, all delivered through one seamless process.",
      ],
      pointsTitle: "What sets us apart",
      points: [
        "Award-winning bathroom designers and builders",
        "Personalised layouts tailored to your lifestyle",
        "Material and fixture selections curated with you",
        "Fixed-price transparency and clear communication",
        "One dedicated team from concept through completion",
        "A focus on timeless design over short-lived trends",
      ],
      outro:
        "Whether it's a compact ensuite or a luxury retreat, we create bathrooms that feel refined, functional and built to last.",
    },
  },
  {
    title: "Laundries",
    body: "Hardworking laundry spaces designed for daily life. Concealed storage, smart layouts and finishes that elevate the everyday.",
    image: laundry.url,
    detail: {
      heading: "Laundry Renovations Sydney",
      intro: [
        "A well-designed laundry makes one of the most-used rooms in your home feel like one of the best.",
        "We design laundries that work hard, look great and fit seamlessly into the way your household runs.",
      ],
      pointsTitle: "What sets us apart",
      points: [
        "Smart layouts designed around how you actually use the space",
        "Custom storage solutions that keep everything in its place",
        "Quality finishes and fittings that balance style and durability",
        "Bench space, cabinetry and appliance integration planned with purpose",
        "Design that complements the rest of your home",
        "Seamless management from design through to completion",
      ],
      outro:
        "A laundry that's been properly designed doesn't just function better, it makes everyday life a little easier.",
    },
  },
  {
    title: "Kitchen",
    body: "Kitchens designed around how you actually cook, host and live. Built once, properly, with materials that age beautifully.",
    image: kitchen.url,
    detail: {
      heading: "Kitchen Renovations Sydney",
      intro: [
        "The kitchen is where life happens. It needs to work beautifully, not just look beautiful.",
        "We design kitchens around the way your family lives, cooks, entertains and moves through the home.",
      ],
      pointsTitle: "What sets us apart",
      points: [
        "Interior design expertise combined with construction knowledge",
        "Custom layouts designed for real-life functionality",
        "Premium cabinetry, finishes and appliance integration",
        "Detailed planning to maximise storage and flow",
        "Seamless management from design to installation",
        "Timeless, considered design that adds lasting value",
      ],
      outro:
        "The result is a kitchen that feels effortless to use and beautiful to live with every day.",
    },
  },
  {
    title: "Multi-Space",
    body: "Two or more connected spaces planned and built together, kitchen and living, ensuite and main bath, or a whole level. One schedule, one team.",
    image: multiSpace.url,
    detail: {
      heading: "Multi-Space Renovations Sydney",
      intro: [
        "When renovating multiple rooms, consistency matters.",
        "Our design-led approach ensures every space feels connected, cohesive and thoughtfully considered.",
      ],
      pointsTitle: "What sets us apart",
      points: [
        "A complete vision for your home, not isolated room upgrades",
        "Cohesive material palettes and detailing throughout",
        "Expert coordination of trades and timelines",
        "Interior design and construction managed under one roof",
        "Reduced stress through a single point of contact",
        "Solutions tailored to your family's needs and future plans",
      ],
      outro:
        "We transform homes holistically, creating spaces that feel elevated, functional and beautifully connected.",
    },
  },
  {
    title: "Full Home",
    body: "Whole-of-home renovations, planned and delivered as a single cohesive project. One team, one manager, one schedule.",
    image: fullInterior.url,
    detail: {
      heading: "Full Home Renovations Sydney",
      intro: [
        "A full home renovation is one of the most significant investments you'll make. It deserves a team with the expertise to guide every detail.",
        "Our integrated design-and-build process provides clarity, confidence and exceptional results from start to finish.",
      ],
      pointsTitle: "What sets us apart",
      points: [
        "Award-winning design expertise",
        "End-to-end project management",
        "Detailed planning before construction begins",
        "Seamless coordination of all trades and suppliers",
        "Transparent communication throughout the journey",
        "Beautifully resolved homes designed for modern living",
      ],
      outro:
        "We create homes that not only look extraordinary but feel effortless to live in every day.",
    },
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 space-y-8 md:space-y-10">
            {services.map((s, i) => (
              <ServiceCard key={i} slug={serviceSlug(s.title)} {...s} />
            ))}
          </div>
        </section>
        <Process showSeeProcessLink={false} />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <header ref={ref} className="reveal relative isolate overflow-hidden">
      <img
        src={bathroom.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover ken-burns opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--oxblood) 55%, transparent) 0%, color-mix(in oklab, var(--oxblood) 65%, transparent) 50%, var(--oxblood) 100%), linear-gradient(90deg, color-mix(in oklab, var(--oxblood) 65%, transparent) 0%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="eyebrow mb-6">Sydney Renovation Services</div>
        <h1 className="font-sans font-light text-ivory uppercase tracking-[0.06em] leading-[1.2] text-2xl md:text-3xl lg:text-4xl [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
          Our Expertise.
        </h1>
        <div className="mt-6 max-w-xl font-sans text-sm md:text-base text-ivory/90 leading-relaxed space-y-1 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
          <p>Everything from a single bathroom to a full home renovation.</p>
          <p>We design, build and manage it all. One team, end to end.</p>
        </div>
      </div>
    </header>
  );
}

function Intro() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="reveal">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="overflow-hidden">
            <img
              src={showroom.url}
              alt="AM Bathrooms + Projects showroom"
              className="w-full h-[60vh] md:h-[80vh] object-cover"
              loading="lazy"
            />
          </div>
          <div className="self-center">
            <div className="eyebrow mb-4">The AM Bathrooms + Projects</div>
            <h2 className="font-sans font-light text-ivory uppercase tracking-[0.06em] leading-[1.2] text-xl md:text-2xl lg:text-3xl mb-8">
              Why we are different.
            </h2>
            <div className="font-sans text-sm md:text-base text-ivory/80 leading-relaxed space-y-5">
              <p>
                Most renovations fail because design, planning and construction are treated as separate services.
              </p>
              <p>We've built our process differently.</p>
              <p>
                By integrating interior design, project management and construction into one seamless experience,
                we eliminate the disconnects that often lead to delays, costly mistakes and unnecessary stress.
              </p>
              <p>
                Our clients benefit from award-winning design expertise, expert project management and quality
                craftsmanship, all delivered through one accountable team.
              </p>
              <p>
                The result is a renovation experience that feels clear, organised and enjoyable, with exceptional
                outcomes that enhance the way you live every day.
              </p>
              <p className="text-brass tracking-[0.05em] uppercase text-xs md:text-sm pt-2">
                One Team. One Process. One Exceptional Result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="mt-[6px] h-3 w-3 flex-none text-brass"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5l3.2 3.2L13 5" />
    </svg>
  );
}

const qaItems = [
  {
    question: "Why do you charge for the Discovery Consultation?",
    answer:
      "Our Discovery Consultation is a professional planning and assessment service designed to provide expert guidance before design and construction begin. This allows us to understand your goals, assess your home and prepare a personalised renovation proposal tailored to your project.",
  },
  {
    question: "Does the Discovery Consultation include designs?",
    answer:
      "No. The Discovery Consultation is focused on planning, feasibility and understanding your requirements. Design concepts, drawings and selections are developed during the Design Phase once you choose to proceed with your renovation.",
  },
  {
    question: "Why is the Design Phase important?",
    answer:
      "Thoughtful design and planning reduce costly variations, improve functionality and ensure every decision is carefully considered before construction begins.",
  },
  {
    question: "Do you manage the entire renovation process?",
    answer:
      "Yes. We manage design, selections, procurement, project management and construction, providing one point of accountability throughout your renovation journey.",
  },
  {
    question: "What areas do you service?",
    answer: "Sydney-wide.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We are fully licensed and insured, providing complete peace of mind throughout your project.",
  },
  {
    question: "How long does a renovation take?",
    answer:
      "Timeframes vary depending on the scope of works. During your Discovery Consultation, we'll discuss expected timelines specific to your project.",
  },
];

function Questions() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal border-t border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow mb-4">Common Questions</div>
          <h2 className="font-sans font-light text-ivory uppercase tracking-[0.06em] leading-[1.2] text-xl md:text-2xl lg:text-3xl mb-10 md:mb-14">
            Frequently Asked.
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {qaItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
                <AccordionTrigger className="font-sans text-xs md:text-sm font-medium text-ivory/90 hover:text-ivory py-5 md:py-6 hover:no-underline text-left leading-relaxed">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm md:text-base text-ivory/75 leading-relaxed pb-5 md:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function serviceSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function ServiceCard({
  title,
  body,
  image,
  detail,
  slug,
}: {
  title: string;
  body: string;
  image: string;
  detail: ServiceDetail;
  slug: string;
}) {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState(false);
  return (
    <article ref={ref} id={`service-${slug}`} className="reveal group relative overflow-hidden bg-oxblood scroll-mt-24">
      <div className="relative h-[32vh] min-h-[260px] max-h-[360px]">
        {image ? (
          <img
            src={image}
            alt={`${title} renovation by AM Bathrooms + Projects`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="relative h-full flex flex-col justify-end p-6 md:p-10 max-w-2xl">
          <h2 className="font-sans uppercase tracking-[0.06em] text-xl md:text-2xl font-light text-ivory leading-tight">
            {title}
          </h2>
          <p className="mt-3 font-sans text-xs md:text-sm text-ivory/80 leading-relaxed max-w-md">
            {body}
          </p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`service-${title}`}
            className="mt-5 self-start inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.18em] text-brass hover:text-ivory transition-colors appearance-none bg-transparent border-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:text-ivory cursor-pointer"
          >
            <span>{open ? "Show less" : "Learn more"}</span>
            <span aria-hidden="true" className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
          </button>
        </div>
      </div>
      {open && (
        <div
          id={`service-${title}`}
          className="border-t border-ivory/10 bg-burgundy/40 px-6 md:px-10 py-8 md:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1200px]">
            <div className="lg:col-span-5 space-y-4 font-sans text-sm md:text-base text-ivory/85 leading-relaxed">
              <h3 className="eyebrow !text-brass mb-2">{detail.heading}</h3>
              {detail.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="lg:col-span-7">
              <h4 className="font-sans uppercase tracking-[0.06em] text-xs md:text-sm text-ivory/70 mb-4">
                {detail.pointsTitle}
              </h4>
              <ul className="space-y-2.5">
                {detail.points.map((pt) => (
                  <li key={pt} className="flex gap-3 font-sans text-sm text-ivory/85 leading-relaxed">
                    <CheckMark />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {detail.outro && (
                <p className="mt-6 font-sans text-sm md:text-base text-ivory/80 leading-relaxed italic">
                  {detail.outro}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
