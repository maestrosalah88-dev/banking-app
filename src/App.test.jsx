import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

// 1. Test if transactions are displayed (Excelled Criteria)
test('renders transactions from the list', () => {
  render(<App />);
  const transactionElement = screen.getByText(/Paycheck/i);
  expect(transactionElement).toBeInTheDocument();
});

// 2. Test if search functionality works (Excelled Criteria)
test('filters transactions based on search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  
  // Simulate typing a search term
  fireEvent.change(searchInput, { target: { value: 'Coffee' } });
  
  // Verify matching item stays and non-matching item disappears
  expect(screen.getByText(/Coffee/i)).toBeInTheDocument();
  expect(screen.queryByText(/Paycheck/i)).not.toBeInTheDocument();
});