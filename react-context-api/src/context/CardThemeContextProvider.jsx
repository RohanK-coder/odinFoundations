import React, { useState } from 'react'
import CardThemeContext from "../context/CardThemeContext"

export default function CardThemeContextProvider({children}) {
    const [theme,setTheme] = useState(false);
  return (
    <CardThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </CardThemeContext.Provider>
  )
}
