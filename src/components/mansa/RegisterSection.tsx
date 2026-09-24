import { useState, type FormEvent } from "react";
import { Check, MessageCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { MANSA_PHONE, mansaWhatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const REGIONS = [
  "Ahafo",
  "Ashanti",
  "Bono",
  "Bono East",
  "Central",
  "Eastern",
  "Greater Accra",
  "North East",
  "Northern",
  "Oti",
  "Savannah",
  "Upper East",
  "Upper West",
  "Volta",
  "Western",
  "Western North",
];

const ROLES = ["A farmer", "A young person or student", "A business owner", "Something else"];

// Taken from the flyer and the Phase 1 description, so the section promises nothing new.
const INCLUDED = [
  "Free, two days and hands-on",
  "Practical and theoretical training",
  "The tools to start producing",
  "Open to youth, women, farmers, and people who are deaf or hard of hearing",
];

const inputClass =
  "w-full rounded-[0.75rem] border-2 border-wg-line bg-wg-paper px-4 py-3 text-base text-wg-ink focus:border-wg-ink focus:outline-none";

type Field = "name" | "phone" | "region";
type Errors = Partial<Record<Field, string>>;

const Label = ({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) => (
  <label htmlFor={htmlFor} className="font-semibold text-wg-ink">
    {children} {optional && <span className="font-normal text-wg-muted">(optional)</span>}
  </label>
);

const ErrorText = ({ id, text }: { id: string; text?: string }) =>
  text ? (
    <p id={id} className="text-sm font-semibold text-red-700">
      {text}
    </p>
  ) : null;

/**
 * Training sign-up. No form service is connected yet, so the details go out as a ready-to-send
 * WhatsApp message to the Project Mansa line, the same way the contact form works.
 */
const RegisterSection = () => {
  const [fields, setFields] = useState({ name: "", phone: "", region: "", role: ROLES[0], note: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const set = (key: keyof typeof fields) => (e: { target: { value: string } }) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!fields.phone.trim()) next.phone = "Please add a phone number we can reach you on.";
    if (!fields.region) next.region = "Please choose your region.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`register-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    const lines = [
      "Hello Wiggling Gold, I'd like to register for the Project Mansa training.",
      `Name: ${fields.name.trim()}\nPhone: ${fields.phone.trim()}\nRegion: ${fields.region}\nI am: ${fields.role.toLowerCase()}`,
      fields.note.trim(),
    ].filter(Boolean);
    window.open(mansaWhatsappUrl(lines.join("\n\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const describedBy = (key: Field) => (errors[key] ? `register-${key}-error` : undefined);

  return (
    <section id="register" aria-labelledby="register-heading" className="scroll-mt-24 border-b border-wg-line bg-wg-sun">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="lg:col-span-5">
          <p className="font-display text-lg font-bold text-wg-ink/70">Phase 1 is open</p>
          <h2 id="register-heading" className="mt-2 font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] text-wg-ink md:text-6xl">
            Sign up for the free training.
          </h2>
          <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-wg-ink/80">
            Training is planned across all 16 regions. Tell us where you are and we'll let you know about the next session near you.
          </p>
          <ul className="mt-8 grid gap-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-wg-ink">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wg-ink text-wg-sun">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-wg-ink/80">
            Prefer to call?{" "}
            <a href={`tel:+233${MANSA_PHONE.replace(/\s/g, "").slice(1)}`} className="font-semibold text-wg-ink underline decoration-2 underline-offset-4">
              {MANSA_PHONE}
            </a>
          </p>
        </div>

        <Reveal className="rounded-[1.25rem] bg-wg-paper p-6 shadow-[0_24px_48px_-24px_rgba(19,24,19,0.35)] sm:p-8 md:p-10 lg:col-span-7">
          <form onSubmit={submit} noValidate className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid content-start gap-2">
                <Label htmlFor="register-name">Full name</Label>
                <input
                  id="register-name"
                  name="name"
                  autoComplete="name"
                  value={fields.name}
                  onChange={set("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={describedBy("name")}
                  className={cn(inputClass, errors.name && "border-red-700")}
                />
                <ErrorText id="register-name-error" text={errors.name} />
              </div>
              <div className="grid content-start gap-2">
                <Label htmlFor="register-phone">Phone number</Label>
                <input
                  id="register-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={set("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={describedBy("phone")}
                  className={cn(inputClass, errors.phone && "border-red-700")}
                />
                <ErrorText id="register-phone-error" text={errors.phone} />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid content-start gap-2">
                <Label htmlFor="register-region">Your region</Label>
                <select
                  id="register-region"
                  name="region"
                  value={fields.region}
                  onChange={set("region")}
                  aria-invalid={Boolean(errors.region)}
                  aria-describedby={describedBy("region")}
                  className={cn(inputClass, "h-[52px]", !fields.region && "text-wg-muted", errors.region && "border-red-700")}
                >
                  <option value="" disabled>
                    Choose a region
                  </option>
                  {REGIONS.map((r) => (
                    <option key={r} className="text-wg-ink">
                      {r}
                    </option>
                  ))}
                </select>
                <ErrorText id="register-region-error" text={errors.region} />
              </div>
              <div className="grid content-start gap-2">
                <Label htmlFor="register-role">I am</Label>
                <select id="register-role" name="role" value={fields.role} onChange={set("role")} className={cn(inputClass, "h-[52px]")}>
                  {ROLES.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="register-note" optional>
                Anything we should know?
              </Label>
              <textarea
                id="register-note"
                name="note"
                rows={3}
                value={fields.note}
                onChange={set("note")}
                aria-describedby="register-note-help"
                className={cn(inputClass, "resize-y")}
              />
              <p id="register-note-help" className="text-sm text-wg-muted">
                For example, if you need a sign language interpreter or have farmed before.
              </p>
            </div>

            <div className="grid gap-3">
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-wg-ink px-7 font-semibold text-wg-paper transition-colors hover:bg-wg-ink/90 active:scale-[0.98] sm:self-start sm:justify-self-start"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Register on WhatsApp
              </button>
              <p className="text-sm text-wg-muted">WhatsApp opens with your details filled in. Press send there to finish registering.</p>
            </div>

            {sent && (
              <p role="status" className="rounded-[0.75rem] bg-wg-leaf-soft px-4 py-3 text-wg-ink">
                WhatsApp should have opened with your details. If it didn't, call us on {MANSA_PHONE}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default RegisterSection;
