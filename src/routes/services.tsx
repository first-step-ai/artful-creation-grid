import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useReveal } from "@/hooks/use-reveal";
import bathroom from "@/assets/projects/annandale-1.jpg.asset.json";
import kitchen from "@/assets/projects/rozelle-1.jpg.asset.json";
import interiors from "@/assets/projects/abbotsford-2.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Bathroom, Kitchen & Full Interior Renovations" },
      {
        name: "description",
        content:
          "Bathrooms, kitchens and full interior renovations across Sydney — designed, built and managed by AM Bathrooms + Projects.",
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
    title: "Bathroom + Laundry",
    body: "Considered, calm bathrooms and hardworking laundries — replanned, replumbed and rebuilt to look beautiful for decades, not seasons.",
    image: bathroom.url,
  },
  {
    title: "Kitchen",
    body: "Kitchens designed around how you actually cook, host and live — built once, properly, with materials that age beautifully.",
    image: kitchen.url,
  },
  {
    title: "Full Interior Renovations",
    body: "Multiple rooms or whole-of-home renovations, planned and delivered as a single cohesive project — one team, one manager, one schedule.",
    image: interiors.url,
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
      <div className="eyebrow mb-8">Our Expertise</div>
      <h1 className="font-serif text-6xl md:text-8xl font-light tracking-tight text-ivory leading-[0.95]">
        What we do.
      </h1>
      <div className="mt-10 max-w-2xl font-sans text-base md:text-lg text-ivory/80 leading-relaxed space-y-2">
        <p>Everything from a single bathroom to a full interior renovation.</p>
        <p>We design, build and manage it all — one team, end to end.</p>
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
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className="reveal group relative overflow-hidden h-[70vh] min-h-[520px] max-h-[760px] bg-oxblood"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="relative h-full flex flex-col justify-end p-8 md:p-14 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-serif text-5xl md:text-6xl font-light text-ivory leading-none">
            {num}
          </span>
          <span className="block h-px w-16 bg-ivory/50" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-ivory leading-tight">
          {title}
        </h2>
        <p className="mt-5 font-sans text-sm md:text-base text-ivory/85 leading-relaxed max-w-lg">
          {body}
        </p>
      </div>
    </article>
  );
}
