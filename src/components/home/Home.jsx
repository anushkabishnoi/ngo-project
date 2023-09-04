import OurTeam from "../ourTeam/OurTeam";
import Hero from "./hero/Hero";

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
        <OurTeam />
      </div>
    </>
  );
};

export default Home;
