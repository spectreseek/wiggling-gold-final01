import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Benefits from "@/components/Benefits";
import CircularEconomy from "@/components/CircularEconomy";
import Process from "@/components/Process";
import Markets from "@/components/Markets";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <CircularEconomy />
        <Benefits />
        <Process />
        <Markets />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
