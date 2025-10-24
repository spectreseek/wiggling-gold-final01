import { CircleCheckBig } from "lucide-react";
import blackSoldierFly from "@/assets/black-soldier-fly.png";

const benefits = [
  {
    title: "Voracious Eaters",
    description: "A single larva can consume twice its body weight in organic waste every single day.",
  },
  {
    title: "Nutrient Rich",
    description: "They naturally bio-accumulate high levels of protein and healthy fats, making them a perfect sustainable animal feed.",
  },
  {
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
            The Black Soldier Fly (*Hermetia illucens*) is a remarkable insect. Unlike common houseflies, they are not pests, do not bite, and are not attracted to human habitats. Their true power lies in their larval stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <img 
              src={blackSoldierFly} 
              alt="Black Soldier Fly" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CircleCheckBig className="h-8 w-8 text-green-500" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Montserrat'] text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
