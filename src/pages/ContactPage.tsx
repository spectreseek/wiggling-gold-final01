import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapLocation from "@/components/MapLocation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "askwigglinggold@gmail.com",
    link: "mailto:askwigglinggold@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "0556943631 / 0556943630",
    link: "tel:0556943631",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "View Our Location on Maps",
    link: "https://maps.app.goo.gl/f1fwhj13pLnP4DNZ7?g_st=awb",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Let's Build a
                <span className="block text-primary mt-2">Sustainable Future</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Partner with us to transform your organic waste into valuable resources
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 md:p-12 shadow-medium border-border animate-slide-up">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        className="h-12 rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        className="h-12 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="h-12 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Your Company"
                      className="h-12 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      className="min-h-[150px] rounded-lg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-earth hover:opacity-90 transition-smooth shadow-medium h-14 rounded-full text-base font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8 animate-scale-in">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Ready to make a difference? Reach out to us and let's discuss how we can help transform your organic waste into valuable resources.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-medium transition-smooth bg-card border-border"
                    >
                      <a 
                        href={info.link}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-14 h-14 bg-gradient-earth rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                          <info.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg font-medium text-foreground">
                            {info.detail}
                          </p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>

                <Card className="p-8 bg-gradient-earth text-primary-foreground shadow-strong">
                  <h3 className="text-2xl font-bold mb-3">
                    Partner Inquiry
                  </h3>
                  <p className="mb-6 leading-relaxed opacity-95">
                    Interested in becoming a waste collection partner or purchasing our products? Let's discuss partnership opportunities.
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 rounded-full font-semibold"
                  >
                    Partnership Information
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Find Us
                </h2>
                <p className="text-lg text-muted-foreground">
                  Visit our location or view directions on the map
                </p>
              </div>
              <MapLocation />
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  asChild
                  className="border-2"
                >
                  <a 
                    href="https://maps.app.goo.gl/f1fwhj13pLnP4DNZ7?g_st=awb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
