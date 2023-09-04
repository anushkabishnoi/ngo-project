import { useState } from "react";

const Section = ({ title1, content1, title2, content2 }) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const sectionStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: "9%",
  };
  const imgContainerStyle1 = {
    height: "90vh",
    overflow: "hidden",
    transition: "transform 0.8s ease-in-out",
    transform: isHovered1 ? "translateY(-25%)" : "translateY(0)",
    flex: "1",
    margin: "0 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgContainerStyle2 = {
    height: "90vh",
    overflow: "hidden",
    transition: "transform 0.8s ease-in-out",
    transform: isHovered2 ? "translateY(-25%)" : "translateY(0)",
    flex: "1",
    margin: "0 10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const imgStyle = {
    width: "90%",
    height: "100%",
  };
  const textContainerStyle1 = {
    flex: "1",
    padding:"",
    margin: "0 10%",
    opacity: isHovered1 ? 1 : 0, // Show text when hovered, hide when not
    transition: "opacity 0.8s ease-in-out",
  };
  const textContainerStyle2 = {
    flex: "1",
    margin: "0 10%",
    opacity: isHovered2 ? 1 : 0, // Show text when hovered, hide when not
    transition: "opacity 0.8s ease-in-out",
  };
  const hoverCard = {
    marginTop:"15%",
    borderRadius:"15px",
    background:"",
    flex: 1,
    overflow: "hidden",
  };
  return (
    <section style={sectionStyle}>
      <div style={hoverCard}>
        <div
          style={imgContainerStyle1}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <img src="./Images/mission.jpg" alt="mission" style={imgStyle} />
        </div>
        <div style={textContainerStyle1}>
          <h2>{title1}</h2>
          <p>{content1}</p>
        </div>
      </div>
      <div style={hoverCard}>
        <div
          style={imgContainerStyle2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <img src="./Images/vision.jpg" alt="mission" style={imgStyle} />
        </div>
        <div style={textContainerStyle2}>
          <h2>{title2}</h2>
          <p>{content2}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
