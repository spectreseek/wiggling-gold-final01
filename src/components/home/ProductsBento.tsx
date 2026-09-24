import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import larvae from "@/assets/bsf-larvae.jpg";
import nursery from "@/assets/farm-nursery-racks.jpg";
import Reveal from "@/components/site/Reveal";

// Product facts and prices are copied unchanged from the Products page. Figures are pending
// confirmation from the Wiggling Gold team.
const ProductsBento = () => (
  <section aria-labelledby="products-heading" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <h2 id="products-heading" className="font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] text-wg-ink md:text-6xl">
        What we sell.
      </h2>
      <Link
        to="/products"
        className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-wg-ink/15 px-6 font-semibold text-wg-ink transition-colors hover:border-wg-ink/40"
      >
        See all products
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </div>

    <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-[minmax(260px,auto)_minmax(260px,auto)]">
      {/* Dried larvae: the main product gets the big cell. */}
      <Reveal className="flex flex-col overflow-hidden rounded-[1.25rem] bg-wg-paper md:col-span-2 md:row-span-2">
        <img
          src={larvae}
          alt="A close-up of black soldier fly larvae, the source of our dried larvae feed"
          width={1200}
          height={800}
          loading="lazy"
          className="min-h-[240px] w-full flex-1 object-cover"
        />
        <div className="p-7 md:p-9">
          <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-wg-ink">Dried larvae</h3>
          <p className="mt-2 max-w-[40ch] text-lg text-wg-muted">Protein feed for poultry, fish and livestock, made in Ghana.</p>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
            <div>
              <dt className="text-sm text-wg-muted">Crude protein</dt>
              <dd className="font-display text-2xl font-bold text-wg-ink">42-45%</dd>
            </div>
            <div>
              <dt className="text-sm text-wg-muted">Price</dt>
              <dd className="font-display text-2xl font-bold text-wg-ink">From ₵20/kg</dd>
            </div>
          </dl>
        </div>
      </Reveal>

      <Reveal lift delay={0.08} className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[1.25rem] md:col-span-2">
        <img src={nursery} alt="" aria-hidden="true" loading="lazy" width={1080} height={607} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-wg-soil/90 via-wg-soil/40 to-transparent" />
        <div className="relative p-7">
          <h3 className="font-display text-2xl font-bold text-wg-soil-text">Live larvae</h3>
          <p className="mt-1 max-w-[36ch] text-wg-soil-text/85">Fresh feed, or breeding stock to start your own colony. Priced per order.</p>
        </div>
      </Reveal>

      <Reveal lift delay={0.12} className="flex min-h-[220px] flex-col justify-between rounded-[1.25rem] bg-wg-lime p-7">
        <p className="self-start rounded-full bg-wg-paper px-3 py-1 text-sm font-semibold text-wg-ink">Coming soon</p>
        <div>
          <h3 className="font-display text-2xl font-bold text-wg-ink">Frass fertilizer</h3>
          <p className="mt-1 text-wg-muted">What the larvae leave behind, for healthier soil.</p>
        </div>
      </Reveal>

      <Reveal lift delay={0.16} className="relative flex min-h-[220px] flex-col justify-between rounded-[1.25rem] bg-wg-sun p-7">
        <p className="self-start rounded-full bg-wg-ink px-3 py-1 text-sm font-semibold text-wg-sun">₵7,000, limited time</p>
        <div>
          <h3 className="font-display text-2xl font-bold text-wg-ink">
            {/* Stretched link: the whole tile opens the starter kit section. */}
            <Link to="/products#starter-kit" className="after:absolute after:inset-0 after:rounded-[1.25rem] after:content-['']">
              WIGO DOMUS starter kit
            </Link>
          </h3>
          <p className="mt-1 text-wg-ink/75">Everything to start producing up to 100kg of live larvae a month.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProductsBento;
