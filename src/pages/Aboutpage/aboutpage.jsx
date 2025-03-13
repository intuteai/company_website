import "./aboutpage.css";
import { motion } from "framer-motion";
import electronicsImg from "../../assets/electronics.jpg";
import softwareImg from "../../assets/software.jpg";
import mechanicalImg from "../../assets/mechanical.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Who We Are Section */}
      <motion.div 
        className="who-we-are"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="who-we-are-title">Who We Are</h3>
        <p>
          At Intute.ai, using advanced technologies such as <strong>Model-Based Designing (MBD)</strong> and 
          <strong> high-efficiency AI models</strong> to enhance user experiences in human interfaces, 
          control systems, and data analytics across various fields, we are at the forefront of deploying it.
          By enabling mass-scale implementation at low cost, we drive innovation while accelerating the journey toward 
          <strong> sustainability</strong>.
        </p>
      </motion.div>

      {/* Core Technology Strengths Title */}
      <motion.h2 
        className="core-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Core Technology Strengths
      </motion.h2>

      {/* Electronics Section */}
      <motion.div 
        className="strength-card"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="strength-image" style={{ backgroundImage: `url(${electronicsImg})` }}>
          <h3>Electronics</h3>
        </div>
        <div className="strength-text">
          <ul>
            <li>Embedded firmware design</li>
            <li>Electronics Hardware design</li>
            <li>Motor control solutions – BLDC/PMSM</li>
            <li>Power Electronics</li>
            <li>BLE, CAN integration</li>
          </ul>
        </div>
      </motion.div>

      {/* Software Section */}
      <motion.div 
        className="strength-card reverse"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="strength-image" style={{ backgroundImage: `url(${softwareImg})` }}>
          <h3>Software</h3>
        </div>
        <div className="strength-text">
          <ul>
            <li>Full stack IoT solutions</li>
            <li>C, C++, SQL, Python, JavaScript</li>
            <li>Node.js, React.js</li>
            <li>TensorFlow, AI-ML models</li>
          </ul>
        </div>
      </motion.div>

      {/* Mechanical Section */}
      <motion.div 
        className="strength-card"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="strength-image" style={{ backgroundImage: `url(${mechanicalImg})` }}>
          <h3>Mechanical</h3>
        </div>
        <div className="strength-text">
          <ul>
            <li>Automotive design, robotics</li>
            <li>3D-CAD, CAE</li>
            <li>Fluid mechanics</li>
            <li>Structural design and stress analysis</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
