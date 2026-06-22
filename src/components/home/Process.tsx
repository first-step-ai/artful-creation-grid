import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

import discovery from "@/assets/process/discovery-rozelle.jpg.asset.json";
import design from "@/assets/process/design-lindfield.jpg.asset.json";
import build from "@/assets/process/build-bathroom.jpg.asset.json";
import handover from "@/assets/process/handover-balmain.jpg.asset.json";

type StepDetail = {
  heading: string;
  intro: string[];
  pointsTitle: string;
  points: string[];
  outro?: string;
};

const steps: {
  title: string;
  body: string;
  image: string;
  detail: StepDetail;
}[] = [
  {
    title: "Discovery",
    body: "We come to your home, walk the space, and listen to how you live before a single line is drawn.",
    image: discovery.url,
    detail: {
      heading: "Why Our Discovery Process Matters",
      intro: [
        "A great renovation starts with understanding your home, how you live in it, and what you want from it.",
        "Our Renovation Discovery Consultation goes beyond measurements and quotes. We take the time to understand what's working, what isn't, and what your home needs to support your life.",
        "This is a paid consultation that reflects the depth of time and thought we put in upfront, so you can make confident decisions from day one.",
      ],
      pointsTitle: "What's included",
      points: [
        "In-home consultation with design and construction expertise",
        "Lifestyle-first approach, not a generic renovation template",
        "Honest advice on budget, feasibility and priorities",
        "Early identification of opportunities and challenges",
        "Personalised renovation proposal tailored to your project",
        "Clear recommendations on the best path forward",
      ],
      outro:
        "The result is a renovation that feels right for how you actually live, with fewer surprises and better decisions along the way.",
    },
  },
  {
    title: "Design",
    body: "Layouts, materials and a transparent quote. Everything resolved before the first trade arrives.",
    image: design.url,
    detail: {
      heading: "Why Design Comes Before Construction",
      intro: [
        "The quality of a renovation is determined long before the first trade arrives.",
        "Our design process removes uncertainty by resolving every detail upfront, from layouts and storage solutions to finishes, fixtures and functionality.",
        "Rather than making costly decisions during construction, everything is thoughtfully planned before work begins.",
      ],
      pointsTitle: "What makes this different",
      points: [
        "Award-winning interior design expertise",
        "Detailed layouts tailored to your lifestyle",
        "Curated material and fixture selections",
        "Real-world functionality balanced with aesthetics",
        "Transparent pricing before construction begins",
        "Fewer surprises, delays and variations",
      ],
      outro:
        "The result is a renovation that feels intentional, cohesive and beautifully resolved, with every decision carefully considered before construction begins.",
    },
  },
  {
    title: "Build",
    body: "One team accountable from demolition to final detail. Our trades, our schedule, our supervision.",
    image: build.url,
    detail: {
      heading: "Why Clients Trust Our Build Process",
      intro: [
        "Construction should feel organised, not overwhelming.",
        "Because we manage both design and construction under one roof, every detail has already been considered before work starts. This creates a smoother experience, clearer communication and better outcomes.",
        "You won't be organising quotes, orders and deliveries, coordinating trades, chasing updates or managing timelines. We do that for you.",
      ],
      pointsTitle: "What makes this different",
      points: [
        "One accountable team from start to finish",
        "Dedicated project management",
        "Trusted, skilled trades",
        "Quality control throughout construction",
        "Regular communication and progress updates",
        "Respectful, organised and professional worksites",
      ],
      outro:
        "Our clients enjoy confidence knowing every detail is being managed by experienced professionals who genuinely care about the final result.",
    },
  },
  {
    title: "Handover",
    body: "Final walkthrough, clean site, and the keys back to you. We stay reachable in the months after.",
    image: handover.url,
    detail: {
      heading: "Why The Experience Doesn't End At Completion",
      intro: [
        "The final walkthrough isn't the end of the relationship, it's the beginning of enjoying your newly transformed home.",
        "We carefully review every detail, ensure everything is functioning as intended, and provide complete confidence before handover.",
        "Most importantly, we're still here after the project is complete.",
      ],
      pointsTitle: "What makes this different",
      points: [
        "Detailed final quality inspection",
        "Thorough project walkthrough",
        "Practical guidance on maintaining your new space",
        "Defects and warranty support",
        "Ongoing accessibility after completion",
        "A team that genuinely stands behind its work",
      ],
      outro:
        "We want you to feel the same excitement years after your renovation as you did on the day you received the keys back.",
    },
  },
];

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

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="process" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="mb-12 md:mb-16 flex items-end justify-between gap-6">
          <h2 className="eyebrow">Process</h2>
          <Link
            to="/services#process"
            className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-brass hover:text-ivory transition-colors"
          >
            See our process
          </Link>
        </div>


        <div ref={gridRef} className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, i) => {
            const isOpen = openIndex === i;
            return (
              <article key={s.title} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`process-${s.title}`}
                  className="block text-left w-full appearance-none bg-transparent border-0 p-0 m-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass/60 cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden bg-burgundy">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${s.title === "Build" ? "scale-[1.15]" : ""}`}
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-sans text-sm md:text-base text-brass font-light tracking-[0.05em] uppercase">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs md:text-sm text-ivory/80 leading-relaxed">
                      {s.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brass group-hover:text-ivory transition-colors">
                      {isOpen ? "Show less" : "Learn more"}
                      <span aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </span>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        {openIndex !== null && (
          <div
            id={`process-${steps[openIndex].title}`}
            className="mt-10 md:mt-12 border-t border-ivory/10 pt-10 md:pt-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 space-y-4 font-sans text-sm md:text-base text-ivory/85 leading-relaxed">
                <h3 className="eyebrow !text-brass mb-2">{steps[openIndex].detail.heading}</h3>
                {steps[openIndex].detail.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="lg:col-span-7">
                <h4 className="font-sans uppercase tracking-[0.06em] text-xs md:text-sm text-ivory/70 mb-4">
                  {steps[openIndex].detail.pointsTitle}
                </h4>
                <ul className="space-y-2.5">
                  {steps[openIndex].detail.points.map((pt) => (
                    <li key={pt} className="flex gap-3 font-sans text-sm text-ivory/85 leading-relaxed">
                      <CheckMark />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                {steps[openIndex].detail.outro && (
                  <p className="mt-6 font-sans text-sm md:text-base text-ivory/80 leading-relaxed italic">
                    {steps[openIndex].detail.outro}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
