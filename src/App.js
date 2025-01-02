import React, { useState, useEffect } from "react";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Project from "./Component/Pages/Projects";
import Navbar from "./Component/Components/Navbar";
import WelcomeModal from "./Component/Components/WelcomeModal";
import { BrowserRouter as Router } from "react-router-dom";
import "./Component/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component/CSS/style.css";
import ReactConfetti from 'react-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Show the modal on page load
    setShowConfetti(true); // Show confetti effect
    setTimeout(() => setShowConfetti(false), 8000); // Stop confetti after 3 seconds
  }, []);

  return (
    <Router>
      <div className="BG">
        {/* Confetti Effect */}
        {showConfetti && <ReactConfetti />}
        <Navbar />
        <WelcomeModal show={showModal} onClose={() => setShowModal(false)} />
        <div className="content">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;