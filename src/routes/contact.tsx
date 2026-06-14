import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import bathroom from "@/assets/projects/annandale-new/annan-01.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | AM Bathrooms + Projects" },
      {
        name: "description",
        content:
          "Tell us a little about your home. We'll arrange a quick, obligation-free phone call, then come to you for a paid in-home consult.",
      },
      { property: "og:title", content: "Contact | AM Bathrooms + Projects" },
      {
        property: "og:description",
        content: "Let's talk about your home.",
      },
      { property: "og:image", content: bathroom.url },
      { name: "twitter:image", content: bathroom.url },
    ],
  }),
  component: ContactPage,
});

type FormData = {
  project: string;
  address: string;
  stage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

const initial: FormData = {
  project: "",
  address: "",
  stage: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
};

const projectTypes = ["Bathroom", "Kitchen", "Laundry", "Multi-Space", "Full Renovation", "Not sure yet"];
const stages = ["Just starting to explore", "Have a rough budget", "Ready to get quotes", "Ready to start soon"];

function ContactPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initial);
  const total = 4;
  const pct = Math.round((step / total) * 100);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const canContinue =
    (step === 1 && data.project) ||
    (step === 2 && data.address.trim().length > 2) ||
    (step === 3 && data.stage) ||
    step === 4;

  const next = () => {
    if (step < total) setStep(step + 1);
  };
  const back = () => setStep(Math.max(1, step - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.firstName || !data.lastName || !data.email) {
      toast.error("Please share your name and email so we can reach you.");
      return;
    }
    toast.success("Thank you. We'll be in touch within two business days.");
    setData(initial);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--ivory)] flex flex-col">
      <Nav />
      <main className="grid grid-cols-1 lg:grid-cols-2 flex-1">
        {/* LEFT — form panel */}
        <section className="flex flex-col px-6 md:px-14 lg:px-20 pt-28 md:pt-32 pb-20">
          <div className="max-w-xl w-full">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--ivory)]/60 mb-8">
              Contact
            </p>
            <h1 className="font-sans font-light uppercase tracking-[0.06em] leading-[1.2] text-2xl md:text-3xl lg:text-4xl text-[var(--ivory)]">
              Let's talk about
              <br />
              your home.
            </h1>

            <div className="mt-8 space-y-4 text-[14px] leading-relaxed text-[var(--ivory)]/70 font-light max-w-md">
              <p>
                Tell us a little about what you're thinking. Share your details for
                a quick, obligation-free phone call.
              </p>
              <p>
                Then we come to you. A paid in-home consult to see the space, hear
                the dream, and start making it real.
              </p>
            </div>

            {/* Progress */}
            <div className="mt-14">
              <div className="flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-[var(--ivory)]/60 mb-3">
                <span>Step {step} of {total}</span>
                <span>{pct}%</span>
              </div>
              <div className="h-px w-full bg-[var(--ivory)]/12 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--ivory)] transition-all duration-500 ease-out"
                  style={{ width: `${pct}%`, height: "1px" }}
                />
              </div>
            </div>

            {/* Step content */}
            <form onSubmit={submit} className="mt-12">
              {step === 1 && (
                <Step title="What are you thinking about renovating?">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((t) => (
                      <Choice
                        key={t}
                        label={t}
                        selected={data.project === t}
                        onClick={() => update("project", t)}
                      />
                    ))}
                  </div>
                </Step>
              )}

              {step === 2 && (
                <Step title="Where is the property located?">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-[11px] tracking-[0.28em] uppercase text-[var(--ivory)]/60 mb-3"
                    >
                      Full address
                    </label>
                    <input
                      id="address"
                      autoFocus
                      value={data.address}
                      onChange={(e) => update("address", e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--ivory)]/25 focus:border-[var(--ivory)] outline-none py-3 text-lg text-[var(--ivory)] placeholder:text-[var(--ivory)]/30 transition-colors"
                      placeholder=""
                    />
                  </div>
                </Step>
              )}

              {step === 3 && (
                <Step title="Where are you in the process?">
                  <div className="space-y-3">
                    {stages.map((s) => (
                      <Choice
                        key={s}
                        label={s}
                        selected={data.stage === s}
                        onClick={() => update("stage", s)}
                        full
                      />
                    ))}
                  </div>
                </Step>
              )}

              {step === 4 && (
                <Step title="Your details">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    <Field label="First name" value={data.firstName} onChange={(v) => update("firstName", v)} required />
                    <Field label="Last name" value={data.lastName} onChange={(v) => update("lastName", v)} required />
                    <Field label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} required />
                    <Field label="Phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} />
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] tracking-[0.28em] uppercase text-[var(--ivory)]/60 mb-3">
                        Anything else you'd like us to know (optional)
                      </label>
                      <textarea
                        value={data.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        rows={4}
                        className="w-full bg-transparent border-b border-[var(--ivory)]/25 focus:border-[var(--ivory)] outline-none py-3 text-[var(--ivory)] resize-y transition-colors"
                      />
                    </div>
                  </div>
                </Step>
              )}

              {/* Nav buttons */}
              <div className="mt-14 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="group inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-[var(--ivory)]/70 hover:text-[var(--ivory)] transition-colors"
                  >
                    <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < total ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canContinue}
                    className="group inline-flex items-center gap-4 bg-[var(--brass)] text-[var(--background)] px-8 py-4 text-[11px] tracking-[0.32em] uppercase disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--ivory)] transition-colors"
                  >
                    Continue
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-[var(--brass)] text-[var(--background)] px-8 py-4 text-[11px] tracking-[0.32em] uppercase hover:bg-[var(--ivory)] transition-colors"
                  >
                    Share my info
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* RIGHT — sticky image panel */}
        <aside className="relative hidden lg:block">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <img
              src={bathroom.url}
              alt="A finished AM bathroom interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h2 className="font-serif font-light text-2xl md:text-[28px] leading-tight text-[var(--ivory)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Choice({
  label,
  selected,
  onClick,
  full,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  full?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "text-left px-5 py-4 border transition-all text-[14px]",
        full ? "w-full" : "",
        selected
          ? "bg-[var(--brass)] text-[var(--background)] border-[var(--brass)]"
          : "bg-transparent text-[var(--ivory)] border-[var(--ivory)]/20 hover:border-[var(--ivory)]/60",
      ].join(" ")}
    >
      <span className="flex items-center justify-between gap-4">
        <span>{label}</span>
        {selected && <span aria-hidden>✓</span>}
      </span>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.28em] uppercase text-[var(--ivory)]/60 mb-3">
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-[var(--ivory)]/25 focus:border-[var(--ivory)] outline-none py-3 text-[var(--ivory)] transition-colors"
      />
    </div>
  );
}
