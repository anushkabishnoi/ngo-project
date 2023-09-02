import { useState } from "react";

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(200, 174, 125,0.9)",
};
const imgStyle = {
  height: "70vh",
  // flex: "1",
  margin: "0 10%",
};
const textStyle = {
  // flex: "1",
  margin: "0 10%",
};
const hoverCard = {
  flex: 1,
  overflow: "hidden",
};
const imgContainer = {
  // width
};

const Section = ({ title1, content1, title2, content2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section style={sectionStyle}>
      <div
        styles={hoverCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={imgContainer}>
          <img src="./Images/mission.jpg" alt="mission" style={imgStyle} />
        </div>
        <div style={textStyle}>
          <h2>{title1}</h2>
          <p>{content1}</p>
        </div>
      </div>
      <div
        styles={hoverCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={imgContainer}>
          <img src="./Images/vision.jpg" alt="mission" style={imgStyle} />
        </div>
        <div style={textStyle}>
          <h2>{title2}</h2>
          <p>{content2}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
