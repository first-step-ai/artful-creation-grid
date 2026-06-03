import { StaggeredMenu } from "@/components/staggered-menu/StaggeredMenu";
import logo from "@/assets/logo.png";

const menuItems = [
  { label: "Portfolio", ariaLabel: "View our portfolio", link: "#work" },
  { label: "Services", ariaLabel: "Explore our services", link: "#services" },
  { label: "Process", ariaLabel: "Our process", link: "#process" },
  { label: "Studio", ariaLabel: "About the studio", link: "#studio" },
  { label: "Enquire", ariaLabel: "Get in touch", link: "#enquire" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Pinterest", link: "https://pinterest.com" },
  { label: "Facebook", link: "https://facebook.com" },
];

export function Nav() {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none [&_*]:pointer-events-auto">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={false}
        logoUrl={logo}
        menuButtonColor="#ebf0e9"
        openMenuButtonColor="#1a1a1a"
        accentColor="#848b7d"
        colors={["#848b7d", "#383d38"]}
        changeMenuColorOnOpen
      />
    </div>
  );
}
