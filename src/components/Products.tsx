import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beef, Sprout, Droplets } from "lucide-react";
import productsImage from "@/assets/products.jpg";

const products = [
  {
    icon: Beef,
    title: "Live Larvae as Broodstock",
    description: "Premium live black soldier fly larvae for breeding and feed production.",
    features: ["High quality", "Healthy stock", "Ready to use"],
  },
  {
    icon: Droplets,
    title: "Dried Larvae as Feed",
    description: "High-protein dried larvae perfect for poultry, fish, and livestock nutrition.",
    features: ["65% protein", "Long shelf life", "Easy storage"],
  },
  {
    icon: Sprout,
    title: "Black Soldier Fly Eggs",
    description: "Premium BSF eggs as broodstock for starting or expanding your production.",
    features: ["High viability", "Clean batches", "Fast delivery"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-foreground mb-6">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From waste to wealth - sustainable, high-quality products that benefit your business and the planet.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={productsImage} 
                alt="Wiggling Gold premium sustainable products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-earth rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full blur-3xl opacity-30"></div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-smooth bg-card border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-earth rounded-xl flex items-center justify-center">
                      <product.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-['Montserrat'] text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center animate-fade-in">
          <Card className="p-6 max-w-2xl mx-auto mb-8 bg-accent border-border">
            <p className="text-lg text-foreground">
              <span className="font-semibold">Plus:</span> We sell everything found in black soldier fly setup - from equipment to supplies!
            </p>
          </Card>
          <Button size="lg" className="bg-gradient-earth hover:opacity-90 transition-smooth shadow-medium">
            Request Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
