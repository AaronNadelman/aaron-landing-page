import NavTop from "./components/NavTop";
import ParticlesComponent from "./components/BackgroundParticles.tsx/ParticlesComponent";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="container relative z-0">
        <ParticlesComponent />
      </div>
      <div className="relative z-100">
        <NavTop />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
