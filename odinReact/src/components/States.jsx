import React, { useState } from 'react'

export default function States() {
  const [person,setPerson] = useState(
    {
      name:"Rohan",
      age:100
    }
  );
  const handleIncreaseAge = () =>{
    const newPerson = {...person,age:person.age+1};
    setPerson(newPerson);
  }
  return (
    <div>
      <br />
      <button onClick={handleIncreaseAge}>increase age</button>
      <h1>{person.name} is {person.age}</h1>
    </div>
  )
}
