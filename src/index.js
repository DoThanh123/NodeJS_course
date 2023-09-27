const express = require('express')
const path = require('path')
const app = express()
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/tin-tuc', function (req, res) {
  res.render('news');
})

//127.0.0.1 - localhost 
app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`))