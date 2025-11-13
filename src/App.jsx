import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Lenis from "lenis";
import Footer from "./components/Footer";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", () => {
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
