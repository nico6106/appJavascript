
import "../styles/Cart.css";

interface Props {
	text: string
}

const Cart = ({}: Props) => {
	return (
		<div className="lmj-cart">
			<p>Panier</p>
			<ul>
				<li>Monstera</li>
				<li>Liane</li>
			</ul>
		</div>
	);
}

export default Cart