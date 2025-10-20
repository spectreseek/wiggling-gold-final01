import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-earth p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-['Outfit'] text-foreground">
              Wiggling Gold
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Process
            </a>
            <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Products
            </a>
            <a href="#impact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Impact
            </a>
            <Button size="sm" className="bg-gradient-earth hover:opacity-90 transition-smooth">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
