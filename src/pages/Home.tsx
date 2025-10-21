import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <Benefits />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
