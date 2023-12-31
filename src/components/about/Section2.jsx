import Heading from "../common/heading/Heading";

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
