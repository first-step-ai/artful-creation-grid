import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { TopBar } from "@/components/home/TopBar";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";

import { Services } from "@/components/home/Services";
import { Work } from "@/components/home/Work";
import { Pullquote } from "@/components/home/Pullquote";
import { Process } from "@/components/home/Process";
import { Recognition } from "@/components/home/Recognition";
import { Studio } from "@/components/home/Studio";
import { Footer } from "@/components/home/Footer";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AM Bathrooms + Projects — Sydney Renovation Specialists" },
      {
        name: "description",
        content:
          "A Sydney design + build studio shaping bathrooms, kitchens, laundries and interiors with care, collaboration and a fixed-price promise.",
      },
      { property: "og:title", content: "AM Bathrooms + Projects — Sydney Renovation Specialists" },
      {
        property: "og:description",
        content:
          "Considered interiors, built across Sydney. Design + build renovations since 1998.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Studio />
        <Services />
        <Work />
        <Pullquote />
        <Process />
        <Recognition />
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
