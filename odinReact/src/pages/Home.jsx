import React from 'react'
import Animals from '../components/Animals'
import TodoList from '../components/TodoList'
import Props from '../components/Props'
import States from '../components/States'
import Clock from '../components/Clock'
import MemoryGame from '../components/MemoryGame'
import ControlledComponents from '../components/ControlledComponents'
import ControlledForm from '../components/ControlledForm'
import Feedbackform from '../components/Feedbackform'
export default function Home() {
  return (
    <>
    <Animals/>
    <TodoList/>
    <Props/>
    <States/>
    
    <MemoryGame/>
    <ControlledComponents/>
    <ControlledForm/>
    <Feedbackform/>
    </>
      
    
  )
}
