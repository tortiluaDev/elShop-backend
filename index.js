const express = require('express')
const catalogue = require('./data/goods')

const app = express()
const PORT = 5600

app.get((req, res) => {})

app.listen(PORT, () => console.log(`Server was started on port: ${PORT}`))
