import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>Step Up Institute</h3>
          <p>
            Empowering children through special education, therapy, and motivational guidance.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#nabeela">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#home">Home</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Lahore, Pakistan</p>
          <p>📞 +92 314 4383989</p>
          <p>📞 +92 332 4595172</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100095033869359" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/923144383989" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Step Up Institute | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
