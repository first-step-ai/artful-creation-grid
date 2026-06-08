import footerLogo from "@/assets/am-mark.png.asset.json";
import socialInstagram from "@/assets/footer-social-1.jpg";
import socialPinterest from "@/assets/footer-social-2.jpg";
import socialFacebook from "@/assets/footer-social-3.jpg";

const SOCIALS = [
  { label: "Instagram", img: socialInstagram, href: "#" },
  { label: "Pinterest", img: socialPinterest, href: "#" },
  { label: "Facebook", img: socialFacebook, href: "#" },
];

const FOOTER_BG = "var(--background)";
const TEXT = "var(--ivory)";
const TEXT_MUTED = "rgba(235,240,233,0.6)";

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
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-10">
          {/* Logo (left, aligned to bottom row) */}
          <div className="flex shrink-0 items-end">
            <img
              src={footerLogo.url}
              alt="AM Bathrooms + Projects"
              className="h-16 md:h-24 w-auto object-contain object-left"
              style={{ filter: "brightness(0)" }}
            />
          </div>

          {/* Right cluster: contact + socials, ends at container right edge */}
          <div
            className="hidden md:flex items-end justify-between"
            style={{ width: "50%" }}
          >
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

            {/* Social thumbnails — right edge matches container (i.e. handover image edge) */}
            <div className="flex shrink-0 items-end gap-4">
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
                      loading="lazy"
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

        {/* Mobile fallback */}
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
          <div className="flex items-end gap-4 mt-4">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="group block text-center">
                <div className="overflow-hidden" style={{ width: 56, height: 72 }}>
                  <img src={s.img} alt={s.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div
                  className="mt-2 font-sans"
                  style={{ color: TEXT, fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
                >
                  {s.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
