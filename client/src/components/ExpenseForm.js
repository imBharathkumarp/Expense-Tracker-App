import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ onAdd }) => {
  const [expense, setExpense] = useState({ title: '', amount: '', category: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://your-render-backend-url/api/expenses', expense);
    onAdd(res.data);
    setExpense({ title: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={expense.title} onChange={e => setExpense({...expense, title: e.target.value})} placeholder="Title" />
      <input value={expense.amount} type="number" onChange={e => setExpense({...expense, amount: e.target.value})} placeholder="Amount" />
      <input value={expense.category} onChange={e => setExpense({...expense, category: e.target.value})} placeholder="Category" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
