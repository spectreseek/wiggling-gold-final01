import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Segment = { text: string; className?: string };

type TypedTextProps = {
  /** The text in pieces, so a word can keep its own colour while it types. */
  segments: Segment[];
  /** Milliseconds per character. */
  speed?: number;
  className?: string;
};

/**
 * Types its text out once it scrolls into view. Every character is in the layout from the start
 * (just invisible), so the lines never reflow while typing. Screen readers get the full text at once,
 * and with reduced motion it shows complete.
 */
const TypedText = ({ segments, speed = 38, className }: TypedTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reduce = useReducedMotion();
  const full = segments.map((s) => s.text).join("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= full.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [inView, reduce, full.length, speed]);

  const shown = reduce ? full.length : count;
  const typing = !reduce && shown < full.length;
  let index = 0;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{full}</span>
      {segments.map((seg, s) => (
        <span key={s} aria-hidden="true" className={seg.className}>
          {Array.from(seg.text).map((ch) => {
            const i = index++;
            return (
              <span key={i} className={cn("relative", i >= shown && "opacity-0")}>
                {ch}
                {/* The caret rides just after the last typed character. */}
                {typing && i === shown - 1 && (
                  <span className="absolute -right-[0.08em] top-[0.12em] h-[0.85em] w-[0.06em] animate-pulse bg-wg-sun" />
                )}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export default TypedText;
