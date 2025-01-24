const express = require('express')
const favoritesRouter = express.Router()
const {
	getFavorites,
	addFavorite,
	deleteFavorite,
} = require('../controllers/favoritesController')

favoritesRouter.get('/products', getFavorites)

favoritesRouter.post('/addProduct/:id', addFavorite)

favoritesRouter.delete('/deleteProduct/:id', deleteFavorite)

module.exports = favoritesRouter
