import '../styles/Banner.css'

interface Props {
	text: string
}
const Header = ({text}: Props) => {
	return (
		<div className="affiche-titre"><h1>{text.toUpperCase()}</h1></div>
	);
}

export default Header