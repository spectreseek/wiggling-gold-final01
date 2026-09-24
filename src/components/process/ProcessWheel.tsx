import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "motion/react";
import { Pause, Play } from "lucide-react";
import farmHouse from "@/assets/farm-house.jpg";
import nursery from "@/assets/farm-nursery-racks.jpg";
import larvae from "@/assets/bsf-larvae.jpg";
import poultry from "@/assets/poultry-broilers.jpg";
import { cn } from "@/lib/utils";

/*
 * Dirt in, gold out: the Wiggling Gold loop, in four stages.
 *
 * A dial you play with rather than scroll through: the homepage already has a pinned, scroll-driven
 * story, so this one is hands-on. A fixed pointer sits at 12 o'clock. The wheel turns a quarter at a
 * time under it, on its own while it's on screen, or to whichever stage you tap or swipe to. The ring
 * is a lens: the current photo sharp inside it, the same photo blurred behind the section. When the
 * wheel comes back round to Collect, the gold trail closes into a full circle.
 */

// Geometry, derived from the centre and radius so the layers cannot drift apart. The viewBox starts
// at 0 so SVG user units and CSS pixels share an origin.
const S = 620; // wide enough for the side labels, which sit further out than the top and bottom ones
const C = S / 2;
const R = 170; // the lens, and the ring the ports sit on
const TICK_R = 188;
const PORT_R = 30;
// Labels ride an oval: 238 at 12 and 6 o'clock (above the pointer), 260 at 3 and 9, where a
// 7-letter word is widest across the ring and would otherwise run into the port.
const labelRadius = (deg: number) => 238 + 22 * Math.abs(Math.cos((deg * Math.PI) / 180));

const SOIL = "#17130D";
const SUN = "#FFE240";
const MUTED = "#B3AA9B";

const DWELL_MS = 4500;

const polar = (deg: number, r: number) => {
  const rad = (deg * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)] as const;
};

// 72 ticks, every sixth one long: reads as an instrument dial rather than an infographic.
const TICKS = Array.from({ length: 72 }, (_, i) => {
  const angle = i * 5 - 90;
  const [x1, y1] = polar(angle, TICK_R);
  const [x2, y2] = polar(angle, TICK_R + (i % 6 === 0 ? 13 : 6));
  return `M${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}`;
}).join("");

const STAGES = [
  {
    short: "Collect",
    title: "Collection",
    body: "We collect brewery spent grain and market scraps from local partners, before they reach a landfill.",
    image: farmHouse,
    alt: "The Wiggling Gold production house, where collected organic waste arrives",
  },
  {
    short: "Convert",
    title: "Bioconversion",
    body: "Millions of larvae eat through the waste in a 14-day cycle, cutting its volume by up to 90%.",
    image: nursery,
    alt: "Rows of larvae trays inside the Wiggling Gold nursery",
  },
  {
    short: "Process",
    title: "Processing",
    body: "The larvae are harvested and dried into protein meal. What they leave behind becomes frass fertilizer.",
    image: larvae,
    alt: "Harvested black soldier fly larvae",
  },
  {
    short: "Deliver",
    title: "Delivery",
    body: "Feed goes to poultry and fish farms and fertilizer to crop farms. Then the loop starts again.",
    image: poultry,
    alt: "Young broiler chickens at a feeder, raised on the feed",
  },
];

/** One photo port on the ring. Positioned from the dial's rotation so the photo itself stays upright. */
const Port = ({
  index,
  rotation,
  active,
  onSelect,
}: {
  index: number;
  rotation: MotionValue<number>;
  active: boolean;
  onSelect: (index: number) => void;
}) => {
  const base = -90 + index * 90;
  const cx = useTransform(rotation, (r) => polar(base + r, R)[0]);
  const cy = useTransform(rotation, (r) => polar(base + r, R)[1]);
  const lx = useTransform(rotation, (r) => polar(base + r, labelRadius(base + r))[0]);
  const ly = useTransform(rotation, (r) => polar(base + r, labelRadius(base + r))[1] + 4.5);

  return (
    // Pointer route only. Keyboard and screen reader users get the buttons beside the wheel.
    <g onClick={() => onSelect(index)} className="cursor-pointer" aria-hidden="true">
      {/* A collar in the ground colour, so the port reads as cut into the ring. */}
      <motion.circle cx={cx} cy={cy} r={PORT_R + 6} fill={SOIL} />
      <motion.circle cx={cx} cy={cy} r={PORT_R} fill={`url(#wheel-port-${index})`} filter="url(#wheel-duotone)" />
      <motion.circle cx={cx} cy={cy} r={PORT_R} fill={SOIL} initial={false} animate={{ opacity: active ? 0 : 0.55 }} transition={{ duration: 0.4 }} />
      <motion.circle cx={cx} cy={cy} r={PORT_R} fill="none" stroke={active ? SUN : MUTED} strokeWidth={active ? 2.5 : 1} opacity={active ? 1 : 0.6} />
      <motion.text
        x={lx}
        y={ly}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        letterSpacing="2"
        fill={active ? SUN : MUTED}
        style={{ fontFamily: "'Figtree Variable', system-ui, sans-serif", textTransform: "uppercase" }}
      >
        {STAGES[index].short}
      </motion.text>
    </g>
  );
};

