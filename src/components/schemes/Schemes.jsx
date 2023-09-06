import React from 'react';

const Schemes = () => {
  const cardData = [
    {
      title: 'Scholarship',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'NGO',
      content: 'Pellentesque ac ligula in tellus feugiat vulputate.',
    },
    {
      title: 'Opportunities',
      content: 'Aenean suscipit libero auctor, sollicitudin nunc a, bibendum urna.',
    },
  ];

  // CSS-in-JSX styles
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    left: {
      flex: 1,
      marginRight: '10px',
    },
    right: {
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      paddingTop: '20px', // Add padding to the top of the right section
    },
    card: {
      backgroundColor: 'white',
      padding: '50px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s',
      color: 'black',
      width: '100%',
      margin: '10px 0',
      borderRadius: '10px',
    },
  };

  // Add a hover effect for the card
  styles.card[':hover'] = {
    backgroundColor: '#1eb2a6',
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img className='image' src="./images/mission.jpg" alt="" style={{ width: '600px', height: '550px', borderRadius: '10px', paddingTop: '10px' }} />
      </div>
      <div style={styles.right}>
        {cardData.map((card, index) => (
          <div style={styles.card} key={index}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
