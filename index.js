const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})