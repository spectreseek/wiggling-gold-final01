import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Impact from "@/components/Impact";

const ProcessPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Process />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;
