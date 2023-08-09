import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShoppingList";
import { useState } from "react";

function App() {

	const [cart, updateCart] = useState([]);

  return (
    <>
    	<Header />
		<Cart text="" cart={cart} updateCart={updateCart} />
    	<ShoppingList cart={cart} updateCart={updateCart}/>
		<Footer />
    </>
  );
}

export default App;
