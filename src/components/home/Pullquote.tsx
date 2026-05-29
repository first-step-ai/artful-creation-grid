import { useReveal } from "@/hooks/use-reveal";

export function Pullquote() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border/60 bg-burgundy/30">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 text-center">
        <div className="eyebrow"><span className="text-brass">✦</span>&nbsp;&nbsp;In their words</div>
        <blockquote className="mt-10 font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-ivory font-light leading-[1.15] tracking-[-0.01em]">
          <span className="text-brass font-serif italic mr-2">“</span>
          They listened first, drew slowly, and built a room that feels like it has
          <em className="not-italic text-ivory-muted"> always been there.</em>
          <span className="text-brass font-serif italic ml-1">”</span>
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4 text-ivory-muted">
          <span className="h-px w-12 bg-border" />
          <span className="eyebrow">Eliza M. — Mosman Ensuite, 2025</span>
          <span className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
}
