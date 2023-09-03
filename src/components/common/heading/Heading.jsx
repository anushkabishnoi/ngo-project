const headingStyle = {
  textAlign: "center",
  padding: "20% 10%",
  background: "#E4E4D0",
};
const cardStyle = {
  padding: "20%",
  color: "black",
  borderRadius: "15px",
};
const subtitleStyle = {
  fontWeight: "200",
};
const titleStyle = {
  fontWeight: "900",
  fontSize: "5rem",
  color: "#1eb2a6",
};
const pStyle = {
  color: "#053B50",
};

const Heading = ({ subtitle, title, content }) => {
  return (
    <>
      <div style={headingStyle}>
        <div style={cardStyle}>
          <h3 style={subtitleStyle}>{subtitle} </h3>
          <h1 style={titleStyle}>{title} </h1>
          <p style={pStyle}>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
