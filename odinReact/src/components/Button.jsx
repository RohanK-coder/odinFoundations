import React from 'react'

export default function Button(props) {
    const buttonStyle = {
        color:props.color,
        fontSize:props.fontSize+'px',
    }
  return (
    <button style={buttonStyle}>{props.text}</button>
  )
}
