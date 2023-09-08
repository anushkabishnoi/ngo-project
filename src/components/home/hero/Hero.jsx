// import "./Hero.css";
// import "../../../../public/Images/about_bg.jpg"
import { homeHero } from "../../../data";

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
  // aspectRatio:"16/10",
  backgroundSize: "cover",
  // width:"80%",
  // marginBottom:"12%"
};

const Hero = () => {
  return (
    <>
      <section style={sectionStyle}>
        {/* <Slider /> */}
        {homeHero.map((item) => (
          <div className="px-7">
            {/* <p className="">{item.subtitle}</p> */}
            <h1 className="text-7xl font-bold pt-t-20">{item.title}</h1>
            <p className="text-lg pt-2 leading-7">{item.content}</p>
            <button className="text-xl cursor-pointer py-4 px-8 bg-highlight text-white font-semibold border-none mt-6 mr-2 rounded-lg shadow-md">
              Let's get started!
            </button>
          </div>
        ))}
      </section>
      {/* <div className="margin" style={margin}></div> */}
      {/* <section style={sectionStyle}></section> */}
    </>
  );
};

export default Hero;
