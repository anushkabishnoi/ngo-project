import { useState } from "react";

const Section = ({ title1, content1, title2, content2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const sectionStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(200, 174, 125,0.9)",
    overflow: "hidden",
    // boxShadow:
  };
  const imgContainerStyle = {
    height: "70vh",
    overflow: "hidden",
    transition: "transform 0.8s ease-in-out",
    transform: isHovered ? "translateY(-25%)" : "translateY(0)",
    flex: "1",
    margin: "0 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgStyle = {
    // width: "100%",
    height: "100%",
  };
  const textContainerStyle = {
    flex: "1",
    margin: "0 10%",
  };
  const hoverCard = {
    flex: 1,
    overflow: "hidden",
  };
  return (
    <section style={sectionStyle}>
      <div styles={hoverCard}>
        <div
          style={imgContainerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="./Images/mission.jpg" alt="mission" style={imgStyle} />
        </div>
        <div style={textContainerStyle}>
          <h2>{title1}</h2>
          <p>{content1}</p>
        </div>
      </div>
      <div styles={hoverCard}>
        <div
          style={imgContainerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="./Images/vision.jpg" alt="mission" style={imgStyle} />
        </div>
        <div style={textContainerStyle}>
          <h2>{title2}</h2>
          <p>{content2}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
