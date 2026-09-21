import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/wigo-footer-logo.png";

// Every link points at a real page. The old #process, #products and #impact
// anchors did not exist on the home page.
const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/process", label: "Our Process" },
  { to: "/products", label: "Products" },
  { to: "/project-mansa", label: "Project Mansa" },
  { to: "/faq", label: "FAQ" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex flex-col items-start gap-0.5">
              <img src={logo} alt="WIGO Logo" className="h-16 w-auto object-contain" />
              <p className="text-white text-sm font-medium mb-3">WigglingGold Limited</p>
            </div>
            <p className="text-background/80 mb-4">
              <span className="text-secondary font-semibold">Turning dirt into gold</span> | Transforming waste into sustainable solutions for a better tomorrow.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/233556943631" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="bg-background/10 hover:bg-secondary p-2 rounded-full transition-smooth">
                <MessageCircle className="h-5 w-5 text-background" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-background/10 hover:bg-secondary p-2 rounded-full transition-smooth">
                <Linkedin className="h-5 w-5 text-background" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-background/10 hover:bg-secondary p-2 rounded-full transition-smooth">
                <Facebook className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold font-['Montserrat'] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-background/80 hover:text-secondary transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-['Montserrat'] text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:askwigglinggold@gmail.com" className="text-background/80 hover:text-secondary transition-smooth">
                  askwigglinggold@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-background/80">
                  <a href="tel:0556943631" className="hover:text-secondary transition-smooth">0556943631</a>
                  {" / "}
                  <a href="tel:0556943630" className="hover:text-secondary transition-smooth">0556943630</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/f1fwhj13pLnP4DNZ7?g_st=awb" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-smooth">
                  View Our Location
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">
            &copy; {new Date().getFullYear()} Wiggling Gold. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
