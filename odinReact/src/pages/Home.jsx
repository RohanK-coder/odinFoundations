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
import Context from '../components/Context'
import ContextUseCase from '../components/ContextUseCase'
import { LoginContexts } from '../contexts/LoginContexts'
import { useState } from 'react'
export default function Home() {
  const [username,setUsername] = useState("");
  const [showName,setShowName] = useState(false);
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
    <Context/>
    <ContextUseCase/>
    </>
      
    
  )
}
