import { usePageMeta } from "@/hooks/use-page-meta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Truck, Leaf, Package, Users, ArrowRight, Download } from "lucide-react";

const products = [
  {
    id: 1,
    image: "/api/placeholder/400/400",
    badge: "MOST POPULAR",
    title: "Black Soldier Fly Dried Larvae",
    tagline: "Premium Protein for Poultry, Fish & Livestock",
    specifications: [
      "42-45% crude protein content",
      "Rich in calcium and amino acids",
      "Cost-effective alternative to fishmeal",
      "Locally produced and processed"
    ],
    price: "Starting at ₵20/kg",
    primaryButton: "Request Quote",
    secondaryButton: "Learn More"
  },
  {
    id: 2,
    image: "/api/placeholder/400/400",
    title: "Live Black Soldier Fly Larvae",
    tagline: "Fresh Feed or Breeding Stock",
    specifications: [
      "Perfect for direct animal feeding",
      "Ideal for starting your own colony",
      "Available in various quantities",
      "Fresh delivery or pickup"
    ],
    price: "Custom Pricing",
    primaryButton: "Request Quote",
    secondaryButton: "Learn More"
  },
  {
    id: 3,
    image: "/api/placeholder/400/400",
    badge: "COMING SOON",
    title: "BSF Frass Organic Fertilizer",
    tagline: "Nutrient-Rich Soil Amendment",
    specifications: [
      "High NPK content",
      "Improves soil structure",
      "100% organic, chemical-free",
      "Increases water retention"
    ],
    price: "Available Soon",
    primaryButton: "Notify Me",
    secondaryButton: "Learn More"
  },
  {
    id: 4,
    image: "/api/placeholder/400/400",
    title: "BSF Farming Starter Kit",
    tagline: "Everything You Need to Begin",
    specifications: [
      "Starter colony included",
      "Basic breeding equipment",
      "Comprehensive guide",
      "Training session included"
    ],
    price: "Contact for Details",
    primaryButton: "Request Quote",
    secondaryButton: "Learn More"
  }
];

const comparisonData = [
  {
    feature: "Protein Content",
    bsf: "42-45%",
    fishmeal: "60-65%",
    soybean: "44-48%"
  },
  {
    feature: "Source",
    bsf: "Local, Ghana",
    fishmeal: "Imported",
    soybean: "Imported"
  },
  {
    feature: "Cost per kg",
    bsf: "₵20-25",
    fishmeal: "₵40-60",
    soybean: "₵30-45"
  },
  {
    feature: "Sustainability",
    bsf: "♻️ Excellent",
    fishmeal: "⚠️ Overfishing concerns",
    soybean: "⚠️ Deforestation risk"
  },
  {
    feature: "Availability",
    bsf: "✅ Always in stock",
    fishmeal: "❌ Supply fluctuates",
    soybean: "❌ Import dependent"
  },
  {
    feature: "Environmental Impact",
    bsf: "✅ Waste reduction",
    fishmeal: "❌ High carbon",
    soybean: "⚠️ Moderate carbon"
  }
];

const ProductsPage = () => {
  usePageMeta("Products | Wiggling Gold");
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center justify-center space-x-2 text-green-100">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li className="text-green-300">&gt;</li>
                <li className="text-white font-medium">Products</li>
              </ol>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Sustainable protein and fertilizer solutions for Ghana's farmers
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      product.badge === "MOST POPULAR" 
                        ? "bg-yellow-500 text-white" 
                        : "bg-gray-600 text-white"
                    }`}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {product.tagline}
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-primary mb-6"></div>

                  {/* Specifications */}
                  <div className="space-y-3 mb-8">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-2xl font-bold text-primary">
                      {product.price}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {product.primaryButton}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => window.location.href = '/about'}
                    >
                      {product.secondaryButton}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How Does BSF Compare?
              </h2>
              <p className="text-xl text-muted-foreground">
                See why farmers are making the switch
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-green-600">BSF Larvae</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Fishmeal</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Soybean Meal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-900 bg-green-50 font-medium">{row.bsf}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-900">{row.fishmeal}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-900">{row.soybean}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join hundreds of Ghanaian farmers cutting costs and going sustainable
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-green-800 font-semibold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Price List
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;