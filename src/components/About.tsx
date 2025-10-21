import { Card } from "@/components/ui/card";
import { Leaf, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Leaf,
    value: "10K+",
    label: "Tons of waste recycled annually",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Waste conversion efficiency",
  },
  {
    icon: Users,
    value: "50+",
    label: "Partner farms and facilities",
  },
  {
    icon: Award,
    value: "100%",
    label: "Sustainable & organic",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-foreground mb-6">
            Leading the Circular Economy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wiggling Gold is revolutionizing waste management through innovative black soldier fly larvae technology. 
            We transform organic waste into valuable resources, creating a sustainable future for agriculture and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-medium transition-smooth animate-scale-in bg-card border-t-4 border-b-4 border-t-secondary border-b-secondary border-l border-r border-l-border border-r-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-earth rounded-full mb-4">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold font-['Outfit'] text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
