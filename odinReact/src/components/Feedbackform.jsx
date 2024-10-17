import React, { useState } from 'react'

export default function Feedbackform() {
    const [score,setScore] = useState("10");
    const [comments,setComments] = useState("");
    const [name,setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${name} gave a rating of ${score} and said ${comments}`)
        setScore("10");
        setName("");
        setComments("");
    }
  return (
    <div className='component'>
        <h1>Feedback Form</h1>
        <h3>Score is {score}</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" id='name' value={name} onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <label htmlFor="range">Rating : </label>
            <input type="range" name="range" id="range" min={0} max={10} value={score} onChange={(e)=>{
                setScore(e.target.value);
            }}/>
            <br />
            <label htmlFor="text">Comments</label> <br />
            <textarea name="text" id="text" rows={10} cols={100} value={comments} onChange={(e)=>{
                setComments(e.target.value);
            }}></textarea>
            <br />
            <button type="submit" disabled={!name}>Submit</button>
        </form>
      
    </div>
  )
}
