// import {  FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Hero from "./hero/Hero";
import OurTeam from "../ourTeam/OurTeam";
import Schemes from "../schemes/Schemes";

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "./Images/about_bg.jpg",
  paddingBottom: "10px",
};

const teamStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "./Images/mission.jpg",
  paddingBottom: "10px",
};

const Home = () => {
  return (
    <>
      <Hero />
      <div style={teamStyle}>
      <Schemes/>
      </div>

      <div style={sectionStyle}>
        <OurTeam/>
      </div>
    </>
  );
};

export default Home;
