import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Marker from "@/components/site/Marker";
import Reveal from "@/components/site/Reveal";
import { ButtonLink } from "@/components/site/Buttons";
import { ADDRESS, EMAIL, MANSA_PHONE, MANSA_WHATSAPP_URL, MAP_EMBED_URL, MAPS_URL, ORDER_WHATSAPP_URL, PHONES, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const topics = ["Buying feed or larvae", "Training or Project Mansa", "Supplying organic waste", "A partnership", "Something else"];

const inputClass =
  "w-full rounded-[0.75rem] border-2 border-wg-line bg-wg-paper px-4 py-3 text-base text-wg-ink focus:border-wg-ink focus:outline-none";

type Errors = Partial<Record<"name" | "message", string>>;

const ContactForm = () => {
  const [fields, setFields] = useState({ name: "", reply: "", topic: topics[0], message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const set = (key: keyof typeof fields) => (e: { target: { value: string } }) => setFields((f) => ({ ...f, [key]: e.target.value }));

  // No email service is connected yet, so the message goes out as a ready-to-send WhatsApp message.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!fields.message.trim()) next.message = "Please write a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const lines = [
      `Hello Wiggling Gold, this is ${fields.name.trim()}.`,
      `I'm getting in touch about: ${fields.topic}.`,
      fields.message.trim(),
      fields.reply.trim() ? `You can also reach me at ${fields.reply.trim()}.` : "",
    ].filter(Boolean);
    window.open(whatsappUrl(lines.join("\n\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="font-semibold text-wg-ink">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(inputClass, errors.name && "border-red-700")}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm font-semibold text-red-700">
              {errors.name}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-reply" className="font-semibold text-wg-ink">
            Phone or email <span className="font-normal text-wg-muted">(optional)</span>
          </label>
          <input id="contact-reply" name="reply" autoComplete="tel" value={fields.reply} onChange={set("reply")} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-topic" className="font-semibold text-wg-ink">
          What's it about?
        </label>
        <select id="contact-topic" name="topic" value={fields.topic} onChange={set("topic")} className={cn(inputClass, "h-[52px]")}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className="font-semibold text-wg-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={set("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
          className={cn(inputClass, "resize-y", errors.message && "border-red-700")}
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-sm font-semibold text-red-700">
            {errors.message}
          </p>
        ) : (
          <p id="contact-message-help" className="text-sm text-wg-muted">
            For orders, tell us what you farm and roughly how much you need.
          </p>
        )}
      </div>

      <div className="grid gap-3">
        <button
          type="submit"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-wg-ink px-7 font-semibold text-wg-paper transition-colors hover:bg-wg-ink/90 active:scale-[0.98] sm:self-start"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Send on WhatsApp
        </button>
        <p className="text-sm text-wg-muted">WhatsApp opens with your message ready. Press send there to reach us.</p>
      </div>

      {sent && (
        <p role="status" className="rounded-[0.75rem] bg-wg-leaf-soft px-4 py-3 text-wg-ink">
          WhatsApp should have opened with your message. If it didn't, email us at {EMAIL}.
        </p>
      )}
    </form>
  );
};

const channels = [
  { icon: MessageCircle, label: "Orders on WhatsApp", value: PHONES[0], href: ORDER_WHATSAPP_URL },
  { icon: MessageCircle, label: "Project Mansa and training", value: MANSA_PHONE, href: MANSA_WHATSAPP_URL },
  { icon: Phone, label: "Call us", value: PHONES.join(" or "), href: `tel:${PHONES[0].replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

const ContactPage = () => (
  <PageShell
    title="Contact | Wiggling Gold"
    description="Order black soldier fly feed, ask about training or Project Mansa, or partner with Wiggling Gold."
  >
    <PageHero
      title={
        <>
          Let's <Marker>talk.</Marker>
        </>
      }
      intro="Order feed, ask about training, supply your organic waste or partner with us. WhatsApp is the fastest way to reach us."
    />

    <section aria-label="Contact options" className="border-t border-wg-line">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-wg-ink md:text-4xl">Send us a message.</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>

        <div className="lg:col-span-4 lg:col-start-9">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-wg-ink md:text-4xl">Or reach us directly.</h2>
          <ul className="mt-8 grid border-t border-wg-line">
            {channels.map((c, i) => {
              const newTab = c.href.startsWith("http");
              return (
                <Reveal as="li" key={c.label} delay={i * 0.06} className="border-b border-wg-line">
                  <a
                    href={c.href}
                    {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-start gap-4 py-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wg-sun text-wg-ink">
                      <c.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="grid">
                      <span className="text-sm text-wg-muted">{c.label}</span>
                      <span className="font-semibold text-wg-ink group-hover:underline">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>

    {/* Find us: an embedded Google map of the office, which needs no API key. It only loads when
        scrolled near, and the button below opens the Maps app for directions. */}
    <section aria-labelledby="find-heading" className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
      <Reveal className="grid gap-8 rounded-[1.25rem] bg-wg-forest p-6 md:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
        <div className="lg:col-span-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wg-lime text-wg-ink">
            <MapPin className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 id="find-heading" className="mt-6 font-display text-3xl font-extrabold tracking-[-0.02em] text-wg-forest-text md:text-4xl">
            Find us in Kokomlemle, Accra.
          </h2>
          <address className="mt-4 not-italic text-lg text-wg-forest-muted">
            <span className="block font-semibold text-wg-forest-text">{ADDRESS.street}</span>
            <span className="block">{ADDRESS.city}</span>
            <span className="block">GPS: {ADDRESS.gps}</span>
          </address>
          <p className="mt-4 text-wg-forest-muted">Call ahead so we're ready for you.</p>
          <div className="mt-8">
            <ButtonLink href={MAPS_URL} tone="sun" icon={<ArrowUpRight className="h-5 w-5" aria-hidden="true" />}>
              Get directions
            </ButtonLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.25rem] bg-wg-forest-raised lg:col-span-7">
          <iframe
            src={MAP_EMBED_URL}
            title={`Map showing the Wiggling Gold office at ${ADDRESS.street}, ${ADDRESS.city}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[4/3] w-full border-0 md:aspect-[16/10]"
          />
        </div>
      </Reveal>
    </section>
  </PageShell>
);

export default ContactPage;
