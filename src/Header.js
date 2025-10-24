import React, { useState } from "react";
import "./Header.css";

function Header({ lang, toggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const services = [
    { id: "speech", name: "Speech Therapy" },
    { id: "psychotherapy", name: "Psychotherapy" },
    { id: "counseling", name: "Counseling" },
    { id: "depression", name: "Depression" },
    { id: "overthinking", name: "Overthinking" },
    { id: "autism", name: "Autism / ADHD" },
    { id: "downsyndrome", name: "Down Syndrome" },
    { id: "parentchild", name: "Parent-Child Issues" },
    { id: "relationship", name: "Relationship Issues" },
    { id: "behavior", name: "Behaviour Modification" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo2.jpeg"} alt="Step Up Institute" />
        <h1>Step Up Institute</h1>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          {lang === "en" ? "Home" : "ہوم"}
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          {lang === "en" ? "About" : "ہمارے بارے میں"}
        </a>

        <a href="#nabeela" onClick={() => setMenuOpen(false)}>
          {lang === "en" ? "Founder" : "بانی"}
        </a>

        {/* Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <span
            className="dropdown-toggle"
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            {lang === "en" ? "Services ▾" : "سروسز ▾"}
          </span>

          {serviceOpen && (
            <div className="dropdown-menu">
              {services.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  onClick={() => {
                    setServiceOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ✅ Added Book Appointment Link */}
        <a href="#book-appointment" onClick={() => setMenuOpen(false)}>
          {lang === "en" ? "Book Appointment" : "اپوائنٹمنٹ بُک کریں"}
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {lang === "en" ? "Contact" : "رابطہ"}
        </a>
      </nav>

      <button className="lang-btn" onClick={toggleLang}>
        {lang === "en" ? "اردو" : "English"}
      </button>
    </header>
  );
}

export default Header;
