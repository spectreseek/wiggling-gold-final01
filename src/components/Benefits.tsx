import { Card } from "@/components/ui/card";
import { Recycle, TrendingDown, Sprout, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Black soldier fly larvae can consume up to twice their body weight in organic waste daily, dramatically reducing landfill burden.",
  },
  {
    icon: TrendingDown,
    title: "Carbon Footprint",
    description: "Our bioconversion process produces 75% less greenhouse gas emissions compared to traditional composting methods.",
  },
  {
    icon: Sprout,
    title: "Nutrient-Rich Output",
    description: "Larvae convert waste into high-quality protein feed and organic fertilizer, creating value from what was once discarded.",
  },
  {
    icon: DollarSign,
    title: "Economic Value",
    description: "Transform waste disposal costs into revenue streams through sustainable protein production and premium fertilizer.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-foreground mb-6">
            The Power of Black Soldier Fly
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nature's most efficient bioconverter transforms organic waste into valuable resources. 
            Discover how black soldier fly larvae are revolutionizing sustainable waste management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-medium transition-smooth animate-scale-in bg-card border-t-4 border-b-4 border-t-secondary border-b-secondary border-l border-r border-l-border border-r-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-secondary rounded-full mb-4">
                <benefit.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
