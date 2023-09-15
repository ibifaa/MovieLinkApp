import React, { useEffect, useState } from 'react'
import axios from 'axios';

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

//     useEffect(() =>{
//         // fetching data from the API when the component mount
        
//         const url = 'https://api.themoviedb.org/3/discover/movie?api_key=c0f8221755dd7882adba46025ff3ab8a';
        
       
//         fetch(url)
//         .then(res => res.json())
//         .then((data) => {
//             console.log(data.result)
//             setData(data.result);
//             setLoading(false)
//         })
       
//         .catch((err) => {
//             console.error('error:' + err);
//             setLoading(false);
//           });
//         }, []);
  return (
    <div>
        {movieList.map((movie)=>(
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        ))}
    </div>
  )
}
