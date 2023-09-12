import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "./Ngo.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import items from "../../ngodata";

const NGO = () => {
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
    <div className="ngo-body">
      <Header />
      <section className="h-screen">
        <div className="ngo-banner h-2/4 relative">
          <div className="ngo-banner-text">Discover NGOs on our Platform</div>
        </div>
        <div className="carousel-heading text-highlght">
          "Unlocking the Gift of Education"
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
      <Footer className="footer-ngo" />
    </div>
  );
};

export default NGO;
