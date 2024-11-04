const express = require("express")
const path = require("path")
const app = express()

const port = 3000;
app.listen(port,()=>{ 
  console.log(`listening on port ${port}`)
})

app.get("/",(req,res)=>{

  res.send("Express Server");
})

app.get("/test",(req,res)=>{
  res.sendFile(path.join(__dirname,'files','test.html'))
})