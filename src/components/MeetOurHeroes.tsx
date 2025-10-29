import { CheckCircle, Clock, Zap, Shield, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blackSoldierFly from "@/assets/black-soldier-fly.png";

const features = [
  { icon: Clock, text: "14-day lifecycle from egg to harvest" },
  { icon: Zap, text: "Converts 70% of waste into protein-rich biomass" },
  { icon: Leaf, text: "42-45% protein content in dried larvae" },
  { icon: CheckCircle, text: "Rich in calcium, amino acids, and lauric acid" },
  { icon: Shield, text: "Non-pest species - doesn't spread disease" },
  { icon: CheckCircle, text: "Self-harvesting behavior for easy collection" }
];

const MeetOurHeroes = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Heroes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nature's most efficient recyclers, working 24/7 to transform waste into wealth
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Black Soldier Fly: Nature's Bioconverter
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Black Soldier Fly (Hermetia illucens) isn't your typical pest. These remarkable insects are the unsung heroes of the circular economy, capable of consuming twice their body weight in organic waste daily.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-muted-foreground">{feature.text}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Wiggling Gold Ghana, we've mastered the art of BSF cultivation. Our larvae work around the clock, transforming brewery waste, market scraps, and food processing byproducts into two valuable products: premium animal feed and nutrient-rich fertilizer.
            </p>

            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-strong text-base h-14 px-8 rounded-full font-semibold"
              onClick={() => window.location.href = '/process'}
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Column - Visual Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative flex justify-center">
              <img 
                src={blackSoldierFly} 
                alt="Black Soldier Fly larvae" 
                className="w-[80%] h-auto"
                style={{ maxWidth: '85%' }}
              />
              
              {/* Stats Badge Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">70%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurHeroes;
