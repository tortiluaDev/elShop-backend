const express = require('express')
const path = require('path')
const cors = require('cors')

const bodyParser = require('body-parser')

const productsRouter = require('./routes/products.js')
const cartRouter = require('./routes/cart.js')
const favoritesRouter = require('./routes/favorites.js')

const app = express()
const PORT = process.env.PORT | 5600

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }))

app.use(
	'/static',
	express.static(path.join(__dirname, 'public'), { maxAge: '30d' })
)

app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/favorites', favoritesRouter)

app.listen(PORT, () => console.log(`Server was started on port: ${PORT}`))
