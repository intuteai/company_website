import "./visionpage.css";
import { motion } from "framer-motion";
import evImage from "../../assets/electronics.jpg";
import iotImage from "../../assets/software.jpg";
import aiImage from "../../assets/mechanical.jpg";

const Vision = () => {
  return (
    <div className="vision-container">
      {/* Vision Hero Section */}
      <section className="vision-hero">
        <motion.h1
          className="vision-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Vision & Applications
        </motion.h1>
        <motion.p
          className="vision-subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          We are committed to <strong>pioneering intelligent and sustainable solutions</strong> in the automotive industry. Our expertise spans <strong>EV drive-train innovations, connected vehicle ecosystems, and AI-driven road safety solutions.</strong>
        </motion.p>
      </section>

      {/* Vision Sections */}
      <div className="vision-sections">
        
        {/* EV Drive-train Solutions */}
        <motion.section 
          className="vision-section"
          style={{ backgroundImage: `url(${evImage})` }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="vision-overlay"></div>
          <div className="vision-content">
            <h2>EV Drive-train & Powertrains</h2>
            <p>Optimizing <strong>energy efficiency, battery longevity, and performance</strong> for the next generation of electric vehicles.</p>
            <div className="vision-details">
              <p>Advanced Motor Control</p>
              <p>Battery Management Systems</p>
              <p>Regenerative Braking</p>
              <p>Thermal Management</p>
            </div>
          </div>
        </motion.section>

        {/* Connected Vehicles & IoT */}
        <motion.section 
          className="vision-section"
          style={{ backgroundImage: `url(${iotImage})` }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="vision-overlay"></div>
          <div className="vision-content">
            <h2>Connected Vehicles & IoT</h2>
            <p>Enabling <strong>seamless connectivity</strong> between vehicles, infrastructure, and cloud ecosystems.</p>
            <div className="vision-details">
              <p>Telematics & Smart Diagnostics</p>
              <p>Vehicle-to-Everything (V2X) Communication</p>
              <p>Edge & Cloud Computing</p>
              <p>Over-the-Air (OTA) Updates</p>
            </div>
          </div>
        </motion.section>

        {/* AI/ML-Based Road Safety */}
        <motion.section 
          className="vision-section"
          style={{ backgroundImage: `url(${aiImage})` }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="vision-overlay"></div>
          <div className="vision-content">
            <h2>AI/ML-Based Road Safety</h2>
            <p>Integrating <strong>Artificial Intelligence and Machine Learning</strong> to enhance road safety and driver monitoring.</p>
            <div className="vision-details">
              <p>Driver Monitoring System</p>
              <p>Autonomous Emergency Braking</p>
              <p>Traffic Flow Optimization</p>
              <p>Computer Vision for Road Safety</p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Why Choose Us Section */}
      <motion.div 
        className="why-choose-us"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="why-left">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="vertical-line"></div>
        <div className="why-right">
          <div className="vision-details">
            <p>End-to-End Solutions – From hardware to software integration.</p>
            <p>Data-Driven Approach – AI-powered analytics for efficiency.</p>
            <p>Sustainable Innovation – Prioritizing green energy adoption.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Vision;
