import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  let navigate = useNavigate();
  
  const handleAddClick = () => {
    navigate("/add-expense");
  };

  return (
    <div>
      {/* List of Summary */}
      <button onClick={handleAddClick}>+</button>
    </div>
  );
};

export default Summary; 
