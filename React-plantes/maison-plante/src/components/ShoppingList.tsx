import { plantList, PlantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";

interface CartElem {
	name: string,
	quantity: number,
	price: number
}

interface PropsGen {
	cart: CartElem[],
	updateCart: any
}

function ShoppingList({cart, updateCart}: PropsGen) {
  const categories = plantList.reduce(
    (acc: string[], plant: PlantList) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem key={plant.id} plant={plant} cart={cart} updateCart={updateCart} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
