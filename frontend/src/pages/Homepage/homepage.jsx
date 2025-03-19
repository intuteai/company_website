import "./homepage.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="home-container">
      {/* Typewriter Effect for Title */}
      <motion.h2 
        className="home-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={["Welcome to Intute.ai", "Empowering AI Innovations", "Shaping a Sustainable Future"]}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* Subtitle */}
      <motion.p 
        className="home-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Empowering innovation through AI-driven solutions.<br></br> 
        Revolutionizing industries with advanced technologies for a sustainable future.
      </motion.p>

      <motion.p
        className="dpiit-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <strong>A DPIIT REGISTERED STARTUP</strong>
      </motion.p>

      {/* Button with Hover Effect */}
      {/* <motion.button
        className="connect-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Let's Connect
      </motion.button> */}

      {/* Vision Section with Vertical Separator */}
      <motion.div 
        className="vision-section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="vision-content">
          <h3 className="vision-title">Our Vision</h3>
          <div className="vision-separator"></div>
          <p className="vision-text">
          We are dedicated to the strategic deployment of cutting-edge technologies, integrating Model-Based Design (MBD) and high-efficiency AI algorithms to redefine user experiences in complex control systems and human-machine interfaces.<br></br> Our approach enhances precision, efficiency, and adaptability across critical industries, including transportation, manufacturing, healthcare, aerospace, defense, and e-commerce.
          By leveraging intelligent automation, predictive analytics, and real-time optimization, we aim to revolutionize system performance, ensuring seamless operation, enhanced safety, and reduced energy consumption.<br></br>
          Our focus on cost-effective, mass-scale implementation accelerates technological adoption, enabling widespread accessibility without compromising quality. This approach plays a pivotal role in advancing sustainability goals, fostering an ecosystem of smart, resilient, and future-ready solutions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
