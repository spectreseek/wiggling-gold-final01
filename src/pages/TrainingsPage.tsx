import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  Award,
  Coffee,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import PageShell from "@/components/site/PageShell";
import Reveal from "@/components/site/Reveal";
import flyerImg from "@/assets/bsf-training-oct31-flyer.jpg";
import { whatsappUrl, PHONES } from "@/lib/contact";

const WHATSAPP_CONTACT = "233556943631";

const TOPICS = [
  "Scalability and Profitability of BSF Production",
  "The Biology and Benefits of Black Soldier Flies",
  "Substrate Types and Sourcing for Larvae Feeding",
  "Commercial Production of BSF Larvae for Livestock Feed",
  "Converting Organic Waste into Nutrient-rich Organic Fertilizer",
  "BSF Housing, Environmental Control and Facility Management",
  "Cultural Practices, Colony Maintenance and Egg Collection",
  "Investment, Commercialization and Industry Networking",
];

const PACKAGE_INCLUDES = [
  {
    icon: ShieldCheck,
    title: "Post-Training Support",
    desc: "Ongoing technical guidance and advisory to ensure your farm succeeds.",
  },
  {
    icon: Award,
    title: "Official Certificate",
    desc: "Recognized Certificate of Completion in Black Soldier Fly Farming.",
  },
  {
    icon: Sparkles,
    title: "BSF Broodstock Included",
    desc: "Starter colony genetics so you can kickstart your production immediately.",
  },
  {
    icon: Coffee,
    title: "Refreshment & Materials",
    desc: "Full course training booklet, workshop materials, and refreshments.",
  },
];

