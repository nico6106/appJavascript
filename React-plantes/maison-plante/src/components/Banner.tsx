import "../styles/Banner.css";
import logo from "../assets/logo.png";

interface Props {
  text: string;
}

const Banner = ({ text }: Props) => {
  return (
    <div className="lmj-banner">
		<img src={logo} alt='mon image' className="lmj-logo" />
      <h1 className="lmj-title">{text.toUpperCase()}</h1>
    </div>
  );
};

export default Banner;
