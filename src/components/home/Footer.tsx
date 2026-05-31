const FOOTER_BG = "#0a1f12";
const PARCHMENT = "#c8c0a8";
const SAGE = "#4a7a58";
const GOLD = "#c8a060";
const NAV_LINK = "#a0a088";
const RULE = "#1a3222";

const COLUMNS: { label: string; links: string[] }[] = [
  { label: "Studio", links: ["About", "Process", "Showroom", "Careers"] },
  { label: "Work", links: ["Bathrooms", "Kitchens", "Laundries", "Interiors"] },
  { label: "Connect", links: ["Enquire", "Phone", "Email", "Visit"] },
];

const SOCIALS = ["Instagram", "Pinterest", "Houzz", "LinkedIn"];

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: FOOTER_BG, color: PARCHMENT }}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-14 md:py-20 flex flex-col items-center text-center">
        {/* Logo */}
        <div
          className="font-serif text-2xl md:text-3xl font-light flex items-center justify-center gap-5"
          style={{ color: PARCHMENT, letterSpacing: "0.32em" }}
        >
          <span>AM</span>
          <span style={{ color: GOLD }} aria-hidden="true">✦</span>
          <span>BATHROOMS</span>
        </div>

        {/* Tagline */}
        <p
          className="mt-5 max-w-md text-sm md:text-[15px] font-light leading-relaxed"
          style={{ color: SAGE }}
        >
          A Sydney design + build studio shaping bathrooms, kitchens, laundries
          and interiors with quiet precision since 1998.
        </p>

        {/* Ornamental divider */}
        <Divider />

        {/* Nav columns */}
        <nav className="mt-10 w-full grid grid-cols-3 max-w-2xl">
          {COLUMNS.map((col, idx) => (
            <div
              key={col.label}
              className="flex flex-col items-center px-4"
              style={
                idx > 0
                  ? { borderLeft: `0.5px solid ${RULE}` }
                  : undefined
              }
            >
              <div
                className="text-[10px] font-sans"
                style={{
                  color: PARCHMENT,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                {col.label}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-serif transition-colors hover:opacity-100"
                      style={{
                        color: NAV_LINK,
                        fontSize: "15px",
                        fontStyle: i % 2 === 1 ? "italic" : "normal",
                      }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Ornamental divider */}
        <Divider />

        {/* Social strip */}
        <ul className="mt-8 flex items-center justify-center gap-7 md:gap-10">
          {SOCIALS.map((s) => (
            <li key={s}>
              <a
                href="#"
                className="font-sans transition-opacity hover:opacity-70"
                style={{
                  color: PARCHMENT,
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  textDecoration: "underline",
                  textDecorationThickness: "0.5px",
                  textUnderlineOffset: "6px",
                }}
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full"
        style={{ borderTop: `0.5px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span
            className="font-sans"
            style={{
              color: SAGE,
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} AM Bathrooms + Projects
          </span>
          <span
            className="font-sans"
            style={{
              color: SAGE,
              fontSize: "10px",
              letterSpacing: "0.18em",
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

function Divider() {
  return (
    <div
      className="mt-8 flex items-center justify-center gap-6 w-full max-w-md"
      aria-hidden="true"
    >
      <span
        className="flex-1"
        style={{ height: "0.5px", backgroundColor: RULE }}
      />
      <span style={{ color: GOLD, fontSize: "14px" }}>✦</span>
      <span
        className="flex-1"
        style={{ height: "0.5px", backgroundColor: RULE }}
      />
    </div>
  );
}
