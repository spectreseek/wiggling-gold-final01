import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Factory, GraduationCap, Mail, MessageCircle, Warehouse } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import bsfLarvaeImage from "@/assets/bsf-larvae.jpg";
import flyerImg from "@/assets/project-mansa-flyer.jpg";

const WHATSAPP_URL = `https://wa.me/233558240434?text=${encodeURIComponent(
  "Hello, I would like to know more about Project Mansa.",
)}`;

const stats = [
  { value: "16", label: "Regions of Ghana" },
  { value: "800+", label: "People to be trained nationwide" },
  { value: "300+", label: "People already trained by Wiggling Gold" },
  { value: "20+", label: "BSF farms supported" },
];

const phases = [
  {
    icon: GraduationCap,
    phase: "Phase 1",
    title: "Training & Starter Support",
    paragraphs: [
      "Project Mansa begins with Black Soldier Fly production training across Ghana's 16 regions.",
      "The initiative targets at least 50 participants in each region, reaching a minimum of 800 people nationwide.",
      "Participants will receive practical and theoretical training designed to equip them with the knowledge and tools required to begin BSF production. The program intentionally creates opportunities for youth, women, farmers, and persons who are deaf or hard of hearing.",
    ],
  },
  {
    icon: Factory,
    phase: "Phase 2",
    title: "Regional Processing Hubs",
    paragraphs: [
      "The second phase will establish regional BSF processing hubs across all 16 regions.",
      "These facilities will support processing, drying, packaging, quality control and aggregation of Black Soldier Fly products from producers within each region.",
      "The regional hubs will help connect individual producers to a larger and more organized value chain.",
    ],
  },
  {
    icon: Warehouse,
    phase: "Phase 3",
    title: "National BSF Hub",
    paragraphs: [
      "The final phase envisions a large-scale 100-ton national Black Soldier Fly facility serving as the central hub of the Project Mansa ecosystem.",
      "The facility will support large-scale production, research and development, quality control, aggregation, warehousing, distribution and potential export opportunities.",
    ],
  },
];

const steps = ["Train", "Produce", "Process", "Prosper"];

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

const supportTypes = [
  "Financial sponsorship",
  "Technical expertise",
  "Training and research support",
  "Venues and accommodation",
  "Transportation and logistics",
  "Equipment",
  "Organic waste supply",
  "Market access",
  "Other forms of in-kind support",
];

