import React, { useState } from 'react'

export default function UseEffect() {
    
    const [toggle,setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle);
    }
    React.useEffect(() => {
        document.title = toggle ? "Welcome to Little Lemon":"Using the useEffect"
    },)
  return (
    <div>
      <h1>Using the side effect</h1>
      <button onClick={toggleHandler}> Click me</button>
      {toggle&&<h2>Welcome to little lemon</h2>}
    </div>
  )
}
