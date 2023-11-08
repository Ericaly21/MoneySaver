import React from 'react';
import { useNavigate } from 'react-router-dom';

const Expense = () => {
  let navigate = useNavigate();
  
  const handleAddClick = () => {
    navigate("/add-expense");
  };

  return (
    <div>
      {/* List of Expenses */}
      <button onClick={handleAddClick}>+</button>
    </div>
  );
};

export default Expense; 
