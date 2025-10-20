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
      img: process.env.PUBLIC_URL + "/learning.jpeg",
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

  const handleNewTabForm = () => {
    const newTab = window.open("", "_blank");
    if (newTab) {
      newTab.document.write(`
        <html>
          <head>
            <title>${lang === "en" ? "Contact Us" : "ہم سے رابطہ کریں"}</title>
            <style>
              body { font-family: sans-serif; padding: 20px; background: #f5f5f5; }
              form { max-width: 400px; margin: auto; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
              input, textarea { width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #ccc; font-size: 1rem; }
              button { padding: 12px 25px; border: none; border-radius: 50px; background-color: #ffcd39; color: #123067; font-weight: 600; cursor: pointer; }
              button:hover { transform: translateY(-3px); transition: 0.3s; }
            </style>
          </head>
          <body>
            <h2 style="text-align:center; color:#123067;">${lang === "en" ? "Contact Us" : "ہم سے رابطہ کریں"}</h2>
            <form onsubmit="alert('Thank you! Your message has been received.'); window.close(); return false;">
              <input type="text" name="name" placeholder="${lang === "en" ? "Your Name" : "آپ کا نام"}" required />
              <input type="email" name="email" placeholder="${lang === "en" ? "Your Email" : "آپ کا ای میل"}" required />
              <textarea name="message" placeholder="${lang === "en" ? "Your Message" : "آپ کا پیغام"}" required></textarea>
              <button type="submit">${lang === "en" ? "Send Message" : "پیغام بھیجیں"}</button>
            </form>
          </body>
        </html>
      `);
      newTab.document.close();
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
          <button onClick={handleNewTabForm}>
            {lang === "en" ? "Get in Touch" : "رابطہ کریں"}
          </button>
          <a
            href="https://wa.me/923144383989"
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
