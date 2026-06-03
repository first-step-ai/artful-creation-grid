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

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: FOOTER_BG, color: TEXT }}
    >
      <div className="w-full px-6 md:px-12 pt-20 md:pt-24 pb-10">
        {/* Socials top-right */}
        <div className="flex justify-end mb-10 md:mb-12">
          <div className="flex items-start gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group block text-center"
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

