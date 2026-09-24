import { motion, useReducedMotion } from "motion/react";
import { Recycle, Sprout, TrendingUp } from "lucide-react";
import flyer from "@/assets/starter-kit-flyer.jpg";
import { ButtonLink } from "./Buttons";
import Reveal from "./Reveal";
import { MANSA_WHATSAPP_URL, whatsappUrl } from "@/lib/contact";

const benefits = [
  { icon: Recycle, text: "Turn organic waste into valuable protein." },
  { icon: Sprout, text: "Build a sustainable agribusiness." },
  { icon: TrendingUp, text: "Produce up to 100kg of live BSF larvae every month." },
];

// The package, grouped so a 16-line list reads at a glance. Quantities from the flyer.
const kit = [
  {
    group: "The production unit",
    items: [
      ["WIGO DOMUS (flies and larvae production unit)", "1"],
      ["25L gallons", "30"],
      ["Nursery bowls", "10"],
      ["Sieving baskets", "3"],
      ["Attractant buckets", "2"],
      ["Love nets", "2"],
      ["Foam sheets", "10"],
    ],
  },
  {
    group: "Living stock",
    items: [
      ["Broodstock", "10"],
      ["Eggies", "10"],
    ],
  },
  {
    group: "Tools and records",
    items: [
      ["Hygrometer", "1"],
      ["Mini scales", "2"],
      ["Spray bottle", "1"],
      ["Examination gloves", "2 pairs"],
      ["Rubber bands", "1 pack"],
      ["Thumb tacks", "1 pack"],
      ["Records book", "1"],
    ],
  },
  {
    group: "Support",
    items: [
      ["Expert training", "Included"],
      ["Consultancy support", "Included"],
    ],
  },
];

const ORDER_KIT_URL = whatsappUrl("Hello Wiggling Gold, I'm interested in the Standard Starter Kit with the WIGO DOMUS.");

/** The Wiggling Gold Standard Starter Kit, built around the WIGO DOMUS production unit. */
const StarterKit = () => {
  const reduce = useReducedMotion();
  return (
    <section id="starter-kit" aria-labelledby="kit-heading" className="scroll-mt-24 bg-wg-forest">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-display text-lg font-bold text-wg-lime">Is high startup capital holding you back?</p>
            <h2 id="kit-heading" className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-wg-forest-text sm:text-6xl lg:text-7xl">
              Meet the WIGO&nbsp;DOMUS.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-wg-forest-muted md:text-xl">
              A practical, affordable all-in-one way to start producing black soldier fly larvae with confidence. The Standard
              Starter Kit gives you the DOMUS, production materials, broodstock, eggies, tools, and expert training and
              consultancy.
            </p>

            <ul className="mt-8 grid gap-3">
              {benefits.map((b, i) => (
                <Reveal as="li" key={b.text} delay={i * 0.08} className="flex items-center gap-4 text-lg text-wg-forest-text">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wg-lime text-wg-ink">
                    <b.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {b.text}
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-wg-forest-text/15 pt-8">
              <div>
                <p className="text-sm font-semibold text-wg-lime">Limited-time offer</p>
                <p className="mt-1 flex items-baseline gap-3">
                  <span className="font-display text-6xl font-extrabold tracking-[-0.03em] text-wg-sun">₵7,000</span>
                  <span className="text-xl text-wg-forest-muted line-through">
                    <span className="sr-only">was </span>₵10,000
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={ORDER_KIT_URL} tone="sun" arrow>
                  Order the starter kit
                </ButtonLink>
                <ButtonLink href={MANSA_WHATSAPP_URL} variant="outline" tone="light">
                  Ask about training
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* The real flyer, slightly tilted like it was pinned up. Opens full size. */}
          <motion.a
            href={flyer}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Standard Starter Kit flyer at full size"
            className="mx-auto block w-full max-w-sm overflow-hidden rounded-[1.25rem] lg:col-span-4 lg:col-start-9 lg:max-w-none"
            initial={reduce ? false : { opacity: 0, rotate: -5, y: 40 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
          >
            <img
              src={flyer}
              alt="Standard Starter Kit flyer showing the WIGO DOMUS production unit, the package list and the price of 7,000 cedis"
              width={1100}
              height={1423}
              loading="lazy"
              className="h-auto w-full"
            />
          </motion.a>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-wg-forest-text md:text-4xl">What's in the kit.</h3>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {kit.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.06}>
                <h4 className="border-b-2 border-wg-sun pb-3 font-display text-xl font-bold text-wg-sun">{g.group}</h4>
                <dl className="mt-4 grid gap-2.5">
                  {g.items.map(([name, qty]) => (
                    <div key={name} className="flex items-baseline justify-between gap-4">
                      <dt className="text-wg-forest-text">{name}</dt>
                      <dd className="shrink-0 font-semibold tabular-nums text-wg-forest-muted">{qty}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex flex-col gap-4 rounded-[1.25rem] bg-wg-forest-raised p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="max-w-[56ch] text-lg leading-relaxed text-wg-forest-muted">
              Whether you're a crop farmer, an entrepreneur, a livestock producer or looking for a new green business, the
              WIGO DOMUS gives you a practical way into BSF production.
            </p>
            <p className="shrink-0 font-display text-2xl font-extrabold tracking-[-0.02em] text-wg-forest-text md:text-3xl">
              Start small.
              <br />
              Produce smart.
              <br />
              <span className="text-wg-sun">Grow sustainably.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterKit;
