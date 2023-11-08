import React, { useState } from 'react';

const Home = () => {
  // State for the list of notifications
  const [notifications, setNotifications] = useState([
    'Rent due in 5 days',
    'Hulu Subscription Due in 3 days',
    'Netflix Subscription Due Tomorrow'
  ]);

  // State for the user's name
  const [name, setName] = useState('');

  // Function to delete a notification
  const deleteNotification = (indexToDelete) => {
    setNotifications(notifications.filter((_, index) => index !== indexToDelete));
  };

  // Function to handle name submission
  const handleNameSubmit = (event) => {
    event.preventDefault(); // dont the page refresh
  };

  // Styles
  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontSize: '20px'
  };
  const welcomeStyle = {
    textAlign: 'center', // Center-align the text
    fontSize: '17px',
  };
  const notificationsStyle = {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  const inputFormStyle = {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  };

  return (
    <div>
      {/* MoneySaver title */}
      <div style={titleStyle}>
        <h2>MoneySaver</h2>
      </div>
      {/* Welcome 'User!' */}
      <div style={welcomeStyle}>
        <h3>{name ? `Welcome, ${name}!` : 'Welcome!'}</h3>
      </div>
      {/*For notifications*/}
      <div style={notificationsStyle}>
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification}
              <button onClick={() => deleteNotification(index)}>Delete</button>
            </li>
          ))}
        </ul>
        {notifications.length === 0 && <p>No notifications left!</p>}
      </div>
      {}
      <form onSubmit={handleNameSubmit} style={inputFormStyle}>
        <input
          type="text"
          placeholder="Enter name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
