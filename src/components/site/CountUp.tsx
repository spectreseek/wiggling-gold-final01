import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  /** A figure as displayed, such as "800+" or "16". */
  value: string;
  className?: string;
};

// Counts up to the figure the first time it scrolls into view. Writes straight to the DOM so
// the count doesn't re-render React on every frame.
const CountUp = ({ value, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const countable = match !== null;
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || !countable || reduce || !inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        el.textContent = `${Math.round(n)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, target, suffix, countable]);

  // Screen readers always get the final figure.
  return (
    <span className={className} aria-label={value}>
      <span ref={ref} aria-hidden="true">
        {countable && !reduce ? `0${suffix}` : value}
      </span>
    </span>
  );
};

export default CountUp;
