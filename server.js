const express = require('express')
const path = require('path')

const port = 5000

const app = express()
app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