const TrainingsPage = () => {
  const [copiedMomo, setCopiedMomo] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  // Form state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMode, setPaymentMode] = useState("MTN Mobile Money");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: "momo" | "bank") => {
    navigator.clipboard.writeText(text);
    if (type === "momo") {
      setCopiedMomo(true);
      setTimeout(() => setCopiedMomo(false), 2500);
    } else {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2500);
    }
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const message = [
      "Hello Wiggling Gold! I have registered for the 31st October BSF Group Training.",
      `*Full Name:* ${fullName.trim()}`,
      `*Phone Number:* ${phone.trim()}`,
      `*Payment Method:* ${paymentMode}`,
      reference.trim() ? `*Payment Ref / TxID:* ${reference.trim()}` : "*Deposit:* ₵120 Registration Fee",
      notes.trim() ? `*Notes:* ${notes.trim()}` : "",
      "Please confirm my registration slot. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(message, WHATSAPP_CONTACT), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <PageShell
      title="BSF Farming Training | Wiggling Gold"
      description="Join the Black Soldier Fly Farming Group Training on 31st October 2026 at Rufus Green Park, Adenta, Accra. Learn practical skills, get broodstock & post-training support."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-wg-forest pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-wg-sun/20 px-4 py-1.5 text-sm font-bold text-wg-sun backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wg-sun opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wg-sun"></span>
                </span>
                Upcoming Group Training • Limited Slots Available
              </div>

              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-wg-forest-text sm:text-5xl lg:text-6xl">
                Black Soldier Fly Farming Masterclass
              </h1>

              <p className="mt-3 font-display text-2xl font-bold text-wg-lime">
                Learn Practical Skills • Farm with Confidence • Earn Real Opportunities
              </p>

              <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-wg-forest-muted">
                Turn organic waste into high-protein animal feed and nutrient-rich organic fertilizer. Get hands-on training,
                valuable starter broodstock, and lifetime technical support from Wiggling Gold.
              </p>

              {/* Quick Info Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3.5 rounded-2xl bg-wg-forest-raised/80 p-4 border border-wg-forest-text/10">
                  <Calendar className="mt-1 h-6 w-6 shrink-0 text-wg-sun" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-wg-forest-muted">Training Date</p>
                    <p className="font-display text-lg font-bold text-wg-forest-text">Saturday, 31st Oct, 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-wg-forest-raised/80 p-4 border border-wg-forest-text/10">
                  <Clock className="mt-1 h-6 w-6 shrink-0 text-wg-lime" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-wg-forest-muted">Time</p>
                    <p className="font-display text-lg font-bold text-wg-forest-text">10:00 AM – 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-wg-forest-raised/80 p-4 border border-wg-forest-text/10 sm:col-span-2">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-wg-sun" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-wg-forest-muted">Venue / Location</p>
                    <p className="font-display text-lg font-bold text-wg-forest-text">Rufus Green Park, Adenta, Accra</p>
                  </div>
                </div>
              </div>

              {/* Deadline Alert Banner */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-wg-sun/15 border border-wg-sun/30 p-4 text-wg-forest-text">
                <AlertTriangle className="h-6 w-6 shrink-0 text-wg-sun" />
                <p className="text-sm font-semibold">
                  <span className="text-wg-sun font-bold uppercase tracking-wide">Registration Deadline:</span>{" "}
                  Saturday 24th October, 2026. Slots are strictly limited!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#register"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-wg-sun px-8 font-display text-base font-bold text-wg-ink shadow-lg shadow-wg-sun/20 transition-all hover:bg-wg-sun/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Register Now (Deposit ₵120)
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent("Hello Wiggling Gold, I have questions regarding the 31st October BSF Training.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-wg-forest-text/25 px-6 font-semibold text-wg-forest-text transition-colors hover:border-wg-forest-text/60 active:scale-[0.98]"
                >
                  <MessageCircle className="h-5 w-5 text-wg-lime" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Flyer Column */}
            <div className="lg:col-span-5">
              <Reveal className="relative mx-auto max-w-[460px] overflow-hidden rounded-2xl border-2 border-wg-forest-text/15 bg-wg-forest-raised shadow-2xl">
                <img
                  src={flyerImg}
                  alt="Wiggling Gold 31st October Group Training Flyer: Black Soldier Fly Farming at Rufus Green Park, Adenta"
                  width={1000}
                  height={1400}
                  className="h-auto w-full object-cover"
                />
                <div className="bg-wg-ink/90 p-4 text-center backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-wg-forest-muted">Official Event Flyer</p>
                  <p className="font-display text-lg font-bold text-wg-sun">GHC 620 Total Fee • Deposit GHC 120</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Fee Breakdown Section */}
      <section className="border-b border-wg-line bg-wg-ground py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-wg-ink sm:text-4xl md:text-5xl">
              Transparent Training Pricing
            </h2>
            <p className="mt-4 text-lg text-wg-muted">
              Designed to make high-value sustainable agri-tech accessible and practical for every Ghanaian farmer and entrepreneur.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Total Fee Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-wg-line bg-wg-paper p-8 shadow-sm">
              <div>
                <span className="rounded-full bg-wg-ink/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-wg-ink">
                  Total Training Fee
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold text-wg-ink">₵620</span>
                  <span className="text-sm font-semibold text-wg-muted">per participant</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-wg-muted">
                  Covers the complete 1-day comprehensive intensive masterclass, handbook, starter kit broodstock, refreshments, and certification.
                </p>
              </div>
              <div className="mt-6 border-t border-wg-line pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-wg-leaf">
                  <CheckCircle2 className="h-4 w-4" /> Full Day Practical Experience
                </span>
              </div>
            </div>

            {/* Registration Deposit - Highlighted */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-wg-gold bg-gradient-to-b from-wg-sun/20 to-wg-paper p-8 shadow-xl">
              <span className="absolute -top-3.5 left-8 rounded-full bg-wg-ink px-4 py-1 text-xs font-bold uppercase tracking-wider text-wg-sun">
                To Secure Your Slot
              </span>
              <div>
                <span className="rounded-full bg-wg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-wg-gold-ink">
                  Registration Deposit
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold text-wg-ink">₵120</span>
                  <span className="text-sm font-semibold text-wg-gold-ink">paid in advance</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-wg-ink/80 font-medium">
                  To register, pay <strong>₵120</strong> and provide your full name before the deadline (<strong>24th October</strong>). This confirms your seat and materials.
                </p>
              </div>
              <div className="mt-6 border-t border-wg-line/50 pt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-wg-gold-ink">
                  Remaining ₵500 paid on training day
                </p>
              </div>
            </div>

            {/* Special Discount Perk */}
            <div className="flex flex-col justify-between rounded-3xl border border-wg-line bg-wg-paper p-8 shadow-sm">
              <div>
                <span className="rounded-full bg-wg-leaf/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-wg-leaf">
                  Referral Perk
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-extrabold text-wg-ink">Refer a Friend</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-wg-muted">
                  Bring a farming partner, colleague, or friend along to enjoy special discounted group pricing! Let us know when registering.
                </p>
              </div>
              <div className="mt-6 border-t border-wg-line pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent("Hello! I want to inquire about the group / referral discount for the BSF Training.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-wg-ink hover:underline"
                >
                  <Users className="h-4 w-4" /> Ask about referral discount &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics & Package Included */}
      <section className="bg-wg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Topics Column */}
            <div className="lg:col-span-7">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-wg-gold-ink">Curriculum</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-wg-ink sm:text-4xl">
                Topics You Will Master
              </h2>
              <p className="mt-3 text-lg text-wg-muted">
                From biology to commercial enterprise, you will acquire end-to-end practical mastery of Black Soldier Fly farming.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-1">
                {TOPICS.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3.5 rounded-2xl border border-wg-line bg-wg-ground p-4 transition-all hover:border-wg-gold/40 hover:bg-wg-sun/5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wg-leaf text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="font-medium text-wg-ink">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Includes Column */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-wg-line bg-wg-forest p-8 text-wg-forest-text lg:p-10">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-wg-lime">What's Included</span>
                <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl text-wg-forest-text">
                  Your Package Includes
                </h3>
                <p className="mt-2 text-sm text-wg-forest-muted">
                  Everything you need to step straight from training into active production.
                </p>

                <div className="mt-8 space-y-6">
                  {PACKAGE_INCLUDES.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-wg-sun text-wg-ink">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-wg-forest-text">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-wg-forest-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl bg-wg-forest-raised p-5 border border-wg-forest-text/10">
                  <p className="font-display text-base font-bold text-wg-sun">Ready to book?</p>
                  <p className="mt-1 text-xs text-wg-forest-muted">
                    Pay ₵120 deposit via Mobile Money or Bank Transfer, and submit your details below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Details & Bank / MoMo Information */}
      <section id="payment" className="border-t border-wg-line bg-wg-ground py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-bold uppercase tracking-wider text-wg-gold-ink">Official Accounts</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-wg-ink sm:text-4xl md:text-5xl">
              Payment & Registration Channels
            </h2>
            <p className="mt-4 text-lg text-wg-muted">
              Pay the <strong>₵120 registration deposit</strong> through either MTN Mobile Money or direct Stanbic Bank transfer.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* MTN Mobile Money Card */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-amber-400 bg-wg-paper p-8 shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-3 py-1 font-display text-xs font-bold text-amber-900 uppercase">
                  Option 1 • Instant MoMo
                </span>
                <span className="text-xs font-semibold text-wg-muted">Ghana</span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-extrabold text-wg-ink">MTN Mobile Money</h3>

              <div className="mt-6 space-y-3 rounded-2xl bg-amber-50/60 p-5 border border-amber-200">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-wg-muted">Account Name</span>
                  <p className="font-display text-lg font-bold text-wg-ink">WIGGLINGGOLD LTD</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-wg-muted">Mobile Money Number</span>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="font-mono text-2xl font-extrabold tracking-wider text-amber-950">0556943631</p>
                    <button
                      type="button"
                      onClick={() => copyToClipboard("0556943631", "momo")}
                      className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-wg-ink transition-transform hover:bg-amber-500 active:scale-95"
                    >
                      {copiedMomo ? (
                        <>
                          <Check className="h-3.5 w-3.5" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy No.
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm text-wg-muted">
                Please enter <strong>"BSF Training"</strong> and your <strong>Full Name</strong> as reference when making payment.
              </p>
            </div>

            {/* Bank Transfer Card */}
            <div className="relative overflow-hidden rounded-3xl border border-wg-line bg-wg-paper p-8 shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 font-display text-xs font-bold text-blue-900 uppercase">
                  Option 2 • Bank Transfer
                </span>
                <span className="text-xs font-semibold text-wg-muted">Stanbic Bank</span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-extrabold text-wg-ink">Bank Transfer (Stanbic Bank)</h3>

              <div className="mt-6 space-y-3 rounded-2xl bg-blue-50/40 p-5 border border-blue-100">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-wg-muted">Bank</span>
                    <p className="font-display text-sm font-bold text-wg-ink">Stanbic Bank Ghana Limited</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-wg-muted">Branch Name</span>
                    <p className="font-display text-sm font-bold text-wg-ink">ASOKWA</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-wg-muted">Account Name</span>
                  <p className="font-display text-lg font-bold text-wg-ink">WIGGLINGGOLD LTD</p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-wg-muted">Account Number</span>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="font-mono text-2xl font-extrabold tracking-wider text-blue-950">9040014080605</p>
                    <button
                      type="button"
                      onClick={() => copyToClipboard("9040014080605", "bank")}
                      className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white transition-transform hover:bg-blue-700 active:scale-95"
                    >
                      {copiedBank ? (
                        <>
                          <Check className="h-3.5 w-3.5" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" /> Copy No.
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm text-wg-muted">
                Keep the bank transfer slip or payment receipt screenshot to attach when confirming your registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="scroll-mt-20 bg-wg-sun py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="font-display text-base font-bold text-wg-ink/75 uppercase tracking-wider">Step 2: Submit Details</span>
              <h2 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.03em] text-wg-ink sm:text-5xl">
                Confirm Your Training Registration
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-wg-ink/80">
                Once you have paid the <strong>₵120</strong> deposit, fill in this form. It immediately opens WhatsApp with your
                pre-filled information to receive your registration confirmation and receipt.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl bg-wg-paper/60 p-6 border border-wg-ink/10">
                <h4 className="font-display font-bold text-wg-ink">Important Summary:</h4>
                <ul className="space-y-2 text-sm text-wg-ink/80">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-wg-leaf shrink-0" strokeWidth={3} />
                    <span><strong>Date:</strong> Saturday, 31st October, 2026</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-wg-leaf shrink-0" strokeWidth={3} />
                    <span><strong>Time:</strong> 10:00 AM to 2:00 PM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-wg-leaf shrink-0" strokeWidth={3} />
                    <span><strong>Location:</strong> Rufus Green Park, Adenta Accra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-wg-leaf shrink-0" strokeWidth={3} />
                    <span><strong>Registration Deadline:</strong> Saturday 24th October, 2026</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-sm text-wg-ink/75">
                  Need assistance or prefer registering by phone? Call or WhatsApp:
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  {PHONES.map((p) => (
                    <a
                      key={p}
                      href={`tel:+233${p.replace(/\s/g, "").slice(1)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-wg-ink px-4 py-2 font-display text-sm font-bold text-wg-paper transition-transform hover:scale-105"
                    >
                      <Phone className="h-4 w-4 text-wg-sun" />
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-[1.5rem] bg-wg-paper p-8 shadow-2xl md:p-10 border border-wg-line">
                <h3 className="font-display text-2xl font-bold text-wg-ink">Participant Details</h3>
                <p className="mt-1 text-sm text-wg-muted">
                  Please provide your accurate legal name for your official training certificate.
                </p>

                <form onSubmit={handleRegister} className="mt-8 grid gap-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-semibold text-wg-ink">
                      Full Name (for Certificate) <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-2 block w-full rounded-xl border border-wg-line bg-wg-ground px-4 py-3.5 text-base text-wg-ink placeholder:text-wg-muted focus:border-wg-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-wg-ink/20"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone-number" className="block text-sm font-semibold text-wg-ink">
                        Phone / WhatsApp Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phone-number"
                        type="tel"
                        required
                        placeholder="e.g. 055 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-wg-line bg-wg-ground px-4 py-3.5 text-base text-wg-ink placeholder:text-wg-muted focus:border-wg-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-wg-ink/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="payment-channel" className="block text-sm font-semibold text-wg-ink">
                        Payment Channel Used
                      </label>
                      <select
                        id="payment-channel"
                        value={paymentMode}
                        onChange={(e) => setPaymentMode(e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-wg-line bg-wg-ground px-4 py-3.5 text-base text-wg-ink focus:border-wg-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-wg-ink/20"
                      >
                        <option value="MTN Mobile Money">MTN Mobile Money (0556943631)</option>
                        <option value="Stanbic Bank Transfer">Stanbic Bank Transfer (9040014080605)</option>
                        <option value="Yet to pay, paying now">Yet to pay, paying now</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tx-ref" className="block text-sm font-semibold text-wg-ink">
                      Payment Transaction ID / Reference (Optional)
                    </label>
                    <input
                      id="tx-ref"
                      type="text"
                      placeholder="e.g. MoMo Transaction ID or Account Name"
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      className="mt-2 block w-full rounded-xl border border-wg-line bg-wg-ground px-4 py-3.5 text-base text-wg-ink placeholder:text-wg-muted focus:border-wg-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-wg-ink/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-wg-ink">
                      Additional Notes or Questions (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Any specific farming background, special dietary needs, or referral info..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-2 block w-full rounded-xl border border-wg-line bg-wg-ground px-4 py-3 text-base text-wg-ink placeholder:text-wg-muted focus:border-wg-ink focus:bg-white focus:outline-none focus:ring-2 focus:ring-wg-ink/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-wg-ink px-8 font-display text-base font-bold text-wg-paper shadow-xl transition-all hover:bg-wg-ink/90 active:scale-[0.99]"
                  >
                    <MessageCircle className="h-5 w-5 text-wg-sun" />
                    Complete Registration via WhatsApp
                  </button>

                  {submitted && (
                    <div className="rounded-xl bg-wg-leaf-soft p-4 text-center font-medium text-wg-ink">
                      WhatsApp has been launched with your details. Send the message there to finalize your seat reservation!
                    </div>
                  )}

                  <p className="text-center text-xs text-wg-muted">
                    We keep your information safe and will never spam you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Location Section */}
      <section className="bg-wg-paper py-20 border-t border-wg-line">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-wg-gold-ink">Location & Directions</span>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-wg-ink sm:text-4xl">
                Rufus Green Park, Adenta, Accra
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-wg-muted">
                The training will be held in a serene, nature-friendly outdoor environment equipped with full practical
                demonstration stations for larvae feed production, breeding crates, and live colony cages.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-wg-ink font-semibold">
                  <MapPin className="h-5 w-5 text-wg-gold-ink shrink-0" />
                  <span>Rufus Green Park, Adenta Municipal, Greater Accra Region</span>
                </div>
                <div className="flex items-center gap-3 text-wg-ink font-semibold">
                  <Calendar className="h-5 w-5 text-wg-gold-ink shrink-0" />
                  <span>Saturday, 31st October, 2026 (10:00 AM - 2:00 PM)</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rufus+Green+Park+Adenta+Accra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-wg-ink px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on Google Maps
                </a>
                <a
                  href={`tel:+233${PHONES[0].replace(/\s/g, "").slice(1)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-wg-line px-6 py-3 font-semibold text-wg-ink hover:bg-wg-ground"
                >
                  <Phone className="h-4 w-4" />
                  Call for Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-wg-line shadow-lg bg-wg-ground p-2">
                <iframe
                  title="Rufus Green Park Location"
                  src="https://maps.google.com/maps?q=Rufus+Green+Park+Adenta+Accra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-[360px] w-full rounded-2xl border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default TrainingsPage;
