import { useMemo, useState, type FormEvent } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { MessageCircle, Plus, Search } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Marker from "@/components/site/Marker";
import AnswerText from "@/components/site/AnswerText";
import { ButtonLink } from "@/components/site/Buttons";
import { faqCategories } from "@/data/faq";
import { EMAIL, PHONES, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const filters = [{ id: "all", label: "All" }, ...faqCategories.map(({ id, label }) => ({ id, label }))];

const inputClass =
  "w-full rounded-[0.75rem] border-2 border-wg-line bg-wg-paper px-4 py-3 text-base text-wg-ink placeholder:text-wg-muted/70 focus:border-wg-ink focus:outline-none";

const AskForm = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  // No email service is connected yet, so the question goes out as a ready-to-send WhatsApp message.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setError("Please type your question.");
      return;
    }
    setError("");
    const intro = name.trim() ? `Hello Wiggling Gold, this is ${name.trim()}.` : "Hello Wiggling Gold.";
    window.open(whatsappUrl(`${intro} My question: ${question.trim()}`), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="ask-name" className="font-semibold text-wg-ink">
          Your name <span className="font-normal text-wg-muted">(optional)</span>
        </label>
        <input id="ask-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="ask-question" className="font-semibold text-wg-ink">
          Your question
        </label>
        <textarea
          id="ask-question"
          name="question"
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "ask-error" : "ask-help"}
          className={cn(inputClass, "resize-y", error && "border-red-700")}
        />
        {error ? (
          <p id="ask-error" className="text-sm font-semibold text-red-700">
            {error}
          </p>
        ) : (
          <p id="ask-help" className="text-sm text-wg-muted">
            We'll open WhatsApp with your question ready to send.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex h-14 items-center justify-center gap-2 self-start rounded-full bg-wg-ink px-7 font-semibold text-wg-paper transition-colors hover:bg-wg-ink/90 active:scale-[0.98]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Send on WhatsApp
      </button>
      {sent && (
        <p role="status" className="rounded-[0.75rem] bg-wg-leaf-soft px-4 py-3 text-wg-ink">
          WhatsApp should have opened with your question. Press send there and we'll reply as soon as we can.
        </p>
      )}
    </form>
  );
};

const FAQPage = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqCategories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        questions: c.questions.filter((item) => !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)),
      }))
      .filter((c) => c.questions.length > 0);
  }, [query, active]);

  const total = groups.reduce((n, g) => n + g.questions.length, 0);

  return (
    <PageShell
      title="FAQ | Wiggling Gold"
      description="Answers about buying black soldier fly feed, starting a BSF farm, training, orders and delivery."
    >
      <PageHero
        title={
          <>
            Questions, <Marker>answered.</Marker>
          </>
        }
        intro="Everything about buying BSF feed, starting your own farm, training, and getting your order delivered."
        actions={
          <div className="grid w-full max-w-xl gap-2">
            <label htmlFor="faq-search" className="font-semibold text-wg-ink">
              Search the questions
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-wg-muted" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-14 w-full rounded-full border-2 border-wg-line bg-wg-paper pl-12 pr-5 text-base text-wg-ink focus:border-wg-ink focus:outline-none"
              />
            </div>
          </div>
        }
      />

      {/* Category filter, pinned under the nav while you read. */}
      <div className="sticky top-[72px] z-30 border-y border-wg-line bg-wg-ground/95 backdrop-blur-md">
        <div role="group" aria-label="Filter by topic" className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-6 lg:px-10">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors",
                active === f.id ? "text-wg-ink" : "text-wg-ink/70 hover:text-wg-ink",
              )}
            >
              {active === f.id && (
                <motion.span layoutId="faq-pill" aria-hidden="true" className="absolute inset-0 rounded-full bg-wg-sun" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <section aria-label="Questions" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <p role="status" className="sr-only">
          {total} {total === 1 ? "question" : "questions"} shown
        </p>
        {groups.length === 0 ? (
          <div className="max-w-xl py-10">
            <p className="font-display text-3xl font-bold text-wg-ink">No questions match "{query}".</p>
            <p className="mt-3 text-lg text-wg-muted">Try a different word, or ask us directly below.</p>
          </div>
        ) : (
          <div className="grid gap-16">
            {groups.map((g) => (
              <div key={g.id} className="grid gap-6 lg:grid-cols-12">
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-wg-ink lg:col-span-4 lg:pt-5">{g.label}</h2>
                <Accordion.Root type="multiple" className="lg:col-span-8">
                  {g.questions.map((item, i) => (
                    <Accordion.Item key={item.q} value={`${g.id}-${i}`} className="border-b border-wg-line">
                      <Accordion.Header>
                        <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-5 text-left font-display text-xl font-bold text-wg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wg-gold md:text-2xl">
                          {item.q}
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wg-paper transition-colors group-data-[state=open]:bg-wg-sun">
                            <Plus className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-45" aria-hidden="true" />
                          </span>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="max-w-[62ch] pb-6 text-lg leading-relaxed text-wg-muted">
                          <AnswerText text={item.a} />
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Still stuck: ask directly. */}
      <section aria-labelledby="ask-heading" className="bg-wg-forest">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <h2 id="ask-heading" className="font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-forest-text md:text-5xl">
              Didn't find your answer?
            </h2>
            <p className="mt-4 max-w-[40ch] text-lg text-wg-forest-muted">Ask us directly. We reply within 24 hours.</p>
            <ul className="mt-8 grid gap-2 text-wg-forest-text">
              {PHONES.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:underline">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:underline">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="outline" tone="light">
                Go to the Contact page
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[1.25rem] bg-wg-ground p-6 md:p-10 lg:col-span-6 lg:col-start-7">
            <AskForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default FAQPage;
