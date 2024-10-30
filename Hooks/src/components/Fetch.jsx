import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [btcData,setData] = useState({});
    useEffect(()=>{
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response)=>response.json())
        .then((jsonData)=>setData(jsonData.bpi.USD))
        .catch((error)=>console.log(error))
    },[]);
  return (
    <div>
      <h1>Rate is : {btcData.rate} {btcData.code}</h1>
    </div>
  )
}
