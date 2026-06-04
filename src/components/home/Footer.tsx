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
      className="w-full"
      style={{ backgroundColor: FOOTER_BG, color: TEXT }}
    >
      <div className="w-full px-6 md:px-12 pt-16 md:pt-20 pb-10">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <img
              src={logo}
              alt="AM Bathrooms + Projects"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p
              className="font-sans max-w-sm"
              style={{
                color: TEXT_MUTED,
                fontSize: "13px",
                lineHeight: 1.7,
                letterSpacing: "0.02em",
              }}
            >
              Considered bathrooms, kitchens and whole-home renovations,
              crafted across Sydney.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span style={labelStyle}>Contact</span>
            <a
              href="tel:+61291234567"
              className="font-sans hover:opacity-80 transition-opacity"
              style={{ color: TEXT, fontSize: "15px", letterSpacing: "0.04em" }}
            >
              (02) 9123 4567
            </a>
            <span
              className="font-sans"
              style={{ color: TEXT_MUTED, fontSize: "13px", letterSpacing: "0.04em" }}
            >
              Mon – Fri  ·  9:00 – 17:00
            </span>
          </div>

          {/* Social */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span style={labelStyle}>Follow</span>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-sans hover:opacity-80 transition-opacity w-fit"
                  style={{ color: TEXT, fontSize: "14px", letterSpacing: "0.04em" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full" style={{ borderTop: `0.5px solid ${RULE}` }}>
        <div className="w-full px-6 md:px-12 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span
            className="font-sans"
            style={{ color: TEXT_MUTED, fontSize: "11px", letterSpacing: "0.14em" }}
          >
            © AM Bathrooms Pty Ltd – ABN 51 613 280 149
          </span>
          <span className="font-sans" style={labelStyle}>
            Made with care in Sydney
          </span>
        </div>
      </div>
    </footer>
  );
}
