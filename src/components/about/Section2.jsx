import Heading from "../common/heading/Heading";
// import { homeAbout } from "../../data";
// import Awrapper from "./Awrapper";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const aboutHomeStyle = {
  // marginTop: "55%",
  // height: "90vh",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};
const imgContainerStyle = {
  background: "#E4E4D0",
};
const imgStyle = {
  width: "60%",
  margin: "10%",
  borderRadius: "15px",
  marginLeft: "30%",
};
const textStyle = {
  // padding: "30%",/
  marginBottom: "18%",
};

const footerStyle = {
  marginTop: "20%", // Add margin to the top of the footer
};

const AboutCard = () => {
  return (
    <>
      <section className="mt-t-50 h-screen" style={aboutHomeStyle}>
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

      <footer style={footerStyle}>
        <ul className="menuItems" style={{ color: "black", marginLeft: "10%", paddingBottom: "2%", }}>
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="socialIcons">
          <a
            href="https://github.com/anushkabishnoi/ngo-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaGithub />
            </span>
          </a>

          <a
            href="mailto:protsahan.education@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaEnvelope />
            </span>
          </a>

          <a
            href="https://twitter.com/PRAGYASHAH09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default AboutCard;
