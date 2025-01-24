const express = require('express')
const cartRouter = express.Router()
const {
	getCart,
	addProduct,
	deleteProduct,
} = require('../controllers/cartController')

cartRouter.get('/products', getCart)

cartRouter.post('/addProduct/:id', addProduct)

cartRouter.delete('/deleteProduct/:id', deleteProduct)

module.exports = cartRouter
