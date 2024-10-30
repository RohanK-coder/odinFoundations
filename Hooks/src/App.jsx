import React from 'react'
import Established from './components/Established'
import UseEffect from './components/UseEffect'
import Fetch from './components/Fetch'
export default function App() {
  return (
    <div>
      <Established year={2003}/>
      <UseEffect/>
      <Fetch/>
    </div>
  )
}
