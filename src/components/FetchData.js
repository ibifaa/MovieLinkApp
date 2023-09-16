import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from './Card';

export const FetchData = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

const getMovie = () =>{
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=b38fc6851350193a04a944a900c18ae5";
    axios.get(apiUrl)    
    .then((response) => {
        // Handle the successful response here
        setMovieList(response.data.results);
        setLoading(false);
      })

      .catch((err) => {
        console.err('Error:', err);
        setError(err);
        setLoading(false);
      })
} 



console.log(movieList);
useEffect(()=>{
getMovie()
},[])
  return (
    <div className='card-container'>
        {movieList.map((movie)=>(
          <Card key= {movie.id} {...movie}  className="card"/>
        ))}
    </div>
  )
}
