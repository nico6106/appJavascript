import { useState, useEffect } from "react";
import "../styles/Cart.css";

interface CartElem {
  name: string;
  quantity: number;
  price: number;
}

interface Props {
  text?: string;
  cart: CartElem[];
  updateCart: any;
}

function Cart({ cart, updateCart }: Props) {
  const [useCart, updateUseCart] = useState(true);

  let total: number = 0;
  cart.forEach((cart) => total = total + cart.quantity * cart.price);
  console.log('debut cart')
  
  useEffect(() => {
	console.log('use effect')
	if (total > 0) {
		document.title = `LMJ: ${total}e d'achats`
	}
	else
		document.title = 'Faites vos achats'
  }, [total])


  function ShowCart() {  
    let sousTot: number = 0;
    return (
      <div>
        <p>Panier</p>
        <ul>
          {cart.map((cart) => (
            <li key={cart.name}>
              {cart.quantity} {cart.name} ={" "}
              {(sousTot = cart.quantity * cart.price)}
            </li>
          ))}
        </ul>
        <p>Total : {total}€</p>
        <button onClick={() => {
			updateCart([])
			localStorage.setItem('myTable', JSON.stringify([]))
		}}>Vider le panier</button>
      </div>
    );
  }

  if (useCart) {
	console.log('useCart')
    return (
      <div className="lmj-cart">
        <button onClick={() => updateUseCart(false)}>Fermer</button>
        {cart.length === 0 ? <p>Panier vide</p> : <ShowCart />}
      </div>
    );
  } else {
    return (
      <div className="lmj-cart">
        <button onClick={() => updateUseCart(true)}>Ouvrir le panier</button>
      </div>
    );
  }
}


export default Cart;
