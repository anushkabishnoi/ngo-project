import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "./Scholarships.css";

const Scholarship = () => {
  return (
    <div className="scholarships-body">
      <Header />
      <section className="h-screen">
        <div className="scholarships-banner h-2/4 relative">
          <div className="scholarships-banner-text">
            Explore Scholarship Opportunities
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default Scholarship;
