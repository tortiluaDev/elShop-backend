const express = require('express')

const bodyParser = require('body-parser')

const productsRouter = require('./routes/products.js')
const cartRouter = require('./routes/cart.js')
const favoritesRouter = require('./routes/favorites.js')

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/favorites', favoritesRouter)

app.listen(PORT, () => console.log(`Server was started on port: ${PORT}`))
