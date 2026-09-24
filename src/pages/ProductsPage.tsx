import { Check, Minus, X } from "lucide-react";
import larvae from "@/assets/bsf-larvae.jpg";
import nursery from "@/assets/farm-nursery-racks.jpg";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Marker from "@/components/site/Marker";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import StarterKit from "@/components/site/StarterKit";
import { ButtonLink } from "@/components/site/Buttons";
import { whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const quote = (product: string) => whatsappUrl(`Hello Wiggling Gold, I'd like a quote for ${product}.`);

// Specs and prices copied unchanged from the old Products page, pending confirmation.
const others = [
  {
    name: "Live larvae",
    tagline: "Fresh feed, or breeding stock to start your own colony.",
    specs: ["Direct animal feeding", "Ideal for starting a colony", "Available in various quantities", "Fresh delivery or pickup"],
    price: "Custom pricing",
    cta: { label: "Request a quote", href: quote("live larvae") },
    tone: "photo" as const,
  },
  {
    name: "Frass fertilizer",
    tagline: "What the larvae leave behind: a nutrient-rich soil amendment.",
    specs: ["High NPK content", "Improves soil structure", "100% organic, chemical-free", "Helps soil hold water"],
    price: "Coming soon",
    cta: { label: "Tell me when it's ready", href: whatsappUrl("Hello Wiggling Gold, please tell me when frass fertilizer is available.") },
    tone: "lime" as const,
  },
];

type Mark = "good" | "warn" | "bad";

// Comparison copied from the old page. Icons replace the old emoji; the words carry the meaning.
const rows: { feature: string; bsf: [string, Mark?]; fishmeal: [string, Mark?]; soy: [string, Mark?] }[] = [
  { feature: "Protein content", bsf: ["42-45%"], fishmeal: ["60-65%"], soy: ["44-48%"] },
  { feature: "Source", bsf: ["Local, Ghana", "good"], fishmeal: ["Imported", "bad"], soy: ["Imported", "bad"] },
  { feature: "Cost per kg", bsf: ["₵20-25", "good"], fishmeal: ["₵40-60", "bad"], soy: ["₵30-45", "warn"] },
  { feature: "Sustainability", bsf: ["Excellent", "good"], fishmeal: ["Overfishing concerns", "warn"], soy: ["Deforestation risk", "warn"] },
  { feature: "Availability", bsf: ["Always in stock", "good"], fishmeal: ["Supply fluctuates", "bad"], soy: ["Import dependent", "bad"] },
  { feature: "Environmental impact", bsf: ["Reduces waste", "good"], fishmeal: ["High carbon", "bad"], soy: ["Moderate carbon", "warn"] },
];

const MarkIcon = ({ mark }: { mark?: Mark }) => {
  if (!mark) return null;
  const Icon = mark === "good" ? Check : mark === "bad" ? X : Minus;
  return (
    <Icon
      aria-hidden="true"
      strokeWidth={2.5}
      className={cn("mt-0.5 h-4 w-4 shrink-0", mark === "good" ? "text-wg-leaf" : mark === "bad" ? "text-red-700" : "text-wg-gold-ink")}
    />
  );
};

const Cell = ({ value }: { value: [string, Mark?] }) => (
  <span className="flex items-start gap-2">
    <MarkIcon mark={value[1]} />
    {value[0]}
  </span>
);

const ProductsPage = () => (
  <PageShell
    title="Products | Wiggling Gold"
    description="Dried and live black soldier fly larvae, frass fertilizer and BSF starter kits, made in Ghana by Wiggling Gold."
  >
    <PageHero
      title={
        <>
          Feed that grows <Marker>here.</Marker>
        </>
      }
      intro="Protein feed and fertilizer for Ghana's farmers, made from local waste instead of imported fishmeal and soy."
    />

    {/* The main product gets a full-width feature. */}
    <section aria-labelledby="dried-heading" className="border-t border-wg-line">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <Reveal className="lg:col-span-7">
          <img
            src={larvae}
            alt="A close-up of black soldier fly larvae, the source of our dried larvae feed"
            width={1200}
            height={800}
            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
          />
        </Reveal>
        <Reveal className="lg:col-span-5" delay={0.1}>
          <p className="font-display text-lg font-bold text-wg-gold-ink">Most popular</p>
          <h2 id="dried-heading" className="mt-2 font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-5xl">
            Dried larvae
          </h2>
          <p className="mt-3 text-lg text-wg-muted">Premium protein for poultry, fish and livestock.</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-wg-line py-6">
            <div>
              <dt className="text-sm text-wg-muted">Crude protein</dt>
              <dd className="font-display text-3xl font-bold text-wg-ink">42-45%</dd>
            </div>
            <div>
              <dt className="text-sm text-wg-muted">Price</dt>
              <dd className="font-display text-3xl font-bold text-wg-ink">From ₵20/kg</dd>
            </div>
          </dl>
          <ul className="mt-6 grid gap-3">
            {["Rich in calcium and amino acids", "Cost-effective alternative to fishmeal", "Locally produced and processed"].map((s) => (
              <li key={s} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-wg-leaf" strokeWidth={2.25} aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href={quote("dried larvae")} arrow>
              Request a quote
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>

    {/* The rest of the range: a photo tile and a colour tile. */}
    <section aria-labelledby="range-heading" className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
      <h2 id="range-heading" className="font-display text-3xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-4xl">
        The rest of the range.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {others.map((p, i) => {
          const onPhoto = p.tone === "photo";
          return (
            <Reveal
              key={p.name}
              lift
              delay={i * 0.08}
              className={cn(
                "group relative flex min-h-[460px] flex-col overflow-hidden rounded-[1.25rem] p-7 md:p-8",
                p.tone === "lime" && "bg-wg-lime",
              )}
            >
              {onPhoto && (
                <>
                  <img
                    src={nursery}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={1080}
                    height={607}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wg-soil via-wg-soil/75 to-wg-soil/10" />
                </>
              )}
              <div className="relative mt-auto">
                <p className={cn("font-display font-bold", onPhoto ? "text-wg-sun" : "text-wg-ink")}>{p.price}</p>
                <h3 className={cn("mt-1 font-display text-3xl font-extrabold tracking-[-0.02em]", onPhoto ? "text-wg-soil-text" : "text-wg-ink")}>
                  {p.name}
                </h3>
                <p className={cn("mt-2", onPhoto ? "text-wg-soil-text/85" : "text-wg-ink/75")}>{p.tagline}</p>
                <ul className="mt-5 grid gap-2">
                  {p.specs.map((s) => (
                    <li key={s} className={cn("flex items-start gap-2 text-[15px]", onPhoto ? "text-wg-soil-text" : "text-wg-ink")}>
                      <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-7 inline-flex h-12 items-center rounded-full px-6 font-semibold transition-colors active:scale-[0.98]",
                    onPhoto ? "bg-wg-sun text-wg-ink hover:bg-wg-sun/90" : "bg-wg-ink text-wg-paper hover:bg-wg-ink/90",
                  )}
                >
                  {p.cta.label}
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-8 text-lg text-wg-muted">
        We also supply everything else you need to set up a BSF farm, from equipment to supplies.{" "}
        <a
          href={whatsappUrl("Hello Wiggling Gold, I'm setting up a BSF farm and need equipment.")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-wg-ink underline decoration-wg-gold decoration-2 underline-offset-4"
        >
          Ask us what you need
        </a>
        .
      </p>
    </section>

    <StarterKit />

    {/* The comparison stays a table: it is real tabular data. */}
    <section aria-labelledby="compare-heading" className="bg-wg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <h2 id="compare-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-5xl">
          How BSF compares.
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg text-wg-muted">Why farmers are switching from imported fishmeal and soybean meal.</p>
        <div className="mt-10 overflow-x-auto rounded-[1.25rem] border border-wg-line">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="text-sm">
                <th scope="col" className="px-5 py-4 font-semibold text-wg-muted">
                  <span className="sr-only">Feature</span>
                </th>
                <th scope="col" className="bg-wg-sun px-5 py-4 font-display text-lg font-bold text-wg-ink">
                  BSF larvae
                </th>
                <th scope="col" className="px-5 py-4 font-display text-lg font-bold text-wg-ink">
                  Fishmeal
                </th>
                <th scope="col" className="px-5 py-4 font-display text-lg font-bold text-wg-ink">
                  Soybean meal
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-t border-wg-line">
                  <th scope="row" className="px-5 py-4 font-semibold text-wg-ink">
                    {r.feature}
                  </th>
                  <td className="bg-wg-sun/35 px-5 py-4 font-semibold text-wg-ink">
                    <Cell value={r.bsf} />
                  </td>
                  <td className="px-5 py-4 text-wg-muted">
                    <Cell value={r.fishmeal} />
                  </td>
                  <td className="px-5 py-4 text-wg-muted">
                    <Cell value={r.soy} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <div className="pt-20 md:pt-28">
      <CtaBand
        title="Ready to make the switch?"
        body="Tell us what you farm and how much you need. We'll send prices and delivery options on WhatsApp."
        label="Get a quote"
        href={quote("feed for my farm")}
      />
    </div>
  </PageShell>
);

export default ProductsPage;
