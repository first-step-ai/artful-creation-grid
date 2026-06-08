import { useEffect, useState } from "react";
import { StaggeredMenu } from "@/components/staggered-menu/StaggeredMenu";
import amOnly from "@/assets/am-mark.png.asset.json";


const menuItems = [
  { label: "Home", ariaLabel: "Home", link: "/" },
  { label: "Projects", ariaLabel: "View our projects", link: "/projects" },
  { label: "About", ariaLabel: "About us", link: "/about" },
  { label: "Services", ariaLabel: "Explore our services", link: "/services" },
  { label: "Awards", ariaLabel: "Awards and recognition", link: "/awards" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
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
        centerLogoUrl={amOnly.url}
        centerText="BATHROOMS + PROJECTS"

        menuButtonColor="#ebf0e9"
        openMenuButtonColor="#1a1a1a"
        accentColor="#848b7d"
        colors={["#848b7d", "#383d38"]}
        changeMenuColorOnOpen
      />
    </div>
  );
}
