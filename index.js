const express = require('express')
const morgan = require('morgan')

var app = express()

//Middlewares
app.use(morgan('dev'))
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log("Listening at port 3000")
app.listen(3000)