// import {  FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Hero from "./hero/Hero";
import OurTeam from "../ourTeam/OurTeam";

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "./Images/about_bg.jpg",
  paddingBottom: "10%",
};


const Home = () => {
  return (
    <>
      <Hero />
      <div style={sectionStyle}>
        <OurTeam/>
      </div>
    </>
  );
};

export default Home;
