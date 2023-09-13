import React from 'react'
import {Link} from 'react-router-dom';
import {auth, provider} from '../config/firebase';
import {SearchBar} from './SearchBar';
import { signOut} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

// to automatically update the user details a library called 'react-firebase-hook' was installed


export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signedOut = async ()  => {
    await signOut(auth);
  }

  
  return (
    <div>
        <h1>MovieLink</h1>
        <SearchBar />
        <Link to="/login">Login </Link>
        <Link to="/">Home</Link>
        <img src={user?.photoURL || ""} width="100px" height="100px" />
      
    </div>
  )
}

