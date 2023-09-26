const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  var a = 1
  var b = 2
  var c = a + b

  res.send('Hello World!')
})

app.get('/tintuc', function (req, res) {
  res.send('To day is Tuesday')
})
//127.0.0.1 - localhost 
app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`))