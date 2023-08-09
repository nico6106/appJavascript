import { useState } from "react";
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

const Cart = ({ cart, updateCart }: Props) => {
  const [useCart, updateUseCart] = useState(true);

  function ShowCart() {
    let total: number = 0;
    let sousTot: number = 0;
    return (
      <div>
        <p>Panier</p>
        <ul>
          {cart.map((cart) => (
            <li key={cart.name}>
              {cart.quantity} {cart.name} ={" "}
              {(sousTot = cart.quantity * cart.price)}
			  {total = total + sousTot}
            </li>
          ))}
        </ul>
        <p>Total : €</p>
        <button onClick={() => updateCart([])}>Vider le panier</button>
      </div>
    );
  }

  if (useCart) {
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
};

export default Cart;
