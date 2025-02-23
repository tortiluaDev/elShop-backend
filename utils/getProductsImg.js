const BASE_URL = 'http://localhost:5600'

function getProductsWithImgPaths(catalogue) {
	return Object.entries(catalogue).flatMap(([category, products]) =>
		products.map(product => ({
			...product,
			img: `${BASE_URL}/static/img/${category}/${product.img}`,
		}))
	)
}

module.exports = getProductsWithImgPaths
