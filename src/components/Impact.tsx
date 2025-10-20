import { Card } from "@/components/ui/card";
import { TreePine, Droplet, Wind, Globe } from "lucide-react";

const impacts = [
  {
    icon: TreePine,
    title: "Carbon Reduction",
    description: "Our process significantly reduces methane emissions from organic waste decomposition.",
    metric: "500 tons CO₂ offset annually",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    description: "Larvae farming uses 90% less water compared to traditional protein production.",
    metric: "10M liters saved yearly",
  },
  {
    icon: Wind,
    title: "Zero Waste",
    description: "Complete utilization of organic materials with zero landfill contribution.",
    metric: "100% waste conversion",
  },
  {
    icon: Globe,
    title: "Circular Economy",
    description: "Creating value from waste while supporting sustainable agriculture practices.",
    metric: "50+ partner farms",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-foreground mb-6">
            Environmental Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every ton of waste we process contributes to a healthier planet. Here's how we're making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-medium transition-smooth bg-card border-border animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-earth rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <impact.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-foreground mb-3">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {impact.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-gold rounded-full">
                  <span className="text-sm font-bold text-secondary-foreground">
                    {impact.metric}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-earth rounded-2xl shadow-strong animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold font-['Outfit'] text-primary-foreground mb-4">
              Join the Sustainability Revolution
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Partner with Wiggling Gold to transform your organic waste into valuable resources. 
              Together, we can build a more sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-smooth shadow-medium">
                Become a Partner
              </a>
              <a href="#learn" className="inline-flex items-center px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/20 transition-smooth">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
