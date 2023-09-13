import { homeHero } from "../../../data";
import "./Hero.css"

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
  backgroundSize: "cover",
};

const Hero = () => {
  return (
    <>
      <section className="home-hero-section w-screen" style={sectionStyle}>
        {homeHero.map((item) => (
          <div className="px-7">
            <h1 className="text-3xl md:text-7xl font-bold pt-5 md:pt-20">
              {item.title}
            </h1>
            <p className="text-lg md:text-xl pt-2 md:pt-4 leading-7">
              {item.content}
            </p>
            <button className="text-lg md:text-xl cursor-pointer py-3 md:py-4 px-6 md:px-8 bg-highlight text-white font-semibold border-none mt-4 md:mt-6 rounded-lg shadow-md">
              Let's get started!
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
