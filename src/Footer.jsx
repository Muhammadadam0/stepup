import React, { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);

  // Fade-in animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-wrapper">
        {/* Institute Info */}
        <div className="footer-column">
          <h3>Step Up Institute</h3>
          <p>
            Empowering children through <strong>special education</strong>,
            therapy, and mental wellness guidance to help them achieve their
            true potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#nabeela">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#appointment">Book Appointment</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>📍 Ishaque Haroon Hospital, Lahore, Pakistan</p>
          <p>📞 +92 314 4383989</p>
          <p>📞 +92 332 4595172</p>
          <p>✉️ stepupinstitute@gmail.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-column">
          <h4>Visiting Hours</h4>
          <p>
            🕓 <strong>Saturday:</strong> 4:00 PM (Evening)
          </p>
          <p>
            🕐 <strong>Tuesday:</strong> 1:00 PM (Afternoon)
          </p>
          <p>
            <em>Available at Ishaq Haroon Hospital</em>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
        <a
          href="https://www.facebook.com/profile.php?id=100095033869359"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://wa.me/923214935001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 Step Up Institute | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
