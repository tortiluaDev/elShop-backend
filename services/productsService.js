const catalogue = require('../data/products.js')

class productsService {
	getAllProducts = () => {
		return catalogue
	}

	getProductById = id => {
		const transformId = id.includes(':') ? id.replace(':', '') : id

		const allProducts = [...Object.values(catalogue)].flat()
		const product = allProducts.find(product => product.id === transformId)

		if (product) {
			return product
		} else {
			throw new Error('Product not found')
		}
	}
}

module.exports = new productsService()
