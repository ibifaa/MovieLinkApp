import React from 'react'
import { SearchBar } from './SearchBar'
import axios from 'axios'

const SearchDetials = ()=> {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (query) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=b38fc6851350193a04a944a900c18ae5 =${query} `)
    .then((response) => {
      // Handle the successful response here
      console.log(response.data.results);
    setSearchResults(response.data.results);
    })
  }

  const onSearch = (query) => {
    // Handle the search here
    console.log('Search query:', query);
    // You can implement the search logic here or update state.
  };


  return (
    <div>
        SearchDetials
        
        <SearchBar onSearch={handleSearch} />
    <div>
      {searchResults.map((results, index) =>(
        <div key={index}> {results} </div>
      ))}
    </div>
    </div>
  )
}

