import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "./Scholarships.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import items from "../../ngodata";

const Scholarship = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="scholarships-body">
      <Header />
      <section className="h-screen">
        <div className="scholarships-banner h-2/4 relative">
          <div className="scholarships-banner-text">
            Explore Scholarship Opportunities
          </div>
        </div>
        <div className="carousel-heading text-highlght">
          For Grade 5 and below
        </div>
        <Carousel
          infinite={true}
          className="carousel-parent"
          responsive={responsive}
        >
          {items.map((item) => (
            <div key={item.id} className="carousel-card">
              <h1 className="text-5xl ">{item.name}</h1>
              <a className="text-highlight" href={item.link}>
                learn more
              </a>
            </div>
          ))}
        </Carousel>
      </section>
      <Footer className="footer-scholarships" />
    </div>
  );
};

export default Scholarship;
