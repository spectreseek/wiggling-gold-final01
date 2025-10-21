import { Card } from "@/components/ui/card";
import { Utensils, Beef, Shield } from "lucide-react";

const benefits = [
  {
    icon: Utensils,
    title: "Voracious Eaters",
    description: "A single larva can consume twice its body weight in organic waste every single day.",
  },
  {
    icon: Beef,
    title: "Nutrient Rich",
    description: "They naturally bio-accumulate high levels of protein and healthy fats, making them a perfect sustainable animal feed.",
  },
  {
    icon: Shield,
    title: "Clean & Safe",
    description: "The larval gut has antimicrobial properties that help neutralize harmful pathogens in waste.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-foreground mb-6">
            Meet Our Heroes: The Black Soldier Fly
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nature's most efficient bioconverter transforms organic waste into valuable resources. 
            Discover how black soldier fly larvae are revolutionizing sustainable waste management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
