import React, { useState } from 'react'

export default function ControlledComponents() {
    const [value,setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    console.log(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted Successfully");
    }
  return (
    <div>
        <h1>react controlled components</h1>
      <form>
        <input
        name={value} 
        onChange={handleChange}
        type='text'
         />
      </form>

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit form</button>
      </form>

    </div>
  )
}
