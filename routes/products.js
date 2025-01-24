const {
	getAllProducts,
	getProductById,
} = require('../controllers/productsController')

const express = require('express')
const productsRouter = express.Router()

productsRouter.get('/', getAllProducts)

productsRouter.get('/:id', getProductById)

module.exports = productsRouter
