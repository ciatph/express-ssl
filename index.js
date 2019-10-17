const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})