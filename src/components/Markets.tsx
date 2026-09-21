import { useEffect, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import fishFarmImg from "@/assets/aquaculture-tilapia.jpg";
import poultryFarmImg from "@/assets/poultry-broilers.jpg";
import facilityImg from "@/assets/hero-image.jpg";
import feedMillImg from "@/assets/feed-mill.jpg";
import bsfLarvaeImg from "@/assets/bsf-larvae.jpg";
import agricultureImg from "@/assets/products.jpg";

type MarketCardData = {
  category: string;
  categoryColor: string;
  image: string;
  title: string;
  description: string;
  features: string[];
};

const MARKETS: MarketCardData[] = [
  {
    category: "AQUACULTURE",
    categoryColor: "#4a9fd8",
    image: fishFarmImg,
    title: "Sustainable Protein for Aquaculture",
    description:
      "High-quality insect protein for fish and shrimp farming, promoting healthy growth and reducing environmental impact.",
    features: [
      "Rich in essential amino acids",
      "High protein content (45-60%)",
      "Improved fish growth rates",
      "Sustainable feed alternative",
    ],
  },
  {
    category: "POULTRY",
    categoryColor: "#ff6b6b",
    image: poultryFarmImg,
    title: "Next-Generation Poultry Nutrition",
    description:
      "Premium insect-based feed for chickens and layers, enhancing egg quality and bird health naturally.",
    features: [
      "Enhanced egg production",
      "Natural immune support",
      "Better feed conversion ratio",
      "Reduced antibiotic dependency",
    ],
  },
  {
    category: "AGRICULTURE",
    categoryColor: "#2d5a3d",
    image: agricultureImg,
    title: "Organic Fertilizer & Soil Enhancement",
    description:
      "Nutrient-rich frass (insect waste) that improves soil health and promotes sustainable crop production.",
    features: [
      "Rich in organic matter",
      "Natural pest resistance",
      "Improved soil structure",
      "Increased crop yields",
    ],
  },
  {
    category: "FEED PRODUCERS",
    categoryColor: "#0ea5a0", // teal
    image: feedMillImg,
    title: "BSF Ingredients for Feed Manufacturers",
    description:
      "Consistent, scalable BSF protein meal and oil that integrates seamlessly into commercial feed formulations.",
    features: [
      "Reliable supply options",
      "Formulation flexibility",
      "Improved FCR performance",
      "Traceable and sustainable",
    ],
  },
  {
    category: "RESEARCH INSTITUTIONS",
    categoryColor: "#64748b", // slate
    image: facilityImg,
    title: "Partnerships for Science and Innovation",
    description:
      "Collaborative R&D on insect nutrition, waste valorization, and circular bio-economy applications.",
    features: [
      "Data-driven trials",
      "Custom study support",
      "Access to test materials",
      "Publication-friendly protocols",
    ],
  },
  {
    category: "STUDENTS",
    categoryColor: "#f59e0b", // amber
    image: agricultureImg,
    title: "Learning Opportunities in Insect Agritech",
    description:
      "Workshops, internships, and guided projects to build skills in sustainable protein and circular systems.",
    features: [
      "Hands-on training",
      "Mentorship programs",
      "Capstone project support",
      "Certification options",
    ],
  },
  {
    category: "BSF ENTREPRENEURSHIP",
    categoryColor: "#10b981", // green
    image: bsfLarvaeImg,
    title: "Prospective BSF Entrepreneurs",
    description:
      "End-to-end support to launch and scale BSF ventures—from starter kits to operational playbooks.",
    features: [
      "Pilot-to-scale pathways",
      "Facility design guidance",
      "SOPs and QA frameworks",
      "Market linkage support",
    ],
  },
];

const Markets = () => {
  const cardsRef = useRef<Array<HTMLArticleElement | null>>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLArticleElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Markets We Serve" className="w-full bg-[#fafafa]">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-[36px] leading-tight font-bold text-[--primary]">Markets We Serve</h2>
          <p className="mt-3 text-[16px] text-[#6b7280]">
            Our innovative solutions providing sustainable protein across multiple industries
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m, idx) => (
            <article
              key={m.category}
              ref={(el) => (cardsRef.current[idx] = el)}
              tabIndex={0}
              className="market-card outline-none focus:ring-2 focus:ring-blue-400 rounded-2xl bg-[#f2f2f2] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full aspect-[16/9] object-cover transition-transform ease-linear"
                  style={{ transitionDuration: "3000ms" }}
                />

                <span
                  className="absolute top-4 left-4 text-white text-[14px] font-semibold tracking-wide px-4 py-2 rounded-full uppercase"
                  style={{ backgroundColor: m.categoryColor, opacity: 0.9 }}
                >
                  {m.category}
                </span>

                <button
                  className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-transform hover:scale-110 hover:bg-white"
                  aria-label={`Learn more about ${m.category.toLowerCase()}`}
                >
                  <ArrowUpRight className="text-[--primary]" />
                </button>

                <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-10 transition-opacity bg-black" />
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="text-[22px] font-bold text-[#1a2b4a] leading-snug mb-3">{m.title}</h3>
                <p className="text-[15px] text-[#4a5568] leading-relaxed mb-4">{m.description}</p>

                <ul className="space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start text-[14px] text-[#2d3748]">
                      <Check className="h-4 w-4 text-[#A8E6A1] mt-0.5 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .market-card { opacity: 0; transform: translateY(30px); }
        .market-card.fade-in-up { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease; }
      `}</style>
    </section>
  );
};

export default Markets;
