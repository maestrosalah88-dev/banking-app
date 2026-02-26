import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.description}</td>
            <td>{t.category}</td>
            <td>{t.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;