import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactPage.css";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <motion.h2 
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>
      
      <motion.p 
        className="contact-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Reach out to us for any inquiries or support. We're here to help!
      </motion.p>
      
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.1 }}
            >
              <FaPhone size={30} color="#ff6b6b" />
              <p className="contact-text">+91-9899221959</p>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.1 }}
            >
              <a href="mailto:info@intute.in" className="contact-link">
                <FaEnvelope size={30} color="#ff8e53" />
                <p className="contact-text">info@intute.in</p>
              </a>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.1 }}
            >
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