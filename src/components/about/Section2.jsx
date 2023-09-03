import Heading from "../common/heading/Heading";
import "./About.css";
// import { homeAbout } from "../../data";
// import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./Images/aboutCard.jpg" alt="" />
          </div>
          <div className="right row">
            <Heading
              title="About Us"
              content="We are a diverse collective of individuals bound by a common passion for education and a shared belief in its transformative power. Our team is a mosaic of educators, developers, thinkers, and dreamers who have come together with a single purpose: to create a brighter future through accessible, inclusive education."
            />
            {/* <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
