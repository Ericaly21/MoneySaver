import React, { useState } from 'react';

const AddSubscription = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    // You would normally handle form submission here
  };

  return (
    <div>
      <input type="text" placeholder="Subscription Name" onChange={e => setName(e.target.value)} value={name} />
      <input type="number" placeholder="Monthly Cost" onChange={e => setCost(e.target.value)} value={cost} />
      <input type="date" placeholder="Payment Date" onChange={e => setDate(e.target.value)} value={date} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddSubscription;
