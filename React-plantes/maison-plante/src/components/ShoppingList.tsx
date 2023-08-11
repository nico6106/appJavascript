import { plantList, PlantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import { useState } from "react";

interface CartElem {
	name: string,
	quantity: number,
	price: number
}

interface PropsGen {
	cart: CartElem[],
	updateCart: any,
	updateSaveChange: any
}

function ShoppingList({cart, updateCart, updateSaveChange}: PropsGen) {

	const [currCategory, setCurrCategory] = useState('all');

  //show categories
  function Categories({setCurrCategory}: any) {
	let categories: string[] = ['all'];
	const foundCategories: string[] = plantList.reduce(
		(acc: string[], plant: PlantList) =>
		  acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	  );
	categories = [...categories, ...foundCategories]
	  
	return (
		<div>
			<select defaultValue={currCategory} id="lmj-list-category" onChange={(e) => setCurrCategory(e.target.value)}>
				{categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
			</select>
	  </div>
	);
  }

  function ShowItems() {
	let elem: PlantList[];
	if (currCategory === 'all')
		elem = [...plantList];
	else
		elem = plantList.filter((elem) => elem.category === currCategory);

	return (<ul className="lmj-plant-list">
	{elem.map((plant) => (
	  <PlantItem key={plant.id} plant={plant} cart={cart} updateCart={updateCart} updateSaveChange={updateSaveChange} />
	))}
  </ul>);
  }

  return (
    <div>
      <Categories setCurrCategory={setCurrCategory}/>
      <ShowItems />
    </div>
  );
}

export default ShoppingList;
