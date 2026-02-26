import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input 
      type="text" 
      placeholder="Search transactions..." 
      onChange={(e) => onSearch(e.target.value)} 
    />
  );
}

export default SearchBar;