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
        <h5>A DPIIT REGISTERED STARTUP</h5>
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
            Deployment of advanced technologies like <strong>Model-Based Design</strong> & 
            high-efficiency <strong>AI algorithms</strong> to enhance the user experience of commonly used 
            control systems & human interfaces in <strong>transportation, manufacturing, medical, 
            aerospace, defense, and e-commerce</strong>. <br /><br />
            Mass-scale implementation at <strong>low cost</strong> shall effectively help reach the 
            <strong>sustainability goal</strong> faster.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
