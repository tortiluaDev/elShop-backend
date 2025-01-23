const express = require('express')
const bodyParser = require('body-parser')
const catalogue = require('./data/products')

const app = express()
const PORT = 5600

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
	res.json(catalogue)
})

app.get('/product/:id', (req, res) => {
	const id = req.params.id.includes(':')
		? req.params.id.replace(':', '')
		: req.params.id

	const allProducts = [...Object.values(catalogue)].flat()
	const product = allProducts.find(product => product.id === id)

	if (product) {
		res.json(product)
	} else {
		res.status(404).json({ error: 'Product not found' })
	}
})

app.listen(PORT, () => console.log(`Server was started on port: ${PORT}`))
