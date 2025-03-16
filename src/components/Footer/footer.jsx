import React from "react";
import "./footer.css";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/intuteLogo.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="Intute.ai Logo" className="footer-logo" />
      </div>

      <div className="footer-right">
        <div className="footer-links-social">
          {/* Links Section */}
          <div className="footer-links">
            <p><strong>Quick Links</strong></p>
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About Us</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-line"></div>

          {/* Social Icons */}
          <div className="footer-social">
          <p><strong>Socials</strong></p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="social-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copyright">
      <p className="footer-contact">
      811, A5, Sector-68, NOIDA, UP-201303 | 📧 info@intute.ai | 📞 +91-9899221959
        </p>
        © {new Date().getFullYear()} Intute.ai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
