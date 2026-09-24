import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type PanInfo } from "motion/react";
import { Pause, Play } from "lucide-react";
import flyPhoto from "@/assets/bsf-adult.jpg";
import larvae from "@/assets/bsf-larvae.jpg";
import poultry from "@/assets/poultry-broilers.jpg";
import spoiledProduce from "@/assets/waste-spoiled-produce.jpg";
import LogoLetter, { type Letter } from "@/components/site/LogoLetter";
import Reveal from "@/components/site/Reveal";

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
    // Free-to-use Unsplash photo by Marek Studzinski.
    visual: (
      <img
        src={spoiledProduce}
        alt="A heap of spoiled fruit, the kind of organic waste the larvae feed on"
        width={1200}
        height={800}
        loading="lazy"
        className={photo}
      />
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

const Heading = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <h2 id="cycle-heading" className="font-display text-[2rem] font-extrabold leading-[1] tracking-[-0.03em] text-wg-soil-text sm:text-4xl md:text-6xl">
      Our name is the whole process.
    </h2>
    <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-wg-soil-muted">
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
 * Reduced motion: the four stages as stacked panels, each on its own stage colour, so the
 * soil-to-green story survives without anything moving on its own.
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

const DWELL_MS = 6500;

/**
 * The signature moment: the four stages play through on their own while the section is on screen.
 * The ground warms stage by stage, from soil to forest green. The WIGO letters are the controls:
 * tap one to jump there, or swipe sideways on a phone. Either one pauses the loop, and the play
 * button restarts it.
 */
const LifeCycle = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // Counts as on screen once it crosses the middle of the viewport, however tall the section is.
  const inView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const running = playing && inView && !reduce;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % stages.length), DWELL_MS);
    return () => window.clearTimeout(id);
  }, [running, active]);

  if (reduce) {
    return (
      <section aria-labelledby="cycle-heading" className="bg-wg-soil">
        <StaticCycle />
      </section>
    );
  }

  const choose = (i: number) => {
    setPlaying(false);
    setActive(((i % stages.length) + stages.length) % stages.length);
  };
  const onPanEnd = (_: PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) choose(active + 1);
    else if (info.offset.x > 40) choose(active - 1);
  };
  const stage = stages[active];

  return (
    <section ref={ref} aria-labelledby="cycle-heading" className="relative overflow-hidden bg-wg-soil">
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

      <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading />
          <div className="flex items-center gap-3">
            {/* The logo as the controls: the current letter lights up and fills a bar until the next stage. */}
            <div role="group" aria-label="Choose a stage" className="flex items-end gap-2 rounded-[1.25rem] bg-wg-paper px-4 pb-2.5 pt-3">
              {stages.map((s, i) => (
                <button
                  key={s.letter}
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={i === active}
                  aria-label={`${s.letter}, ${s.name}`}
                  className="flex flex-col items-stretch gap-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-gold focus-visible:ring-offset-2"
                >
                  <motion.span className="block" initial={false} animate={{ opacity: i === active ? 1 : 0.25 }} transition={{ duration: 0.4 }}>
                    <LogoLetter letter={s.letter} className="h-9 md:h-11" />
                  </motion.span>
                  <span className="block h-[3px] overflow-hidden rounded-full bg-wg-line" aria-hidden="true">
                    {i === active && (
                      <motion.span
                        key={`${active}-${running}`}
                        className="block h-full origin-left bg-wg-gold"
                        initial={{ scaleX: running ? 0 : 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: running ? DWELL_MS / 1000 : 0, ease: "linear" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause the stages" : "Play the stages"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-wg-soil-line text-wg-soil-text transition-colors hover:border-wg-soil-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-sun"
            >
              {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Swipe sideways on a phone to change stage; vertical swipes still scroll the page. */}
        <motion.div onPanEnd={onPanEnd} className="mt-10 grid touch-pan-y items-center gap-8 md:mt-14 md:grid-cols-12 md:gap-10">
          {/* All four texts share one grid cell, so the section keeps the height of the longest and
              nothing below jumps as the stages change. Only the current one is visible. */}
          <div className="grid md:col-span-5" aria-live={running ? "off" : "polite"}>
            {stages.map((s, i) => {
              const on = i === active;
              return (
                <motion.div
                  key={s.letter}
                  aria-hidden={!on}
                  className={`[grid-area:1/1] ${on ? "" : "pointer-events-none"}`}
                  initial={false}
                  animate={on ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: on ? 0.15 : 0 }}
                >
                  {/* Each new letter springs in, like a stamp. */}
                  <motion.div
                    className="hidden origin-bottom-left md:block"
                    initial={false}
                    animate={on ? { scale: 1, rotate: 0 } : { scale: 0.7, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <LetterTile letter={s.letter} />
                  </motion.div>
                  <p className="text-sm font-semibold text-wg-gold md:mt-6">
                    {i + 1} of {stages.length}: {s.name}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-wg-soil-text md:text-[2.6rem]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-wg-soil-muted md:mt-4 md:text-lg">{s.body}</p>
                  <Facts facts={s.facts} />
                </motion.div>
              );
            })}
          </div>

          <div className="relative aspect-[4/3] md:col-span-7 md:aspect-auto md:h-[min(560px,62vh)]">
            <AnimatePresence initial={false}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default LifeCycle;
