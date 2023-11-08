import React, { useState } from 'react';

const Home = () => {
  // Initialize notifications with a default list
  const [notifications, setNotifications] = useState([
    'Rent due in 5 days',
    'Electricity bill due in 3 days',
    'Netflix Subscription Due Tomorrow'
  ]);

  // Function to delete a notification
  const deleteNotification = (indexToDelete) => {
    setNotifications(notifications.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Welcome to the MoneySaver!</h2>
      <div>
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification}
              {}
              <button onClick={() => deleteNotification(index)}>Delete</button>
            </li>
          ))}
        </ul>
        {notifications.length === 0 && <p>No notifications left!</p>}
      </div>
    </div>
  );
};

export default Home;


