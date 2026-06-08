import bathrooms from "@/assets/projects/annandale-1.jpg.asset.json";
import kitchens from "@/assets/projects/kitchen-services.jpg.asset.json";
import laundries from "@/assets/projects/drummoyne-fullhome.jpg.asset.json";
import interiors from "@/assets/projects/rozelle-multispace.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    num: "i",
    title: "Bathrooms",
    body: "A bathroom built around your routine. materials and details chosen with you, built by us.",
    image: bathrooms.url,
  },
  {
    num: "ii",
    title: "Kitchens",
    body: "A kitchen that fits the way your family actually uses it, not just how it looks in a render.",
    image: kitchens.url,
  },
  {
    num: "iii",
    title: "Multi-space Renovations",
    body: "A home that feels considered in every corner. we handle the full picture.",
    image: interiors.url,
  },
  {
    num: "iv",
    title: "Full Home Renovation",
    body: "A complete transformation, finished with the same care we bring to every room.",
    image: laundries.url,
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-16 pb-20 md:pb-24">
        <div className="mb-8 md:mb-10">
          <div className="eyebrow">Services</div>
        </div>

        <div ref={gridRef} className="reveal reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-14">
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
    <article className="group lift">
      <div className="relative overflow-hidden h-[36vh] md:h-[46vh] max-h-[520px] bg-burgundy">

        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-oxblood/30 transition-opacity duration-700 group-hover:opacity-0" />
        
      </div>
      <div className="mt-4 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-sans text-sm md:text-base text-brass font-light tracking-[0.1em] uppercase">
            {title}
          </h3>
          <p className="mt-2 max-w-sm font-sans text-[11px] tracking-[0.28em] text-ivory">{body}</p>
        </div>
        <span className="mt-1 hidden sm:inline-block text-[11px] tracking-[0.28em] uppercase text-ivory-muted group-hover:text-ivory transition-colors">
          ↗
        </span>
      </div>
    </article>
  );
}
