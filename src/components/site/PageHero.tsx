import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: ReactNode;
  intro: ReactNode;
  actions?: ReactNode;
  /** A photo, photo slot or panel beside the text. Without one, the text runs wider. */
  aside?: ReactNode;
  tone?: "light" | "forest";
};

const ease = [0.16, 1, 0.3, 1] as const;

/** The opening of every inner page: left-aligned, one headline, one short intro. */
const PageHero = ({ title, intro, actions, aside, tone = "light" }: PageHeroProps) => {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, delay, ease } };
  const dark = tone === "forest";

  return (
    <section className={cn(dark && "bg-wg-forest")}>
      <div
        className={cn(
          "mx-auto grid max-w-[1400px] gap-10 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-10",
        )}
      >
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <motion.h1
            {...rise(0.05)}
            className={cn(
              "font-display text-5xl font-extrabold leading-[0.97] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]",
              dark ? "text-wg-forest-text" : "text-wg-ink",
            )}
          >
            {title}
          </motion.h1>
          <motion.div
            {...rise(0.18)}
            className={cn("mt-7 max-w-[48ch] text-lg leading-relaxed md:text-xl", dark ? "text-wg-forest-muted" : "text-wg-muted")}
          >
            {intro}
          </motion.div>
          {actions && (
            <motion.div {...rise(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
              {actions}
            </motion.div>
          )}
        </div>
        {aside && (
          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, ease } })}
            className="lg:col-span-5"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
