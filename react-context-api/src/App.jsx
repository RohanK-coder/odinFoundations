import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Card from './components/Card'
import CardThemeContextProvider from './context/CardThemeContextProvider'

export default function App() {
  return (
    <UserContextProvider>

      <CardThemeContextProvider>
        <Login/>
        <Profile/>
        <Card/>
      </CardThemeContextProvider>
  
    </UserContextProvider>
  )
}
