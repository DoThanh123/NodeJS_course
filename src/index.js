const express = require('express')
const path = require('path')
const app = express()
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/news', function (req, res) {
  res.render('news');
})

app.get('/search', function (req, res) {
  res.render('search');
})

app.post('/search', function (req, res) {

  console.log(req.body)

  res.send('');
})

//127.0.0.1 - localhost 
app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`))