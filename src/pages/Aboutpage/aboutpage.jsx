import "./aboutpage.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <motion.h2 
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>

      <motion.p 
        className="about-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        We provide great services to our customers and always strive for excellence.
      </motion.p>

      {/* Who We Are Section */}
      <motion.div 
        className="who-we-are"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h3>Who We Are</h3>
        <p>
          Using advanced technologies such as <strong>Model-Based Designing (MBD)</strong> and 
          <strong> high-efficiency AI models</strong> to enhance user experiences in human interfaces, 
          control systems, and data analytics across various fields, we are at the forefront of deploying it.
          By enabling mass-scale implementation at low cost, we drive innovation while accelerating the journey toward 
          <strong> sustainability</strong>.
        </p>
      </motion.div>

      {/* Core Technology Strengths Section */}
      <div className="core-strengths">
        <motion.h2 
          className="core-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Core Technology Strengths
        </motion.h2>

        <div className="strengths-grid">
          <motion.div 
            className="strength-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Electronics</h3>
            <ul>
              <li>Embedded firmware design</li>
              <li>Electronics Hardware design</li>
              <li>Motor control solutions – BLDC/PMSM</li>
              <li>Power Electronics</li>
              <li>BLE, CAN integration</li>
            </ul>
          </motion.div>

          <motion.div 
            className="strength-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Software</h3>
            <ul>
              <li>Full stack IoT solutions</li>
              <li>C, C++, SQL, Python, JavaScript</li>
              <li>Node.js, React.js</li>
              <li>TensorFlow, AI-ML models</li>
            </ul>
          </motion.div>

          <motion.div 
            className="strength-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Mechanical</h3>
            <ul>
              <li>Automotive design, robotics</li>
              <li>3D-CAD, CAE</li>
              <li>Fluid mechanics</li>
              <li>Structural design and stress analysis</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
