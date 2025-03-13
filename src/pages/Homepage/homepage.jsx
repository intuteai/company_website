import "./homepage.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      <motion.h2 
        className="home-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Intute.ai
      </motion.h2>

      <motion.p 
        className="home-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Empowering innovation through AI-driven solutions.<br></br> 
        Revolutionizing industries with advanced technologies for a sustainable future.
      </motion.p>

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
