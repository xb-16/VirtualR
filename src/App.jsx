import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Testemonials from "./components/Testemonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <Workflow />
      <Pricing />
      <Testemonials />
      <Footer/>
    </>
  );
}

export default App;
