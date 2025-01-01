import React from "react";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Project from "./Component/Pages/Projects";
import Navbar from "./Component/Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./Component/CSS/App.css";

function App() {
  return (
    <Router>
      <div className="BG">
        <Navbar />
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