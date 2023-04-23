const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json('Hello World1')
})

app.post('/', function (req, res) {
  res.json('Hello World2')
})

app.put('/', function (req, res) {
  res.json('Hello World3')
})

app.delete('/', function (req, res) {
  res.json('Hello World4')
})

app.listen(1995)