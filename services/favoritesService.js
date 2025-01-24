const catalogue = require('../data/products.js')

class favoritesService {
	favorites = []

	getFavorites = () => {
		return this.favorites
	}

	addFavorite = (id, count) => {
		const transformId = id.includes(':') ? id.replace(':', '') : id

		const addedProduct = [...Object.values(catalogue)]
			.flat()
			.find(product => product.id === transformId)

		if (addedProduct) {
			for (let i = 0; i < count; i++) {
				this.favorites.push(addedProduct)
			}
			return this.favorites
		} else {
			throw new Error('Product not found')
		}
	}

	deleteFavorite = (id, count) => {
		const transformId = id.includes(':') ? id.replace(':', '') : id

		const deletedProduct = [...Object.values(catalogue)]
			.flat()
			.find(product => product.id === transformId)

		if (deletedProduct && count && this.favorites.length > 0) {
			for (let i = 0; i < count; i++) {
				let indexItem = this.favorites.findIndex(
					product => product.id === deletedProduct.id
				)

				if (indexItem !== -1) this.favorites.splice(indexItem, 1)
			}
			return this.favorites
		} else if (this.favorites.length === 0) {
			throw new Error('Your favorites is empty')
		} else {
			throw new Error('Product not found')
		}
	}
}

module.exports = new favoritesService()
