const catalogue = require('../data/products.js')
const getProductsWithImgPaths = require('../utils/getProductsImg')

class productsService {
	getAllProducts = () => {
		return getProductsWithImgPaths(catalogue)
	}

	getProductById = id => {
		const transformId = id.includes(':') ? id.replace(':', '') : id

		const allProducts = Object.values(getProductsWithImgPaths(catalogue)).flat()
		const product = allProducts.find(product => product.id === transformId)

		if (product) {
			return product
		} else {
			throw new Error('Product not found')
		}
	}
}

module.exports = new productsService()
