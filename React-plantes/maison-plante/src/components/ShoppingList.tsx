import { plantList } from "../data/plantList";

function ShoppingList() {

	const categories = plantList.reduce((acc: string[], plant) => 
		acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

  return (
	<div>
		<ul>
			{categories.map((cat) => (
				<li key={cat}>{cat}</li>
			))}
		</ul>
		<ul>
		{plantList.map((plant) => (
			<li key={plant.id}>{plant.isBestSale && '🔥'}{plant.name}</li>
		))}
		</ul>
	</div>
  );
}

export default ShoppingList