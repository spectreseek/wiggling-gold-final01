import { Droplet, Globe, Recycle, TreePine } from "lucide-react";
import flyPhoto from "@/assets/bsf-adult.jpg";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Marker from "@/components/site/Marker";
import Reveal from "@/components/site/Reveal";
import CountUp from "@/components/site/CountUp";
import CtaBand from "@/components/site/CtaBand";
import ProcessWheel from "@/components/process/ProcessWheel";

// Figures copied unchanged from the old Impact section, pending confirmation.
const impacts = [
  { icon: TreePine, value: "500", unit: "tons", title: "Carbon reduction", body: "CO₂ offset each year, by keeping organic waste from rotting and releasing methane." },
  { icon: Droplet, value: "10M", unit: "litres", title: "Water saved", body: "each year. Larvae farming uses 90% less water than traditional protein production." },
  { icon: Recycle, value: "100%", unit: "", title: "Waste conversion", body: "The organic material we take in is fully used, with nothing sent to landfill." },
  { icon: Globe, value: "50+", unit: "", title: "Partner farms", body: "Creating value from waste while supporting sustainable farming." },
];

const ProcessPage = () => (
  <PageShell
    title="Our process | Wiggling Gold"
    description="How Wiggling Gold turns organic waste into protein feed and organic fertilizer: four stages in one closed loop, in a 14-day black soldier fly cycle."
  >
    <PageHero
      title={
        <>
          From waste to feed in <Marker>14 days.</Marker>
        </>
      }
      intro="Four stages, one closed loop. Here is how black soldier fly larvae turn Ghana's organic waste into feed and fertilizer."
      aside={
        <img
          src={flyPhoto}
          alt="An adult black soldier fly resting on a green leaf"
          width={1400}
          height={788}
          className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[45%_40%]"
        />
      }
    />

    <ProcessWheel />

    {/* Impact, on the forest green, so it doesn't run straight on from the wheel's dark soil. */}
    <section aria-labelledby="impact-heading" className="bg-wg-forest">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <h2 id="impact-heading" className="max-w-[18ch] font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-forest-text md:text-6xl">
          Every ton we process is a healthier planet.
        </h2>
        <dl className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {impacts.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06} className="border-t border-wg-forest-text/15 pt-6">
              <dt className="flex items-center gap-3 text-wg-forest-muted">
                <m.icon className="h-5 w-5 text-wg-lime" strokeWidth={1.75} aria-hidden="true" />
                {m.title}
              </dt>
              <dd className="mt-4">
                <span className="font-display text-6xl font-extrabold tracking-[-0.03em] text-wg-sun md:text-7xl">
                  <CountUp value={m.value} />
                </span>
                {m.unit && <span className="ml-2 font-display text-2xl font-bold text-wg-forest-text">{m.unit}</span>}
                <p className="mt-3 max-w-[38ch] text-lg leading-relaxed text-wg-forest-muted">{m.body}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <div className="pt-20 md:pt-28">
      <CtaBand
        title="Have waste? Let's talk."
        body="If your brewery, market or processing plant produces organic waste, we can put it to work. Become a partner."
        label="Become a partner"
        href="/contact"
      />
    </div>
  </PageShell>
);

export default ProcessPage;
