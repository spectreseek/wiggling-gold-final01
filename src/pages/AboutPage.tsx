import { usePageMeta } from "@/hooks/use-page-meta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To revolutionize waste management by transforming organic waste into valuable, sustainable products through innovative black soldier fly technology.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where zero waste is the norm, and circular economy principles drive sustainable agriculture and environmental stewardship.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest quality standards in all our products, ensuring sustainable and effective solutions for our partners.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships with farms, breweries, and markets to create a collaborative ecosystem of sustainability.",
  },
];

const AboutPage = () => {
  usePageMeta("About Us | Wiggling Gold");
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-accent rounded-full px-5 py-2 mb-6">
                <span className="text-sm font-semibold tracking-wider text-accent-foreground uppercase">
                  About Us
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Pioneering Sustainable
                <span className="block text-primary mt-2">Waste Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                Leading the transformation from waste to wealth through innovative biotechnology
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to solve two critical challenges - organic waste management and sustainable protein production - Wiggling Gold has become a leader in circular economy solutions.
                  </p>
                  <p>
                    Our journey began when we recognized the incredible potential of black soldier fly larvae as nature's most efficient waste processors. These remarkable insects can convert organic waste into high-quality protein in just days, creating a closed-loop system that benefits both agriculture and the environment.
                  </p>
                  <p>
                    Today, we partner with markets, breweries, and farms across the region, processing thousands of tons of organic waste annually and producing premium animal feed that supports sustainable farming practices.
                  </p>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="rounded-2xl overflow-hidden shadow-strong">
                  <img 
                    src={heroImage} 
                    alt="Wiggling Gold sustainable facilities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-gold rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-earth rounded-full blur-3xl opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Guided by principles that drive sustainable innovation and environmental stewardship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-medium transition-smooth bg-card border-border animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-earth rounded-2xl flex items-center justify-center">
                        <value.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
