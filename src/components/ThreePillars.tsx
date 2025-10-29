import { Users, Lightbulb, Globe } from "lucide-react";

const pillars = [
  {
    icon: Users,
    headline: "FOR FARMERS: Cut Feed Costs by 40%",
    description: "Premium protein that rivals imported fishmeal—at local prices"
  },
  {
    icon: Lightbulb,
    headline: "FOR STARTUPS: Start Your Own BSF Farm",
    description: "Complete training and starter colonies to build your business"
  },
  {
    icon: Globe,
    headline: "FOR THE PLANET: Close the Waste Loop",
    description: "Every purchase diverts organic waste from Ghana's landfills"
  }
];

const ThreePillars = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gray-50 hover:bg-white border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {pillar.headline}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
