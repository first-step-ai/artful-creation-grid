import bathrooms from "@/assets/service-bathrooms.jpg";
import kitchens from "@/assets/service-kitchens.jpg";
import laundries from "@/assets/service-laundries.jpg";
import interiors from "@/assets/service-interiors.jpg";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    num: "i",
    title: "Bathrooms",
    body: "Sanctuary spaces composed in stone, timber and brass — fully designed and built in-house.",
    image: bathrooms,
  },
  {
    num: "ii",
    title: "Kitchens",
    body: "Joinery-led kitchens that hold a household's rhythm without ever raising their voice.",
    image: kitchens,
  },
  {
    num: "iii",
    title: "Laundries",
    body: "The quiet rooms — engineered for daily use, finished as carefully as the rest of the home.",
    image: laundries,
  },
  {
    num: "iv",
    title: "Interior Design",
    body: "Whole-home interiors, from architectural detailing to the final pieces in the room.",
    image: interiors,
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <div className="eyebrow">02 — Expertise</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl text-ivory font-light tracking-[-0.01em]">
              Four rooms, <em className="not-italic text-ivory-muted">one practice.</em>
            </h2>
          </div>
          <p className="md:max-w-sm text-ivory-muted leading-relaxed">
            Design and construction handled by a single team, under one fixed-price contract.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  body,
  image,
}: {
  num: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <article className="group">
      <div className="relative overflow-hidden aspect-[4/5] bg-burgundy">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-oxblood/30 transition-opacity duration-700 group-hover:opacity-0" />
        <div className="absolute top-6 left-6 font-serif italic text-ivory text-lg">{num}</div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-8">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl text-ivory font-light tracking-[-0.005em]">
            {title}
          </h3>
          <p className="mt-3 max-w-sm text-ivory-muted leading-relaxed">{body}</p>
        </div>
        <span className="mt-3 hidden sm:inline-block text-[11px] tracking-[0.28em] uppercase text-ivory-muted group-hover:text-ivory transition-colors">
          ↗
        </span>
      </div>
    </article>
  );
}
