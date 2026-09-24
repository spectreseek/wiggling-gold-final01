import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "p";
  /** Which way the content arrives from. Opposing sides suit content that is set against each other. */
  from?: "below" | "left" | "right";
  /** Rises slightly on hover. Done here because Motion owns this element's transform. */
  lift?: boolean;
};

const offsets = {
  below: { x: 0, y: 28 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

// Content moves into place the first time it scrolls into view. With reduced motion it
// simply renders in place.
const Reveal = ({ children, delay = 0, className, as = "div", from = "below", lift = false }: RevealProps) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={lift && !reduce ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
