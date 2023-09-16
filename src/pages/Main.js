import { query } from 'firebase/firestore'
import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar';
import {FetchData} from '../components/FetchData';
import {Movie} from '../pages/Movie';
import { Card } from '../components/Card';

export const Main = () => {

  
  return (
    <div className='main'>
      <div >
      <FetchData />
      </div>
      
     
    </div>
  )
}
