import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    date: "", description: "", category: "", amount: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(formData); // Sends the new data back to App.jsx
    setFormData({ date: "", description: "", category: "", amount: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <input type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
      <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} />
      <input type="number" placeholder="Amount" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;