import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";

import { Services } from "@/components/home/Services";
import { Work } from "@/components/home/Work";
import { Awards } from "@/components/home/Awards";
import { Process } from "@/components/home/Process";


import { Footer } from "@/components/home/Footer";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sydney Bathroom, Kitchen & Interior Renovations | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "A Sydney design + build studio shaping bathrooms, kitchens, laundries and interiors with care, collaboration and a fixed-price promise.",
      },
      { property: "og:title", content: "Sydney Bathroom, Kitchen & Interior Renovations" },
      {
        property: "og:description",
        content:
          "Considered interiors, built across Sydney. Design + build renovations since 1998.",
      },
      { property: "og:url", content: "https://artful-creation-grid.lovable.app/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://artful-creation-grid.lovable.app/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Nav />
      <main>
        <Hero />
        <Work />
        <Awards />
        <Services />
        <Process />
        
        
        
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--ivory)",
            color: "var(--oxblood)",
            border: "none",
            borderRadius: "0",
            fontFamily: "var(--font-sans)",
            letterSpacing: "0.04em",
          },
        }}
      />
    </div>
  );
}
