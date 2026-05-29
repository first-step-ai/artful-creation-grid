export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-oxblood">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-serif text-ivory text-2xl tracking-[0.32em] font-light">
              AM <span className="text-ivory-muted">·</span> BATHROOMS
            </div>
            <p className="mt-6 max-w-sm text-ivory-muted leading-relaxed text-sm">
              A Sydney design + build studio shaping bathrooms, kitchens, laundries and
              interiors since 1998.
            </p>
          </div>

          <FooterCol title="Studio" items={["About", "Process", "Showroom", "Careers"]} />
          <FooterCol title="Work" items={["Bathrooms", "Kitchens", "Laundries", "Interiors"]} />
          <FooterCol title="Connect" items={["Instagram", "Pinterest", "Houzz", "Email"]} />
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] tracking-[0.28em] uppercase text-ivory-muted">
          <span>© {new Date().getFullYear()} AM Bathrooms + Projects · NSW Lic. 000000C</span>
          <span>Made with care in Sydney</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="eyebrow">{title}</div>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-ivory hover:text-ivory-muted transition-colors text-sm">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
