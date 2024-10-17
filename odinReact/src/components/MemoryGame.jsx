import React from 'react'
import { useState } from 'react';

export default function MemoryGame() {
    const boxes = ["A","B","C","D"];
    const [score,setScore] = useState(0);
    const increaseOne = ()=> {
      setScore(score+1);
    }
    
  return (
    <div className='main'>
      <h1>Amphibian Memory Game</h1>
      <div className="items">
        
        {boxes.map((box)=>{
            return <div id='box' key={box}>{box}</div>
        })}
        
      </div>
      <h1>Score : {score}</h1>
      <button onClick={increaseOne}>Increase Score</button>
    </div>
  )
}
