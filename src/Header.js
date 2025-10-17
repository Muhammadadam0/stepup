import React from "react";
import "./Header.css";

function Header({ lang, toggleLang }) {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo2.jpeg"
          alt="Step Up Institute"
        />
        <h1>Step Up Institute</h1>
      </div>
      <nav>
        <a href="#hero">{lang === "en" ? "Home" : "ہوم"}</a>
        <a href="#about">{lang === "en" ? "About" : "ہمارے بارے میں"}</a>
        <a href="#nabeela">{lang === "en" ? "Founder" : "بانی"}</a>
        <a href="#services">{lang === "en" ? "Services" : "سروسز"}</a>
        <a href="#contact">{lang === "en" ? "Contact" : "رابطہ"}</a>
      </nav>
      <button className="lang-btn" onClick={toggleLang}>
        {lang === "en" ? "اردو" : "English"}
      </button>
    </header>
  );
}

export default Header;
