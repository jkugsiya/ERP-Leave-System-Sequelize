const express = require('express')
const cors = require('cors')
const { PORT } = require('./config')
const routes = require('./src/routes')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use('/', routes)

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}...`)
})
