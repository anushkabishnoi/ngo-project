import Heading from "../common/heading/Heading";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const aboutHomeStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "20px",
  alignItems: "center",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const imgContainerStyle = {
  background: "#E4E4D0",
  borderRadius: "15px",
};

const imgStyle = {
  height: "980px",
  width: "100%",
  borderRadius: "15px",
};

const textStyle = {
  marginBottom: "17%",
  borderRadius: "15px",
};

const footerStyle = {
  marginTop: "6%",
};

const AboutCard = () => {
  return (
    <>
      {/* Add a CSS class to the header that you want to hide on smaller screens */}
      <header className="desktop-header">
        {/* Header content */}
      </header>

      <section className="mt-t-50" style={aboutHomeStyle}>
        <div style={imgContainerStyle}>
          <img
            src="./Images/aboutCard.jpg"
            style={imgStyle}
            alt=""
          />
        </div>
        <Heading
          style={textStyle}
          title="About Us"
          content="We are a diverse collective of individuals bound by a common passion for education and a shared belief in its transformative power. Our team is a mosaic of educators, developers, thinkers, and dreamers who have come together with a single purpose: to create a brighter future through accessible, inclusive education."
        />
      </section>

      <footer style={footerStyle}>
        <ul
          className="menuItems"
          style={{
            color: "black",
            marginLeft: "10%",
            paddingBottom: "2%",
          }}
        >
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
            style={{ marginRight: "20px" }}
          >
            <span className="icon">
              <FaGithub />
            </span>
          </a>

          <a
            href="mailto:protsahan.education@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "20px" }}
          >
            <span className="icon">
              <FaEnvelope />
            </span>
          </a>

          <a
            href="https://twitter.com/PRAGYASHAH09"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "20px" }}
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </footer>

      {/* CSS media query to hide the header on smaller screens */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-header {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default AboutCard;
