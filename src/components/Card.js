import React from 'react'
import { SearchBar } from './SearchBar'

export const Card = () => {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (query) => {

    setSearchResults([query]);
  }
  return (
    <div>
        <SearchBar onSearch={handleSearch} />
    <div>
      {searchResults.map((results, index) =>(
        <div key={index}> {results} </div>
      ))}
    </div>
    </div>
  )
}
