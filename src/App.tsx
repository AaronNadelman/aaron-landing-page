import NavTop from "./components/NavTop";
import ParticlesComponent from "./components/BackgroundParticles.tsx/ParticlesComponent";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Certificaciones from "./pages/certificaciones/Certificaciones";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";

const App: React.FC = () => {
  return (
    <>
      <div className="container relative z-0 ">
        <ParticlesComponent />
      </div>
      <div className="relative z-100">
        <NavTop />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/certificaciones" Component={Certificaciones} />
          <Route path="sobre-mi" Component={SobreMi} />
          <Route path="contacto" Component={Contacto} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
