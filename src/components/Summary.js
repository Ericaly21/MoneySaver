import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  let navigate = useNavigate();
  
  const handleAddClick = () => {
    navigate("/add-subscription");
  };

  return (
    <div>
      {/* List of subscriptions */}
      <button onClick={handleAddClick}>+</button>
    </div>
  );
};

export default Subscriptions;
