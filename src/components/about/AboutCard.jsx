import React from "react";
import Heading from "../common/heading/Heading";
import "./About.css";

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
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
