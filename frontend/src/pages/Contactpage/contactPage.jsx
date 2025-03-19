import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactPage.css";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage("Error sending message. Try again later.");
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Title */}
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Description */}
      <motion.p 
        className="contact-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Reach out to us for any inquiries or support. We're here to help!
      </motion.p>

      {/* Contact Form */}
      <motion.form className="contact-form" onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="contact-btn">Send Message</button>
        <p className="status-message">{statusMessage}</p>
      </motion.form>

      {/* Contact Details */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            {/* <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
              <FaPhone size={30} color="#ff6b6b" />
              <p className="contact-text">+91-9899221959</p>
            </motion.div> */}
            
            <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
              <a href="mailto:info@intute.in" className="contact-link">
                <FaEnvelope size={30} color="#ff8e53" />
                <p className="contact-text">info@intute.in</p>
              </a>
            </motion.div>
            
            <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
              <FaMapMarkerAlt size={30} color="#f3ec78" />
              <p className="contact-text">811, A5, Sector-68, NOIDA, UP-201303</p>
            </motion.div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ContactUs;
