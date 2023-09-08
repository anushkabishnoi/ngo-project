// Schemes.js
import React from "react";
import { Link } from "react-router-dom";
import "./Schemes.css";

const Schemes = () => {
  const cardData = [
    {
      title: "Scholarship",
      content: "Unlocking Scholarships, Unlocking Potential.",
      route: "/scholarship",
    },
    {
      title: "NGO",
      content: "Empowering Communities, Changing Lives.",
      route: "/ngo", // Route for the NGO card
    },
    {
      title: "Opportunities",
      content: "Opportunities are the stepping stones to success.",
      route: "/opportunities",
    },
  ];

  return (
    <div className="schemes">
      <div className="left rounded-lg">
        <img
          className="image h-full"
          src="./images/schemes_hero.jpg"
          alt=""
        />
      </div>
      <div className="right">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <Link to={card.route}>Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
