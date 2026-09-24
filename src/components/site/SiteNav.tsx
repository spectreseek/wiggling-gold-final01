import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/wigo-logo.png";
import { ORDER_WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const links = [
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/products", label: "Products" },
  { to: "/project-mansa", label: "Project Mansa" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  // Only flips a boolean when the threshold is crossed, so scrolling doesn't re-render the nav.
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 12;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-wg-ground/90 backdrop-blur-md transition-colors duration-300",
        scrolled ? "border-wg-line" : "border-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Wiggling Gold home">
          <img src={logo} alt="" width={320} height={132} className="h-9 w-auto" />
          <span className="hidden font-display text-[15px] font-semibold leading-tight text-wg-ink sm:block">
            Wiggling Gold
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-wg-ink/5 hover:text-wg-ink",
                  isActive ? "bg-wg-sun text-wg-ink hover:bg-wg-sun" : "text-wg-ink/80",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={ORDER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full bg-wg-ink px-5 py-2.5 text-[15px] font-semibold text-wg-paper transition-transform hover:bg-wg-ink/90 active:scale-[0.98]"
          >
            Order feed
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-wg-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Reading progress: a gold line that fills as you move down the page. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-wg-gold"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-wg-line bg-wg-ground px-4 pb-6 pt-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between border-b border-wg-line py-4 font-display text-2xl font-semibold text-wg-ink",
                        isActive && "text-wg-gold-ink",
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && <span className="h-2.5 w-2.5 rounded-full bg-wg-gold" aria-hidden="true" />}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href={ORDER_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-14 items-center justify-center rounded-full bg-wg-ink text-base font-semibold text-wg-paper"
            >
              Order feed
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteNav;
