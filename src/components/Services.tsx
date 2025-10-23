import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, FileText, Users, MapPin, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Setup Services",
    description: "Complete black soldier fly farm setup from planning to execution.",
  },
  {
    icon: FileText,
    title: "Feasibility Studies",
    description: "Comprehensive analysis to ensure your BSF project's success.",
  },
  {
    icon: Users,
    title: "Group Trainings",
    description: "Professional training sessions for teams and organizations.",
  },
  {
    icon: MapPin,
    title: "Onsite Training",
    description: "Hands-on training at your location for practical learning.",
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    description: "Expert guidance for optimizing your BSF operations.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive solutions to help you succeed in black soldier fly farming
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-smooth bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-earth rounded-xl flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-['Outfit'] text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" className="bg-gradient-earth hover:opacity-90 transition-smooth shadow-medium">
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;