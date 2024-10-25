import React, { useState } from 'react'

export default function Context() {
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(username);
    console.log(showName);
  }
  const [username,setUsername] = useState("");
  const [showName,setShowName] = useState(false);

  return (
    <div>
      <h1>Context</h1>
      <h3>Login form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          name='username' id='username' 
          onChange={(e) => {
            setUsername(e.target.value);
          }}/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password'  />
        <button type='submit'>button</button>
      </form>
    </div>
  )
}
