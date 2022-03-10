const express = require('express')
const path = require('path')
const app = express()
const port = 3003

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/mycal', (req, res) => {
    res.sendFile(path.join(__dirname, '/cal2.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})