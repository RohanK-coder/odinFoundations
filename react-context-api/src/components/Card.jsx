import React,{useContext} from 'react'
import CardDark from './card/CardDark'
import CardLight from './card/CardLight'
import CardThemeContext from '../context/CardThemeContext'

export default function Card() {

  const {setTheme} = useContext(CardThemeContext);
  const {theme} = useContext(CardThemeContext);
  return (
    <div>
      <button onClick={(e)=>{
        e.preventDefault();
        if(theme){
          setTheme(false);
        }
        else{
          setTheme(true);
        }
        console.log(theme);
      }}>Handle Theme</button>
      {theme ? <CardLight/> : <CardDark/>}
    </div>
  )
}
