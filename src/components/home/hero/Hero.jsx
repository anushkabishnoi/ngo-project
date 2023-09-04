import Slider from "../../common/slider/Slider";
import "./Hero.css";
const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "black",
  // marginBottom:"12%"
};

const Hero = () => {
  return (
    <>
      <section style={sectionStyle}>
        <Slider />
      </section>
      {/* <div className="margin" style={margin}></div> */}
      {/* <section style={sectionStyle}></section> */}
    </>
  );
};

export default Hero;
