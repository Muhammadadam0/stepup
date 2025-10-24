import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <p className="institute-desc">
        Step Up Institute is dedicated to empowering children through special education, therapy, and motivational guidance, fostering growth and confidence in every child.
      </p>

      <div className="contact-info">
        <p>📍 Lahore, Pakistan</p>
        <p>📞 +92 314 4383989</p>
        <p>📞 +92 332 4595172</p>

        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=100095033869359"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon fb"
          >
            <FaFacebookF /> Facebook
          </a>
          <a
            href="https://www.instagram.com/step_up45?fbclid=IwY2xjawNfnDNleHRuA2FlbQIxMABicmlkETFyWFV4V0FYMEUyVWN4cXp2AR4vBCc-KB6rzKRdadezq2k9I9Q3Pp758NEMxkrUcGvZPa9zE84YjnEihfqbRg_aem_70llfPmGBWWSIfq3t3xMVw"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon ig"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon tw"
          >
            <FaTwitter /> Twitter
          </a>
        </div>
      </div>

      <a
        className="btn whatsapp-btn"
        href="https://wa.me/923214935001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> WhatsApp Us
      </a>
    </section>
  );
}

export default Contact;
