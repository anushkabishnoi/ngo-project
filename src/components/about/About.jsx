import "./About.css";
import AboutHero from "./Section1";
import AboutCard from "./Section2";
import Section from "./Section3";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutCard />
      <Section
        title1={"Mission"}
        content1={
          "Our mission is rooted in a deep-seated commitment to revolutionize education through collaboration, innovation, and a resolute belief in its power to shape a better future. Guided by this mission, we are dedicated to creating a dynamic platform that brings together education-focused non-governmental organizations (NGOs) in a harmonious ecosystem of shared goals and collective progress."
        }
        title2={"Vision"}
        content2={
          "At the core of our endeavor lies a vivid and transformative vision – a vision of an educational landscape where every individual, regardless of their background, has access to quality learning opportunities. We envision a world where education is not just a privilege but a fundamental right, where knowledge becomes the catalyst for positive change on a global scale."
        }
      />
    </>
  );
};

export default About;
