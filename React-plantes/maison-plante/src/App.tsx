import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShoppingList";
import { useState, useEffect } from "react";

function App() {

	const [cart, updateCart] = useState([]);
  const [saveChange, updateSaveChange] = useState(false);

  useEffect(() => {
    const datatoparse = localStorage.getItem('myTable')
    let dataparsed = [];
    console.log('variable extracted' + localStorage.getItem('myTable'))
    if (datatoparse) {
      dataparsed = JSON.parse(datatoparse)
      if (dataparsed)
        updateCart(dataparsed)
    }
    
    }, [])

    useEffect(() => {
      if (saveChange === true) {
        localStorage.setItem('myTable', JSON.stringify(cart))
        console.log('variable inserted' + localStorage.getItem('myTable'))
        updateSaveChange(false);
      }
      }, [cart])
    
  
  return (
    <>
      <Header />
      {console.log('before cart')}
      <Cart text="" cart={cart} updateCart={updateCart} />
      {console.log('before shopping list')}
      <ShoppingList cart={cart} updateCart={updateCart} updateSaveChange={updateSaveChange}/>
      {console.log('before footer')}
      <Footer />
    </>
  );
}

export default App;
