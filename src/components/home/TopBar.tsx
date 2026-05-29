export function TopBar() {
  return (
    <div className="hidden md:block border-b border-border/60 bg-oxblood">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-2.5 text-[11px] tracking-[0.22em] uppercase text-ivory-muted">
        <span>Now taking enquiries · Sydney 2026</span>
        <span>
          <a href="tel:+61290000000" className="transition-colors hover:text-ivory">
            +61 2 9000 0000
          </a>
          <span className="mx-3 opacity-40">/</span>
          <a href="mailto:studio@ambathrooms.com.au" className="transition-colors hover:text-ivory">
            studio@ambathrooms.com.au
          </a>
        </span>
      </div>
    </div>
  );
}
