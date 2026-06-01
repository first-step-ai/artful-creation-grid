import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";


const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#studio", label: "Studio" },
  { href: "#enquire", label: "Enquire" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-40 w-full transition-colors duration-500",
        scrolled
          ? "bg-oxblood/85 backdrop-blur-md border-b border-border/60"
          : "bg-gradient-to-b from-oxblood/70 via-oxblood/30 to-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 py-5 md:py-6">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="AM Bathrooms + Projects" className="h-8 md:h-10 w-auto mix-blend-screen invert drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.28em] uppercase text-ivory hover:text-ivory transition-colors [text-shadow:0_1px_8px_rgba(0,0,0,0.55)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#enquire"
          className="md:hidden text-[11px] tracking-[0.28em] uppercase text-ivory border-b border-ivory/60 pb-0.5 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)]"
        >
          Enquire
        </a>
      </div>
    </header>

  );
}
