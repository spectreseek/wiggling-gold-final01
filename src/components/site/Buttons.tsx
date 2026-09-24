import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// The site's two button styles, pill-shaped like every interactive control on the site.
const solid = {
  ink: "bg-wg-ink text-wg-paper hover:bg-wg-ink/90",
  sun: "bg-wg-sun text-wg-ink hover:bg-wg-sun/90",
};
const outline = {
  ink: "border-2 border-wg-ink/15 text-wg-ink hover:border-wg-ink/40",
  light: "border-2 border-wg-forest-text/25 text-wg-forest-text hover:border-wg-forest-text/60",
};
const base = "group inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-colors active:scale-[0.98]";

type ButtonProps = {
  children: ReactNode;
  /** A path inside the site ("/contact") or a full URL, which opens in a new tab. */
  href: string;
  variant?: "solid" | "outline";
  tone?: "ink" | "sun" | "light";
  arrow?: boolean;
  icon?: ReactNode;
  className?: string;
};

export const ButtonLink = ({ children, href, variant = "solid", tone = "ink", arrow = false, icon, className }: ButtonProps) => {
  const classes = cn(
    base,
    variant === "solid" ? solid[tone === "sun" ? "sun" : "ink"] : outline[tone === "light" ? "light" : "ink"],
    className,
  );
  const content = (
    <>
      {icon}
      {children}
      {arrow && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  // In-page anchors ("#partner") also stay plain links so the browser scrolls to them.
  const external = /^(https?:|mailto:|tel:|#)/.test(href);
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link to={href} className={classes}>
      {content}
    </Link>
  );
};
