const catalogue = require('../data/products.js')

class cartService {
	cart = []

	getCart = () => {
		return this.cart
	}

	addProduct = (id, count) => {
		const transformId = id.includes(':') ? id.replace(':', '') : id

		const addedProduct = [...Object.values(catalogue)]
			.flat()
			.find(product => product.id === transformId)

		if (addedProduct) {
			for (let i = 0; i < count; i++) {
				this.cart.push(addedProduct)
			}
			return this.cart
		} else {
			throw new Error('Product not found')
		}
	}

	deleteProduct = (id, count) => {
		const transformId = id.includes(':') ? id.replace(':', '') : id

		const deletedProduct = [...Object.values(catalogue)]
			.flat()
			.find(product => product.id === transformId)

		if (deletedProduct && count && this.cart.length > 0) {
			for (let i = 0; i < count; i++) {
				let indexItem = this.cart.findIndex(
					product => product.id === deletedProduct.id
				)

				if (indexItem !== -1) this.cart.splice(indexItem, 1)
			}
			return this.cart
		} else if (this.cart.length === 0) {
			throw new Error('Your cart is empty')
		} else {
			throw new Error('Product not found')
		}
	}
}

module.exports = new cartService()
