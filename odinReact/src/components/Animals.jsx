import React from 'react'

export default function Animals() {
  const animals = ["Lion","Tiger","Cheetha","Rohan"];
  return (
    <div>
      <ul>
        {animals.map((animal) => {
            return <li key={animal}>{animal}</li>
        })}
      </ul>
    </div>
  )
}
