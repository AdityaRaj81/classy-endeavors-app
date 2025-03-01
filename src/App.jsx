import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import UsersSay from "./pages/UsersSay";
import WhyChoose from "./pages/WhyChoose";
import Plans from "./pages/Plans";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <UsersSay />
                  <WhyChoose />
                  <Plans />
                  <FAQ />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
