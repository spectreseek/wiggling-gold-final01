import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trash2, Bug, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Collect Waste",
    description: "We partner with local industries to safely collect organic waste streams, diverting them from landfills.",
    icon: Trash2,
  },
  {
    number: "02",
    title: "Feed Larvae",
    description: "Millions of BSF larvae consume the waste in a rapid 14-day bioconversion cycle, reducing waste volume by up to 90%.",
    icon: Bug,
  },
  {
    number: "03",
    title: "Produce Gold",
    description: "We process the final products: **BSF Protein Meal** (feed) and **Organic Frass** (fertilizer), completing the circular loop.",
    icon: Sparkles,
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-foreground mb-12 text-center animate-fade-in">
          Our Sustainable Process in Action
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue animate-fade-in bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-primary font-semibold">{part}</strong> : part
                    )}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
