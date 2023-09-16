import React from 'react'
import { FetchData } from './FetchData'


export const Card = ({title, poster_path, release_date,overview}) => {
  
  return (
    <div data-testid= "movie-card" className='card'>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}
`} data-testid= "movie-poster" className='movie-img'/>
      <div className='details-overview'>
        <h4 data-testid= "movie-title">{title}</h4>
        <p data-testid= "movie-release-date">{release_date}</p>    
        <p className='overview'>{overview}</p>
      </div>
        
    </div>
  )
}
