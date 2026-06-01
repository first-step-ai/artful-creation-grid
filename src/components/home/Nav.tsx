import { useEffect, useState } from "react";

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
        "sticky top-0 z-40 w-full transition-colors duration-500",
        scrolled ? "bg-oxblood/85 backdrop-blur-md border-b border-border/60" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 py-5 md:py-6">
        <a href="#top" className="font-sans text-ivory text-xl md:text-2xl tracking-[0.32em] font-light">
          AM <span className="text-ivory-muted">·</span> BATHROOMS
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.28em] uppercase text-ivory/80 hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#enquire"
          className="md:hidden text-[11px] tracking-[0.28em] uppercase text-ivory border-b border-ivory/60 pb-0.5"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
