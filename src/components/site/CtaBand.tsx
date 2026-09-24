import { ButtonLink } from "./Buttons";
import { EMAIL, ORDER_WHATSAPP_URL, PHONES } from "@/lib/contact";
import Reveal from "./Reveal";

type CtaBandProps = {
  title?: string;
  body?: string;
  label?: string;
  href?: string;
};

// Most customers in Ghana order over WhatsApp, so every page closes on this band.
const CtaBand = ({
  title = "Need feed, larvae or training?",
  body = "Send us a WhatsApp message and we'll reply with prices and delivery options.",
  label = "Order feed",
  href = ORDER_WHATSAPP_URL,
}: CtaBandProps) => (
  <section aria-labelledby="cta-heading" className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
    <Reveal className="grid gap-10 rounded-[1.25rem] bg-wg-gold px-6 py-12 sm:px-10 md:grid-cols-12 md:items-end md:py-16 lg:px-14">
      <div className="md:col-span-7">
        <h2 id="cta-heading" className="font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] text-wg-ink md:text-6xl">
          {title}
        </h2>
        <p className="mt-4 max-w-[40ch] text-lg text-wg-ink/80">{body}</p>
      </div>
      <div className="flex flex-col gap-5 md:col-span-5 md:items-end">
        <ButtonLink href={href} arrow className="self-start px-8 md:self-auto">
          {label}
        </ButtonLink>
        <p className="text-wg-ink/80 md:text-right">
          Or call{" "}
          {PHONES.map((p, i) => (
            <span key={p}>
              {i > 0 && " or "}
              <a href={`tel:${p.replace(/\s/g, "")}`} className="font-semibold text-wg-ink underline-offset-4 hover:underline">
                {p}
              </a>
            </span>
          ))}
          <br />
          <a href={`mailto:${EMAIL}`} className="font-semibold text-wg-ink underline-offset-4 hover:underline">
            {EMAIL}
          </a>
        </p>
      </div>
    </Reveal>
  </section>
);

export default CtaBand;
