import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-earth p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-['Outfit']">
                Wiggling Gold
              </span>
            </div>
            <p className="text-background/80 mb-4">
              Transforming waste into sustainable solutions for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold font-['Outfit'] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-secondary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-background/80 hover:text-secondary transition-smooth">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/80 hover:text-secondary transition-smooth">
                  Products
                </a>
              </li>
              <li>
                <a href="#impact" className="text-background/80 hover:text-secondary transition-smooth">
                  Impact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-['Outfit'] text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-smooth">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-smooth">
                  Partner Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-smooth">
                  Sustainability Report
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-smooth">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-['Outfit'] text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">info@wigglinggold.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">123 Green Street, Eco City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">
            &copy; {new Date().getFullYear()} Wiggling Gold. All rights reserved. Building a sustainable future together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
