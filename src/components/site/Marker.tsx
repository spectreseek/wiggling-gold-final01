import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type MarkerProps = {
  children: ReactNode;
  /** Bar colour behind the word. Gold on light grounds, sun on dark ones. */
  tone?: "gold" | "sun" | "lime";
  delay?: number;
};

const tones = { gold: "bg-wg-gold", sun: "bg-wg-sun", lime: "bg-wg-lime" };

/**
 * The site's signature emphasis: a colour bar that sweeps in behind one word of a headline,
 * as in "Turning dirt into gold." Gold text alone fails contrast on the light ground.
 */
const Marker = ({ children, tone = "gold", delay = 0.6 }: MarkerProps) => {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline-block whitespace-nowrap">
      <motion.span
        aria-hidden="true"
        className={cn("absolute -inset-x-[0.06em] bottom-[0.02em] top-[0.32em] origin-left rounded-[0.1em]", tones[tone])}
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="relative">{children}</span>
    </span>
  );
};

export default Marker;