const ProcessWheel = () => {
  const reduce = useReducedMotion() === true;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.45 });

  // `step` only ever counts, so the wheel keeps turning the same way round instead of
  // unwinding when it passes Deliver. The stage shown is step mod 4.
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(!reduce);
  const active = ((step % 4) + 4) % 4;
  const stage = STAGES[active];

  const target = useMotionValue(0);
  const sprung = useSpring(target, { stiffness: 90, damping: 18, mass: 0.9 });
  const rotation = reduce ? target : sprung;
  useEffect(() => target.set(-step * 90), [step, target]);

  // Turn on its own only while it's on screen and playing. The pause button is the way to stop it
  // (it only turns while visible, so nothing moves unseen).
  const running = playing && inView && !reduce;
  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setStep((s) => s + 1), DWELL_MS);
    return () => window.clearTimeout(id);
  }, [running, step]);

  // Choosing a stage spins the shortest way there and hands control to the reader.
  const goTo = (index: number) => {
    setPlaying(false);
    setStep((s) => {
      const diff = (((index - s) % 4) + 4) % 4;
      return s + (diff === 3 ? -1 : diff);
    });
  };
  const nudge = (by: number) => {
    setPlaying(false);
    setStep((s) => s + by);
  };
  const onPanEnd = (_: PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) nudge(1);
    else if (info.offset.x > 40) nudge(-1);
  };

  // The trail counts quarters within the current lap: a quarter at Convert, the whole circle when the
  // wheel is back at Collect. Each lap is its own element, so a finished circle fades out while the
  // next one draws in, rather than the trail unwinding backwards.
  const lap = step <= 0 ? 0 : Math.floor((step - 1) / 4);
  const trail = step <= 0 ? 0 : (step - lap * 4) / 4;

  return (
    <section
      ref={ref}
      id="loop"
      aria-labelledby="loop-heading"
      className="relative overflow-hidden bg-wg-soil"
    >
      {/* The current photo, held out of focus behind the lens. Scaled past the frame so the blur
          doesn't fade to transparent at the edges. */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.img
            key={active}
            src={stage.image}
            alt=""
            initial={reduce ? false : { opacity: 0, scale: 1.24 }}
            animate={{ opacity: 1, scale: 1.16 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "blur(16px) saturate(0.85)" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-wg-soil/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-wg-soil via-wg-soil/60 to-wg-soil/20" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <h2 id="loop-heading" className="font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] text-wg-soil-text sm:text-5xl lg:text-6xl">
            Dirt in. <span className="text-wg-sun">Gold out.</span>
          </h2>
          <p className="mt-4 max-w-[40ch] text-wg-soil-muted">Tap a stage or let the wheel turn. Every delivery sets up the next collection.</p>

          {/* The current stage. Announced only when the reader chose it, not on every automatic turn. */}
          <div className="mt-10 min-h-[11.5rem] sm:min-h-[10rem]" aria-live={running ? "off" : "polite"}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold text-wg-sun">Stage {active + 1} of 4</p>
                <h3 className="mt-1 font-display text-4xl font-extrabold tracking-[-0.02em] text-wg-soil-text md:text-5xl">{stage.title}</h3>
                <p className="mt-3 max-w-[42ch] text-lg leading-relaxed text-wg-soil-text/80">{stage.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <div role="group" aria-label="Choose a stage" className="flex flex-wrap gap-1.5">
              {STAGES.map((m, i) => (
                <button
                  key={m.short}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-pressed={i === active}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-sun",
                    i === active ? "text-wg-ink" : "text-wg-soil-muted hover:text-wg-soil-text",
                  )}
                >
                  {i === active && (
                    <motion.span
                      layoutId="wheel-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-wg-sun"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{m.short}</span>
                </button>
              ))}
            </div>
            {!reduce && (
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause the wheel" : "Play the wheel"}
                className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-wg-soil-line text-wg-soil-text transition-colors hover:border-wg-soil-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-sun"
              >
                {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
              </button>
            )}
          </div>

          {/* How long until the next turn. Only there while the wheel is turning on its own. */}
          <div className="mt-5 h-[3px] w-40 overflow-hidden rounded-full" aria-hidden="true">
            {running && (
              <motion.div
                key={step}
                className="h-full origin-left bg-wg-sun/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: DWELL_MS / 1000, ease: "linear" }}
              />
            )}
          </div>
        </div>

        {/* The wheel. Swipe sideways on a phone to turn it; vertical swipes still scroll the page. */}
        <motion.div className="mx-auto w-full max-w-[40rem] touch-pan-y lg:col-span-7" onPanEnd={onPanEnd}>
          <svg viewBox={`0 0 ${S} ${S}`} className="w-full select-none" role="img" aria-label={`The Wiggling Gold loop, showing stage ${active + 1} of 4: ${stage.title}. ${stage.alt}.`}>
            <defs>
              {STAGES.map((m, i) => (
                <pattern key={m.short} id={`wheel-port-${i}`} patternUnits="objectBoundingBox" width="1" height="1">
                  <image href={m.image} width={PORT_R * 2} height={PORT_R * 2} preserveAspectRatio="xMidYMid slice" />
                </pattern>
              ))}
              {/* Greyscale, then remap black to soil and white to sun, so four unrelated photos read
                  as one set in the brand's own colours. */}
              <filter id="wheel-duotone">
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="0.09 1" />
                  <feFuncG type="table" tableValues="0.075 0.886" />
                  <feFuncB type="table" tableValues="0.05 0.25" />
                </feComponentTransfer>
              </filter>
              <clipPath id="wheel-disc">
                <circle cx={C} cy={C} r={R} />
              </clipPath>
              <radialGradient id="wheel-vignette">
                <stop offset="0.55" stopColor={SOIL} stopOpacity="0" />
                <stop offset="1" stopColor={SOIL} stopOpacity="0.55" />
              </radialGradient>
            </defs>

            {/* The lens: the current photo, sharp and in full colour, clipped to the ring. */}
            <g clipPath="url(#wheel-disc)">
              <AnimatePresence initial={false}>
                <motion.image
                  key={active}
                  href={stage.image}
                  x={C - R}
                  y={C - R}
                  width={R * 2}
                  height={R * 2}
                  preserveAspectRatio="xMidYMid slice"
                  initial={reduce ? false : { opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                />
              </AnimatePresence>
              <circle cx={C} cy={C} r={R} fill="url(#wheel-vignette)" />
            </g>
            <circle cx={C} cy={C} r={R} fill="none" stroke="#EFEAE0" strokeOpacity="0.3" strokeWidth="2" />

            {/* The turning dial: ticks and the gold trail rotate together. Both are symmetric about
                the centre, so their fill-box centre is the wheel's. */}
            <motion.g style={{ rotate: rotation, transformBox: "fill-box", transformOrigin: "center" }}>
              <path d={TICKS} stroke={MUTED} strokeOpacity="0.5" strokeWidth="1.2" fill="none" />
              <g transform={`rotate(-90 ${C} ${C})`}>
                <AnimatePresence initial={false}>
                  <motion.circle
                    key={lap}
                    cx={C}
                    cy={C}
                    r={R}
                    fill="none"
                    stroke={SUN}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 1 }}
                    animate={{ pathLength: trail, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 18, mass: 0.9, opacity: { duration: 0.6 } }}
                  />
                </AnimatePresence>
              </g>
            </motion.g>

            {/* The fixed pointer at 12 o'clock that every stage turns to. It sits between the top label
                and the top port's collar, clear of both. */}
            <path d={`M${C - 7} ${C - TICK_R - 36}L${C + 7} ${C - TICK_R - 36}L${C} ${C - TICK_R - 24}Z`} fill={SUN} />

            {STAGES.map((m, i) => (
              <Port key={m.short} index={i} rotation={rotation} active={i === active} onSelect={goTo} />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessWheel;
