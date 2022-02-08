require('dotenv').config()
require('./database')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3007

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola')
})

//Ruta para la API de users
app.use('/api/user', require('./routes/users'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})