import React from "react";
import { motion } from "framer-motion";
import "./teampage.css";
import aryanImage from "../../assets/images/Aryan.jpeg";
import kanishkImage from "../../assets/images/Kanishk.jpeg";
import mayankImage from "../../assets/images/Mayank.jpeg";
import muditImage from "../../assets/images/Mudit.jpeg";
import prathamImage from "../../assets/images/Pratham.jpeg";
import rahulImage from "../../assets/images/Rahul.jpeg";
import rishikaImage from "../../assets/images/Rishika.jpeg";
import saatwikImage from "../../assets/images/Saatwik.jpeg";
import yashImage from "../../assets/images/Yash.jpeg";

const teamMembers = [
  {
    name: "Akshay Aggarwal",
    role: "Founder",
    description:
      "17+ years entrepreneurial career in Automation systems, Electric vehicle traction control & system integration.",
    image: "", // No image yet
  },
  {
    name: "Saatwik",
    role: "Full Stack & IoT",
    description: "Web and mobile applications.",
    image: saatwikImage,
  },
  {
    name: "Rishika",
    role: "System Architect",
    description: "Front-end Developer, UI Designer.",
    image: rishikaImage,
  },
  {
    name: "Maadhav",
    role: "Embedded Design",
    description: "Electronics Hardware Design.",
    image: "",
  },
  {
    name: "Mrinal",
    role: "Strategy",
    description: "Thermal Analysis.",
    image: "",
  },
  {
    name: "Mudit",
    role: "3D CAD, CAE",
    description: "",
    image: muditImage,
  },
  {
    name: "Aryan",
    role: "AI, ML",
    description: "",
    image: aryanImage,
  },
  {
    name: "Kanishk",
    role: "Data Analyst",
    description: "",
    image: kanishkImage,
  },
  {
    name: "Yash",
    role: "Fluid Mechanics",
    description: "",
    image: yashImage,
  },
  {
    name: "Pratham",
    role: "React Native Apps",
    description: "",
    image: prathamImage,
  },
  {
    name: "Kush",
    role: "MATLAB",
    description: "",
    image: "",
  },
  {
    name: "Mayank",
    role: "C++, Python, Java",
    description: "",
    image: mayankImage,
  },
  {
    name: "Rahul",
    role: "React.js, Node.js",
    description: "",
    image: rahulImage,
  },
];

const Teampage = () => {
  const founder = teamMembers.find((member) => member.role === "Founder");
  const otherMembers = teamMembers.filter((member) => member.role !== "Founder");

  return (
    <div className="team-container">
      {/* Header Section */}
      <motion.div 
        className="team-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="team-header-content">
          <h1 className="team-title">MEET OUR TEAM</h1>
          <p className="team-tagline">
            We are professionals developing revolutionary mobility solutions.
          </p>
        </div>
        {founder && (
          <motion.div 
            className="founder-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {founder.image ? (
              <img src={founder.image} alt={founder.name} className="team-image" />
            ) : (
              <div className="team-image-placeholder"></div>
            )}
            <h3 className="team-role">{founder.role}</h3>
            <h4 className="team-name">{founder.name}</h4>
            {founder.description && (
              <p className="founder-description">{founder.description}</p>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Team Grid Section */}
      <motion.div 
        className="team-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {otherMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="team-card"
            whileHover={{ scale: 1.05 }}
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="team-image" />
            ) : (
              <div className="team-image-placeholder"></div>
            )}
            <h3 className="team-role">{member.role}</h3>
            <h4 className="team-name">{member.name}</h4>
            {member.description && (
              <p className="team-description">{member.description}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Teampage;
