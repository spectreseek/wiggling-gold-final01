import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
