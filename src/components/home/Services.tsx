import bathrooms from "@/assets/service-bathrooms.jpg";
import kitchens from "@/assets/service-kitchens.jpg";
import laundries from "@/assets/service-laundries.jpg";
import interiors from "@/assets/service-interiors.jpg";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    num: "i",
    title: "Bathrooms",
    body: "A bathroom built around your routine. Materials and details chosen with you, built by us.",
    image: bathrooms,
  },
  {
    num: "ii",
    title: "Kitchens",
    body: "A kitchen that fits the way your family actually uses it, not just how it looks in a render.",
    image: kitchens,
  },
  {
    num: "iii",
    title: "Laundries",
    body: "The room that works hardest in your home, finished as carefully as the rest.",
    image: laundries,
  },
  {
    num: "iv",
    title: "Interior Design",
    body: "A home that feels considered in every corner. We handle the full picture.",
    image: interiors,
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="eyebrow">02 / Services</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-14">
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
          <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light tracking-[-0.005em]">
            {title}
          </h3>
          <p className="mt-2 max-w-sm text-sm text-ivory-muted leading-relaxed">{body}</p>
        </div>
        <span className="mt-1 hidden sm:inline-block text-[11px] tracking-[0.28em] uppercase text-ivory-muted group-hover:text-ivory transition-colors">
          ↗
        </span>
      </div>
    </article>
  );
}
