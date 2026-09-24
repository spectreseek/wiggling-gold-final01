import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import larvae from "@/assets/bsf-larvae.jpg";
import { ORDER_WHATSAPP_URL } from "@/lib/contact";

const ease = [0.16, 1, 0.3, 1] as const;

const words = ["Turning", "dirt", "into"];

const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // Parallax as the hero scrolls away: the photo sinks and zooms a little, the yellow block rises.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // The photo is always scaled up a little more than it moves, so its edges never show.
  const photoY = useTransform(scrollYProgress, [0, 1], ["-3%", "6%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const blockY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section ref={ref} className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:min-h-[calc(100dvh-72px)] lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-10 lg:pb-20">
      <div className="lg:col-span-6">
        <h1 className="font-display text-[3.4rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-wg-ink sm:text-7xl xl:text-[6.5rem]">
          {/* Word by word, so the line reads as it lands. */}
          {words.map((w, i) => (
            <motion.span key={w} {...rise(0.05 + i * 0.09)} className="mr-[0.22em] inline-block">
              {w}
            </motion.span>
          ))}
          <motion.span {...rise(0.32)} className="relative inline-block whitespace-nowrap">
            {/* Gold text on the light ground fails contrast, so the gold sits behind the word. */}
            <motion.span
              aria-hidden="true"
              className="absolute -inset-x-[0.06em] bottom-[0.02em] top-[0.32em] -z-0 origin-left rounded-[0.1em] bg-wg-gold"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
            />
            <span className="relative">gold.</span>
          </motion.span>
        </h1>
        <motion.p {...rise(0.2)} className="mt-7 max-w-[34ch] text-lg leading-relaxed text-wg-muted md:text-xl">
          We farm black soldier fly larvae that turn Ghana's market and brewery waste into protein feed and
          organic fertilizer.
        </motion.p>
        <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={ORDER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-wg-ink px-7 text-base font-semibold text-wg-paper transition-transform hover:bg-wg-ink/90 active:scale-[0.98]"
          >
            Order feed
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <Link
            to="/project-mansa"
            className="inline-flex h-14 items-center rounded-full border-2 border-wg-ink/15 px-7 text-base font-semibold text-wg-ink transition-colors hover:border-wg-ink/40 active:scale-[0.98]"
          >
            Project Mansa
          </Link>
        </motion.div>
      </div>

      {/* The photo arrives in grey and warms up to its real colour: dirt, then gold. */}
      <motion.div
        {...(reduce ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.1, ease } })}
        className="relative lg:col-span-6"
      >
        {/* A block of the logo's sun yellow sits behind the photo and drifts the other way on scroll. */}
        <motion.div
          aria-hidden="true"
          style={reduce ? undefined : { y: blockY }}
          className="absolute -bottom-4 -left-4 right-10 top-10 rounded-[1.25rem] bg-wg-sun md:-bottom-6 md:-left-6"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:aspect-[3/2] lg:aspect-[4/5] lg:max-h-[calc(100dvh-140px)] lg:w-full">
          <motion.div className="absolute inset-0" style={reduce ? undefined : { y: photoY, scale: photoScale }}>
          <img
            src={larvae}
            alt="Hundreds of black soldier fly larvae feeding on organic waste"
            width={1200}
            height={800}
            {...{ fetchpriority: "high" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {!reduce && (
            <img
              src={larvae}
              alt=""
              aria-hidden="true"
              width={1200}
              height={800}
              className="absolute inset-0 h-full w-full animate-wg-warm object-cover grayscale"
            />
          )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
