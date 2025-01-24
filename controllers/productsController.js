const productsService = require('../services/productsService')

const getAllProducts = (req, res) => {
	const catalogue = productsService.getAllProducts()
	res.json(catalogue)
}

const getProductById = (req, res) => {
	const product = productsService.getProductById(req.params.id)
	res.json(product)
}

module.exports = { getAllProducts, getProductById }
