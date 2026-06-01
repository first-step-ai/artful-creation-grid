const FOOTER_BG = "#0a1f12";
const PARCHMENT = "#c8c0a8";
const SAGE = "#4a7a58";
const GOLD = "#c8a060";
const NAV_LINK = "#a0a088";
const RULE = "#1a3222";

const NAV: { label: string; links: string[] }[] = [
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
      {/* Top band: oversized wordmark */}
      <div className="w-full px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <div
              className="font-sans"
              style={{
                color: SAGE,
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              Est. 1998 / Sydney
            </div>
            <h2
              className="mt-6 font-serif font-light leading-[0.92] tracking-tight"
              style={{
                color: PARCHMENT,
                fontSize: "clamp(54px, 11vw, 168px)",
              }}
            >
              AM Bathrooms<span style={{ color: GOLD }}>.</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:pb-6">
            <p
              className="font-serif font-light italic leading-relaxed"
              style={{ color: PARCHMENT, fontSize: "20px" }}
            >
              Quiet, considered rooms.
              <br />
              Designed and built by one team.
            </p>
            <a
              href="#enquire"
              className="mt-8 inline-flex items-center gap-3 font-sans transition-opacity hover:opacity-70"
              style={{
                color: GOLD,
                fontSize: "11px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                borderBottom: `0.5px solid ${GOLD}`,
                paddingBottom: "6px",
              }}
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mid band: contact + nav columns */}
      <div
        className="w-full px-6 md:px-12 py-12 md:py-16"
        style={{ borderTop: `0.5px solid ${RULE}` }}
      >
        <div className="grid grid-cols-12 gap-8 md:gap-10">
          {/* Contact block */}
          <div className="col-span-12 md:col-span-3">
            <div
              className="font-sans"
              style={{
                color: GOLD,
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              Studio
            </div>
            <address
              className="mt-5 not-italic font-serif font-light leading-relaxed"
              style={{ color: PARCHMENT, fontSize: "15px" }}
            >
              42 Bourke Road
              <br />
              Alexandria NSW 2015
              <br />
              <span style={{ color: NAV_LINK }}>By appointment</span>
            </address>
            <div
              className="mt-6 font-serif font-light leading-relaxed"
              style={{ color: PARCHMENT, fontSize: "15px" }}
            >
              <a href="tel:+61290000000" className="block hover:opacity-70 transition-opacity">
                +61 2 9000 0000
              </a>
              <a href="mailto:studio@ambathrooms.com.au" className="block hover:opacity-70 transition-opacity italic">
                studio@ambathrooms.com.au
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map((col) => (
            <div key={col.label} className="col-span-6 md:col-span-3">
              <div
                className="font-sans"
                style={{
                  color: GOLD,
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                {col.label}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l, i) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-serif transition-opacity hover:opacity-70"
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
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full"
        style={{ borderTop: `0.5px solid ${RULE}` }}
      >
        <div className="w-full px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span
              className="font-sans"
              style={{
                color: SAGE,
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              © {new Date().getFullYear()} AM Bathrooms + Projects
            </span>
            <span aria-hidden="true" style={{ color: RULE }}>/</span>
            <a
              href="#"
              className="font-sans hover:opacity-70 transition-opacity"
              style={{
                color: SAGE,
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-sans hover:opacity-70 transition-opacity"
              style={{
                color: SAGE,
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Terms
            </a>
          </div>

          <ul className="flex items-center gap-6">
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
                  }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
