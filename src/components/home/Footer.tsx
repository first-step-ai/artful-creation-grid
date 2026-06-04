import footerLogo from "@/assets/am-footer-logo.png.asset.json";
import socialFacebook from "@/assets/service-bathrooms.jpg";
import socialPinterest from "@/assets/service-kitchens.jpg";
import socialInstagram from "@/assets/service-interiors.jpg";

const SOCIALS = [
  { label: "Instagram", img: socialInstagram, href: "#" },
  { label: "Pinterest", img: socialPinterest, href: "#" },
  { label: "Facebook", img: socialFacebook, href: "#" },
];

const FOOTER_BG = "var(--oxblood)";
const TEXT = "#ebf0e9";
const TEXT_MUTED = "rgba(235,240,233,0.6)";
const RULE = "rgba(235,240,233,0.12)";

const labelStyle = {
  color: TEXT_MUTED,
  fontSize: "10px",
  letterSpacing: "0.24em",
  textTransform: "uppercase" as const,
};

export function Footer() {
  return (
    <footer
      className="w-full border-t border-border/60"
      style={{ backgroundColor: FOOTER_BG, color: TEXT }}
    >
      <div className="w-full px-6 md:px-12 pt-16 md:pt-20 pb-10">
        <div className="relative flex items-start justify-between gap-10">
          {/* Logo (left) */}
          <div className="flex shrink-0">
            <img
              src={footerLogo.url}
              alt="AM Bathrooms + Projects"
              className="h-12 md:h-16 w-auto object-contain object-left"
              style={{ filter: "brightness(0) invert(1)" }}

          </div>

          {/* Socials row spans from center to right edge */}
          <div
            className="hidden md:flex items-start justify-between"
            style={{ width: "50%" }}
          >
            {/* Contact (left-aligned at the center of the footer) */}
            <div className="flex flex-col gap-5 items-start text-left">
              <div className="flex flex-col gap-3 items-start">
                <span style={labelStyle}>Contact</span>
                <a
                  href="tel:+61291234567"
                  className="font-sans hover:opacity-80 transition-opacity"
                  style={{ color: TEXT, fontSize: "15px", letterSpacing: "0.04em" }}
                >
                  (02) 9123 4567
                </a>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <span style={labelStyle}>Hours</span>
                <span
                  className="font-sans"
                  style={{ color: TEXT, fontSize: "15px", letterSpacing: "0.04em" }}
                >
                  Mon to Fri · 8.30am to 4.30pm
                </span>
              </div>
            </div>

            {/* Social thumbnails (right-aligned to container edge) */}
            <div className="flex shrink-0 items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group block text-center"
                >
                  <div className="overflow-hidden" style={{ width: 64, height: 82 }}>
                    <img
                      src={s.img}
                      alt={s.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="mt-2 font-sans"
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

        {/* Contact (mobile fallback) */}
        <div className="md:hidden flex flex-col gap-5 items-start text-left mt-10">
          <div className="flex flex-col gap-3 items-start">
            <span style={labelStyle}>Contact</span>
            <a
              href="tel:+61291234567"
              className="font-sans"
              style={{ color: TEXT, fontSize: "15px", letterSpacing: "0.04em" }}
            >
              (02) 9123 4567
            </a>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <span style={labelStyle}>Hours</span>
            <span className="font-sans" style={{ color: TEXT, fontSize: "15px", letterSpacing: "0.04em" }}>
              Mon to Fri · 8.30am to 4.30pm
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


