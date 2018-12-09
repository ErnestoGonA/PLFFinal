const express = require('express')
const morgan = require('morgan')
const wagner = require('wagner-core')

//Conection with the database
require('./data/models')(wagner)

var app = express()

//Middlewares
app.use(morgan('dev'))
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/init',(req,res)=>{
    res.send('Initializing data')
})

console.log("Listening at port 3000")
app.listen(3000)