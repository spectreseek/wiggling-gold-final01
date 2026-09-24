import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import flyPhoto from "@/assets/bsf-adult.jpg";
import larvae from "@/assets/bsf-larvae.jpg";
import poultry from "@/assets/poultry-broilers.jpg";
import spoiledProduce from "@/assets/waste-spoiled-produce.jpg";
import ghanaMarket from "@/assets/waste-ghana-market.jpg";
import LogoLetter, { type Letter } from "@/components/site/LogoLetter";
import Reveal from "@/components/site/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";

/** Three short facts under a stage: a big value over a short label, side by side. */
const Facts = ({ facts }: { facts: Fact[] }) => (
  <ul className="mt-5 grid max-w-[36rem] grid-cols-3 gap-3 border-t border-wg-soil-line pt-4 md:mt-7 md:gap-5 md:pt-5">
    {facts.map((f) => (
      <li key={f.value}>
        <span className="block font-display text-lg font-extrabold leading-tight tracking-[-0.02em] text-wg-sun md:text-2xl">{f.value}</span>
        <span className="mt-1 block text-xs leading-snug text-wg-soil-muted md:text-sm">{f.label}</span>
      </li>
    ))}
  </ul>
);

type Fact = { value: string; label: string };

type Stage = {
  letter: Letter;
  name: string;
  title: string;
  body: string;
  facts: Fact[];
  visual: ReactNode;
  ground: string;
};

const photo = "h-full w-full rounded-[1.25rem] object-cover";

// Facts are taken from what the site already says (the FAQ and product copy), so the section
// never claims more than the rest of the site. The larger figures are still pending confirmation.
const stages: Stage[] = [
  {
    letter: "W",
    ground: "bg-wg-soil",
    name: "Waste",
    title: "It starts with what everyone else throws away.",
    body: "We collect spoiled produce from markets and spent grain from breweries, and keep it out of landfills.",
    facts: [
      { value: "4 sources", label: "breweries, markets, food processors, farms" },
      { value: "Every load", label: "checked before it's fed" },
      { value: "Up to 90%", label: "less waste by volume" },
    ],
    // Two free-to-use Unsplash photos: spoiled produce by Marek Studzinski, and a Ghanaian market
    // stall by Naa Oyoo Quartey, showing where much of that waste comes from.
    visual: (
      <div className="grid h-full w-full grid-cols-3 gap-3">
        <img
          src={spoiledProduce}
          alt="A heap of spoiled fruit, the kind of organic waste the larvae feed on"
          width={1200}
          height={800}
          loading="lazy"
          className={`${photo} col-span-2`}
        />
        <img
          src={ghanaMarket}
          alt="Peppers for sale in baskets at a Ghanaian market"
          width={800}
          height={999}
          loading="lazy"
          className={photo}
        />
      </div>
    ),
  },
  {
    letter: "I",
    ground: "bg-[#1D2014]",
    name: "The fly",
    title: "Meet the black soldier fly.",
    body: "Hermetia illucens is not a pest. It doesn't bite, doesn't spread disease and isn't drawn to people's homes.",
    facts: [
      { value: "5-8 days", label: "adult life, just to mate" },
      { value: "No mouth", label: "adults can't eat, bite or spread disease" },
      { value: "27-30°C", label: "ideal warmth, and Ghana's all year" },
    ],
    visual: (
      <img
        src={flyPhoto}
        alt="An adult black soldier fly resting on a green leaf"
        width={1400}
        height={788}
        loading="lazy"
        className={`${photo} object-[45%_40%]`}
      />
    ),
  },
  {
    letter: "G",
    ground: "bg-wg-amber",
    name: "The larva",
    title: "Fourteen days of eating.",
    body: "The larvae work through the waste around the clock and grow into protein-rich biomass in a 14-day cycle.",
    facts: [
      { value: "14 days", label: "of eating before harvest" },
      { value: "2×", label: "their body weight eaten a day" },
      { value: "42-45%", label: "protein once dried" },
    ],
    visual: <img src={larvae} alt="Black soldier fly larvae feeding on organic waste" width={1200} height={800} loading="lazy" className={photo} />,
  },
  {
    letter: "O",
    ground: "bg-wg-forest",
    name: "The loop",
    title: "Feed, fertilizer, and the next batch.",
    body: "Most larvae are dried into protein feed. The waste they leave behind, called frass, becomes organic fertilizer. A few are kept to grow into flies, and their eggs start the next batch.",
    facts: [
      { value: "Feed", label: "for poultry, fish and pigs" },
      { value: "Frass", label: "organic fertilizer for crops" },
      { value: "Eggs", label: "from new flies restart the cycle" },
    ],
    visual: <img src={poultry} alt="Young broiler chickens gathered around a feeder" width={1200} height={800} loading="lazy" className={photo} />,
  },
];

