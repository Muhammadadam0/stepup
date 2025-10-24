import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Hero.css";

function Hero({ lang }) {
  const slides = [
    {
      img: process.env.PUBLIC_URL + "/cover2.jpeg",
      en: "Empowering Every Child to Shine",
      ur: "ہر بچے کو چمکنے کا موقع دینا ہمارا مشن ہے",
    },
    {
      img: process.env.PUBLIC_URL + "/therapy.jpeg",
      en: "Special Education and Therapy with Care",
      ur: "خصوصی تعلیم اور تھراپی خلوص کے ساتھ",
    },
    {
      img: process.env.PUBLIC_URL + "/learning3.jpeg",
      en: "Building Confidence Through Learning",
      ur: "سیکھنے کے ذریعے اعتماد پیدا کرنا",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToAppointment = () => {
    const section = document.getElementById("appointment");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        ></div>
      ))}

      <div className={`overlay ${lang === "ur" ? "urdu" : ""}`}>
        <h1>{lang === "en" ? slides[index].en : slides[index].ur}</h1>
        <p>
          {lang === "en"
            ? "Special Education | Speech Therapy | Slow Learner"
            : "خصوصی تعلیم | تھراپی | والدین کی رہنمائی"}
        </p>
        <div className="hero-buttons">
          <button onClick={scrollToAppointment}>
            {lang === "en" ? "Book Appointment" : "اپوائنٹمنٹ بک کریں"}
          </button>
          <a
            href="https://wa.me/923214935001"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
