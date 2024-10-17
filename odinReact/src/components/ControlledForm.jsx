import React, { useState } from 'react'

export default function ControlledForm() {

  const [name,setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`form submitted ${name}`);
    setName("");
    
    
  }
  return (
    <div>
      <h1>Controlled Component Working Action</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" name='name' value={name} onChange={(e) => {
          setName(e.target.value);
        }} id='name'/>

        <button type="submit" disabled={!name}>Submit</button>
      </form>
    </div>
  )
}
