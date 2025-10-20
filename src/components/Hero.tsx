import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Recycle className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">Sustainable Waste Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-['Outfit'] text-primary-foreground mb-6 leading-tight">
            Transforming Waste Into 
            <span className="block text-secondary">Premium Animal Feed</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Using black soldier fly larvae, we convert waste food from markets and breweries into sustainable, high-quality animal feed and organic products.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth shadow-medium text-base">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-smooth text-base">
              Our Process
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
