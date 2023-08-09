import imgMonstera from '../assets/monstera.jpg'

export interface PlantList {
	name: string,
	category: string,
	id: string,
	water: 1 | 2 | 3,
	sun: 1 | 2 | 3,
	isBestSale?: boolean,
	isSpecialOffer?: boolean,
	img: any, 
	price: number
};

export const plantList: PlantList[] = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		water: 1,
		sun: 2,
		img: imgMonstera, 
		price: 18
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		water: 1,
		sun: 2,
		img: imgMonstera, 
		price: 13
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		water: 3,
		sun: 2,
		img: imgMonstera, 
		price: 17
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		water: 1,
		sun: 2,
		img: imgMonstera, 
		price: 22
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		water: 2,
		sun: 3,
		img: imgMonstera, 
		price: 30
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		water: 2,
		sun: 2,
		img: imgMonstera, 
		price: 11
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		water: 3,
		sun: 3,
		img: imgMonstera, 
		price: 8
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		water: 2,
		sun: 3,
		img: imgMonstera, 
		price: 20
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		water: 2,
		sun: 2,
		img: imgMonstera, 
		price: 14
	}
]