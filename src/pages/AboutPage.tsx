import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import farmHouse from "@/assets/farm-house.jpg";
import nursery from "@/assets/farm-nursery-racks.jpg";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Marker from "@/components/site/Marker";
import Reveal from "@/components/site/Reveal";
import LogoLetter, { type Letter } from "@/components/site/LogoLetter";
import CtaBand from "@/components/site/CtaBand";

// What each letter of the logo stands for.
const letters: { letter: Letter; name: string; line: string }[] = [
  { letter: "W", name: "Waste", line: "Brewery grain and market scraps nobody else wants." },
  { letter: "I", name: "The fly", line: "The black soldier fly, a harmless insect and a tireless worker." },
  { letter: "G", name: "The larva", line: "Fourteen days of eating that turn waste into protein." },
  { letter: "O", name: "The loop", line: "Feed, fertilizer and eggs that start the cycle again." },
];

const beliefs = [
  {
    title: "Mission",
    body: "To turn organic waste into valuable, sustainable products through black soldier fly farming.",
  },
  {
    title: "Vision",
    body: "A world where zero waste is the norm, and circular farming feeds people while it protects the environment.",
  },
];

const values = [
  {
    title: "Excellence",
    body: "We hold every product to high standards, so the farmers who rely on us get feed that works.",
  },
  {
    title: "Partnership",
    body: "We build long-term relationships with farms, breweries and markets, because this only works together.",
  },
];

const NurseryBand = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  // The source is a 1080px WhatsApp image, so it is kept at about its own width to stay sharp.
  return (
    <figure ref={ref} className="mx-auto grid max-w-[1400px] gap-6 px-4 pb-20 sm:px-6 md:pb-28 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] lg:col-span-8">
        <motion.img
          src={nursery}
          alt="Rows of orange larvae trays on shelves inside the Wiggling Gold nursery"
          width={1080}
          height={607}
          loading="lazy"
          style={reduce ? undefined : { y, scale: 1.1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <figcaption className="lg:col-span-4">
        <p className="font-display text-2xl font-bold leading-snug text-wg-ink md:text-3xl">Inside the larvae nursery at our farm.</p>
        <p className="mt-3 text-wg-muted">Tray after tray of larvae, working through their 14-day cycle.</p>
      </figcaption>
    </figure>
  );
};

const AboutPage = () => (
  <PageShell
    title="About | Wiggling Gold"
    description="Wiggling Gold turns Ghana's organic waste into animal feed and fertilizer with black soldier fly larvae."
  >
    <PageHero
      title={
        <>
          We turn waste into <Marker>worth.</Marker>
        </>
      }
      intro="Wiggling Gold started with two problems: organic waste that nobody wants, and animal feed that costs farmers too much. The black soldier fly solves both."
      aside={
        <figure>
          <img
            src={farmHouse}
            alt="The Wiggling Gold production house, a long building with a white roof, surrounded by farmland"
            width={1080}
            height={607}
            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
          />
          <figcaption className="mt-3 text-sm text-wg-muted">Our production house.</figcaption>
        </figure>
      }
    />

    {/* The story reads like a letter: a heading that stays put while the text scrolls past. */}
    <section aria-labelledby="story-heading" className="border-t border-wg-line">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <h2 id="story-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-5xl lg:sticky lg:top-28">
            Our story.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-wg-muted md:text-xl lg:col-span-7 lg:col-start-6">
          <Reveal as="p">
            We started Wiggling Gold to solve two problems at once: the organic waste that piles up in Ghana's markets
            and breweries, and the high cost of protein for animal feed.
          </Reveal>
          <Reveal as="p">
            The answer was an insect. Black soldier fly larvae are nature's most efficient waste processors. In just
            days, they turn organic waste into high-quality protein, in a closed loop that helps farmers and the
            environment at the same time.
          </Reveal>
          <Reveal>
            <p className="border-l-4 border-wg-gold pl-6 font-display text-2xl font-bold leading-snug text-wg-ink md:text-3xl">
              Turning dirt into gold is not a slogan for us. It is the job, every day.
            </p>
          </Reveal>
          <Reveal as="p">
            Today we work with markets, breweries and farms across the region, process thousands of tons of organic
            waste every year, and produce feed that supports sustainable farming.
          </Reveal>
        </div>
      </div>
    </section>

    {/* Inside the farm: the nursery racks, full width, drifting slightly as you scroll past. */}
    <NurseryBand />

    {/* The logo, explained letter by letter. */}
    <section aria-labelledby="name-heading" className="bg-wg-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <h2 id="name-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-5xl">
          Why WIGO?
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg text-wg-muted">Our logo is our process. Each letter is one stage of the black soldier fly's life cycle.</p>
        <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {letters.map((l, i) => (
            <Reveal as="li" key={l.letter} delay={i * 0.08}>
              <div className="flex h-36 items-end md:h-44">
                <LogoLetter letter={l.letter} className="h-28 md:h-36" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-wg-ink">{l.name}</h3>
              <p className="mt-2 max-w-[28ch] text-wg-muted">{l.line}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    {/* What we stand for, on the green of the logo's O. */}
    <section aria-labelledby="beliefs-heading" className="bg-wg-forest">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <h2 id="beliefs-heading" className="font-display text-lg font-bold text-wg-lime">
          What we stand for
        </h2>
        <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <h3 className="font-display text-2xl font-bold text-wg-sun">{b.title}</h3>
              <p className="mt-3 font-display text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-wg-forest-text md:text-4xl">
                {b.body}
              </p>
            </Reveal>
          ))}
        </div>
        <dl className="mt-16 grid gap-8 border-t border-wg-forest-text/15 pt-10 md:grid-cols-2 md:gap-16">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-display text-xl font-bold text-wg-lime">{v.title}</dt>
              <dd className="text-lg leading-relaxed text-wg-forest-muted">{v.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <div className="pt-20 md:pt-28">
      <CtaBand
        title="Work with us."
        body="Buy feed, train with us or partner on Project Mansa. Tell us what you need and we'll take it from there."
        label="Get in touch"
        href="/contact"
      />
    </div>
  </PageShell>
);

export default AboutPage;
