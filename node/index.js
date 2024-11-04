import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req,res)=>{
  let filePath = './'+req.url+'.html';
  if (req.url === '/') {
    filePath = './index.html';
} else if (req.url === '/about') {
    filePath = './about.html';
} else if (req.url === '/contact-me') {
    filePath = './contact-me.html';
} else {
    filePath = './404.html';
}

const extname = path.extname(filePath);
let contentType = 'text/html';
if (extname === '.js') {
    contentType = 'text/javascript';
} else if (extname === '.css') {
    contentType = 'text/css';
}

fs.readFile(filePath, (error, content) => {
    if (error) {
        res.writeHead(500);
        res.end('Error: ' + error.code);
    } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
    }
});
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});