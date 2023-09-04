const Head = () => {
  // const logoStyle = {
  //   position: "absolute",
  //   left: "10%",
  // };
  return (
    <>
      <section className="py-12 color-white">
        <div className="absolute top-2 left-1 z-100 w-full flexSB">
          <div className="sticky left-40 top-10" >
            <h1 className="text-4xl font-black">Protsahan</h1>
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
