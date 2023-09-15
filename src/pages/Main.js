import { query } from 'firebase/firestore'
import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar';
import {FetchData} from '../components/FetchData';

export const Main = () => {

  
  return (
    <div>
      <h1>Movie Data </h1>
      <FetchData />
    </div>
  )
}
