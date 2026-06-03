import logo from "@/assets/logo.png";
import socialFacebook from "@/assets/service-bathrooms.jpg";
import socialPinterest from "@/assets/service-kitchens.jpg";
import socialInstagram from "@/assets/service-interiors.jpg";

const SOCIALS = [
  { label: "Facebook", img: socialFacebook, href: "#" },
  { label: "Pinterest", img: socialPinterest, href: "#" },
  { label: "Instagram", img: socialInstagram, href: "#" },
];

const FOOTER_BG = "var(--oxblood)";
const TEXT = "#ebf0e9";
const TEXT_MUTED = "#848b7d";
const RULE = "rgba(235,240,233,0.12)";

const EXPLORE = ["Projects", "Services", "About", "Awards", "Reviews", "Contact"];
const SERVICING = ["Inner West", "Eastern Suburbs", "Northern Beaches", "Lower North Shore"];

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: FOOTER_BG, color: TEXT }}
    >
      <div className="w-full px-6 md:px-12 pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex flex-col items-start">
              <img
                src={logo}
                alt="AM Bathrooms + Projects"
                className="h-10 w-auto invert opacity-90"
              />
              <div
                className="font-sans mt-2"
                style={{
                  color: TEXT_MUTED,
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Bathrooms + Projects
              </div>
            </div>

            <p
              className="mt-10 font-sans font-light leading-relaxed"
              style={{ color: TEXT_MUTED, fontSize: "15px" }}
            >
              Boutique design-and-build studio.
              <br />
              Based in Drummoyne, working across Sydney.
            </p>

            <div className="mt-8 flex items-start gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group block"
                >
                  <div className="overflow-hidden" style={{ width: 72, height: 92 }}>
                    <img
                      src={s.img}
                      alt={s.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="mt-3 font-sans"
                    style={{
                      color: TEXT,
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-4">
            <div className="mt-0">
              <FooterLabel>Email</FooterLabel>
              <a
                href="mailto:info@ambathrooms.com.au"
                className="mt-5 block font-sans font-light hover:opacity-70 transition-opacity"
                style={{ color: TEXT, fontSize: "15px" }}
              >
                info@ambathrooms.com.au
              </a>
            </div>

            <div className="mt-8">
              <FooterLabel>Phone</FooterLabel>
              <a
                href="tel:+61291814776"
                className="mt-5 block font-sans font-light hover:opacity-70 transition-opacity"
                style={{ color: TEXT, fontSize: "15px" }}
              >
                (02) 9181 4776
              </a>
            </div>

            <div className="mt-8">
              <FooterLabel>Hours</FooterLabel>
              <div
                className="mt-5 font-sans font-light"
                style={{ color: TEXT, fontSize: "15px" }}
              >
                Monday – Friday: 8.30 am – 4.30 pm
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="col-span-6 md:col-span-2">
            <FooterLabel>Explore</FooterLabel>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-sans font-light hover:opacity-70 transition-opacity"
                    style={{ color: TEXT, fontSize: "15px" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicing */}
          <div className="col-span-6 md:col-span-3">
            <FooterLabel>Servicing</FooterLabel>
            <ul className="mt-5 space-y-3">
              {SERVICING.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-sans font-light hover:opacity-70 transition-opacity"
                    style={{ color: TEXT, fontSize: "15px" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full" style={{ borderTop: `0.5px solid ${RULE}` }}>
        <div className="w-full px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span
            className="font-sans"
            style={{
              color: TEXT_MUTED,
              fontSize: "11px",
              letterSpacing: "0.14em",
            }}
          >
            © AM Bathrooms Pty Ltd – ABN 51 613 280 149
          </span>
          <span
            className="font-sans"
            style={{
              color: TEXT_MUTED,
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Made with care in Sydney
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-sans leading-relaxed"
      style={{
        color: TEXT,
        fontSize: "10px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
}
