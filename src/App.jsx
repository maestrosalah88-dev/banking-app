import React, { useState } from 'react';

import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2024-01-01", description: "Paycheck", category: "Income", amount: 2000 },
    { id: 2, date: "2024-01-02", description: "Coffee", category: "Food", amount: -5 }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearch={setSearchTerm} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;