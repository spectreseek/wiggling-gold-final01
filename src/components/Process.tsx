import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import larvaeImage from "@/assets/larvae-process.jpg";

const steps = [
  {
    number: "01",
    title: "Waste Collection",
    description: "We collect organic waste from markets, breweries, and food processing facilities.",
  },
  {
    number: "02",
    title: "Larvae Processing",
    description: "Black soldier fly larvae efficiently consume and break down organic waste.",
  },
  {
    number: "03",
    title: "Product Creation",
    description: "Larvae are processed into high-protein animal feed and organic fertilizer.",
  },
  {
    number: "04",
    title: "Distribution",
    description: "Premium products delivered to farms and agricultural partners.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-foreground mb-6">
            Our Sustainable Process
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From waste to wealth - discover how we transform organic waste into valuable products through nature's most efficient recyclers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-smooth bg-card border-border"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-secondary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-['Outfit'] text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 opacity-50" />
                </div>
              </Card>
            ))}
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={larvaeImage} 
                alt="Black soldier fly larvae processing organic waste"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-earth rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
