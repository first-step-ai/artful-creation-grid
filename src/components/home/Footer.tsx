import amLogo from "@/assets/am-full.png.asset.json";
import socialInstagram from "@/assets/projects/bexley-3.jpg.asset.json";
import socialPinterest from "@/assets/projects/abbotsford-new-1.jpg.asset.json";
import socialFacebook from "@/assets/social/facebook-showroom.jpg.asset.json";

const SOCIALS = [
  { label: "Instagram", img: socialInstagram.url, href: "https://www.instagram.com/ambathrooms/" },
  { label: "Pinterest", img: socialPinterest.url, href: "https://pinterest.com/ambathroomsprojects/" },
  { label: "Facebook", img: socialFacebook.url, href: "https://www.facebook.com/ambathrooms/" },
];

const FOOTER_BG = "#404640";
const TEXT = "#ebf0e9";
const TEXT_MUTED = "rgba(235,240,233,0.55)";

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
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Left: logo + contact info */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <img
                src={amLogo.url}
                alt="AM Bathrooms + Projects"
                className="h-14 md:h-16 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              <div>
                <div style={labelStyle} className="mb-1.5">Studio Location</div>
                <div className="font-sans text-[13px] leading-relaxed">
                  Studio 8, 77-105 Victoria Road, Drummoyne NSW 2047
                </div>
                <div className="font-sans text-[13px] mt-0.5" style={{ color: TEXT_MUTED }}>
                  By Appointment Only
                </div>
              </div>

              <div>
                <div style={labelStyle} className="mb-1.5">Phone</div>
                <a
                  href="tel:0295560220"
                  className="font-sans text-[13px] hover:opacity-80 transition-opacity"
                  style={{ color: TEXT }}
                >
                  (02) 9556 0220
                </a>
              </div>
            </div>
          </div>

          {/* Right: socials */}
          <div className="flex items-end gap-4">
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

        {/* Bottom row — legal */}
        <div className="mt-16 md:mt-20 flex flex-col items-end gap-4">
          <div className="flex items-center gap-6 font-sans text-[13px]" style={{ color: TEXT_MUTED }}>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              Terms & Conditions
            </a>
          </div>
          <div className="font-sans text-[13px]" style={{ color: TEXT_MUTED }}>
            © 2026 AM Bathrooms Pty Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
