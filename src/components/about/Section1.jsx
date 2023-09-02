const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "./Images/about_bg.jpg",
  paddingBottom: "10%",
};

const AboutHero = ({ title }) => {
  return (
    <section className="centre" style={sectionStyle}>
      <h1>
        "Uniting NGOs, Amplifying Impact: Where Collaboration Ignites Change."
      </h1>
    </section>
  );
};

export default AboutHero;
