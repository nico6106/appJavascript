
interface Props {
	text: string
}

const Cart = ({}: Props) => {
	return (
		<div>
			<p>Panier</p>
			<ul>
				<li>Monstera</li>
				<li>Liane</li>
			</ul>
		</div>
	);
}

export default Cart