import { useState } from "react";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import tilapia from "@/assets/aquaculture-tilapia.jpg";
import poultry from "@/assets/poultry-broilers.jpg";
import feedMill from "@/assets/feed-mill.jpg";
import graduates from "@/assets/training-graduates.jpg";
import audience from "@/assets/training-audience.jpg";
import PhotoSlot from "@/components/site/PhotoSlot";

type Audience = {
  id: string;
  tab: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
  image?: { src: string; alt: string };
  shot?: string;
};

// Content carried over from the old Markets and Services sections.
const audiences: Audience[] = [
  {
    id: "poultry",
    tab: "Poultry farmers",
    title: "Feed your birds for less.",
    body: "Insect protein for broilers and layers that supports bird health and egg production naturally.",
    points: ["Better feed conversion", "Natural immune support", "Less reliance on antibiotics", "Supports egg production"],
    href: "/products",
    cta: "See poultry feed",
    image: { src: poultry, alt: "Young broiler chickens around a feeder" },
  },
  {
    id: "fish",
    tab: "Fish farmers",
    title: "Protein your tilapia will grow on.",
    body: "Insect protein for fish farming, rich in the amino acids fish need, as an alternative to imported fishmeal.",
    points: ["Rich in essential amino acids", "Supports healthy growth", "Locally produced", "Lower environmental impact"],
    href: "/products",
    cta: "See fish feed",
    image: { src: tilapia, alt: "Tilapia swimming in a green fish pond" },
  },
  {
    id: "mills",
    tab: "Feed mills",
    title: "An ingredient you can build formulas on.",
    body: "BSF protein meal and oil that fit into commercial feed formulations, with supply you can plan around.",
    points: ["Reliable supply options", "Formulation flexibility", "Better FCR performance", "Traceable and sustainable"],
    href: "/contact",
    cta: "Talk to us about supply",
    image: { src: feedMill, alt: "A commercial feed mill with grain silos" },
  },
  {
    id: "crops",
    tab: "Crop farmers",
    title: "Feed the soil, not just the plants.",
    body: "Frass, the larvae's natural by-product, is an organic fertilizer that improves soil structure.",
    points: ["Rich in organic matter", "Improves soil structure", "Helps soil hold water", "Chemical-free"],
    href: "/products",
    cta: "See frass fertilizer",
    shot: "frass being spread on a Ghanaian farm plot",
  },
  {
    id: "starters",
    tab: "BSF entrepreneurs",
    title: "Start your own BSF farm, with us beside you.",
    body: "From the first feasibility study to a working farm, we help you plan, build and run it.",
    points: ["WIGO DOMUS starter kit", "Farm setup, from planning to launch", "Group and on-site training", "Feasibility studies and consultancy"],
    href: "/project-mansa",
    cta: "Explore training",
    image: { src: graduates, alt: "Wiggling Gold trainees in blue overalls holding their certificates of participation" },
  },
  {
    id: "research",
    tab: "Researchers and students",
    title: "Learn and research with a working farm.",
    body: "Trials, internships and guided projects in insect nutrition, waste recovery and the circular bio-economy.",
    points: ["Access to test materials", "Custom study support", "Hands-on training", "Capstone project support"],
    href: "/contact",
    cta: "Propose a project",
    image: { src: audience, alt: "An audience listening at a Wiggling Gold training session" },
  },
];

const Audiences = () => {
  const [value, setValue] = useState(audiences[0].id);

  return (
    <section aria-labelledby="audiences-heading" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
      <h2 id="audiences-heading" className="font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] text-wg-ink md:text-6xl">
        Who we work with.
      </h2>

      <Tabs.Root value={value} onValueChange={setValue} className="mt-10">
        {/* Scrolls sideways on phones instead of wrapping into a jumble. */}
        <Tabs.List aria-label="Who we work with" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {audiences.map((a) => (
            <Tabs.Trigger
              key={a.id}
              value={a.id}
              className="relative shrink-0 rounded-full border-2 border-wg-ink/10 px-5 py-2.5 text-[15px] font-semibold text-wg-ink/75 transition-colors duration-300 hover:border-wg-ink/30 data-[state=active]:border-transparent data-[state=active]:text-wg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-gold focus-visible:ring-offset-2"
            >
              {/* One dark pill slides from tab to tab, so you see where you moved from. */}
              {value === a.id && (
                <motion.span
                  layoutId="audience-pill"
                  aria-hidden="true"
                  className="absolute -inset-[2px] rounded-full bg-wg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{a.tab}</span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {audiences.map((a) => (
          <Tabs.Content key={a.id} value={a.id} className="mt-8 focus-visible:outline-none">
            <AnimatePresence mode="wait">
              {value === a.id && (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-8 md:grid-cols-12 md:items-stretch md:gap-12"
                >
                  <div className="flex flex-col justify-center md:col-span-5">
                    <h3 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-wg-ink md:text-[2.6rem]">
                      {a.title}
                    </h3>
                    <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-wg-muted">{a.body}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {a.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-wg-ink">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-wg-leaf" strokeWidth={2.25} aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={a.href}
                      className="mt-8 inline-flex items-center gap-2 self-start font-semibold text-wg-ink underline decoration-wg-gold decoration-2 underline-offset-[6px] hover:decoration-wg-ink"
                    >
                      {a.cta}
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="aspect-[4/3] md:col-span-7 md:aspect-auto md:min-h-[420px]">
                    {a.image ? (
                      <img src={a.image.src} alt={a.image.alt} loading="lazy" width={1200} height={800} className="h-full w-full rounded-[1.25rem] object-cover" />
                    ) : (
                      <PhotoSlot shot={a.shot ?? ""} className="h-full w-full" />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
};

export default Audiences;
