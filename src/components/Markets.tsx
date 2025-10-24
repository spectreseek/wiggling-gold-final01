import { Fish, Bird, Wheat } from "lucide-react";

const Markets = () => {
  const markets = [
    {
      icon: Fish,
      title: "Aquaculture",
      description: "Sustainable protein for fish and shrimp farming. Our BSF protein meal provides essential nutrients for healthy aquatic growth.",
      benefits: ["High protein content", "Omega-3 rich", "Digestible nutrition"]
    },
    {
      icon: Bird,
      title: "Poultry",
      description: "Premium feed ingredient for chickens, ducks, and other poultry. Boost growth rates and improve bird health naturally.",
      benefits: ["Natural amino acids", "Enhanced immunity", "Better feed conversion"]
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Organic frass fertilizer enriches soil health and crop yields. A natural solution for sustainable farming practices.",
      benefits: ["Rich in nutrients", "Improves soil structure", "100% organic"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Markets We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our sustainable BSF products power multiple industries, creating value across the agricultural ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div 
                key={index}
                className="group bg-[#F2F2F2] rounded-2xl p-8 shadow-[--shadow-medium] hover:shadow-[--shadow-strong] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent-dark" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {market.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {market.description}
                </p>
                
                <ul className="space-y-2">
                  {market.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark mt-2 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Markets;
