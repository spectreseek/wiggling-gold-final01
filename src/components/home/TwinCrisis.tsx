import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/site/Reveal";

const problems = [
  {
    title: "Feed is imported, and farmers pay for it.",
    body: "Fishmeal and soy keep getting more expensive, and the cost comes out of every poultry and fish farmer's margin.",
  },
  {
    title: "Organic waste is piling up.",
    body: "Markets, breweries and processing plants produce more scraps than Ghana's landfills can take.",
  },
];

const TwinCrisis = () => {
  const reduce = useReducedMotion();
  const band = "0.32em";
  return (
    // Clip sideways overflow so the slide-ins never make a phone scroll horizontally.
    <section aria-labelledby="crisis-heading" className="overflow-x-clip border-t border-wg-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <h2 id="crisis-heading" className="sr-only">
          Two problems, one solution
        </h2>
        {/* The two problems come in from opposite sides and meet in the middle. */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-0">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              from={i === 0 ? "left" : "right"}
              className={i === 1 ? "md:border-l md:border-wg-line md:pl-12" : "md:pr-12"}
            >
              <p className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-wg-ink md:text-[2.6rem]">
                {p.title}
              </p>
              <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-wg-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 md:mt-24">
          <p className="max-w-[22ch] font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-wg-ink md:text-6xl">
            The black soldier fly turns the second problem into{" "}
            {/* A sun-yellow marker sweeps under the answer, across however many lines it wraps to. */}
            <motion.span
              className="bg-no-repeat"
              style={{ backgroundImage: "linear-gradient(#FFE240, #FFE240)", backgroundPosition: "0 88%" }}
              initial={reduce ? false : { backgroundSize: `0% ${band}` }}
              whileInView={{ backgroundSize: `100% ${band}` }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            >
              the answer to the first.
            </motion.span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default TwinCrisis;
