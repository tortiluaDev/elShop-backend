const catalogue = {
	iphones: [
		{
			name: 'iphone 16',
			price: 75_000,
			img: 'iphone-16.webp',
			colors: ['black', 'red', 'blue'],
			id: '1001',
		},
		{
			name: 'iphone 15',
			price: 63_000,
			img: 'iphone-15.webp',
			colors: ['black', 'red', 'white'],
			id: '1002',
		},
		{
			name: 'iphone 14',
			price: 56_000,
			img: 'iphone-14.webp',
			colors: ['pink', 'red', 'white'],
			id: '1003',
		},
	],

	GPUs: [
		{
			name: 'nVidia GeForce RTX 4070',
			price: 70_000,
			img: 'rtx-4070.webp',
			brands: ['MSI', 'ASUS', 'KFA2'],
			id: '1101',
		},
		{
			name: 'nVidia GeForce RTX 4080',
			price: 90_000,
			img: 'rtx-4080.webp',
			brands: ['MSI', 'ASUS', 'KFA2'],
			id: '1102',
		},
		{
			name: 'nVidia GeForce RTX 4060',
			price: 40_000,
			img: 'rtx-4060.webp',
			brands: ['PALIT', 'ASUS', 'KFA2'],
			id: '1103',
		},
	],

	consoles: [
		{
			name: 'playstation 5',
			price: 51_000,
			img: 'ps-5.webp',
			version: ['slim', 'standard'],
			id: '1201',
		},
		{
			name: 'playstation 5 pro',
			price: 80_000,
			img: 'ps-5pro.webp',
			id: '1202',
		},
		{
			name: 'playstation 4',
			price: 35_000,
			img: 'ps-4.webp',
			version: ['slim', 'standard', 'pro'],
			id: '1203',
		},
	],
}

module.exports = catalogue
