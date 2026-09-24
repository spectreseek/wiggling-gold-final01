import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import CountUp from "@/components/site/CountUp";
import Reveal from "@/components/site/Reveal";
import TypedText from "@/components/site/TypedText";

// Each step takes one of the logo's colours, ending on sun yellow for "Prosper."
const words = [
  { word: "Train.", color: "text-wg-forest-text" },
  { word: "Produce.", color: "text-wg-lime" },
  { word: "Process.", color: "text-wg-forest-text" },
  { word: "Prosper.", color: "text-wg-sun" },
];

// Figures copied unchanged from the Project Mansa page, pending confirmation.
const stats = [
  { value: "16", label: "regions of Ghana" },
  { value: "800+", label: "people to be trained" },
  { value: "300+", label: "people already trained" },
  { value: "20+", label: "BSF farms supported" },
];

// Project Mansa is about growth, so its section is the deep green of the logo's O.
const MansaBand = () => {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="mansa-heading" className="bg-wg-forest">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <p id="mansa-heading" className="font-display text-lg font-bold text-wg-lime">
          Project Mansa
        </p>
        {/* The programme's four steps land one after another, in order. */}
        <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
          {words.map(({ word, color }, i) => (
            <motion.span
              key={word}
              className={`mr-[0.25em] inline-block ${color}`}
              initial={reduce ? false : { opacity: 0, y: "0.4em", rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: i * 0.14 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="max-w-[44ch] text-lg leading-relaxed text-wg-forest-muted">
              A nationwide programme to train people in all 16 regions of Ghana, then build regional processing hubs and a
              national BSF hub, so every trained farmer has somewhere to sell.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/project-mansa"
                className="group inline-flex h-14 items-center gap-2 rounded-full bg-wg-sun px-7 font-semibold text-wg-ink transition-transform hover:bg-wg-sun/90 active:scale-[0.98]"
              >
                Discover Project Mansa
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/project-mansa#register"
                className="inline-flex h-14 items-center rounded-full border-2 border-wg-forest-text/25 px-7 font-semibold text-wg-forest-text transition-colors hover:border-wg-forest-text/60 active:scale-[0.98]"
              >
                Register for training
              </Link>
            </div>
          </Reveal>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-6 lg:col-start-7">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="border-t border-wg-forest-text/15 pt-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp value={s.value} className="block font-display text-5xl font-extrabold tracking-[-0.03em] text-wg-sun md:text-6xl" />
                  <span className="mt-1 block text-wg-forest-muted">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal className="mt-20 rounded-[1.25rem] bg-wg-forest-raised p-8 md:p-12">
          <blockquote className="max-w-[28ch] font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-wg-forest-text md:text-5xl">
            <TypedText
              segments={[
                { text: "“A farmer trained today should not have to operate in " },
                { text: "isolation", className: "text-wg-lime" },
                { text: " tomorrow.”" },
              ]}
            />
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
};

export default MansaBand;
