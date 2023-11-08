import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSubscription = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');

  // If you're adding the subscription on this page, handle the logic here.
  // Otherwise, if you're navigating to another page to add, use the navigate function.
  const handleAddClick = () => {
    setName('');
    setCost('');
    setDate('');

    // Navigate to the list of subscriptions after adding
    navigate("/subscriptions");
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Subscription Name" 
        onChange={e => setName(e.target.value)} 
        value={name} 
      />
      <input 
        type="number" 
        placeholder="Monthly Cost" 
        onChange={e => setCost(e.target.value)} 
        value={cost} 
      />
      <input 
        type="date" 
        placeholder="Payment Date" 
        onChange={e => setDate(e.target.value)} 
        value={date} 
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddSubscription;