// On phones the pinned view is short on room, so the intro line only shows from md up there.
const Heading = ({ className = "", compact = false }: { className?: string; compact?: boolean }) => (
  <div className={className}>
    <h2 id="cycle-heading" className="font-display text-[2rem] font-extrabold leading-[1] tracking-[-0.03em] text-wg-soil-text sm:text-4xl md:text-6xl">
      Our name is the whole process.
    </h2>
    <p className={`mt-4 max-w-[46ch] text-lg leading-relaxed text-wg-soil-muted ${compact ? "hidden md:block" : ""}`}>
      Each letter of WIGO is one stage of the black soldier fly's life cycle.
    </p>
  </div>
);

const LetterTile = ({ letter }: { letter: Letter }) => (
  <div className="inline-flex rounded-[1.25rem] bg-wg-paper px-5 py-4">
    <LogoLetter letter={letter} className="h-20 md:h-28" />
  </div>
);

/**
 * Phones and reduced motion: the four stages as stacked panels, each on its own stage colour, so the
 * soil-to-green story survives without pinning. A small phone doesn't have the height to pin the
 * heading, text, facts and photo on one screen.
 */
const StaticCycle = () => (
  <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
    <Heading className="mb-10" />
    <ol className="grid gap-4">
      {stages.map((s, i) => (
        <Reveal as="li" key={s.letter} className={`grid items-center gap-8 rounded-[1.25rem] p-5 sm:p-8 md:grid-cols-2 ${s.ground}`}>
          <div>
            <LetterTile letter={s.letter} />
            <p className="mt-6 text-sm font-semibold text-wg-gold">
              {i + 1} of {stages.length}: {s.name}
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-[1.05] text-wg-soil-text">{s.title}</h3>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-wg-soil-muted">{s.body}</p>
            <Facts facts={s.facts} />
          </div>
          <div className="aspect-[4/3]">{s.visual}</div>
        </Reveal>
      ))}
    </ol>
  </div>
);

/**
 * The signature moment: the section pins while the reader scrolls through the four stages.
 * The page drops into a dark "soil" ground here, which warms stage by stage until it turns green.
 */
const LifeCycle = () => {
  const reduce = useReducedMotion();
  const isPhone = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Only updates when the reader crosses into a new stage, not on every scroll frame.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(stages.length - 1, Math.max(0, Math.floor(v * stages.length)));
    if (next !== active) setActive(next);
  });

  if (reduce || isPhone) {
    return (
      <section aria-labelledby="cycle-heading" className="bg-wg-soil">
        <StaticCycle />
      </section>
    );
  }

  const stage = stages[active];

  return (
    <section aria-labelledby="cycle-heading" className="bg-wg-soil">
      <div ref={ref} className="relative" style={{ height: `${stages.length * 100}dvh` }}>
        <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden">
          {/* The ground itself changes with the story: soil, olive, amber, then forest green. */}
          {stages.map((s, i) => (
            <motion.div
              key={s.letter}
              aria-hidden="true"
              className={`absolute inset-0 ${s.ground}`}
              initial={false}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
          ))}
          <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 pb-8 pt-[88px] sm:px-6 lg:px-10 lg:pb-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Heading compact />
              {/* The logo as a progress bar: the current stage's letter lights up. */}
              <ol aria-label="Life cycle progress" className="flex items-end gap-1.5 rounded-[1.25rem] bg-wg-paper px-4 py-3">
                {stages.map((s, i) => (
                  <li key={s.letter} aria-current={i === active ? "step" : undefined}>
                    <span className="sr-only">{s.name}</span>
                    <motion.span
                      className="block"
                      animate={{ opacity: i === active ? 1 : 0.22 }}
                      transition={{ duration: 0.4 }}
                    >
                      <LogoLetter letter={s.letter} className="h-9 md:h-11" />
                    </motion.span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Phones: a column where the text takes what it needs and the image fills the rest. From md up: a two-column grid. */}
            <div className="mt-6 flex min-h-0 flex-1 flex-col gap-5 md:mt-8 md:grid md:grid-cols-12 md:items-center md:gap-10 lg:mt-12">
              <div className="shrink-0 md:col-span-5" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage.letter}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Each new letter springs in, like a stamp. */}
                    <motion.div
                      className="hidden origin-bottom-left md:block"
                      initial={{ scale: 0.7, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <LetterTile letter={stage.letter} />
                    </motion.div>
                    <p className="text-sm font-semibold text-wg-gold md:mt-6">
                      {active + 1} of {stages.length}: {stage.name}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-wg-soil-text md:text-[2.6rem]">
                      {stage.title}
                    </h3>
                    <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-wg-soil-muted md:mt-4 md:text-lg">{stage.body}</p>
                    <Facts facts={stage.facts} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative min-h-[180px] flex-1 md:col-span-7 md:h-full md:max-h-[560px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={stage.letter}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {stage.visual}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Scroll progress through the section. */}
            <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full">
              <motion.div className="h-full origin-left bg-wg-gold" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCycle;
