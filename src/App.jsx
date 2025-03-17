import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Homepage/homepage";
import About from "./pages/Aboutpage/aboutpage";
import Contact from "./pages/Contactpage/contactPage";
import Vision from "./pages/Visionpage/visionpage";
import Footer from "./components/Footer/footer";
import Teampage from "./pages/TeamPage/teamPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Teampage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
