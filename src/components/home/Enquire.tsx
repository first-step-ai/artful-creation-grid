import { useState } from "react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";
import studio from "@/assets/studio.jpg";

const projectTypes = ["Bathroom", "Kitchen", "Laundry", "Whole home"];

export function Enquire() {
  const ref = useReveal<HTMLDivElement>();
  const [type, setType] = useState<string>("Bathroom");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you. We'll be in touch within two business days.");
    }, 700);
  };

  return (
    <section id="enquire" className="border-t border-border/60">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 flex flex-col">
            <div className="eyebrow"><span className="text-brass">·</span>&nbsp;&nbsp;05 / Enquire</div>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-ivory font-light leading-[1.02] tracking-[-0.01em]">
              Let's
              <br />
              <em className="not-italic text-ivory-muted">begin.</em>
            </h2>
            <p className="mt-8 max-w-md text-ivory-muted leading-relaxed">
              We're currently booking projects for 2026. Share a little about your home and
              your hopes for it, and we'll arrange a conversation.
            </p>
            <dl className="mt-12 space-y-5 text-ivory">
              <div className="flex gap-6">
                <dt className="eyebrow w-20">Studio</dt>
                <dd>By appointment · Alexandria, Sydney</dd>
              </div>
              <div className="flex gap-6">
                <dt className="eyebrow w-20">Phone</dt>
                <dd>+61 2 9000 0000</dd>
              </div>
              <div className="flex gap-6">
                <dt className="eyebrow w-20">Email</dt>
                <dd>studio@ambathrooms.com.au</dd>
              </div>
            </dl>

            <div className="mt-12 relative overflow-hidden aspect-[4/5] hidden md:block">
              <img
                src={studio}
                alt="Inside the studio: a hand placing a brass tap on a marble sample"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxblood/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 eyebrow text-ivory">
                Inside the studio, Alexandria
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-6 md:col-start-7 space-y-10"
          >
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Suburb" name="suburb" />

            <div>
              <label className="eyebrow block mb-4">Project type</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setType(t)}
                    className={[
                      "px-4 py-2 text-[11px] tracking-[0.24em] uppercase border transition-colors",
                      type === t
                        ? "border-ivory text-oxblood bg-ivory"
                        : "border-border text-ivory-muted hover:text-ivory hover:border-ivory/70",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="eyebrow block mb-4">
                Tell us about your home
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-transparent border-b border-border focus:border-ivory outline-none py-3 text-ivory font-serif text-lg placeholder:text-ivory-muted/60 transition-colors"
                placeholder="A few sentences is plenty…"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-4 text-ivory disabled:opacity-50"
            >
              <span className="text-[11px] tracking-[0.32em] uppercase">
                {submitting ? "Sending…" : "Send enquiry"}
              </span>
              <span className="h-px w-16 bg-ivory transition-all duration-500 group-hover:w-28" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-4">
        {label}
        {required && <span className="text-ivory ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-ivory outline-none py-3 text-ivory font-serif text-lg transition-colors"
      />
    </div>
  );
}
