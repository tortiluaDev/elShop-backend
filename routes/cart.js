const express = require('express')
const cartRouter = express.Router()
const {
	getCart,
	deleteCart,
	addProduct,
	deleteProduct,
} = require('../controllers/cartController')

cartRouter.get('/products', getCart)

cartRouter.delete('/delete', deleteCart)

cartRouter.post('/addProduct/:id', addProduct)

cartRouter.delete('/deleteProduct/:id', deleteProduct)

module.exports = cartRouter
