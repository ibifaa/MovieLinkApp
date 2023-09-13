import React from 'react';
import {auth, provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate();
    // function that navigate us back to the mainpage

 const signedInWithGoogle = async () =>{

    const result = await signInWithPopup(auth, provider);
    //  this function get the details about the user
    console.log(result);
    navigate("/") 
    
 }


  return (
  <div> 
    <p>Sign in with Google to Continue</p>
    <button onClick={signedInWithGoogle}>Sign in</button>
  </div>
  )
}

