import React from "react";
import "./about.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <section className="centre">
        <h1>"Uniting NGOs, Amplifying Impact: Where Collaboration Ignites Change."</h1>
      </section>
      {/* <div className="margin"></div> */}
      <AboutCard />
    </>
  );
};

export default About;
