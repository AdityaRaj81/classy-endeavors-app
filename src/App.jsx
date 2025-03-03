import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import UsersSay from "./pages/UsersSay";
import WhyChoose from "./pages/WhyChoose";
import Plans from "./pages/Plans";
import FAQ from "./pages/FAQ";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToSection />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <div id="features">
                    <UsersSay />
                  </div>
                  <div id="why-choose-us">
                    <WhyChoose />
                  </div>
                  <div id="pricing">
                    <Plans />
                  </div>
                  <div id="faq">
                    <FAQ />
                  </div>
                </>
              }
            />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



/**
 * @author Aditya Raj
 * @github https://github.com/AdityaRaj81
 * @project Classy Endeavors App
 */