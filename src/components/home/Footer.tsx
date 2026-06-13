import amOnly from "@/assets/am-mark.png.asset.json";
import socialInstagram from "@/assets/projects/bexley-3.jpg.asset.json";
import socialPinterest from "@/assets/projects/pyrmont-4.jpg.asset.json";
import socialFacebook from "@/assets/projects/annandale-4.jpg.asset.json";

const SOCIALS = [
  { label: "Instagram", img: socialInstagram.url, href: "#" },
  { label: "Pinterest", img: socialPinterest.url, href: "#" },
  { label: "Facebook", img: socialFacebook.url, href: "#" },
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
        <div className="flex items-center justify-between gap-10">
          {/* Logo (left, aligned to bottom row) */}
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <img
              src={amOnly.url}
              alt="AM"
              className="h-12 md:h-16 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span
              className="font-sans whitespace-nowrap"
              style={{
                color: TEXT,
                fontSize: "clamp(11px, 1.4vw, 16px)",
                letterSpacing: "0.18em",
              }}
            >
              BATHROOMS + PROJECTS
            </span>
          </div>

          {/* Center: studio address + phone */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="text-left" style={{ color: TEXT }}>
              <div style={labelStyle} className="mb-2">Studio</div>
              <div className="font-sans text-[13px] leading-relaxed">
                By appointment only<br />
                Shop 8, 77 - 105 Victoria Road<br />
                Drummoyne NSW 2047
              </div>
              <div style={labelStyle} className="mt-4 mb-2">Phone</div>
              <a
                href="tel:0291814776"
                className="font-sans text-[13px] hover:opacity-80 transition-opacity"
                style={{ color: TEXT }}
              >
                (02) 9181 4776
              </a>
            </div>
          </div>

          {/* Right cluster: socials */}
          <div className="hidden md:flex items-end justify-end">
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

        {/* Mobile fallback: address + phone */}
        <div className="md:hidden mt-10" style={{ color: TEXT }}>
          <div style={labelStyle} className="mb-2">Studio</div>
          <div className="font-sans text-[13px] leading-relaxed">
            By appointment only<br />
            Shop 8, 77 - 105 Victoria Road<br />
            Drummoyne NSW 2047
          </div>
          <div style={labelStyle} className="mt-4 mb-2">Phone</div>
          <a href="tel:0291814776" className="font-sans text-[13px]" style={{ color: TEXT }}>
            (02) 9181 4776
          </a>
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden flex items-end gap-4 mt-10">
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
    </footer>
  );
}
