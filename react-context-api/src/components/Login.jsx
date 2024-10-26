import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';

export default function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
        //console.log(username);
    }
  return (
    <div className='login-form'>
      <h2>Login Form</h2>
      <input 
        type="text" 
        onChange={(e) => {
            setUsername(e.target.value)
        }}
        value={username}
        placeholder='username'
      />
      <input
         type="password" 
         onChange={(e)=>{
            setPassword(e.target.value)
         }}
         value={password}
         placeholder='password'
        />

        <button type='submit' onClick={handleSubmit} disabled={!username}>Submit</button>

    </div>
  )
}
