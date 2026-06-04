import { useEffect, useState } from "react";
import { StaggeredMenu } from "@/components/staggered-menu/StaggeredMenu";
import amOnly from "@/assets/am-mark.png.asset.json";
import amFull from "@/assets/am-full.png.asset.json";

const menuItems = [
  { label: "Portfolio", ariaLabel: "View our portfolio", link: "#work" },
  { label: "Services", ariaLabel: "Explore our services", link: "#services" },
  { label: "Process", ariaLabel: "Our process", link: "#process" },
  { label: "Studio", ariaLabel: "About the studio", link: "#studio" },
  { label: "Enquire", ariaLabel: "Get in touch", link: "#enquire" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none [&_*]:pointer-events-auto">
      <StaggeredMenu
        className={scrolled ? "is-scrolled" : ""}
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={false}
        logoUrl={amOnly.url}
        centerLogoUrl={amFull.url}
        menuButtonColor="#ebf0e9"
        openMenuButtonColor="#1a1a1a"
        accentColor="#848b7d"
        colors={["#848b7d", "#383d38"]}
        changeMenuColorOnOpen
      />
    </div>
  );
}
