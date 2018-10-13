const express = require("express")
const app = express()
const port = 8000

app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
//app.get('/',(req,res)=>res.sendFile(__dirname+"/"+"index.html"))
app.listen(port, () => console.log('app listening on port'+port))
