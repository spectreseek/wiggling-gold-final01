import { motion, useReducedMotion } from "motion/react";
import { Factory, GraduationCap, Mail, MessageCircle, Warehouse } from "lucide-react";
import flyerImg from "@/assets/project-mansa-flyer.jpg";
import audience from "@/assets/training-audience.jpg";
import graduates from "@/assets/training-graduates.jpg";
import group from "@/assets/training-group.jpg";
import PageShell from "@/components/site/PageShell";
import Reveal from "@/components/site/Reveal";
import CountUp from "@/components/site/CountUp";
import TypedText from "@/components/site/TypedText";
import { ButtonLink } from "@/components/site/Buttons";
import { EMAIL, MANSA_PHONE, MANSA_WHATSAPP_URL } from "@/lib/contact";

const steps = [
  { word: "Train.", color: "text-wg-forest-text" },
  { word: "Produce.", color: "text-wg-lime" },
  { word: "Process.", color: "text-wg-forest-text" },
  { word: "Prosper.", color: "text-wg-sun" },
];

// Figures copied unchanged, pending confirmation.
const stats = [
  { value: "16", label: "regions of Ghana" },
  { value: "800+", label: "people to be trained nationwide" },
  { value: "300+", label: "people already trained by Wiggling Gold" },
  { value: "20+", label: "BSF farms supported" },
];

// The programme's own phases, in order.
const phases = [
  {
    icon: GraduationCap,
    phase: "Phase 1",
    title: "Training and starter support",
    paragraphs: [
      "Black soldier fly production training across Ghana's 16 regions, with at least 50 participants per region and a minimum of 800 people nationwide.",
      "Participants get practical and theoretical training, and the tools to start producing. The programme deliberately makes room for youth, women, farmers, and people who are deaf or hard of hearing.",
    ],
  },
  {
    icon: Factory,
    phase: "Phase 2",
    title: "Regional processing hubs",
    paragraphs: [
      "BSF processing hubs in all 16 regions, handling processing, drying, packaging, quality control and aggregation for the producers around them.",
      "The hubs connect individual producers to a larger, more organized value chain.",
    ],
  },
  {
    icon: Warehouse,
    phase: "Phase 3",
    title: "A national BSF hub",
    paragraphs: [
      "A 100-ton national black soldier fly facility at the centre of the Project Mansa ecosystem.",
      "It will support large-scale production, research and development, quality control, aggregation, warehousing, distribution and potential export.",
    ],
  },
];

const partners = [
  "Government institutions",
  "Development organizations",
  "Universities and research institutions",
  "Private companies",
  "Financial institutions",
  "Foundations",
  "Agricultural organizations",
  "Individuals who share our vision",
];

const support = [
  "Financial sponsorship",
  "Technical expertise",
  "Training and research support",
  "Venues and accommodation",
  "Transportation and logistics",
  "Equipment",
  "Organic waste supply",
  "Market access",
  "Other in-kind support",
];

const Chips = ({ items, tone }: { items: string[]; tone: "lime" | "sun" }) => (
  <ul className="flex flex-wrap gap-2.5">
    {items.map((item, i) => (
      <Reveal as="li" key={item} delay={i * 0.03}>
        <span className={`inline-block rounded-full px-4 py-2 text-[15px] font-semibold text-wg-ink ${tone === "lime" ? "bg-wg-lime" : "bg-wg-sun"}`}>
          {item}
        </span>
      </Reveal>
    ))}
  </ul>
);

