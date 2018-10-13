// const express = require("express")
// const app = express()
// const port = 8000
// const path = require("path")

// app.use(express.static(__dirname));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
// app.listen(port, () => console.log('app listening on port'+port))

const http = require('http')
var fs = require('fs');
const port = 8000
http.createServer(function (req, res) { // สร้าง Web Server
   fs.readFile('blank.html', function (err, data) { 
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.write(data); // ส่งข้อมูลอ่านมากลับไปด้วย res.write(data)
       res.end();
   });
//http.listen(port, () => console.log('app listening on port'+port))
}).listen(8000);
