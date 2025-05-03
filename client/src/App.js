import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('https://your-render-backend-url/api/expenses')
      .then(res => setExpenses(res.data));
  }, []);

  const handleAdd = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={handleAdd} />
      <ul>
        {expenses.map(exp => (
          <li key={exp._id}>{exp.title} - ${exp.amount} ({exp.category})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
