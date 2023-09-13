import React from 'react'
import { useState } from 'react';

export const SearchBar = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input 
      type='text'
      placeholder='Search'
      value={searchQuery}
      onChange={handleInputChange} 
      />
       <button onClick={handleSearch}>Search</button>
    </div>
   
  )
}

