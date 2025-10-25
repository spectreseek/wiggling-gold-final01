import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import larvaeImage from "@/assets/larvae-process.jpg";
import larvaeHandsImage from "@/assets/black-soldier-fly-larvae.jpg";
import productsImage from "@/assets/products.jpg";

const slides = [
  {
    image: heroImage,
    badge: "The Problem Statement",
    title: "Ghana's Twin Crisis",
    highlight: "",
    description: "Farmers struggle with soaring imported feed costs. Mountains of organic waste overflow in our markets, breweries, and processing facilities. Two problems. One solution.",
    cta: "Discover How",
    ctaLink: "/process",
  },
  {
    image: larvaeHandsImage,
    badge: "The Solution",
    title: "Meet Nature's Most",
    highlight: "Efficient Recycler",
    description: "Wiggling Gold Ghana harnesses the Black Soldier Fly to transform waste streams into wealth. Our larvae convert brewery grain and market scraps into premium protein feed and organic fertilizer—right here in Ghana.",
    cta: "See Our Process",
    ctaLink: "/process",
  },
  {
    image: productsImage,
    badge: "The Impact - Farmers",
    title: "Cut Your Feed Costs",
    highlight: "by Up to 40%",
    description: "Stop paying premium prices for imported fishmeal and soy. Our Black Soldier Fly protein delivers the same quality nutrition your livestock needs—at a fraction of the cost.",
    cta: "Get a Quote",
    ctaLink: "/contact",
  },
  {
    image: heroImage,
    badge: "The Impact - Environment",
    title: "From Waste to",
    highlight: "Worth",
    description: "Every kilogram of our feed diverts organic waste from landfills and reduces Ghana's dependence on imports. We're building West Africa's circular economy, one larva at a time.",
    cta: "Our Impact",
    ctaLink: "/about",
  },
  {
    image: larvaeImage,
    badge: "The Vision",
    title: "Proudly Ghanaian.",
    highlight: "Truly Sustainable.",
    description: "Local solutions for local challenges. Wiggling Gold is powering agricultural independence through innovation, turning what Ghana already has into exactly what our farmers need.",
    cta: "Partner With Us",
    ctaLink: "/contact",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[8000ms] ease-out"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-hero"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 h-full flex items-center">
            <div className={`max-w-4xl transition-all duration-1000 delay-300 ${
              index === currentSlide 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}>
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-5 py-2.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wider text-primary-foreground uppercase">
                  {slide.badge}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight">
                {slide.title}
                <span className="block text-secondary mt-2 drop-shadow-lg">
                  {slide.highlight}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-10 max-w-3xl leading-relaxed font-light">
                {slide.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth shadow-strong text-base h-14 px-8 rounded-full font-semibold"
                  onClick={() => window.location.href = slide.ctaLink}
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 transition-smooth text-base h-14 px-8 rounded-full font-semibold"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth shadow-medium"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth shadow-medium"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-12 h-3 bg-secondary" 
                : "w-3 h-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
