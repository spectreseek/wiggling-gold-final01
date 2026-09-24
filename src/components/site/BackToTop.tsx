import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 600;

/**
 * A round button that appears once the reader is well into a page. The gold ring around it fills
 * as they scroll, so it doubles as a progress indicator.
 */
const BackToTop = () => {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Flips a boolean at the threshold rather than re-rendering on every scroll frame.
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > SHOW_AFTER;
    if (next !== visible) setVisible(next);
  });

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // Send keyboard focus back to the top too, so the next Tab lands on the page's first link.
    document.querySelector<HTMLElement>("#main")?.focus({ preventScroll: true });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          // The faint light edge keeps the dark button visible over the dark soil sections.
          className="group fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-wg-paper/20 bg-wg-ink text-wg-paper shadow-[0_8px_24px_-8px_rgba(19,24,19,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-gold focus-visible:ring-offset-2 sm:right-6"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 16 }}
          whileHover={reduce ? undefined : { scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          {/* Progress ring: a faint track with a gold arc that grows with scroll. */}
          <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="28" cy="28" r="25" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2.5" />
            <motion.circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="#E6A417"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp
            className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
