import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Team from "./components/Team";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {

   const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
    <div className="app">
      <img
        src="/images/logo.png"
        alt="logo"
        className="floating-logo"
        onClick={() => scrollToSection("home")}
      />
      <Home />
      <Navbar />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;