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
    <div className="search-bar">
      <input 
      type='text'
      placeholder='Search'
      value={searchQuery}
      onChange={handleInputChange} 
      className='search-input'
      />
       <button className='searchBtn' onClick={handleSearch}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" stroke="#0123456"/>
        </svg>
       </button>
    </div>
   
  )
}

