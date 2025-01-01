import React, { useState, useEffect } from "react";
import "../CSS/Navbar.css";

function Navbar() {
    // State to store the active link and scroll percentage
    const [activeLink, setActiveLink] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Handle scroll events and update the scroll percentage
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollPosition / documentHeight) * 100;
            setScrollPercentage(scrollPercent);
            
            // Update active link based on scroll position
            if (scrollPosition < document.getElementById("about").offsetTop) {
                setActiveLink("home");
            } else if (scrollPosition < document.getElementById("project").offsetTop) {
                setActiveLink("about");
            } else if (scrollPosition < document.getElementById("contact").offsetTop) {
                setActiveLink("project");
            } else {
                setActiveLink("contact");
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    // Handle link click to add 'active' class
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="NavNav">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a href="#home" className="navbar-brand">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    href="#home"
                                    className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("home")}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#about"
                                    className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("about")}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#project"
                                    className={`nav-link ${activeLink === "project" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("project")}
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#contact"
                                    className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                                    onClick={() => handleLinkClick("contact")}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="nav-progress">
                <div
                    className="nav-progress-bar"
                    role="progressbar"
                    style={{ width: `${scrollPercentage}%` }} // Set the width dynamically based on scroll percentage
                    aria-valuenow={scrollPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
}

export default Navbar;