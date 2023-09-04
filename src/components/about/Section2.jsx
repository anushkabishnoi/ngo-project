import Heading from "../common/heading/Heading";
import "./About.css";
// import { homeAbout } from "../../data";
// import Awrapper from "./Awrapper";

const aboutHomeStyle = {
  marginTop: "55%",
  height: "90vh",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};
const imgContainerStyle={
  background: "#E4E4D0",
}
const imgStyle = {
  width: "60%",
  margin: "10%",
  borderRadius:"15px",
  marginLeft:"30%",
};
const textStyle = {
  padding: "10%",
};

const AboutCard = () => {
  return (
    <>
      <section style={aboutHomeStyle}>
        <div style={imgContainerStyle}>
          <img src="./Images/aboutCard.jpg" style={imgStyle} alt="" />
        </div>
        <Heading
          style={textStyle}
          title="About Us"
          content="We are a diverse collective of individuals bound by a common passion for education and a shared belief in its transformative power. Our team is a mosaic of educators, developers, thinkers, and dreamers who have come together with a single purpose: to create a brighter future through accessible, inclusive education."
        />
        {/* <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
