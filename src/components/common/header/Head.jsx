const Head = () => {
  const logoStyle = {
    position: "absolute",
    left: "10%",
  };
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo" style={logoStyle}>
            <h1>Protsahan</h1>
            <span>EDUCATE AND ELEVATE TOGETHER</span>
          </div>
          <div className="social">
            <i className="fab fa-github-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
