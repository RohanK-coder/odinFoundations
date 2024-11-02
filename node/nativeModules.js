//fs - usage of the local file system
const fs = require("fs")

fs.writeFile("message.txt","Hello form NodeJS",(err) => {
    if(err) throw err;
    console.log("File saved...")
})

fs.readFile("./world.txt","utf8",(err,data) => {
    if(err) throw err;
    console.log(data);
})