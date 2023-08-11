
import { PlantList } from "../data/plantList";
import CareScale from "./CareScale";
import '../styles/PlantItem.css'


interface Props {
	plant: PlantList,
}

interface CartElem {
	name: string,
	quantity: number,
	price: number
}

interface PropsGen {
	plant: PlantList,
	cart: CartElem[],
	updateCart: any,
	updateSaveChange: any
}

function Soldes({plant}: Props) {
	if (plant.isSpecialOffer) {
		return (
			<div className="lmj-sales">[SOLDES]</div>
		);
	}
	return null;
}

function handleClick(event: any, plant: PlantList) {
	// console.log('clicked on ' + plant.name + '!')
	console.log('clicked ' + plant.name + ', event=')
}

function PlantItem({plant, cart, updateCart, updateSaveChange}: PropsGen) {

	function addCart(plant: PlantList) {
		const plantsExisting = cart.find((elem) => elem.name === plant.name);
		if (plantsExisting) {
			const plantsToKeep: CartElem[] = cart.filter((elem) => elem.name !== plant.name);
			updateCart([...plantsToKeep, {name: plant.name, quantity: plantsExisting.quantity + 1, price: plant.price}]);
		}
		else { 
			updateCart([...cart, {name: plant.name, quantity: 1, price: plant.price}]);
		}
		updateSaveChange(true);	
	}

	return (
		<li key={plant.id} className="lmj-plant-item" onClick={(event) => handleClick(event, plant)}>
		<div>
			<Soldes plant={plant} />
            <div>{plant.isBestSale && "🔥"}{plant.name}</div>
			<img src={plant.img} alt="img plante" className="lmj-plant-item-cover"/>
			<CareScale type="water" scale={plant.water}/>
			<CareScale type="sun" scale={plant.sun}/>
			<button onClick={() => addCart(plant)}>Ajouter</button>
		</div>
		</li>
	)
}

export default PlantItem