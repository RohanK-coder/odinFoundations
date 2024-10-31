import React from 'react'

const Button = ({children,backgroundColor}) => {
  return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({children}) => {
  return(
    <>
    <div className='Overlay'></div>
    <div className='Alert'>{children}</div>
    </>
  )
}

export default function App() {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <Alert>
        
      </Alert>
    </div>
  )
}
