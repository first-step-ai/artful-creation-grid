import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { Process } from "@/components/home/Process";
import { useReveal } from "@/hooks/use-reveal";
import bathroom from "@/assets/projects/annandale-1.jpg.asset.json";
import kitchen from "@/assets/projects/rozelle-1.jpg.asset.json";
import multiSpace from "@/assets/projects/rozelle-multispace.jpg.asset.json";
import fullInterior from "@/assets/projects/drummoyne-fullhome.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Bathroom, Kitchen & Full Interior Renovations" },
      {
        name: "description",
        content:
          "Bathrooms, laundries, kitchens, multi-space and full interior renovations across Sydney — designed, built and managed by AM Bathrooms + Projects.",
      },
      { property: "og:title", content: "Services | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content:
          "Everything from a single bathroom to a full interior renovation. One team, end to end.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Bathrooms + Laundries",
    body: "Considered, calm bathrooms and hardworking laundries. Replanned, replumbed and rebuilt to look beautiful for decades, not seasons.",
    image: bathroom.url,
  },
  {
    title: "Kitchen",
    body: "Kitchens designed around how you actually cook, host and live. Built once, properly, with materials that age beautifully.",
    image: kitchen.url,
  },
  {
    title: "Multi-Space",
    body: "Two or more connected spaces planned and built together — kitchen and living, ensuite and main bath, or a whole level. One schedule, one team.",
    image: multiSpace.url,
  },
  {
    title: "Full Interior",
    body: "Whole-of-home interior renovations, planned and delivered as a single cohesive project. One team, one manager, one schedule.",
    image: fullInterior.url,
  },
];


function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 space-y-8 md:space-y-10">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </section>
        <Process />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      ref={ref}
      className="reveal mx-auto max-w-[1600px] px-6 md:px-10 pt-40 md:pt-48 pb-20 md:pb-28"
    >
      <div className="eyebrow mb-6">Our Expertise</div>
      <h1 className="font-sans font-light text-ivory uppercase tracking-[0.06em] leading-[1.2] text-2xl md:text-3xl lg:text-4xl">
        What we do.
      </h1>
      <div className="mt-6 max-w-xl font-sans text-sm md:text-base text-ivory/75 leading-relaxed space-y-1">
        <p>Everything from a single bathroom to a full interior renovation.</p>
        <p>We design, build and manage it all. One team, end to end.</p>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className="reveal group relative overflow-hidden h-[32vh] min-h-[260px] max-h-[360px] bg-oxblood"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="relative h-full flex flex-col justify-end p-6 md:p-10 max-w-2xl">
        <h2 className="font-serif text-xl md:text-2xl font-light text-ivory leading-tight">
          {title}
        </h2>
        <p className="mt-3 font-sans text-xs md:text-sm text-ivory/80 leading-relaxed max-w-md">
          {body}
        </p>
      </div>
    </article>
  );
}
