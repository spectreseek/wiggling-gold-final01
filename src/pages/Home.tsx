import PageShell from "@/components/site/PageShell";
import CtaBand from "@/components/site/CtaBand";
import Hero from "@/components/home/Hero";
import TwinCrisis from "@/components/home/TwinCrisis";
import LifeCycle from "@/components/home/LifeCycle";
import ProductsBento from "@/components/home/ProductsBento";
import MansaBand from "@/components/home/MansaBand";
import Audiences from "@/components/home/Audiences";
import FlyerPopup from "@/components/FlyerPopup";

const Home = () => (
  <PageShell
    title="Wiggling Gold | Turning dirt into gold"
    description="Wiggling Gold farms black soldier fly larvae that turn Ghana's market and brewery waste into protein feed and organic fertilizer."
  >
    <Hero />
    <TwinCrisis />
    <LifeCycle />
    <ProductsBento />
    <MansaBand />
    <Audiences />
    <CtaBand />
    <FlyerPopup />
  </PageShell>
);

export default Home;
