import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ThreePillars from "@/components/ThreePillars";
import MeetOurHeroes from "@/components/MeetOurHeroes";
import CircularEconomy from "@/components/CircularEconomy";
import Process from "@/components/Process";
import Markets from "@/components/Markets";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FlyerPopup from "@/components/FlyerPopup";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <ThreePillars />
        <MeetOurHeroes />
        <CircularEconomy />
        <Process />
        <Markets />
        <Services />
        <About />
      </main>
      <Footer />
      <FlyerPopup />
    </div>
  );
};

export default Home;