const ProjectMansaPage = () => {
  usePageMeta("Project Mansa | Wiggling Gold Limited", "Project Mansa is a nationwide Black Soldier Fly development initiative by Wiggling Gold Limited, building training, regional processing hubs and a national hub across all 16 regions of Ghana.");
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${bsfLarvaeImage})` }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-accent rounded-full px-5 py-2 mb-6">
                <span className="text-sm font-semibold tracking-wider text-accent-foreground uppercase">
                  Wiggling Gold Limited
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Project Mansa
                <span className="block text-primary mt-2 text-3xl md:text-5xl">
                  Train. Produce. Process. Prosper.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-6">
                Project Mansa is a nationwide Black Soldier Fly (BSF) development initiative by Wiggling Gold
                Limited, designed to build a sustainable insect farming ecosystem across Ghana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The project seeks to equip Ghanaians with practical skills in Black Soldier Fly production,
                establish regional production and processing infrastructure, create economic opportunities, and
                contribute to more affordable and sustainable animal feed production.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft rounded-full h-14 px-8 text-base font-semibold"
                >
                  <a href="#partner">
                    Partner With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-smooth rounded-full h-14 px-8 text-base font-semibold"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Track record */}
        <section className="py-12 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed mb-10">
              Project Mansa builds on Wiggling Gold's experience in Ghana's BSF industry, including training more
              than 300 people and supporting the establishment of 20+ Black Soldier Fly farms.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center bg-card border-border">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground leading-snug">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Project Mansa */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Project Mansa?</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Ghana's agriculture sector continues to face challenges including the rising cost of animal
                    feed, organic waste management, limited employment opportunities, and the need for more
                    sustainable agricultural production systems.
                  </p>
                  <p>
                    Black Soldier Fly farming presents an opportunity to address several of these challenges
                    simultaneously.
                  </p>
                  <p>
                    Through Project Mansa, organic waste can be transformed into valuable resources — producing
                    nutritious insect protein for poultry, fish, pigs and other livestock while generating organic
                    fertilizer for crop production.
                  </p>
                  <p>
                    At the same time, the project creates opportunities for entrepreneurship, employment, skills
                    development and income generation.
                  </p>
                </div>
                <p className="mt-6 text-2xl font-bold text-primary">Turning Dirt to Gold.</p>
              </div>
              <div className="relative animate-scale-in">
                <div className="rounded-2xl overflow-hidden shadow-strong">
                  <img
                    src={heroImage}
                    alt="Black Soldier Fly larvae processing organic waste"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-gold rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-earth rounded-full blur-3xl opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and phases */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our vision is to develop an interconnected Black Soldier Fly production ecosystem that operates
                across all 16 regions of Ghana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Project Mansa is being implemented through three progressive phases:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {phases.map((item, index) => (
                <Card
                  key={item.phase}
                  className="p-8 hover:shadow-medium transition-smooth bg-card border-border animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-earth rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">{item.phase}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    {item.paragraphs.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed mt-14">
              Together, these three phases create a pathway that moves participants from training to production,
              from production to processing, and ultimately from enterprise to prosperity.
            </p>
          </div>
        </section>

        {/* More than a training project */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">More Than a Training Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Project Mansa is designed to create an entire value chain.
              </p>
              <blockquote className="text-2xl md:text-3xl font-semibold text-primary leading-snug my-8">
                A farmer trained today should not have to operate in isolation tomorrow.
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through regional infrastructure, technical partnerships, research, quality assurance and market
                development, Project Mansa seeks to build a system where producers can grow alongside the industry.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl bg-gradient-primary text-primary-foreground py-6 px-4 text-center shadow-medium"
                >
                  <div className="text-sm opacity-80 mb-1">Step {index + 1}</div>
                  <div className="text-2xl font-bold">{step}.</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner */}
        <section id="partner" className="py-20 bg-accent scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Partner With Project Mansa</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Achieving a nationwide transformation requires collaboration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wiggling Gold welcomes partnerships with government institutions, development organizations,
                universities and research institutions, private companies, financial institutions, foundations,
                agricultural organizations and individuals who share our vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold text-foreground mb-5">Who we welcome</h3>
                <ul className="space-y-3">
                  {partners.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold text-foreground mb-5">How you can support</h3>
                <ul className="space-y-3">
                  {supportTypes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed mt-12">
              Whether you support the training of one participant or an entire region, your contribution can help
              create livelihoods, strengthen sustainable agriculture and build Ghana's emerging Black Soldier Fly
              industry.
            </p>
          </div>
        </section>

        {/* Be part of it */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of Project Mansa</h2>
                <div className="space-y-4 text-lg leading-relaxed opacity-95">
                  <p>Project Mansa represents more than Black Soldier Fly farming.</p>
                  <p>It is about people, livelihoods, agriculture, sustainability and opportunity.</p>
                  <p>
                    We are building a system where waste becomes a resource, knowledge becomes enterprise, and
                    enterprise creates prosperity.
                  </p>
                  <p className="font-semibold">Join Wiggling Gold Limited as we take Project Mansa across Ghana.</p>
                </div>
                <p className="mt-6 text-xl font-bold text-secondary">Train. Produce. Process. Prosper.</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-smooth rounded-full h-14 px-8 text-base font-semibold"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 transition-smooth rounded-full h-14 px-8 text-base font-semibold"
                  >
                    <a href="mailto:askwigglinggold@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-sm opacity-90">
                  Or call +233 55 824 0434 ·{" "}
                  <Link to="/contact" className="underline underline-offset-4 hover:text-secondary">
                    Contact page
                  </Link>
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the Project Mansa flyer conversation on WhatsApp"
                className="block max-w-sm mx-auto lg:max-w-md rounded-2xl overflow-hidden shadow-strong hover:scale-[1.02] transition-smooth"
              >
                <img
                  src={flyerImg}
                  alt="Project Mansa flyer: free two-day hands-on Black Soldier Fly training by Wiggling Gold Ltd."
                  loading="lazy"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Sign-off */}
        <section className="py-12 bg-background text-center">
          <p className="text-xl font-bold text-foreground">Wiggling Gold Limited</p>
          <p className="text-muted-foreground">Turning Dirt to Gold.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectMansaPage;
