const FOOTER_BG = "#1f1f1f";
const TEXT = "#ebf0e9";
const TEXT_MUTED = "#848b7d";
const RULE = "rgba(26,26,26,0.18)";

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
            <div
              className="font-sans font-light leading-none"
              style={{ color: TEXT, letterSpacing: "0.04em" }}
            >
              <div style={{ fontSize: "56px" }}>AM</div>
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

            <div className="mt-8 flex items-center gap-5" style={{ color: TEXT_MUTED }}>
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
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
