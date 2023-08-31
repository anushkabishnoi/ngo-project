import Heading from "../common/heading/Heading";
import "./about.css";
// import { homeAbout } from "../../dummydata";
// import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./Images/about1.jpg" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="Know Details"
              title="Get Your Experience & Know Details"
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
