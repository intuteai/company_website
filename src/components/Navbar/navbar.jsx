import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import intuteLogo from "../../assets/intuteLogo.png";
import "./navbar.css";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("navbar-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass("navbar-colored");
      } else {
        setNavbarClass("navbar-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${navbarClass}`}>
      <div className="container">
      <img src={intuteLogo} alt="Intute.ai Logo" className="navbar-logo" />
        {/* <Link className="navbar-brand" to="/">Intute.ai</Link> */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/solution">Our Solutions</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/team">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
