import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/wigo-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/process", label: "Process" },
    { path: "/products", label: "Products" },
    { path: "/project-mansa", label: "Project Mansa" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <nav className={`fixed z-50 bg-white/95 backdrop-blur-xl border border-border transition-smooth ${
      isScrolled 
        ? "top-0 left-0 right-0 shadow-sm rounded-none" 
        : "top-4 left-4 right-4 shadow-glow-blue rounded-full"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-start gap-0 group">
            <img 
              src={logo} 
              alt="WIGO Logo" 
              className="h-16 w-auto transition-smooth group-hover:scale-105"
            />
            <p className="text-blue-900 text-[0.9rem] font-medium -mt-1">WigglingGold Limited</p>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-smooth px-4 xl:px-6 py-2 rounded-full whitespace-nowrap ${
                  isActive(link.path)
                    ? "text-blue-900 bg-accent"
                    : "text-blue-900 hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-soft hover:shadow-glow-blue rounded-full px-6">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-smooth px-4 py-2 rounded-full ${
                    isActive(link.path)
                      ? "text-blue-900 bg-accent"
                      : "text-blue-900 hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-primary hover:opacity-90 transition-smooth w-full rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
