const favoritesService = require('../services/favoritesService')

const getFavorites = (req, res) => {
	const cart = favoritesService.getFavorites()
	res.json(cart)
}

const addFavorite = (req, res) => {
	const count = req.body.count ? req.body?.count : 1

	const product = favoritesService.addFavorite(req.params.id, count)
	res.json(product)
}

const deleteFavorite = (req, res) => {
	const count = req.body.count ? req.body?.count : 1

	const product = favoritesService.deleteFavorite(req.params.id, count)
	res.json(product)
}

module.exports = { getFavorites, addFavorite, deleteFavorite }
