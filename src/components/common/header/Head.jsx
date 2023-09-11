const Head = () => {
  return (
    <>
      <section className="py-12 color-white">
        <div className="absolute top-2 left-1 z-100 w-full flexSB">
          <div className="sticky left-40 top-10">
            <div className="flex items-center">
              <img
                src="./Images/logo-removebg-preview.png"
                alt="Logo"
                className="mr-2"
                style={{
                  width: '150px',
                  height: '120px',
                  background: 'none',
                  marginLeft: '-150px',
                  marginTop: '-20px',
                }}
              />
              <div style={{ marginTop: '-40px', marginLeft: '-20px', }}> {/* Adjust the margin values */}
                <h1 className="text-4xl font-black">Protsahan</h1>
              </div>
            </div>
            <div style={{ marginTop: '-45px', marginLeft: '-15px', }}> 
            <span>EDUCATE AND ELEVATE TOGETHER</span>
            </div>
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
