const cartService = require('../services/cartService')

const getCart = (req, res) => {
	const cart = cartService.getCart()
	res.json(cart)
}

const addProduct = (req, res) => {
	const count = req.body.count ? req.body?.count : 1

	const product = cartService.addProduct(req.params.id, count)
	res.json(product)
}

const deleteProduct = (req, res) => {
	const count = req.body.count ? req.body?.count : 1

	const product = cartService.deleteProduct(req.params.id, count)
	res.json(product)
}

module.exports = { getCart, addProduct, deleteProduct }
