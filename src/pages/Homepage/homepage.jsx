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
          cursor
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

      {/* Button with Hover Effect */}
      <motion.button
        className="connect-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Let's Connect
      </motion.button>
    </div>
  );
};

export default Home;
