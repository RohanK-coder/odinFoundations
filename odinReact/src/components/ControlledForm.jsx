import React, { useState } from 'react'

export default function ControlledForm() {

    const [name,setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.name);
        console.log(name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`form submitted perfectly by : ${name}`);
    }
  return (
    <div>
      <h1>yolo
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={name}
            onChange={handleChange}
            />
        </form>
      </h1>
    </div>
  )
}
