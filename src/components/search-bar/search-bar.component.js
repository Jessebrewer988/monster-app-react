import React from 'react';
import './search-bar.styles.css';

export default function SearchBar({ handler, placeholder }) {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder={placeholder}
        className="search-bar"
        onChange={handler}
      />
    </div>
  );
}
