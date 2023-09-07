import React from 'react';
import './Schemes.css'; // Import the CSS file

const Schemes = () => {
  const cardData = [
    {
      title: 'Scholarship',
      content: 'Unlocking Scholarships, Unlocking Potential.',
    },
    {
      title: 'NGO',
      content: 'Empowering Communities, Changing Lives.',
    },
    {
      title: 'Opportunities',
      content: 'Opportunities are the stepping stones to success.',
    },
  ];

  return (
    <div className="schemes"> {/* Use className for styling */}
      <div className="left">
        <img className='image' src="./images/mission.jpg" alt="" />
      </div>
      <div className="right">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