const ProjectMansaPage = () => {
  const reduce = useReducedMotion();
  return (
    <PageShell
      title="Project Mansa | Wiggling Gold"
      description="Project Mansa is a nationwide black soldier fly initiative by Wiggling Gold Limited: training, regional processing hubs and a national hub across all 16 regions of Ghana."
    >
      {/* Opening: the programme's own green, its four-word promise, and the real flyer. */}
      <section className="bg-wg-forest">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-12 lg:items-center lg:px-10">
          <div className="lg:col-span-7">
            <p className="font-display text-lg font-bold text-wg-lime">A Wiggling Gold initiative</p>
            <h1 className="mt-3 font-display text-6xl font-extrabold leading-[0.95] tracking-[-0.035em] text-wg-forest-text sm:text-7xl xl:text-8xl">
              Project Mansa
            </h1>
            <p className="mt-6 font-display text-3xl font-bold leading-tight tracking-[-0.02em] md:text-4xl" aria-label="Train. Produce. Process. Prosper.">
              {steps.map(({ word, color }, i) => (
                <motion.span
                  key={word}
                  aria-hidden="true"
                  className={`mr-[0.3em] inline-block ${color}`}
                  initial={reduce ? false : { opacity: 0, y: "0.5em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.3 + i * 0.14 }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <p className="mt-7 max-w-[50ch] text-lg leading-relaxed text-wg-forest-muted md:text-xl">
              A nationwide black soldier fly programme building a sustainable insect farming ecosystem across Ghana: skills,
              regional infrastructure, jobs, and more affordable animal feed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#partner" tone="sun" arrow>
                Partner with us
              </ButtonLink>
              <ButtonLink href={MANSA_WHATSAPP_URL} variant="outline" tone="light" icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}>
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
          <motion.a
            href={MANSA_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Project Mansa conversation on WhatsApp"
            className="mx-auto block w-full max-w-sm overflow-hidden rounded-[1.25rem] lg:col-span-4 lg:col-start-9 lg:max-w-none"
            initial={reduce ? false : { opacity: 0, rotate: 4, y: 40 }}
            animate={{ opacity: 1, rotate: 2, y: 0 }}
            whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
          >
            <img
              src={flyerImg}
              alt="Project Mansa flyer: free two-day hands-on black soldier fly training by Wiggling Gold Ltd."
              width={1275}
              height={1650}
              className="h-auto w-full"
            />
          </motion.a>
        </div>
      </section>

      {/* Track record. */}
      <section aria-labelledby="record-heading" className="border-b border-wg-line">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
          <h2 id="record-heading" className="max-w-[50ch] text-lg leading-relaxed text-wg-muted md:text-xl">
            Project Mansa builds on Wiggling Gold's experience in Ghana's BSF industry, including training more than 300
            people and helping to set up 20+ black soldier fly farms.
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="border-t-4 border-wg-gold pt-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp value={s.value} className="block font-display text-5xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-6xl" />
                  <span className="mt-2 block max-w-[22ch] text-wg-muted">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>

          {/* The proof: real graduates and a real training cohort. */}
          <div className="mt-14 grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <figure>
                <img
                  src={graduates}
                  alt="Eight Wiggling Gold trainees in blue overalls holding their certificates of participation"
                  width={1080}
                  height={810}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                />
                <figcaption className="mt-3 text-sm text-wg-muted">Graduates with their certificates.</figcaption>
              </figure>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.1}>
              <figure>
                <img
                  src={group}
                  alt="A large group of training participants with the Wiggling Gold team in blue WIGO shirts"
                  width={1280}
                  height={720}
                  loading="lazy"
                  // 15:8 on the 7-column side matches the height of the 4:3 photo on the 5-column side.
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover md:aspect-[15/8]"
                />
                <figcaption className="mt-3 text-sm text-wg-muted">A training cohort with the Wiggling Gold team.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why: an argument, so it reads as prose beside a photo. */}
      <section aria-labelledby="why-heading">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <h2 id="why-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-ink md:text-5xl">
              Why Project Mansa?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-wg-muted">
              <Reveal as="p">
                Ghana's farmers face rising feed costs, growing piles of organic waste, too few jobs, and the need for more
                sustainable ways to farm.
              </Reveal>
              <Reveal as="p">Black soldier fly farming tackles several of these at once.</Reveal>
              <Reveal as="p">
                Organic waste becomes nutritious insect protein for poultry, fish, pigs and other livestock, and organic
                fertilizer for crops. Along the way, it creates businesses, jobs, skills and income.
              </Reveal>
            </div>
            <p className="mt-8 font-display text-3xl font-extrabold tracking-[-0.02em] text-wg-ink">Turning dirt to gold.</p>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <img
              src={audience}
              alt="Participants listening at a Wiggling Gold black soldier fly training session"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[40%_center]"
            />
          </Reveal>
        </div>
      </section>

      {/* The three phases as a timeline: order matters here. */}
      <section aria-labelledby="phases-heading" className="bg-wg-soil">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
          <h2 id="phases-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-soil-text md:text-6xl">
            Our vision, in three phases.
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-wg-soil-muted">
            An interconnected black soldier fly ecosystem operating across all 16 regions of Ghana.
          </p>
          <ol className="relative mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
            {/* The line that joins the phases. */}
            <span aria-hidden="true" className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-wg-soil-line lg:left-0 lg:top-[27px] lg:h-px lg:w-full" />
            {phases.map((p, i) => (
              <Reveal as="li" key={p.phase} delay={i * 0.12} className="relative pl-20 lg:pl-0 lg:pt-20">
                <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-wg-gold text-wg-ink">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="font-display font-bold text-wg-gold">{p.phase}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-wg-soil-text md:text-3xl">{p.title}</h3>
                <div className="mt-4 space-y-3 leading-relaxed text-wg-soil-muted">
                  {p.paragraphs.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-16 max-w-[60ch] text-lg leading-relaxed text-wg-soil-text">
            Together, the phases move participants from training to production, from production to processing, and from
            enterprise to prosperity.
          </p>
        </div>
      </section>

      {/* More than training: the quote types itself out. */}
      <section aria-labelledby="value-chain-heading">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
          <h2 id="value-chain-heading" className="font-display text-lg font-bold text-wg-gold-ink">
            More than a training project
          </h2>
          <blockquote className="mt-6 max-w-[22ch] font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-wg-ink md:text-6xl">
            <TypedText
              segments={[
                { text: "“A farmer trained today should not have to operate in " },
                { text: "isolation", className: "text-wg-gold-ink" },
                { text: " tomorrow.”" },
              ]}
            />
          </blockquote>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-wg-muted">
            Project Mansa is designed to build a whole value chain. Through regional infrastructure, technical partnerships,
            research, quality assurance and market development, producers grow alongside the industry.
          </p>
        </div>
      </section>

      {/* Partners: two long lists, set as chips rather than bullet points. */}
      <section id="partner" aria-labelledby="partner-heading" className="scroll-mt-24 bg-wg-forest">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
          <h2 id="partner-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-forest-text md:text-6xl">
            Partner with Project Mansa.
          </h2>
          <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-wg-forest-muted">
            A nationwide transformation takes collaboration. Whether you support one participant or a whole region, you help
            create livelihoods and build Ghana's black soldier fly industry.
          </p>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-wg-forest-text">Who we welcome</h3>
              <div className="mt-6">
                <Chips items={partners} tone="lime" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-wg-forest-text">How you can support</h3>
              <div className="mt-6">
                <Chips items={support} tone="sun" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 rounded-[1.25rem] bg-wg-forest-raised p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-wg-forest-text md:text-4xl">
                Waste becomes a resource. Knowledge becomes enterprise. Enterprise creates prosperity.
              </p>
              <p className="mt-4 text-wg-forest-muted">Join Wiggling Gold Limited as we take Project Mansa across Ghana.</p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href={MANSA_WHATSAPP_URL} tone="sun" icon={<MessageCircle className="h-5 w-5" aria-hidden="true" />}>
                  Chat on WhatsApp
                </ButtonLink>
                <ButtonLink href={`mailto:${EMAIL}`} variant="outline" tone="light" icon={<Mail className="h-5 w-5" aria-hidden="true" />}>
                  Email us
                </ButtonLink>
              </div>
              <p className="text-wg-forest-muted">
                Or call{" "}
                <a href={`tel:+233${MANSA_PHONE.replace(/\s/g, "").slice(1)}`} className="font-semibold text-wg-forest-text hover:underline">
                  {MANSA_PHONE}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ProjectMansaPage;
